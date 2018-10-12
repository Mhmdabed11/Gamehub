<template>
    <div>
<div class="wrapper">
<table v-for="i in sizearray.length" :key="i">  
    <tr>     
        <td  colspan="2" class="toprow">{{gamename[i-1]}}</td>
    </tr>
    
    <tr v-for="j in sizearray[i-1]" :key="j">
        <td class="secondrow"><img :src="imgsource[j-1]" class="medal">{{x[i-1]["value"][j-1][1]}}</td>
        <td>{{x[i-1]["value"][j-1][0]}}</td>
    </tr>
</table>
</div>
        </div>
</template>

<script>
export default {
    data () {
    return {
x:"",
size:0,
sizearray:[],
imgsource:[require("../assets/gol.png"),require("../assets/slv.png"),require("../assets/brnz.png"),require("../assets/others.png"),require("../assets/others.png")],
gamename:[]
    }
  },
  methods:{start:function(){

  }

    },
      mounted: function(){
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
       {that.sizearray.push(that.x[m]["value"].length)
           that.gamename.push(that.x[m]["key"].toUpperCase())}
      }	    
    }
    http.send(null);

  }
}
</script>
<style scoped>
.wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-auto-columns: auto;
}
table {
    border-collapse: collapse;
    margin-bottom:20px;
}

table, th, td {
    border: 1px solid grey;
}
td{width:200px;height:10px;}
.toprow{font-size: 35px;color: black;font-weight: bold }
.medal{height:30px;width:20px;}
.secondrow{text-align: left;font-size: 20px;color: black}
</style>
