<template>
  <div class="fonts">
      <h1>Connect Four </h1>
      <button @click="NewGame" class="newgame" >New Game</button>
      <span v-bind:id="color" class="turn">{{color}}'s turn</span>
      <span v-bind:id="color" class="win">{{color}} wins</span>
      <span>{{timer}} </span>
        <div class="grid-container">
            <div v-for="n in 7" class="grid-item"> <button @click="Insert" v-bind:id="n-1" class="insert">Insert Here</button></div>
            <div v-for="n in 42" class="grid-item dot"></div>
        </div>
  </div>
</template>

<script>
var inter;
export default {
  name: "test",
  data() {
    return {
      color: "",
      timer: 0
    };
  },
  methods: {
    Insert() {
      var x = event.target;
      var y = this;
      for (var i = 35; i > -1; i = i - 7) {
        if (
          document
            .getElementsByClassName("dot")
            [parseInt(x.id) + i].classList.contains("red") ||
          document
            .getElementsByClassName("dot")
            [parseInt(x.id) + i].classList.contains("blue")
        );
        else {
          document
            .getElementsByClassName("dot")
            [parseInt(x.id) + i].classList.add(y.color);
          if (y.color == "red") y.color = "blue";
          else y.color = "red";
          break;
        }
      }
      if (parseInt(x.id) + i > -1) this.Verify(parseInt(x.id) + i);
    },
    Verify(index) {
      var count = 1;
      if (this.color == "red") var testcolor = "blue";
      else var testcolor = "red";
      var indexplace = index % 7;
      var iteration = 6 - indexplace;
      for (var j = 1; j < iteration + 1; j++) {
        if (
          document
            .getElementsByClassName("dot")
            [index + j].classList.contains(testcolor)
        )
          count++;
        else break;
      }
      for (var i = 1; i < indexplace + 1; i++) {
        if (
          document
            .getElementsByClassName("dot")
            [index - i].classList.contains(testcolor)
        )
          count++;
        else break;
      }
      if (count < 4) this.VerifyVertical(index, testcolor);
      else {
        this.Win(testcolor);
      }
    },
    VerifyVertical(index, testcolor) {
      var count = 1;
      var newindex = index;
      var indexplace = Math.ceil(index / 7);
      if (index % 7 == 0) {
        indexplace++;
      }
      var iteration = 6 - indexplace;
      for (var i = 0; i < iteration; i++) {
        var newindex = newindex + 7;
        if (
          document
            .getElementsByClassName("dot")
            [newindex].classList.contains(testcolor)
        )
          count++;
        else break;
      }
      if (count < 4) this.VerifyRight(index, testcolor);
      else this.Win(testcolor);
    },
    VerifyRight(index, testcolor) {
      var count = 1;
      var newindex = index;
      var newindex2 = index;
      var indexplace = index % 7;
      var indexplace2 = Math.ceil(index / 7);
      if (index % 7 == 0) {
        indexplace2++;
      }
      //if(indexplace2 < 4 && indexplace > 2) {
      for (var i = 0; i < 3; i++) {
        newindex = newindex + 6;
        if (newindex < 42) {
          if (
            document
              .getElementsByClassName("dot")
              [newindex].classList.contains(testcolor)
          )
            count++;
          else break;
        }
      }
      //} else {
      for (var j = 0; j < 3; j++) {
        newindex2 = newindex2 - 6;
        if (newindex2 > -1) {
          if (
            document
              .getElementsByClassName("dot")
              [newindex2].classList.contains(testcolor)
          )
            count++;
          else break;
        }
      }
      //}
      if (count < 4) this.VerifyLeft(index, testcolor);
      else this.Win(testcolor);
    },
    VerifyLeft(index, testcolor) {
      var count = 1;
      var newindex = index;
      var newindex2 = index;
      var indexplace = index % 7;
      var indexplace2 = Math.ceil(index / 7);
      if (index % 7 == 0) {
        indexplace2++;
      }
      //if(indexplace2 < 4 && indexplace < 4) {
      for (var i = 0; i < 3; i++) {
        newindex = newindex + 8;
        if (newindex < 42) {
          if (
            document
              .getElementsByClassName("dot")
              [newindex].classList.contains(testcolor)
          )
            count++;
          else break;
        }
      }
      //} else {
      for (var i = 0; i < 3; i++) {
        newindex2 = newindex2 - 8;
        if (newindex2 > -1) {
          if (
            document
              .getElementsByClassName("dot")
              [newindex2].classList.contains(testcolor)
          )
            count++;
          else break;
        }
      }
      //}
      if (count > 3) {
        this.Win(testcolor);
      }
    },
    Win(testcolor) {
      var that = this;
      for (var k = 0; k < 7; k++) {
        document.getElementById(k).disabled = true;
      }
      document.getElementById(testcolor).classList.add("hide");
      if (testcolor == "red") {
        that.color = "red";
      } else that.color = "blue";
      document.getElementsByClassName("win")[0].classList.remove("hide");
      clearInterval(inter);
    },
    NewGame() {
      var that = this;
      clearInterval(inter);
      for (var i = 0; i < 42; i++) {
        document.getElementsByClassName("dot")[i].classList.remove("red");
        document.getElementsByClassName("dot")[i].classList.remove("blue");
      }
      for (var k = 0; k < 7; k++) {
        document.getElementById(k).disabled = false;
      }
      var playerstart = Math.floor(Math.random() * 2 + 1);
      if (playerstart == 1) {
        this.color = "blue";
      } else {
        this.color = "red";
      }
      document.getElementsByClassName("win")[0].classList.add("hide");
      document.getElementsByClassName("turn")[0].classList.remove("hide");
      this.timer = 0;
      inter = setInterval(function() {
        that.timer++;
      }, 1000);
    }
  },
  mounted: function() {
    var playerstart = Math.floor(Math.random() * 2 + 1);
    if (playerstart == 1) {
      this.color = "blue";
    } else {
      this.color = "red";
    }
    var that = this;
    inter = setInterval(function() {
      that.timer++;
    }, 1000);
    document.getElementsByClassName("win")[0].classList.add("hide");
  }
};
</script>

<style>
.grid-container {
  display: grid;
  margin-top: 2%;
  grid-template-columns: auto auto auto auto auto auto auto;
  border: solid 1px;
  padding: 5px;
  width: 700px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border-radius: 2%;
}
.grid-item {
  padding: 20px;
}
.dot {
  height: 15px;
  width: 15px;
  margin: 3px;
  margin-left: 22px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
}

.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

h1 {
  text-align: center;
}

.insert,
.newgame {
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
}

.newgame {
  margin-left: -5%;
  margin-top: 2%;
  background-color: blue;
  color: white;
  font-size: 18px;
  padding: 6px;
}

.newgame:hover {
  background-color: red;
}

.fonts {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

span {
  margin-left: 15%;
  text-transform: uppercase;
  font-size: 18px;
}

#red {
  color: red;
}

#blue {
  color: blue;
}

.hide {
  display: none;
}
</style>