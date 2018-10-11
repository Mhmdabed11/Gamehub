<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="cards">
      <button class="btn" v-on:click="playeasy"> Play Easy </button>
      <button class="btn" v-on:click="playmedium"> Play Medium </button>
      <button class="btn" v-on:click="playhard"> Play Hard </button>
<br>
      <h1> Score: {{ score }} </h1> 
      <button id="playbtn" class="btn play hidden" v-on:click="play"> Play! </button>
       <h1 id="remtime" class="hidden"> <span id="memotime"> {{ memotime }}</span><span id="playtime" class="hidden"> {{ playtime }}</span> SECONDS TO MEMORIZE THE PICS! </h1>

    <table id="table">
      <tr v-for="n in row" :key="n">
        <td v-for="n in column" :key="n" class="tabletd">
        <img class="image" v-on:click="checkclicks($event)" />  
        </td>  
        </tr> 
    </table>
          <button id="playagainbtn" class="btn hidden" v-on:click="playagain"> Play Again! </button>

    </div>
  </div>
</template>
<script>
export default {

  data () {
    return {
      msg: 'Welcome to Match & Catch!',
      array:[],
      picarray:[],
      level: '',
      picscount:0,
      row:'',
      column:'',
      memotime:'',
      playtime:'',
      empty: '',
      score:0,
      count: 0,
      clickcount:3,
      td:'',
      x1:'',
      x2:'',
      remtime:'',
       images: [
        require('@/assets/fb.png'),
        require('@/assets/fb.png'),
        require('@/assets/snapchat.png'),
        require('@/assets/snapchat.png'),
        require('@/assets/twitter.png'),
        require('@/assets/twitter.png'),
        require('@/assets/linkedin.png'),
        require('@/assets/linkedin.png'),
        require('@/assets/skype.png'),
        require('@/assets/skype.png'),
        require('@/assets/whatsapp.png'),
        require('@/assets/whatsapp.png'),
        require('@/assets/insta.png'),
        require('@/assets/insta.png'),
        require('@/assets/youtube.png'),
        require('@/assets/youtube.png'), 
        require('@/assets/msn.png'),
        require('@/assets/msn.png'), 
        require('@/assets/pinterest.png'),
        require('@/assets/pinterest.png'),
        require('@/assets/fb.png'),
        require('@/assets/fb.png'),
        require('@/assets/snapchat.png'),
        require('@/assets/snapchat.png'),
        require('@/assets/twitter.png'),
        require('@/assets/twitter.png'),
        require('@/assets/linkedin.png'),
        require('@/assets/linkedin.png'),
        require('@/assets/skype.png'),
        require('@/assets/skype.png'),
        require('@/assets/whatsapp.png'),
        require('@/assets/whatsapp.png'),
        require('@/assets/insta.png'),
        require('@/assets/insta.png'),
        require('@/assets/youtube.png'),
        require('@/assets/youtube.png'),       
      ],
      ix: '',
      selectedImage: ''
    }
  },

  methods:{
play: function(){
var timetoplay = document.getElementById("playtime");
timetoplay.classList.add("hidden");
var x= document.getElementsByClassName("image");

for(var i=0;i<this.array.length;i++)
    x[i].src=this.array[i];

var starttime = setInterval(() => {
  if(this.memotime>0){
    this.memotime--
  }
else{
    window.clearInterval(starttime)
    this.clickcount=0;
    for(var i=0;i<this.array.length;i++)
      x[i].classList.add("hidden");
        this.remtime = setInterval(() => {
              timetoplay.classList.remove("hidden");
              var timetoplaytext = document.getElementById("remtime");
              timetoplaytext.innerHTML = timetoplay.innerHTML + ' SECONDS TO FINISH PLAYING' ;
                if(this.playtime>0){
                  this.playtime--;
                }
                 else{
                  window.clearInterval(this.remtime)
                  var hidetable = document.getElementById("table");
                  hidetable.classList.add("hidden");
                  timetoplaytext.innerHTML = 'TIME IS UP!';
                  var playagain = document.getElementById("playagainbtn");
                  playagain.classList.remove("hidden");
                  timetoplay.classList.remove("hidden");
     }   
  
 },1000);
     }   
  
 },1000);


},
distributepics: function(){
    var i=0;
    while(i<this.images.length){
      var idx = Math.floor(Math.random() * this.images.length);
      this.array.push(this.images[idx]);
      this.images.splice(idx,1);
      document.getElementById("remtime").classList.remove("hidden");
    }
},
playeasy: function(){
    this.row = 3;
    this.column = 4;
    this.images.splice(12);
    this.distributepics();
    this.memotime=1;
    this.playtime=60;
    this.level="Easy";
    var btn = document.getElementById("playbtn");
    btn.classList.remove("hidden");

   
  },
   playmedium: function(){
    this.row = 4;
    this.column = 5;
    this.images.splice(20);
    this.distributepics();
    this.memotime=5;
    this.playtime=60;
    this.level="Medium";
    var btn = document.getElementById("playbtn");
    btn.classList.remove("hidden");

  },
 playhard: function(){
    this.row = 6;
    this.column = 6;
    this.distributepics();
    this.memotime=5;
    this.playtime=60;
    this.level="Hard";
    var btn = document.getElementById("playbtn");
    btn.classList.remove("hidden");
  
  },
playagain: function(){
location.reload();
},
checkclicks: function(e){
  this.clickcount++;
  if(this.clickcount<3){
    this.show(e);
    }
},
show: function(e){
  var pic = e.target;
    if(pic.classList.contains('hidden')){
    this.count++;
    pic.classList.remove("hidden");

    this.picarray.push(pic.src);
            this.x1 = this.picarray[0];
            this.x2 = this.picarray[1];
            this.td = document.getElementsByTagName("td");
    if(this.count==2){
    this.count=0;
        if(this.picarray[0]==this.picarray[1]){
            setTimeout(this.correct,500); 
        }
        else{
            setTimeout(this.wrong,1000);
        }

    this.picarray.splice(0,this.picarray.length);
    } 
    }
    else
        this.clickcount=1;
   
},
clickcountfunc: function(){
  this.clickcount=0;
},
correct: function(){
           for(var i=0;i<this.td.length;i++){
               if(this.td[i].firstElementChild.src==this.x1){
                this.td[i].firstElementChild.classList.add("hiddentd");
                this.td[i].classList.add("changetd");
                this.picscount++;
             }
           }
          var timetoplaytext = document.getElementById("remtime");
          var playagain = document.getElementById("playagainbtn");
          var timetoplay = document.getElementById("playtime");

                 
          if(this.level=="Easy")
          if(this.picscount=="12"){
            window.clearInterval(this.remtime)
            if(this.playtime <= 30)
            this.score=10;
            else if(this.playtime > 30 && this.playtime < 50)
            this.score=30;
            else if(this.playtime >= 50)
            this.score=50;
            
              timetoplaytext.innerHTML = 'YOU WON with ' + this.score + ' !';
              playagain.classList.remove("hidden");

          }
          else if(this.level=="Medium")
          if(this.picscount=="20"){
              timetoplaytext.innerHTML = 'YOU WON!';
              playagain.classList.remove("hidden");
              window.clearInterval(this.remtime)
          }
          else if(this.level=="Hard")
          if(this.picscount=="36"){
              timetoplaytext.innerHTML = 'YOU WON!';
              playagain.classList.remove("hidden");
              window.clearInterval(this.remtime)
          }
            

          this.clickcountfunc();

},
wrong: function(){
          for(var i=0;i<this.td.length;i++){
             if(this.td[i].firstElementChild.src==this.x1){
               this.td[i].firstElementChild.classList.add("hidden");
             }
           }
              for(var i=0;i<this.td.length;i++){
             if(this.td[i].firstElementChild.src==this.x2){
               this.td[i].firstElementChild.classList.add("hidden");
             }
           }
        this.clickcountfunc();

}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.play{
  position: relative;
  top: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.image{
  width: 65px;
  height: 65px;
}
.hidden{
  opacity: 0;
}
.hiddentd{
  visibility:hidden;
}
table{
    margin-left: auto;
    margin-right: auto;
    margin-top: -5px;
}
.changetd{
  background-color: white;
}
td{
  background-color:dimgray;
}
th, td {
   border: 1px solid black;
}
</style>
