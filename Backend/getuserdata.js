const nano = require('nano')('http://localhost:5984');

const dbase = nano.db.use('users');

module.exports = {
  get(req, res, next) {
    dbase.get(req.body.id).then((bodyz) => {
        res.send(bodyz);
  })

    next();
  },
};
