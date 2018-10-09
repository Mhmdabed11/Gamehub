const nano = require('nano')('http://localhost:5984');

const dbase = nano.db.use('users');

module.exports = {
  update(req, res, next) {
    dbase.get(req.body.id).then((bodyz) => {
        var temparr=[];
        var bool=true;
        var changed;
        rev=bodyz._rev;
        id=bodyz._id;
        username=bodyz.username;
        password=bodyz.password;
        minesweeper=bodyz.minesweeper;
        //checkers=bodyz.checkers;


changed=bodyz[req.body.game];

if (changed.length>4){
    changed.splice(changed.length-1);
}
for (i=changed.length-1;i>=0;i--){
        if (parseInt(changed[i])<req.body.score){
            temparr.push(changed[i]);
            changed.splice(i);
        }else {
            changed.push(req.body.score)
            bool=false;
            break;
}
    }

if (bool){
    changed.push(req.body.score);
}
for(j=temparr.length-1;j>=0;j--){
        changed.push(temparr[j])
}
bodyz[req.body.game]=changed;

dbase.insert(bodyz).then((body) => {
      
    });
  })
    res.send('success');
    next();
  },
};
