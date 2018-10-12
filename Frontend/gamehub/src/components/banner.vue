<template>
<div>

    <div class="menu">
    <div v-bind:class="{active:!this.$store.getters.getsignedin}" class="pic"> <img :src= 'imagee[0]' class="img" v-on:click="twozero()" /><br><a class="a" id="2048"> 2048 </a> </div>
    <div v-bind:class="{active:!this.$store.getters.getsignedin}" class="pic"> <img :src= 'imagee[1]' class="img" v-on:click="hangman()" /> <br><a class="a" id="hangman"> Hangman </a> </div>
    <div v-bind:class="{active:!this.$store.getters.getsignedin}" class="pic"> <img :src= 'imagee[2]' class="img" v-on:click="checkers()" />  <br><a class="a" id="checkers"> Checkers </a> </div>
    <div v-bind:class="{active:!this.$store.getters.getsignedin}" class="pic"> <img :src= 'imagee[3]' class="img" v-on:click="connect()" /> <br><a class="a" id="connect"> Connect </a> </div> 
    <div v-bind:class="{active:!this.$store.getters.getsignedin}" class="pic"> <img :src= 'imagee[4]' class="img" v-on:click="memory()" />  <br><a class="a" id="memory"> Memory Match </a> </div>
    <div  v-bind:class="{active:!this.$store.getters.getsignedin}" class="pic"> <img :src= 'imagee[5]' class="img" v-on:click="mines()" /> <br><a class="a" id="mine"> Minesweeper </a> </div>
    <!-- <img :src= 'imagee[]' class="img" v-on:click="puzzle" />   -->
    <div v-bind:class="{active:!this.$store.getters.getsignedin}" class="pic"> <img :src= 'imagee[6]' class="img" v-on:click="reversi()" />  <br><a class="a" id="reversi"> Reversi </a> </div>
    <div v-bind:class="{active:!this.$store.getters.getsignedin}" class="pic"> <img :src= 'imagee[7]' class="img" v-on:click="sudoku()" />  <br><a class="a" id="sudoku"> Sudoku </a> </div>
  
     <div class="datawrapper">
        
    <div class="username">{{this.$store.getters.getusername}} </div>
    <div> <button class="btnsignout" v-on:click="signout"> Signout </button> </div>
  <div class="dropdown">
        <button class="data hsbtn"> HighScores 
        <div class="dropdown-content"> 
            <a class="item"> My HighScores</a> 
            <a class="item"> All HighScores</a> 
        </div>
        </button>
    </div>
  
    </div>

     

    
   </div> 
</div>
</template>

 <script>
export default {
  data() {
    return {
      imagee: [
        require("@/assets/2048.png"),
        require("@/assets/hangman.png"),
        require("@/assets/checkers.jpeg"),
        require("@/assets/connect4.jpeg"),
        require("@/assets/logo.png"),
        require("@/assets/minesweeper.png"),
        require("@/assets/reversi.jpeg"),
        require("@/assets/sudoku.jpeg")
      ]
    };
  },
  methods: {
    signout() {
      this.$store.commit("setsignedin", false);
      this.$store.commit("setusername", "");
      this.$router.push({ name: "login" });
    },
    clickedpic: function() {
      var pic = document.getElementsByClassName("a");
      for (var i = 0; i < this.imagee.length; i++)
        if (pic[i].classList.contains("clicked"))
          pic[i].classList.remove("clicked");
    },
    twozero: function() {
      this.$router.push("/twenty48");
      var a = document.getElementById("2048");
      this.clickedpic();
      a.classList.add("clicked");
    },
    hangman: function() {
      this.$router.push("/hangman");
      var a = document.getElementById("hangman");
      this.clickedpic();
      a.classList.add("clicked");
    },
    reversi: function() {
      this.$router.push("/reversi");
      var a = document.getElementById("reversi");
      this.clickedpic();
      a.classList.add("clicked");
    },
    memory: function() {
      this.$router.push("/memory");
      var a = document.getElementById("memory");
      this.clickedpic();
      a.classList.add("clicked");
    },
    checkers: function() {
      this.$router.push("/checkers");
      var a = document.getElementById("checkers");
      this.clickedpic();
      a.classList.add("clicked");
    },
    puzzle: function() {
      this.$router.push("/puzzleslider");
      // var a = document.getElementById("puzzle");
      // this.clickedpic();
      // a.classList.add("clicked");
    },
    sudoku: function() {
      this.$router.push("/sudoku");
      var a = document.getElementById("sudoku");
      this.clickedpic();
      a.classList.add("clicked");
    },
    connect: function() {
      this.$router.push("/connect4");
      var a = document.getElementById("connect");
      this.clickedpic();
      a.classList.add("clicked");
    },
    mines: function() {
      this.$router.push("/minesweeper");
      var a = document.getElementById("mine");
      this.clickedpic();
      a.classList.add("clicked");
    }
  }
};
</script>

<style scoped>
.menu {
  position: relative;
  top: -50px;
}
.btnsignout {
  margin-left: 50%;
}
.clicked {
  color: red;
}
.pic:hover {
  cursor: pointer;
}
.img {
  width: 90px;
  height: 90px;
  display: inline-block;
}
.img {
  width: 90px;
  height: 90px;
  display: inline-block;
}
.active {
  pointer-events: none;
}
.pic {
  display: inline-block;
}
div {
  display: inline-block;
}
.dropbtn {
  height: 25px;
  border: none;
}
.datawrapper {
  display: inline-block;
  height: 80px;
  width: 90px;
  margin-left: 0%;
  top: 0;
}
.data {
  position: relative;
  margin-bottom: 8px;
  top: -24px;
}
.user {
  position: absolute;
  top: 0px;
  right: 0px;
}
ul {
  list-style: none;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  height: 0px;
  right: 0;
  top: 100%;
  position: absolute;
  background-color: #f1f1f1;
  width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.item {
  height: 0px;
  margin-top: 4%;
  display: none;
  color: black;
  /* overflow: hidden; */
}

.dropdown-content .item:hover {
  background-color: #ddd;
  cursor: pointer;
}

.dropdown:hover .item {
  height: 18px;
  display: block;
}
.hsbtn {
  background-color: blue; /* Green */
  border: none;
  color: white;
  padding: 5px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
  position: relative;
  width: 160px;

  margin-top: 20%;
}
.dropdown:hover .dropdown-content {
  height: 54px;
}

.item:hover {
  height: 18px;
  display: block;
}

.username {
  margin-left: 50%;
  background-color: black;
  color: white;
}

/* #ban{width:100%;height:75px;background-color:black;display:flex;flex-direction: row;justify-content:space-between;margin:0px;}
input{height:30%;margin-top:20px;}
label{margin-top:30px;color:white;}
.menu{position:absolute;background-color:black;}
.dropmenu:hover  .menu{display:flex;flex-direction: column;justify-content:space-between;}
.menu:hover{display:flex;flex-direction: column;justify-content:space-between;}
.dropbutton{height:50px;}
img{margin:0px;} */
</style>