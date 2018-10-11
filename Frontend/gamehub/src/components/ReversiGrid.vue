<template>
  <div>
    <h2>{{currentPlayer}}'s turn</h2>
    <h2>White: {{scores["white"]}}</h2>
    <h2>Black: {{scores["black"]}}</h2>
    <table class="grid">
      <tr v-for="(rowItem, rowIndex) in grid">
        <td v-for="(columnItem, columnIndex) in grid" v-on:click="togglePiece(rowIndex, columnIndex)">
          <div class='black-circle' v-if="grid[rowIndex][columnIndex] === 'black'">
          </div>
          <div class='white-circle' v-if="grid[rowIndex][columnIndex] === 'white'">
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'ReversiGrid',
    data() {
      return {
        grid: [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', 'white', 'black', '', '', ''],
          ['', '', '', 'black', 'white', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '']
        ],

        searchDirections: [
          [0, 1],
          [1, 0],
          [0, -1],
          [-1, 0],
          [1, 1],
          [1, -1],
          [-1, 1],
          [-1, -1]
        ],

        currentPlayer: '',

        scores: {
          "white": 2,
          "black": 2
        }
      }
    },

    mounted(){
      var players = ["white", "black"];
      this.currentPlayer = players[Math.floor((Math.random() * 2))];
    },
    methods: {
      isGameOver() {
        for(var i=0;i<8;i++){
          for(var j=0;j<8;j++){
            if(isValid(this.currentPlayer, i, j)){
              return true;
            }
          }
        }

        return false;
      },
      isOnGrid(x, y) {
        return x >= 0 && x <= 7 && y >= 0 && y <= 7;
      },
      isValid(value, xstart, ystart) {
        if (this.grid[xstart][ystart] != '' || !this.isOnGrid(xstart, ystart)) {
          return false;
        }

        this.grid[xstart][ystart] = value;

        var oppositeValue;

        if (value == 'black') {
          oppositeValue = 'white';
        } else if (value == 'white') {
          oppositeValue = 'black';
        }

        var flippedGridElements = [];

        for (var i = 0; i < this.searchDirections.length; i++) {
          var x = xstart;
          var y = ystart;
          var xdirection = this.searchDirections[i][0];
          var ydirection = this.searchDirections[i][1];

          x += xdirection;
          y += ydirection;

          if (this.isOnGrid(x, y) && this.grid[x][y] == oppositeValue) {
            x += xdirection;
            y += ydirection;

            if (!this.isOnGrid(x, y)) {
              continue;
            }

            while (this.grid[x][y] == oppositeValue) {
              x += xdirection;
              y += ydirection;

              if (!this.isOnGrid(x, y)) {
                break;
              }
            }

            if (!this.isOnGrid(x, y)) {
              continue;
            }

            if (this.grid[x][y] == value) {
              while (true) {
                x -= xdirection
                y -= ydirection
                if (x == xstart && y == ystart) {
                  break;
                }
                flippedGridElements.push([x, y])
              }
            }

          }
        }

        this.grid[xstart][ystart] = '';
        console.log(flippedGridElements)

        if (flippedGridElements.length > 0) {
          return flippedGridElements;
        } else {
          return false;
        }

      },

      togglePiece(rowIndex, columnIndex){
        var validityArray = this.isValid(this.currentPlayer, rowIndex, columnIndex)
        if(validityArray){
          for(var i=0;i<validityArray.length;i++){
            this.grid[validityArray[i][0]][validityArray[i][1]] = this.currentPlayer;
          }
          this.grid[rowIndex][columnIndex] = this.currentPlayer;
          this.scores[this.currentPlayer] += validityArray.length + 1;
          if(this.currentPlayer == 'black'){
            this.currentPlayer = 'white';
            this.scores[this.currentPlayer] -= validityArray.length;

          } else if(this.currentPlayer == 'white'){
            this.currentPlayer = 'black';
            this.scores[this.currentPlayer] -= validityArray.length;
          }
          this.$forceUpdate();
        } else {
          alert("Illegal move.");
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td {
    width: 50px;
    height: 50px;
    border: solid 1px black;
  }
  .grid{
    margin:0 auto;
  }

  .black-circle {
    border-radius: 45px;
    width: 45px;
    height: 45px;
    background-color: black;
    color: white;
  }

  .white-circle {
    border-radius: 45px;
    border: solid 1px black;
    width: 45px;
    height: 45px;
    background-color: white;
    color: black;
  }
</style>