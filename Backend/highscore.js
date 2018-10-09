const nano = require('nano')('http://localhost:5984');

const dbase = nano.db.use('users');
const scores =[];
const names=[];
var max=0;
var index=0;
var games="";
const maxscores=[];
const namescores=[];
module.exports = {
  gets(req, res, next) {
    games=req.body.game;
    dbase.view('des', 'mines', (err, body) => {
      if (!err) {
        body.rows.forEach((doc) => {
          names.push(doc.value);
          scores.push(doc.key[games]);
        });
for (j=0;j<5;j++){
  for (i=0;i<scores.length;i++){
    if (scores[i].length>0){
      if (parseInt(scores[i][0])>max){
        max=scores[i][0];
        index=i;
      }
    }
  }

  maxscores.push(max)
  if (max==0)
  {namescores.push("noname")}
  else{
  namescores.push(names[index])}
  scores[index].splice(0,1);
  max=0;
}
res.send([maxscores,namescores]);
      }
    });
    next();
  },
};
