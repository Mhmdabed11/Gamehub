<template>
  <div>
    <table>
            <tr>
                <th>{{games[0]}}</th>
                <th colspan="2">Scores</th>
            </tr>
            <tr v-for="(score,index) in game_scores">
                <td></td>
                <td>{{users_scores[index]}}</td>
                <td>{{score}}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>{{games[1]}}</th>
                <th colspan="2">Scores</th>
            </tr>
            <tr v-for="(score2,index2) in twenty_scores">
                <td></td>
                <td>{{users2_scores[index2]}}</td>
                <td>{{score2}}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>{{games[2]}}</th>
                <th colspan="2">Scores</th>
            </tr>
            <tr v-for="(score3,index3) in hangman_scores">
                <td></td>
                <td>{{users3_scores[index3]}}</td>
                <td>{{score3}}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>{{games[3]}}</th>
                <th colspan="2">Scores</th>
            </tr>
            <tr v-for="(score4,index4) in checkers_scores">
                <td></td>
                <td>{{users4_scores[index4]}}</td>
                <td>{{score4}}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>{{games[4]}}</th>
                <th colspan="2">Scores</th>
            </tr>
            <tr v-for="(score5,index5) in connect4_scores">
                <td></td>
                <td>{{users5_scores[index5]}}</td>
                <td>{{score5}}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>{{games[5]}}</th>
                <th colspan="2">Scores</th>
            </tr>
            <tr v-for="(score6,index6) in memory_scores">
                <td></td>
                <td>{{users6_scores[index6]}}</td>
                <td>{{score6}}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>{{games[6]}}</th>
                <th colspan="2">Scores</th>
            </tr>
            <tr v-for="(score7,index7) in minesweeper_scores">
                <td></td>
                <td>{{users7_scores[index7]}}</td>
                <td>{{score7}}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>{{games[7]}}</th>
                <th colspan="2">Scores</th>
            </tr>
            <tr v-for="(score8,index8) in puzzle_scores">
                <td></td>
                <td>{{users8_scores[index8]}}</td>
                <td>{{score8}}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>{{games[8]}}</th>
                <th colspan="2">Scores</th>
            </tr>
            <tr v-for="(score9,index9) in reversi_scores">
                <td></td>
                <td>{{users9_scores[index9]}}</td>
                <td>{{score9}}</td>
            </tr>
        </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      games: ['sudoku','2048','hangman','checkers','connect4','memory','minesweeper','puzzleslider','reversi'],
      game_scores: [],
      users_scores: [],
      twenty_scores: [],
      users2_scores:[],
      hangman_scores: [],
      users3_scores: [],
      checkers_scores: [],
      users4_scores: [],
      connect4_scores: [],
      users5_scores: [],
      memory_scores: [],
      users6_scores: [],
      minesweeper_scores: [],
      users7_scores: [],
      puzzle_scores: [],
      users8_scores:[],
      reversi_scores: [],
      users9_scores: []

    }
  },
  methods:{
    displayGameScores(data){
      for(var i=0 ; i<data.length; i++) {
        var usern=data[i][1];
        var score=data[i][0];
        this.game_scores.push(score);
        this.users_scores.push(usern);
      }
    },
    displayTwentyScores(data){
      for(var i=0 ; i<data.length; i++) {
        var usern=data[i][1];
        var score=data[i][0];
        this.twenty_scores.push(score);
        this.users2_scores.push(usern);
      }
    },
    displayHangmanScores(data){
      for(var i=0 ; i<data.length; i++) {
        var usern=data[i][1];
        var score=data[i][0];
        this.hangman_scores.push(score);
        this.users3_scores.push(usern);
      }
    },
    displayCheckersScores(data){
      for(var i=0 ; i<data.length; i++) {
        var usern=data[i][1];
        var score=data[i][0];
        this.checkers_scores.push(score);
        this.users4_scores.push(usern);
      }
    },
    displayConnectScores(data){
      for(var i=0 ; i<data.length; i++) {
        var usern=data[i][1];
        var score=data[i][0];
        this.connect4_scores.push(score);
        this.users5_scores.push(usern);
      }
    },
    displayMemoryScores(data){
      for(var i=0 ; i<data.length; i++) {
        var usern=data[i][1];
        var score=data[i][0];
        this.memory_scores.push(score);
        this.users6_scores.push(usern);
      }
    },
    displayMineScores(data){
      for(var i=0 ; i<data.length; i++) {
        var usern=data[i][1];
        var score=data[i][0];
        this.minesweeper_scores.push(score);
        this.users7_scores.push(usern);
      }
    },
    displayPuzzleScores(data){
      for(var i=0 ; i<data.length; i++) {
        var usern=data[i][1];
        var score=data[i][0];
        this.puzzle_scores.push(score);
        this.users8_scores.push(usern);
      }
    },
    displayReversiScores(data){
      for(var i=0 ; i<data.length; i++) {
        var usern=data[i][1];
        var score=data[i][0];
        this.reversi_scores.push(score);
        this.users9_scores.push(usern);
      }
    }

  },
  mounted: function(){
    var that=this;
    for(var i=0 ; i < this.games.length; i ++) {
    var http = new XMLHttpRequest();
    var url = 'http://localhost:8888/getScoresByGame/';
    http.open('GET', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
        var y=JSON.parse(http.responseText);
        if(i ==0) 
        that.displayGameScores(y);
        else if(i ==1)
        that.displayTwentyScores(y);
        else if(i==2)
        that.displayHangmanScores(y);
        else if(i==3)
        that.displayCheckersScores(y);
        else if(i==4)
        that.displayConnectScores(y);
        else if(i==5)
        that.displayMemoryScores(y);
        else if(i==6)
        that.displayMineScores(y);
        else if(i==7)
        that.displayPuzzleScores(y);
        else 
        that.displayReversiScores(y);
      }	    
    }
    http.send(null);
    }
  },
}
</script>

<style>
table, tr, td,th{
    border: 2px solid black;
    border-collapse: collapse;
}

table {
    width:25%;
    float:left;
}

</style>
