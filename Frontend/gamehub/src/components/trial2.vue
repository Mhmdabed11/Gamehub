<template>
  <div>
    <table>
            <tr>
                <th>{{game}}</th>
                <th colspan="2">Scores</th>
            </tr>
            <tr v-for="(score,index) in game_scores">
                <td></td>
                <td>{{users_scores[index]}}</td>
                <td>{{score}}</td>
            </tr>
        </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      game: 'sudoku',
      game_scores: [],
      users_scores: []
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
    }
  },
  mounted: function(){
    var that=this;
    var http = new XMLHttpRequest();
    var url = 'http://localhost:8888/getScoresByGame/'+this.game;
    http.open('GET', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
        var y=JSON.parse(http.responseText);
        that.displayGameScores(y);
      }	    
    }
    http.send(null);

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
}

</style>
