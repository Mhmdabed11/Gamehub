<template>
  <div class="trial">
        {{msg}}
        <table>
            <tr>
                <th>Username</th>
                <th colspan="2">Scores</th>
            </tr>
            <tr v-for="(score, game) in game_scores">
                <td>Soosoo</td>
                <td>{{game}}</td>
                <td>{{score}}</td>
            </tr>
        </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	msg: 'Welcome to YOUR DEATH',
        game_scores: {game1:55, game2:66, game3:77},
        username: 'SooSoo',

    }
  },
  methods: {
      retrieveScoresByUsername(){
            var scope = this;
            var xreq = new XMLHttpRequest();
            var username = "";
            var url = 'http://127.0.0.1:8888/getScoresByUsername'+username;
            xreq.open("GET", url, true);
            xreq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            
            xreq.send(null);
            xreq.onreadystatechange = function() {//Call a function when the state changes.
                if(xreq.readyState == 4 && xreq.status == 200) {
                    // alert(xreq.responseText);
                    var body = JSON.parse(xreq.responseText);
                    scope.displayUserScores();    
                }
            }
            
      },
      displayUserScores(body){

      },

  },
  mounted: function(){
      this.retrieveScoresByUsername();
  }
}
</script>

<style scoped>
table, tr, td,th{
    border: 2px solid black;
    border-collapse: collapse;
}

table {
    width:25%;
}
</style>