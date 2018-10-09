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
                return next();
            } else {
                return next(new errors.NotFoundError("User not found!"));
            }
        });
    },

    checkCorrectPassword: function(req, res, next){
        var password = req.body.password;
        if(req.user.password == password){
            res.send({username: req.user.username});
            return next();
        } else {
            return next(new errors.UnauthorizedError("Incorrect username or password."));
        }


    }

}