<template>
<div>

    <div class="menu">
    <div> <img :src= 'images[0]' class="image" v-on:click="twozero" /><br><a> 2048 </a> </div>
    <div> <img :src= 'images[1]' class="image" v-on:click="hangman" /> <br><a> Hangman </a> </div>
    <div> <img :src= 'images[2]' class="image" v-on:click="checkers" />  <br><a> Checkers </a> </div>
    <div> <img :src= 'images[3]' class="image" v-on:click="connect" /> <br><a> Connect </a> </div> 
    <div> <img :src= 'images[4]' class="image" v-on:click="memory" />  <br><a> Memory Match </a> </div>
    <div> <img :src= 'images[5]' class="image" v-on:click="mines" /> <br><a> Minesweeper </a> </div>
    <!-- <img :src= 'images[]' class="image" v-on:click="puzzle" />   -->
    <div> <img :src= 'images[6]' class="image" v-on:click="reversi" />  <br><a> Reversi </a> </div>
    <div> <img :src= 'images[7]' class="image" v-on:click="sudoku" />  <br><a> Sudoku </a> </div>


    <!-- // <button v-on:click="twozero" class="menubutton">  </button>
    // <button v-on:click="hangman" class="menubutton"> hangman </button>
    // <button v-on:click="checkers" class="menubutton"> Checkers </button>
    // <button v-on:click="connect" class="menubutton"> Connect 4 </button>
    // <button v-on:click="memory" class="menubutton"> Memory </button>
    // <button v-on:click="mines" class="menubutton"> Minesweeper </button>
    // <button v-on:click="puzzle" class="menubutton"> Puzzle Slider </button>
    // <button v-on:click="reversi" class="menubutton"> Reversi  </button>
    // <button v-on:click="sudoku" class="menubutton"> Sudoku </button> -->
    <label>Username</label>
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
export default {
  data() {
    return {};
  },
  methods: {
    twozero: function() {
      this.$router.push("/twenty48");
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