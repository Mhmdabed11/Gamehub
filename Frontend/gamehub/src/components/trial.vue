<template>
  <div class="trial">
        {{msg}}
        <table v-bind:id="'table'">
            <tr>
                <th>Username</th>
                <th colspan="2">Scores</th>
            </tr>
            <tr v-for="(score, game) in game_scores">
                <td>{{username}}</td>
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
        game_scores: '',
        username: '',

    }
  },
  methods: {
      retrieveScoresByUsername(){
            var scope = this;
            var xreq = new XMLHttpRequest();
            scope.username = "/"+scope.$store.getters.getusername;
            var url = 'http://127.0.0.1:8888/getScoresByUsername'+scope.username;
            xreq.open("GET", url, true);
            xreq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            
            xreq.send(null);
            xreq.onreadystatechange = function() {//Call a function when the state changes.
                if(xreq.readyState == 4 && xreq.status == 200) {
                    // alert(xreq.responseText);
                    var body = JSON.parse(xreq.responseText);
                    scope.displayUserScores(body);    
                }
            }
            
      },
      displayUserScores(body){
          this.game_scores = body;
          console.log(body);
      },

  },
  mounted: function(){
      this.retrieveScoresByUsername();
  }
}
</script>

<style scoped>
#table{
    display: block;
 	position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

table, tr, td,th{
    border: 2px solid black;
    border-collapse: collapse;
}

</style>