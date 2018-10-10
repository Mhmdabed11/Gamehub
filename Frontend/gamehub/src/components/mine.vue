<template>
<div>
<button id="def" class="off" v-if="df" v-on:click="defs">Defuse</button>
<button class="strt" v-on:click="easy" v-if="btn">Easy</button>
<button class="strt" v-on:click="medium" v-if="btn">Medium</button>
<button class="strt" v-on:click="hard" v-if="btn">Hard</button>
<button v-on:click="createall" v-if="btn2" class="strt">START</button>


        <div id="overlay" v-if="over"></div>
    <table>
        <tr v-if="tprow" id="r">
            <td v-bind:colspan="side"><span v-if="smily" id="cnt">{{numbomb}}</span></td>
            <td v-bind:colspan="cntr"><img :src="source" id="sm" v-if="smily" v-on:click="newgame"></td>
            <td v-bind:colspan="side">{{timepassed}}</td>
            
        </tr>
        <tr v-for="i in siz" :key="i">
            <td v-on:click="check($event)"  v-for="j in siz" :key="j" class="box"></td>
        </tr>
    
    </table>

</div>
</template>


 <script>
 var firstclk=true;
 var clkcount=0;
 var defuse=false;
 var gameover=false;  
 var bms;
 var size;
 var that;
 var inter;

 document.addEventListener("keydown", myFunction);
 function myFunction(){
     if (event.keyCode==32){
         that.defs();
     }
 }
export default {


  data() {
  return{
siz:[],
over:true,
btn:true,
btn2:false,
df:false,
gameover:false,
tprow:false,
smily:false,
source:require("../assets/sm.png"),
timepassed:0,
numbomb:0,
side:0,
cntr:0,
  };
},
methods:{newgame:function(){
   
   
    this.tprow=false;
    this.over=true;
    this.df=false;
    this.smily=false;
    this.btn=true;
    window.clearInterval(inter);
    this.timepassed=0;
    size=0;
    this.siz=[];
    this.gameover=false;
    gameover=false;
    firstclk=true;
    clkcount=0;
    defuse=false;
    this.numbomb=0;
    this.source=require("../assets/sm.png");
    
   // location.reload();
//alert("new game")
},
populate:function(){
    this.siz=[];
    for (let i =0;i<size;i++)
    {this.siz.push(i);}

},
createall:function(){
    var boxes=document.getElementsByClassName("box");
    var x;
    var y;
    var u;
    var cls;
    if (size==8)
    cls="td1"
    else  if (size==16)
    cls="td2"
    else  if (size==24)
    cls="td3"
    for(y=0;y<size;y++){
    for(x=0;x<size;x++){
    var cl=y+","+x;
    boxes[x+y*size].classList.add(cl);
    boxes[x+y*size].classList.add(cls);

}
}
    this.tprow=true;
    this.btn2=false;
    this.over=false;
    this.df=true;
    this.smily=true;
    this.numbomb=bms;
    that=this;


    inter=setInterval(function(){ that.timepassed++;  }, 1000);
},defs:function(){

         defuse=!defuse;
         if (defuse)
         document.getElementById("def").classList.add("on");
         else
         document.getElementById("def").classList.remove("on");
         console.log(defuse)
     
},
easy:function(){
    size=8;
    bms=10;
    this.populate();
    document.getElementById("overlay").classList.add("overlay1");
    this.btn=false;
    this.btn2=true;
    this.cntr=4;
    this.side=2;

},
medium:function(){
    size=16;
    bms=40;
    this.populate();
    document.getElementById("overlay").classList.add("overlay2");
    this.btn=false;
    this.btn2=true;
    this.cntr=8;
    this.side=4;

    
},
hard:function(){
    size=24;
    bms=99;
    this.populate();
        document.getElementById("overlay").classList.add("overlay3");
        this.btn=false;
        this.btn2=true;
        this.cntr=16;
        this.side=4;

},
check:function(e){
    // class0 =box; class1 =location;class2 =bomb/open;class3 =boom/defuse;
    //increment counter only if it lacks class open to figure out the nuber
    //disable clicks on win/lose
    //implement win/lose
    var tar=e.target;
    if (!gameover){
        if (!defuse){
                            if(!tar.classList.contains("defuse")){
            if (!tar.classList.contains("bomb")){

                if (!tar.classList.contains("open") && !tar.classList.contains("defuse")){
                    clkcount++;}
                var elmntclass=tar.classList[1];
                if (firstclk){
                    this.createbombs(elmntclass);
                    firstclk=false;}
                var clkd=document.createAttribute("clkd");
                clkd.value="clicked";
                tar.setAttributeNode(clkd);
                var bmb=this.checksurround(elmntclass);

                if (bmb!=0)
                    {tar.innerHTML=bmb;
                        if (bmb==1)
                        tar.classList.add("one");
                        else if (bmb==2)
                        tar.classList.add("two");
                        else if (bmb==3)
                        tar.classList.add("three");
                        else if (bmb==4)
                        tar.classList.add("four");
                        else
                        tar.classList.add("else");
                        }
                tar.classList.add("open");
                if (clkcount==size*size-bms)
                    {gameover=true;
                    this.gameover=true;
                    this.source=require("../assets/win.png");
                    window.clearInterval(inter);
                    }
            }else {
                var bombs=document.getElementsByClassName("bomb");
                for (var i=0; i<bombs.length;i++)
                    {bombs[i].classList.add("boom");}
                    gameover=true;
                    this.gameover=true;
                    this.source=require("../assets/loss.png");
                    window.clearInterval(inter);
                var locs=document.getElementsByClassName("defuse");
                for(var t=0;t<locs.length;t++){
                    if (!locs[t].classList.contains("bomb"))
                    locs[t].innerHTML="X";
                }
            }
        }
        }
        else {
            if (tar.classList.contains("defuse"))
            {tar.classList.remove("defuse");this.numbomb++;}
            else if (!tar.classList.contains("open"))
            {tar.classList.add("defuse");this.numbomb--;}
        }
    }
},
checksurround:function(item){
var next=this.surround(item);

var bombcount=0;
for (var x=0; x<8;x++){  
    if (next[x]!="none"){
        if(document.getElementsByClassName(next[x])[0].classList.contains("bomb")){
            bombcount++;
        }
    }
}
if (bombcount==0){
  for (var x=0; x<8;x++){ 

if (next[x]!="none"){
    var elm=document.getElementsByClassName(next[x])[0];

  //  elm.classList.add("open");

    if (elm.getAttribute("clkd")!="clicked")
    document.getElementsByClassName(next[x])[0].click();
}
   }  
}
return bombcount;
},
surround:function(cls){
    var arr;
    var str; 
    var res=[];
    //next//
    arr=cls.split(",");
    if (arr[1]!=size-1){
    arr[1]++;       
    str=arr.join(",");}
    else str="none";
    res.push(str);
    //diag down right//
    arr=cls.split(",");
    if (arr[1]!=size-1 && arr[0]!=size-1){
    arr[0]++;
    arr[1]++;       
    str=arr.join(",");}
    else str="none";
    res.push(str);
    //down//
    arr=cls.split(",");
    if (arr[0]!=size-1){
    arr[0]++;
    str=arr.join(",");}
    else str="none";
    res.push(str);
    //diag down left//
    arr=cls.split(",");
    if (arr[1]!=0 && arr[0]!=size-1){
    arr[0]++;
    arr[1]--;
    str=arr.join(",");}
    else str="none";
    res.push(str);
    //prevs//
    arr=cls.split(",");
    if (arr[1]!=0){
    arr[1]--;
    str=arr.join(",");}
    else str="none";
    res.push(str);
    //diag up left//
    arr=cls.split(",");
    if (arr[1]!=0 && arr[0]!=0){
    arr[0]--;
    arr[1]--;
    str=arr.join(",");}
    else str="none";
    res.push(str);
    //up//
    arr=cls.split(",");
    if (arr[0]!=0){
    arr[0]--;
    str=arr.join(",");}
    else str="none";
    res.push(str);
    //diag up right//
    arr=cls.split(",");
    if (arr[1]!=size-1 && arr[0]!=0){
    arr[0]--;
    arr[1]++;
    str=arr.join(",");}
    else str="none"
    res.push(str);

return res;

},
createbombs:function(item){
var u;
var lis=this.surround(item);
lis.push(item);
var res=this.splitter(lis)
var boxes=document.getElementsByClassName("box");

for (u=0;u<bms;u++){
var rand=Math.floor((Math.random()*size*size));
if (res.includes(rand))
{u--;}
else
{boxes[rand].classList.add("bomb");
res.push(rand);
}
}

},

splitter:function(ob){
var arr=[];
var x;
var index;
var c;
for (c=0;c<9;c++){
x=ob[c].split(",");
index=parseInt(x[0])*size+parseInt(x[1]);
arr.push(index);
}
console.log(arr)
return arr;
}
},
mounted:function(){
that=this;
}
}
</script>


<style>
table {
    border-collapse: collapse;
    position:absolute;
    left:50%;
    transform:translate(-50%);
    margin-bottom:20px;
}

table, th, td {
    border: 1px solid grey;
}
.overlay1{width:424px;height:424px; background-color:rgba(255,255,255);position:absolute;z-index:2;left:50%;transform:translate(-50%);}
.overlay2{width:848px;height:848px; background-color:rgba(255,255,255);position:absolute;z-index:2;left:50%;transform:translate(-50%);}
.overlay3{width:1272px;height:1272px; background-color:rgba(255,255,255);position:absolute;z-index:2;left:50%;transform:translate(-50%);}
.td1{height:50px;width:50px;}
.td2{height:30px;width:30px;}
.td3{height:20px;width:20px;}
.open{background-color:white !important}
.bomb{}
.box{background-color:black}
.defuse{background-color:blue;}
.boom{background-color:red !important}
.strt{background-color:cyan;border:1px solid lightgreen;width:100px;height:50px;font-size:20px;color:red;margin-top:10px;}
.one{color:blue}
.two{color:green}
.three{color:red}
.four{color:purple}
.else{color:darkred}
.on{background-color:green !important}
#def{background-color:red;color:white;font-size:20px;border:1px solid lightgreen;width:100px;height:50px;margin-top:10px;margin-bottom:10px;}
#sm{height:35px;width:35px;position:relative;}
#r{background-color:lightgrey;}
</style>