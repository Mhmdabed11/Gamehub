var errors = require('restify-errors');
var nano = require('nano')('http://localhost:5984/gamehub-db');

module.exports = {
    checkUserExists: function(req, res, next){
        var username = req.body.username;

        nano.view('users', 'getByUsername', {
            'key': username,
            'include_docs': true
        }).then((body) => {
            if(body.rows.length > 0){
                req.user = body.rows[0].doc;
                req.userFound = true;
                return next();
            } else {
                req.userFound = false;
                return next();
            }
        });
    },

    checkCorrectPassword: function(req, res, next){
        if(req.userFound){
            var password = req.body.password;
            if(req.user.password == password){
                res.send({username: req.user.username});
                return next();
            } else {
                return next(new errors.UnauthorizedError("Incorrect username or password."));
            }
        } else {
            return next(new errors.NotFoundError("User not found!"));
        }
    },

    addUser: function(req, res, next){
        if(req.userFound){
            return next(new errors.ConflictError("User already exists!"));
        } else {
            var newUser = {
                username: req.body.username,
                password: req.body.password
            };
            
            nano.insert(newUser).then((response) => {
                res.send(response);
                return next();
            })
        }

    }

}