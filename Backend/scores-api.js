var errors = require('restify-errors');
var nano = require('nano')('http://localhost:5984/gamehub-db');

module.exports = {
    saveScore: function (req, res, next) {
        req.body = JSON.parse(req.body);
        var username = req.body.username;
        var game = req.body.game;
        var score = req.body.score;

        var newGame = {
            username: username,
            game: game,
            score: score,
            type: "score"
        }

        nano.insert(newGame).then((response) => {
            res.send(response);
            return next();
        })
    },
    getByUsername: function (req, res, next) {
        var username = req.params.username;

        nano.view('scores', 'getByUsername', {
            'key': username
        }).then((body) => {
            //console.log(body.rows[0].value)
            if (body.rows.length > 0) {
                res.send(body.rows[0].value)
                return next();
            } else {
                req.userFound = false;
                return next(new errors.NotFoundError("User not found!"));
            }
        });
    },
    getByGame: function (req, res, next) {
        //var game = req.params.game;

        nano.view('scores', 'getByGame', {group:true}).then((body) => {

            //console.log(body.rows[0].value)
            if (body.rows.length > 0) {
                res.send(body.rows)
                return next();
            } else {
                req.userFound = false;
                return next(new errors.NotFoundError("Game not found!"));
            }
        });
    }
}