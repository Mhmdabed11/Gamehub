<template>
    <div class="main">

        <label class="res">{{result}}</label>
        <div  v-if="newgame">
            <br><br>
            <button v-on:click="restart">New Game</button>
            <br><br>
        </div>
        <div v-if="start">
            <label>Enter Your Word: </label>
            <input type="text" v-model="word" placeholder="Minimum size 6 letters" maxlength="15">
            <button v-on:click="startgame">Start</button>
        </div>

        <div v-if="next">
            <table>
                <tr>
                    <td v-for="j in size" :key="j" class="elmnt">{{guessed[j]}}</td>
                </tr>
            </table>
            
            <br><br><br><br>
            <label >Enter Your Guess</label>
            <input type="text" v-model="letter" maxlength="1">
            <button v-on:click="checkletter">Check</button>
                        <br><br>
                <label >Time Passed:{{timepass}}</label>
                        <br><br> 
            <label >Guesses remaining</label>   
            <table>
                <tr>
                    <td v-for="j in 5" :key="j" class="green"></td>
                </tr>
            </table>
            <br><br><br><br><br><br>
            <label >{{wrongguess}}</label>   
        </div>

    </div>
</template>
<script>
var totalsize=0;
var opened=0;
var guessedletters=[];
var contains=false;
var mistakes=0;
var correct=false;
var interx;
var gameover=false;
export default {
    
  data() {
  return{
word:"",
letter:"",
result:"",
start:true,
newgame:false,
next:false,
size:0,
arr:[],
guessed:[],
wrongguess:"Wrong Guesses so far: ",
timepass:0,
  };
},
methods:{restart:function(){
this.word="";
this.letter="";
this.result="";
this.start=true;
this.newgame=false;
this.next=false;
this.size=0;
this.arr=[];
this.guessed=[];
this.wrongguess="Wrong Guesses so far: ";
this.timepass=0;
 totalsize=0;
 opened=0;
 guessedletters=[];
 contains=false;
 mistakes=0;
 correct=false;
 interx;
 gameover=false;
 var top=document.getElementsByClassName("res")[0].classList;
if (top.contains("g"))
top.remove("g")
if (top.contains("r"))
top.remove("r")
},
    startgame:function(){
        this.size=this.word.length;
        totalsize=this.size;
        if (totalsize>5){
            var that=this;
            this.start=false;
            this.next=true;
            for (var i=-1;i<this.word.length;i++){
                this.arr.push(this.word[i]);
                this.guessed.push("");
            }
            interx=setInterval(function(){ that.timepass++;  }, 1000);
        }
},
    checkletter:function(){

        if (this.letter!="" && !gameover){
            var guess=this.letter;

            for (var o=0;o<guessedletters.length;o++){
                if (guessedletters[o]==guess)
                contains=true;
            }
            if(!contains){
                guessedletters.push(guess);
                var wor=[];
                wor=this.word.split("");
                var indexes=[];
                for (var x=0;x<wor.length;x++){
                    if (wor[x]==guess){
                        indexes.push(x);
                        correct=true;
                    }
                }
                if (correct){
                    correct=false;
                    var doc=document.getElementsByClassName("elmnt");
                    for (var z=0;z<indexes.length;z++){ 
                        doc[indexes[z]].innerHTML=guess;
                        opened++;
                    }
                    if (opened==totalsize){
                        this.result="Congrats You Won!";
                        gameover=true;
                        window.clearInterval(interx);
                        document.getElementsByClassName("res")[0].classList.add("g");
                        this.newgame=true;
                    }
                }else{
                    document.getElementsByClassName("green")[mistakes].classList.add("red");
                    this.wrongguess=this.wrongguess+""+guess+",";
                    mistakes++;
                    if (mistakes>4){
                        this.result="Game Over!";
                        gameover=true;
                        window.clearInterval(interx);
                        document.getElementsByClassName("res")[0].classList.add("r");
                        this.newgame=true;
                        this.display(wor);
                    }
                }
            }else{
                contains=false;
            }
            this.letter="";
    }
},
display:function(e){
    var doc=document.getElementsByClassName("elmnt");
    for (var z=0;z<doc.length;z++){ 
        doc[z].innerHTML=e[z];
    }

}
}
}
</script>

<style scoped>
table {
    border-collapse: collapse;
    position:absolute;
    left:50%;
    transform:translate(-50%);
    margin-bottom:20px;
}

table, th, td {
    border: 1px solid grey;
}
.elmnt{height: 50px;width: 50px;}
.green{height: 50px;width: 50px;background-color: green}
.red{height: 50px;width: 50px;background-color: red}
.r{color: red}
.g{color: green}
.res{font-size: 50px;}
.main{margin-top: 100px;}
label{color: black}
</style>



