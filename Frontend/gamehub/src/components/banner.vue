<template>
<div>

    <div class="menu">
    <div class="pic"> <img :src= 'imagee[0]' class="img" v-on:click="twozero()" /><br><a class="a" id="2048"> 2048 </a> </div>
    <div class="pic"> <img :src= 'imagee[1]' class="img" v-on:click="hangman()" /> <br><a class="a" id="hangman"> Hangman </a> </div>
    <div class="pic"> <img :src= 'imagee[2]' class="img" v-on:click="checkers()" />  <br><a class="a" id="checkers"> Checkers </a> </div>
    <div class="pic"> <img :src= 'imagee[3]' class="img" v-on:click="connect()" /> <br><a class="a" id="connect"> Connect </a> </div> 
    <div class="pic"> <img :src= 'imagee[4]' class="img" v-on:click="memory()" />  <br><a class="a" id="memory"> Memory Match </a> </div>
    <div class="pic"> <img :src= 'imagee[5]' class="img" v-on:click="mines()" /> <br><a class="a" id="mine"> Minesweeper </a> </div>
    <!-- <img :src= 'imagee[]' class="img" v-on:click="puzzle" />   -->
    <div class="pic"> <img :src= 'imagee[6]' class="img" v-on:click="reversi()" />  <br><a class="a" id="reversi"> Reversi </a> </div>
    <div class="pic"> <img :src= 'imagee[7]' class="img" v-on:click="sudoku()" />  <br><a class="a" id="sudoku"> Sudoku </a> </div>

    <label>Username</label>
    <button class="menubutton"> HighScores </button>
    <button class="menubutton"> Signout </button>

    </div>
    
    <button v-on:click="twozero" class="menubutton"> 2048 </button>
        <button v-on:click="hangman" class="menubutton"> hangman </button>
    <button v-on:click="checkers" class="menubutton"> Checkers </button>

    <button v-on:click="connect" class="menubutton"> Connect 4 </button>
    <button v-on:click="memory" class="menubutton"> Memory </button>

    <button v-on:click="mines" class="menubutton"> Minesweeper </button>
    <button v-on:click="puzzle" class="menubutton"> Puzzle Slider </button>

    <button v-on:click="reversi" class="menubutton"> Reversi  </button>
    <button v-on:click="sudoku" class="menubutton"> Sudoku </button>
    <p>{{this.$store.getters.getusername}}</p>
<label>Username:</label>
<input type="txt" placesholder="Username">
<label>Password:</label>
<input type="txt" placesholder="Password">
    <button> Login </button>
    
</div>
</div>
</template>

 <script>
     var a = document.getElementById("2048");

 export default {


  data() {
    return {};
  },
  methods: {
    twozero: function() {
      this.$router.push("/twenty48");
  return{
      imagee: [
        require('@/assets/2048.png'),
        require('@/assets/hangman.png'),
        require('@/assets/checkers.jpeg'),
        require('@/assets/connect4.jpeg'),
        require('@/assets/logo.png'),
        require('@/assets/minesweeper.png'),
        require('@/assets/reversi.jpeg'),
        require('@/assets/sudoku.jpeg')
      ]
        }
},
methods:{
    clickedpic: function(){
    var pic = document.getElementsByClassName("a");
    for(var i=0;i<this.imagee.length;i++)
    if(pic[i].classList.contains("clicked"))
    pic[i].classList.remove("clicked")
    },
    twozero:function(){
    this.$router.push("/twenty48")
    var a = document.getElementById("2048");
    this.clickedpic();
    a.classList.add("clicked");
    },
    hangman:function(){
    this.$router.push("/hangman")
    var a = document.getElementById("hangman");
    this.clickedpic();
    a.classList.add("clicked");

    },
     reversi:function(){
    this.$router.push("/reversi")
    var a = document.getElementById("reversi");
    this.clickedpic();
    a.classList.add("clicked");

    },
     memory:function(){
    this.$router.push("/memory")
    var a = document.getElementById("memory");
    this.clickedpic();
    a.classList.add("clicked");

    },
     checkers:function(){
    this.$router.push("/checkers")
    var a = document.getElementById("checkers");
    this.clickedpic();
    a.classList.add("clicked");

    },
     puzzle:function(){
    this.$router.push("/puzzleslider")
    // var a = document.getElementById("puzzle");
    // this.clickedpic();
    // a.classList.add("clicked");

    },
     sudoku:function(){
    this.$router.push("/sudoku")
    var a = document.getElementById("sudoku");
    this.clickedpic();
    a.classList.add("clicked");

    },
     connect:function(){
    this.$router.push("/connect4")
    var a = document.getElementById("connect");
    this.clickedpic();
    a.classList.add("clicked");

    },
     mines:function(){
    this.$router.push("/minesweeper")
    var a = document.getElementById("mine");
    this.clickedpic();
    a.classList.add("clicked");
    },
    hangman: function() {
      this.$router.push("/hangman");
    },
    reversi: function() {
      this.$router.push("/reversi");
    },
    memory: function() {
      this.$router.push("/memory");
    },
    checkers: function() {
      this.$router.push("/checkers");
    },
    puzzle: function() {
      this.$router.push("/puzzleslider");
    },
    sudoku: function() {
      this.$router.push("/sudoku");
    },
    connect: function() {
      this.$router.push("/connect4");
    },
    mines: function() {
      this.$router.push("/minesweeper");
    }
  }
};
</script>

<style scoped>
#ban {
  width: 100%;
  height: 75px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px;
}
.menubutton {
  height: 50%;
  margin-top: 18px;
}
input {
  height: 30%;
  margin-top: 20px;
}
label {
  margin-top: 30px;
  color: white;
}
@media screen and (max-width: 800px) {
  .menubutton {
    display: none;
  }
  .dropmenu {
    display: block !important;
    margin: 0px;
  }
}
.dropmenu {
  display: none;
  margin: 0px;
}
.dropmenu:hover {
  position: relative;
}
.menu {
  display: none;
  position: absolute;
  background-color: black;
}
.dropmenu:hover .menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.menu:hover {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.dropbutton {
  height: 50px;
}
img {
  margin: 0px;
}

</style>