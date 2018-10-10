var nano = require('nano')('http://localhost:5984');
var scoresDesignDoc = require('./scoresDesignDoc');
var usersDesignDoc = require('./usersDesignDoc');

nano.db.create('gamehub-db').then((body) => {
    console.log('database gamehub-db created!');

    const gamehubDB = nano.use('gamehub-db');

    gamehubDB.insert(scoresDesignDoc).then((body) => {
        console.log(body);
        gamehubDB.insert(usersDesignDoc).then((body) => {
            console.log(body)
        });
    });
})

