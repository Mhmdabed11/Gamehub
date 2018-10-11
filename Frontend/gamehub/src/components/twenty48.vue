<template>
  <div>
    <div class="header">
      <h1>{{ msg }}</h1>
      <div id="buttons_container">
        <button v-on:click="newGame()" id="new_btn">New Game</button>
        <button v-on:click="finish()" id="finish_btn">FINISH</button>
        <span v-bind:id="'scoreBox'">SCORE: {{score}}</span>
      </div>
	  </div>
    <div class="boxed">
      <div v-for="i in 16" v-bind:id="'box'+i" class="innerBoxes"></div>
    </div >
  </div>
</template>

<script>
export default {
  data () {
    return {
    	msg: 'Welcome to 2048',
      values: [2, 4],
      score: 0,

    }
  },
  methods:{
    printValues(value, x, y){
      switch(x){
        // row 1
        case 1:
          switch(y){
            // column 1
            case 1:
              document.getElementById("box1").innerHTML = value;
              document.getElementById("box1").classList.add("num"+value);

              break;
            // column 2
            case 2:
              document.getElementById("box2").innerHTML = value;
              document.getElementById("box2").classList.add("num"+value);
              break;
            // column 3
            case 3:
              document.getElementById("box3").innerHTML = value;
              document.getElementById("box3").classList.add("num"+value);
              break;
            // column 4
            case 4:
              document.getElementById("box4").innerHTML = value;
              document.getElementById("box4").classList.add("num"+value);
              break;
          }
          break;
        // row 2
        case 2:
          switch(y){
            case 1:
              document.getElementById("box5").innerHTML = value;
              document.getElementById("box5").classList.add("num"+value);
              break;
            case 2:
              document.getElementById("box6").innerHTML = value;
              document.getElementById("box6").classList.add("num"+value);
              break;
            case 3:
              document.getElementById("box7").innerHTML = value;
              document.getElementById("box7").classList.add("num"+value);
              break;
            case 4:
              document.getElementById("box8").innerHTML = value;
              document.getElementById("box8").classList.add("num"+value);
              break;
          }
          break;
        // row 3
        case 3:
          switch(y){
            // column 1
            case 1:
              document.getElementById("box9").innerHTML = value;
              document.getElementById("box9").classList.add("num"+value);
              break;
            // column 2
            case 2:
              document.getElementById("box10").innerHTML = value;
              document.getElementById("box10").classList.add("num"+value);
              break;
            // column 3
            case 3:
              document.getElementById("box11").innerHTML = value;
              document.getElementById("box11").classList.add("num"+value);
              break;
            // column 4
            case 4:
              document.getElementById("box12").innerHTML = value;
              document.getElementById("box12").classList.add("num"+value);
              break;
          }
          break;
        // row 4
        case 4:
          switch(y){
            case 1:
              document.getElementById("box13").innerHTML = value;
              document.getElementById("box13").classList.add("num"+value);
              break;
            case 2:
              document.getElementById("box14").innerHTML = value;
              document.getElementById("box14").classList.add("num"+value);
              break;
            case 3:
              document.getElementById("box15").innerHTML = value;
              document.getElementById("box15").classList.add("num"+value);
              break;
            case 4:
              document.getElementById("box16").innerHTML = value;
              document.getElementById("box16").classList.add("num"+value);
              break;
          }
          break;		
      }
    },
    newGame(){
      let classes = ["num2048", "num10248", "num512", "num256", "num128", "num64", "num32", "num16", "num8", "num4", "num2", "num"];
      for(var i=1; i<17; i++){
        document.getElementById("box"+i).innerHTML="";
        document.getElementById("box"+i).classList.remove(...classes);
      }
      this.beginGame();
    },
    finish(){
      this.totalScore();
      // var payload = { username: this., game: "2048", score: this.score };
      // this.$store.commit("saveScore", payload);
    },
    beginGame(){
      // need to randomly assign two blocks with values that are either 2 or 4
      // based on experience and trying the game, the value 2 has higher probability of 
      // showing up in the game it is definitely something like (or even higher) 3/4 for 2 to
      // while it is 1/4 for 4 

      var random =  Math.random(); 
      var value = Math.ceil(random * 4);
      var random2 =  Math.random(); 
      var value_2 = Math.ceil(random2 * 4);

      // now we need to randomly put these numbers in 2 tiles out of the 16 
      var x1 =  Math.ceil(Math.random() * 4);
      var y1 = Math.ceil(Math.random() * 4);
      var x2 =  Math.ceil(Math.random() * 4);
      var y2 = Math.ceil(Math.random() * 4);
      while(x1==x2 && y1==y2){
        x2 =  Math.ceil(Math.random() * 4);
        y2 = Math.ceil(Math.random() * 4);
      }
      if (value<4){
        value = 2;
      }else{
        value = 4;
      }
      if (value_2<4){
        value_2 = 2;
      }else{
        value_2 = 4;
      }
      this.printValues(value, x1, y1);
      this.printValues(value_2, x2, y2);

    },
    totalScore(){
      this.score = 0;
      for(var i=1; i<17; i++){
        var htmlstring = document.getElementById("box"+i).innerHTML;
        htmlstring = (htmlstring.trim) ? htmlstring.trim() : htmlstring.replace(/^\s+/,'');
        if(htmlstring ==''){
          this.score = this.score;
        }else{
          this.score = this.score + parseInt(htmlstring);
        }
      }
    },
    running(){ 
      let classes = ["num2048", "num10248", "num512", "num256", "num128", "num64", "num32", "num16", "num8", "num4", "num2"];
      window.addEventListener("keydown", function(e){
        e.preventDefault();
        if(e.keyCode==37){
          // left arrow code pressed
          var counter = 0;
          // we start from index 1 in the for-loop. 
          // NOT FROM 0
          for(var i=1; i<17; i++){
            // why there is (i%4)!=1 ?? because you are on the left arrow click
            // then you don't to adjust the column on the most left. This column can't 
            // be moved further.    
            if(document.getElementById("box"+i).innerHTML != "" && (i%4)!=1){
              var destination = i-1;
              /* what is the base decision for moving an element to the left?
               2 conditions must be met: first, the element doesn't cross its row over. In other words
               if the element was in box 8 it can only move to 5,6,7
                    1   2   3   4
                    5   6   7   8     as you can see the 8 can only be shifted in this row when the left-arrow is clicked
                    9   10  11  12    it shouldn't be able to move to the row above it or below it
                    13  14  15  16
               second the neightboring element shouldn't be filled, if it filled then we have different approach
              */
              while(document.getElementById("box"+destination).innerHTML=="" && (destination%4)!=1 ){
                destination = destination-1;
              }
              if(document.getElementById("box"+destination).innerHTML == document.getElementById("box"+i).innerHTML){
                // storing the value of the number that will put inside the box
                var currentValue = parseInt(document.getElementById("box"+destination).innerHTML)*2;
                // storing the PREVIOUS value of the number that was in the box 
                // because we will use this number to change the value of a class-list
                var previousValue = parseInt(document.getElementById("box"+i).innerHTML);
                
                document.getElementById("box"+destination).innerHTML = currentValue;
                // giving a new class to the box that has been filled.
                // classes take the form of "num####" where the #### represent the number
                // the bigger the number the darker the background of the box tht is filled with the number 
                document.getElementById("box"+destination).classList.add("num"+currentValue);
                document.getElementById("box"+i).innerHTML = "";
                document.getElementById("box"+i).classList.remove("num"+previousValue);
                
                counter++;	
              }else if(document.getElementById("box"+destination).innerHTML== ""){
                var currentValue = parseInt(document.getElementById("box"+i).innerHTML);
                var previousValue = parseInt(document.getElementById("box"+i).innerHTML);

                document.getElementById("box"+destination).innerHTML = document.getElementById("box"+i).innerHTML;
                document.getElementById("box"+destination).classList.add("num"+currentValue);
                document.getElementById("box"+i).innerHTML = "";
                document.getElementById("box"+i).classList.remove("num"+previousValue);
                counter++;	
              }else if(document.getElementById("box"+(destination+1)).innerHTML== ""){
                var currentValue = parseInt(document.getElementById("box"+i).innerHTML);
                var previousValue = parseInt(document.getElementById("box"+i).innerHTML);

                document.getElementById("box"+(destination+1)).innerHTML = currentValue;
                document.getElementById("box"+(destination+1)).classList.add("num"+currentValue);
                document.getElementById("box"+i).innerHTML = "";
                document.getElementById("box"+i).classList.remove("num"+previousValue);
                counter++;
              }
            }
            // this is an alternative solution to remove the colors of the empty boxes
            if(document.getElementById("box"+i).innerHTML == ""){
              document.getElementById("box"+i).classList.remove(...classes);
            }
          }
          // if the counter is greater than 0 then we have had a valid movement. This means
          // we are required to insert a new number into our game. As long as there is a spot 
          if(counter>0){
            // deciding the location of the newly inserted value in the 4 X 4 grid
            var random =  Math.random(); 
            var location = Math.ceil(random * 16);
            while(document.getElementById("box"+location).innerHTML != ""){
              location = Math.ceil(Math.random() * 16);
            }
            // deciding if the number inserted will be 2 or 4 based on probabilities
            var random2 =  Math.random(); 
            var value_2 = Math.ceil(random2 * 4);
            if (value_2<4){
              value_2 = 2;
            }else{
              value_2 = 4;
            }
            document.getElementById("box"+location).innerHTML = value_2;
            document.getElementById("box"+location).classList.add("num"+value_2);
            	
          }
          
        }else if(e.keyCode==38){
          // up arrow code
          var counter = 0;
          for(var i=5; i<17; i++){
            if(document.getElementById("box"+i).innerHTML != ""){
              var destination = i-4;
              while(document.getElementById("box"+destination).innerHTML=="" && (destination>4) ){
                destination = destination-4;
              }
              if(document.getElementById("box"+destination).innerHTML == document.getElementById("box"+i).innerHTML){
                // storing the value of the number that will put inside the box
                var currentValue = parseInt(document.getElementById("box"+destination).innerHTML)*2;
                // storing the PREVIOUS value of the number that was in the box 
                // because we will use this number to change the value of a class-list
                var previousValue = parseInt(document.getElementById("box"+i).innerHTML);

                document.getElementById("box"+destination).innerHTML = currentValue;
                document.getElementById("box"+destination).classList.add("num"+currentValue);

                document.getElementById("box"+i).innerHTML = "";
                document.getElementById("box"+i).classList.remove("num"+previousValue);
                counter++;
              }else if(document.getElementById("box"+destination).innerHTML== ""){
                var currentValue = parseInt(document.getElementById("box"+i).innerHTML);
                var previousValue = parseInt(document.getElementById("box"+i).innerHTML);

                document.getElementById("box"+destination).innerHTML = document.getElementById("box"+i).innerHTML;
                document.getElementById("box"+destination).classList.add("num"+currentValue);
                document.getElementById("box"+i).innerHTML = "";
                document.getElementById("box"+i).classList.remove("num"+previousValue);
                counter++;	
              }else if(document.getElementById("box"+(destination+4)).innerHTML== ""){
                var currentValue = parseInt(document.getElementById("box"+i).innerHTML);
                var previousValue = parseInt(document.getElementById("box"+i).innerHTML);
                document.getElementById("box"+(destination+4)).innerHTML = document.getElementById("box"+i).innerHTML;
                document.getElementById("box"+(destination+4)).classList.add("num"+currentValue);
                document.getElementById("box"+i).innerHTML = "";
                document.getElementById("box"+i).classList.remove("num"+previousValue);
                counter++;
              }
            }
            if(document.getElementById("box"+i).innerHTML == ""){
              document.getElementById("box"+i).classList.remove(...classes);
            }
          }
          
          if(counter>0){
            // deciding the location of the newly inserted value in the 4 X 4 grid
            var random =  Math.random(); 
            var location = Math.ceil(random * 16);
            while(document.getElementById("box"+location).innerHTML != ""){
              location = Math.ceil(Math.random() * 16);
            }7
            // deciding if the number inserted will be 2 or 4 based on probabilities
            var random2 =  Math.random(); 
            var value_2 = Math.ceil(random2 * 4);
            if (value_2<4){
              value_2 = 2;
            }else{
              value_2 = 4;
            }
            // this is an alternative solution to remove the colors of the empty boxes
            document.getElementById("box"+location).innerHTML = value_2;
            document.getElementById("box"+location).classList.add("num"+value_2);		
          }

        }else if(e.keyCode==39){
          // right arrow code
          var counter = 0;
          for(var i=16; i>0; i--){
            if(document.getElementById("box"+i).innerHTML != "" && (i%4)!=0){
              var destination = i+1;
              while(document.getElementById("box"+destination).innerHTML=="" && (destination%4)!=0 ){
                destination = destination+1;
              }
              if(document.getElementById("box"+destination).innerHTML == document.getElementById("box"+i).innerHTML){
                // storing the value of the number that will put inside the box
                var currentValue = parseInt(document.getElementById("box"+destination).innerHTML)*2;
                // storing the PREVIOUS value of the number that was in the box 
                // because we will use this number to change the value of a class-list
                var previousValue = parseInt(document.getElementById("box"+i).innerHTML);

                document.getElementById("box"+destination).innerHTML = currentValue;
                document.getElementById("box"+destination).classList.add("num"+currentValue);

                document.getElementById("box"+i).innerHTML = "";
                document.getElementById("box"+i).classList.remove("num"+previousValue);

                counter++;	
              }else if(document.getElementById("box"+destination).innerHTML== ""){
                var currentValue = parseInt(document.getElementById("box"+i).innerHTML);
                var previousValue = parseInt(document.getElementById("box"+i).innerHTML);

                document.getElementById("box"+destination).innerHTML = document.getElementById("box"+i).innerHTML;
                document.getElementById("box"+destination).classList.add("num"+currentValue);

                document.getElementById("box"+i).innerHTML = "";
                document.getElementById("box"+i).classList.remove("num"+previousValue);

                counter++;
              }else if(document.getElementById("box"+(destination-1)).innerHTML== ""){
                var currentValue = parseInt(document.getElementById("box"+i).innerHTML);
                var previousValue = parseInt(document.getElementById("box"+i).innerHTML);

                document.getElementById("box"+(destination-1)).innerHTML = document.getElementById("box"+i).innerHTML;
                document.getElementById("box"+(destination-1)).classList.add("num"+currentValue);
                document.getElementById("box"+i).innerHTML = "";
                document.getElementById("box"+i).classList.remove("num"+previousValue);
                counter++;
              }
            }
            // this is an alternative solution to remove the colors of the empty boxes
            if(document.getElementById("box"+i).innerHTML == ""){
              document.getElementById("box"+i).classList.remove(...classes);
            }
          }
          
          if(counter>0){
            // deciding the location of the newly inserted value in the 4 X 4 grid
            var random =  Math.random(); 
            var location = Math.ceil(random * 16);
            while(document.getElementById("box"+location).innerHTML != ""){
              location = Math.ceil(Math.random() * 16);
            }7
            // deciding if the number inserted will be 2 or 4 based on probabilities
            var random2 =  Math.random(); 
            var value_2 = Math.ceil(random2 * 4);
            if (value_2<4){
              value_2 = 2;
            }else{
              value_2 = 4;
            }
            document.getElementById("box"+location).innerHTML = value_2;
            document.getElementById("box"+location).classList.add("num"+value_2);		
          }

        }else if(e.keyCode==40){
          // down arrow code
          var counter = 0;
          for(var i=12; i>0; i--){
            if(document.getElementById("box"+i).innerHTML != ""){
              var destination = i+4;
              while(document.getElementById("box"+destination).innerHTML=="" && (destination<13) ){
                destination = destination+4;
              }
              if(document.getElementById("box"+destination).innerHTML == document.getElementById("box"+i).innerHTML){
                // storing the value of the number that will put inside the box
                var currentValue = parseInt(document.getElementById("box"+destination).innerHTML)*2;
                // storing the PREVIOUS value of the number that was in the box 
                // because we will use this number to change the value of a class-list
                var previousValue = parseInt(document.getElementById("box"+i).innerHTML);

                document.getElementById("box"+destination).innerHTML = currentValue;
                document.getElementById("box"+destination).classList.add("num"+currentValue);
                document.getElementById("box"+i).innerHTML = "";
                document.getElementById("box"+i).classList.remove("num"+previousValue);
                counter++;
              }else if(document.getElementById("box"+destination).innerHTML== ""){
                var currentValue = parseInt(document.getElementById("box"+i).innerHTML);
                var previousValue = parseInt(document.getElementById("box"+i).innerHTML);

                document.getElementById("box"+destination).innerHTML = document.getElementById("box"+i).innerHTML;
                document.getElementById("box"+destination).classList.add("num"+currentValue);
                document.getElementById("box"+i).innerHTML = "";
                document.getElementById("box"+i).classList.remove("num"+previousValue);
                counter++;
              }else if(document.getElementById("box"+(destination-4)).innerHTML== ""){
                var currentValue = parseInt(document.getElementById("box"+i).innerHTML);
                var previousValue = parseInt(document.getElementById("box"+i).innerHTML);
                document.getElementById("box"+(destination-4)).innerHTML = document.getElementById("box"+i).innerHTML;
                document.getElementById("box"+(destination-4)).classList.add("num"+currentValue);
                document.getElementById("box"+i).innerHTML = "";
                document.getElementById("box"+i).classList.remove("num"+previousValue);
                counter++;
              }
            }
            // this is an alternative solution to remove the colors of the empty boxes 
            if(document.getElementById("box"+i).innerHTML == ""){
              document.getElementById("box"+i).classList.remove(...classes);
            }
          }

          if(counter>0){
            // deciding the location of the newly inserted value in the 4 X 4 grid
            var random =  Math.random(); 
            var location = Math.ceil(random * 16);
            while(document.getElementById("box"+location).innerHTML != ""){
              location = Math.ceil(Math.random() * 16);
            }7
            // deciding if the number inserted will be 2 or 4 based on probabilities
            var random2 =  Math.random(); 
            var value_2 = Math.ceil(random2 * 4);
            if (value_2<4){
              value_2 = 2;
            }else{
              value_2 = 4;
            }
            document.getElementById("box"+location).innerHTML = value_2;
            document.getElementById("box"+location).classList.add("num"+value_2);		
          }
        }
      })
      
    }
  },
  mounted: function(){
    this.running();
    this.beginGame();
  }
}
</script>

<style scoped>

  .boxed{
    	top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
  }
  @media only screen and (min-width: 700px){

    .boxed {
      border: 1px solid green ;
      position: absolute;
      width: 400px;
      height: 400px;

      color: black;
      font-size: 3rem;
      text-align: center;
    } 

    .innerBoxes{
      border: 1px solid green;
      width: 100px;
      height: 100px;
      border-radius: 9px;
    }

    #box1{
      position: absolute;
      top: 0px;
      left: 0px;
    }
    #box2{
      position: absolute;
      top: 0px;
      left: 100px;
    }
    #box3{
      position: absolute;
      top: 0px;
      left: 200px;
    }
    #box4{
      position: absolute;
      top: 0;
      left: 300px;
    }
    #box5{
      position: absolute;
      top: 100px;
      left: 0px;
    }
    #box6{
      position: absolute;
      top: 100px;
      left: 100px;
    }
    #box7{
      position: absolute;
      top: 100px;
      left: 200px;
    }
    #box8{
      position: absolute;
      top: 100px;
      left: 300px;
    }
    #box9{
      position: absolute;
      top: 200px;
      left: 0px;
    }
    #box10{
      position: absolute;
      top: 200px;
      left: 100px;
    }
    #box11{
      position: absolute;
      top: 200px;
      left: 200px;
    }
    #box12{
      position: absolute;
      top: 200px;
      left: 300px;
    }
    #box13{
      position: absolute;
      top: 300px;
      left: 0px;
    }
    #box14{
      position: absolute;
      top: 300px;
      left: 100px;
    }
    #box15{
      position: absolute;
      top: 300px;
      left: 200px;
    }
    #box16{
      position: absolute;
      top: 300px;
      left: 300px;
    }
    .num{
      background-color: silver;
    }
    .num2{
      background-color: #f9f510;
    }
    .num4{
      background-color: #e8c100;
    }
    .num8{
      background-color: #b5885f; 
    }
    .num16{
      background-color: #a04d00;
    }
    .num32{
      background-color: #ed8b02;
    }
    .num64{
      background-color: #e27b04;
    }
    .num128{
      background-color: #f45f1a;
    }
    .num256{
      background-color: #f94f11;
    }
    .num512{
      background-color: #f23800;
    }
    .num1024{
      background-color: #d32604;
    }
    .num2048{
      background-color: #aa0000;
    }
  }

  @media only screen and (max-width: 700px) and (min-width: 400px){
    .boxed {
      border: 1px solid green ;
      position: absolute;
      width: 248px;
      height: 248px;

    }
    .innerBoxes{
      border: 1px solid green ;
      width: 62px;
      height: 62px;
    } 

    #box1, #box2, #box3, #box4{
      position: absolute;
      top: 0px;
    } 
    #box5, #box6, #box7, #box8{
      position: absolute;
      top: 62px;
    } 
    #box9, #box10, #box11, #box12{
      position: absolute;
      top: 124px;
    }
    #box13, #box14, #box15, #box16{
      position: absolute;
      top: 186px;
    }

    #box1, #box5, #box9, #box13{
      left: 0px;
    }
    #box2, #box6, #box10, #box14{
      left:62px;
    }
    #box3, #box7, #box11, #box15{
      left:124px;
    }
    #box4, #box8, #box12, #box16{
      left:186px;
    }
  }

  @media only screen and (max-width: 399px) {
    .boxed {
      border: 2px solid green;
      position: absolute;
      width: 150px;
      height: 150px;

    } 
  }
</style>
