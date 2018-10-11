<template>
    <div>
        <button v-on:click="start">Start</button>
<table v-for="i in size" :key="i">  
    <tr>     
        <td  colspan="2">{{x[i-1]["key"]}}</td>
    </tr>
    
    <tr v-for="j in sizearray[i-1]" :key="j">
        <td>{{x[i-1]["value"][j-1][1]}}</td>
        <td>{{x[i-1]["value"][j-1][0]}}</td>
    </tr>
</table>
        </div>
</template>

<script>
export default {
    data () {
    return {
x:"",
size:0,
sizearray:[]
    }
  },
  methods:{start:function(){
    var that=this;
    var http = new XMLHttpRequest();
    var url = 'http://localhost:8888/getScoresByGame/';
    http.open('GET', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
         that.x=JSON.parse(http.responseText);
         that.x.push("")
       that.size=that.x.length;
       for (var m=0;m<that.size-1;m++)
       {that.sizearray.push(that.x[m]["value"].length)}
       console.log(that.sizearray);
      }	    
    }
    http.send(null);

  }

    },
      mounted: function(){

  }
}
</script>
<style scoped>
table {
    border-collapse: collapse;
    margin-bottom:20px;
}

table, th, td {
    border: 1px solid grey;
}
td{width:100px;height:50px;}
</style>
