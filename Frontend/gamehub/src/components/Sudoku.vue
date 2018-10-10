<template>
  <div class="hello">
	<div class="header">
		<h1>{{ msg }}</h1>
		<div id="buttons_container">
			<button v-on:click="newGame()" id="new_btn">New Game</button>
			<button v-on:click="checking()" id="finish_btn">FINISH</button>
		</div>
	</div>
	<label id="minutes">00</label>:<label id="seconds">00</label>
    
    <div class="boxed">
        <div class="innerBoxes" v-for="i in 9" v-bind:id="'box1'+i" v-on:click="running($event)"></div>
        <div class="innerBoxes" v-for="i in 9" v-bind:id="'box2'+i" v-on:click="running($event)"></div>
        <div class="innerBoxes" v-for="i in 9" v-bind:id="'box3'+i" v-on:click="running($event)"></div>
        <div class="innerBoxes" v-for="i in 9" v-bind:id="'box4'+i" v-on:click="running($event)"></div>
        <div class="innerBoxes" v-for="i in 9" v-bind:id="'box5'+i" v-on:click="running($event)"></div>
        <div class="innerBoxes" v-for="i in 9" v-bind:id="'box6'+i" v-on:click="running($event)"></div>
        <div class="innerBoxes" v-for="i in 9" v-bind:id="'box7'+i" v-on:click="running($event)"></div>
        <div class="innerBoxes" v-for="i in 9" v-bind:id="'box8'+i" v-on:click="running($event)"></div>
        <div class="innerBoxes" v-for="i in 9" v-bind:id="'box9'+i" v-on:click="running($event)"></div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
<<<<<<< HEAD
      msg: "Welcome to Your Sudoku Game",
      g1: [
        [0, 0, 0, 0, 7, 8, 5, 0, 9],
        [0, 1, 0, 3, 0, 5, 4, 0, 6],
        [0, 5, 6, 1, 9, 0, 0, 0, 2],
        [7, 0, 0, 0, 2, 3, 0, 0, 0],
        [8, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 0, 0, 9, 6, 0, 0, 0, 3],
        [3, 0, 0, 0, 6, 4, 9, 5, 0],
        [9, 0, 4, 1, 0, 3, 0, 6, 0],
        [6, 0, 7, 5, 8, 0, 0, 0, 0]
      ],
      solved: [
        [4, 3, 2, 7, 1, 9, 8, 5, 6],
        [6, 7, 8, 3, 2, 5, 1, 9, 4],
        [5, 1, 9, 4, 8, 6, 3, 7, 2],
        [7, 9, 6, 8, 3, 1, 2, 4, 5],
        [1, 2, 3, 5, 4, 7, 9, 6, 8],
        [8, 4, 5, 6, 9, 2, 7, 1, 3],
        [3, 8, 1, 9, 5, 4, 6, 2, 7],
        [2, 6, 4, 1, 7, 3, 5, 8, 9],
        [9, 5, 7, 2, 6, 8, 4, 3, 1]
      ],
      activeElement: "",
      totalSeconds: 0,
      secondsLabel: "",
      minutesLabel: ""
    };
=======

    	msg: 'Welcome to Your Sudoku Game',
    	g1 : [  [0,0,0,0,1,0,0,5,6], [0,7,8,3,0,5,1,9,0], [5,0,9,4,0,6,0,0,2], 
              [7,0,0,8,0,0,0,0,0], [0,2,3,0,0,0,9,6,0], [0,0,0,0,0,2,0,0,3],
              [3,0,0,9,0,4,6,0,7], [0,6,4,1,0,3,5,8,0], [9,5,0,0,6,0,0,0,0]
          ],
		solved : [  [4,3,2,7,1,9,8,5,6], [6,7,8,3,2,5,1,9,4], [5,1,9,4,8,6,3,7,2], 
                  [7,9,6,8,3,1,2,4,5], [1,2,3,5,4,7,9,6,8], [8,4,5,6,9,2,7,1,3],
                  [3,8,1,9,5,4,6,2,7], [2,6,4,1,7,3,5,8,9], [9,5,7,2,6,8,4,3,1]
			  ],
		activeElement:'',
		totalSeconds:0,
		secondsLabel:'',
		minutesLabel:''

    }
>>>>>>> fef39a75205ac323189492cb8da981eace702050
  },
  methods: {
    running(x) {
      var scope = this;
      scope.activeElement = x.target;

<<<<<<< HEAD
      window.addEventListener("keydown", function(e) {
        e.preventDefault();
        if (e.keyCode == 49) {
          scope.activeElement.innerHTML = "1";
        } else if (e.keyCode == 50) {
          scope.activeElement.innerHTML = "2";
        } else if (e.keyCode == 51) {
          scope.activeElement.innerHTML = "3";
        } else if (e.keyCode == 52) {
          scope.activeElement.innerHTML = "4";
        } else if (e.keyCode == 53) {
          scope.activeElement.innerHTML = "5";
        } else if (e.keyCode == 54) {
          scope.activeElement.innerHTML = "6";
        } else if (e.keyCode == 55) {
          scope.activeElement.innerHTML = "7";
        } else if (e.keyCode == 56) {
          scope.activeElement.innerHTML = "8";
        } else if (e.keyCode == 57) {
          scope.activeElement.innerHTML = "9";
        }
        // EDIT: This will not work if you are working in strict mode ("use strict";)
        //this.removeEventListener('keydown', foo(this) );
      });
    },
    checking() {
      var done = true;
      for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 9; j++) {
          // if a single cell is found to be empty then the game is not done
          if (document.getElementById("box" + i + "" + j).innerHTML == "") {
            done = false;
          }
        }
      }
=======
		if(done){
			// make a call to a function that will check if the solution is correct or not
			this.failOrSuccess();
		}
	},
	newGame(){
		for(var i = 1; i<=9; i++){
        	for(var j = 1; j<=9; j++){
            	if(this.g1[i-1][j-1]==0){
                	document.getElementById("box"+i+""+j).innerHTML = '';
            	}else{
                	document.getElementById("box"+i+""+j).innerHTML = this.g1[i-1][j-1];
            	}
          	}
    	}
	},
	failOrSuccess(){
		var success = true;
		// checking each row by itself
		for(var i=1; i<=9; i++){
			for(var j=1; j<=9; j++){
				if( document.getElementById("box"+i+""+j).innerHTML == document.getElementById("box"+i+""+1).innerHTML && j!=1){
					success = false;
				}
				if( document.getElementById("box"+i+""+j).innerHTML == document.getElementById("box"+i+""+2).innerHTML && j!=2){
					success = false;
				}
				if( document.getElementById("box"+i+""+j).innerHTML == document.getElementById("box"+i+""+3).innerHTML && j!=3){
					success = false;
				}
				if( document.getElementById("box"+i+""+j).innerHTML == document.getElementById("box"+i+""+4).innerHTML && j!=4){
					success = false;
				}
				if( document.getElementById("box"+i+""+j).innerHTML == document.getElementById("box"+i+""+5).innerHTML && j!=5){
					success = false;
				}
				if( document.getElementById("box"+i+""+j).innerHTML == document.getElementById("box"+i+""+6).innerHTML && j!=6){
					success = false;
				}
				if( document.getElementById("box"+i+""+j).innerHTML == document.getElementById("box"+i+""+7).innerHTML && j!=7){
					success = false;
				}
				if( document.getElementById("box"+i+""+j).innerHTML == document.getElementById("box"+i+""+8).innerHTML && j!=8){
					success = false;
				}
				if( document.getElementById("box"+i+""+j).innerHTML == document.getElementById("box"+i+""+9).innerHTML && j!=9){
					success = false;
				}
			}
>>>>>>> fef39a75205ac323189492cb8da981eace702050

      if (done) {
        // make a call to a function that will check if the solution is correct or not
        this.failOrSuccess();
      }
    },
    newGame() {
      for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 9; j++) {
          if (this.solved[i - 1][j - 1] == 0) {
            document.getElementById("box" + i + "" + j).innerHTML = "";
          } else {
            document.getElementById("box" + i + "" + j).innerHTML = this.solved[
              i - 1
            ][j - 1];
          }
        }
      }
    },
    failOrSuccess() {
      var success = true;
      // checking each row by itself
      for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 9; j++) {
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + i + "" + 1).innerHTML &&
            j != 1
          ) {
            success = false;
          }
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + i + "" + 2).innerHTML &&
            j != 2
          ) {
            success = false;
          }
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + i + "" + 3).innerHTML &&
            j != 3
          ) {
            success = false;
          }
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + i + "" + 4).innerHTML &&
            j != 4
          ) {
            success = false;
          }
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + i + "" + 5).innerHTML &&
            j != 5
          ) {
            success = false;
          }
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + i + "" + 6).innerHTML &&
            j != 6
          ) {
            success = false;
          }
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + i + "" + 7).innerHTML &&
            j != 7
          ) {
            success = false;
          }
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + i + "" + 8).innerHTML &&
            j != 8
          ) {
            success = false;
          }
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + i + "" + 9).innerHTML &&
            j != 9
          ) {
            success = false;
          }
        }
      }
      if (!success) {
        alert("incorrect solution in one of the rows.");
      }

      // checking each column by itself
      for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 9; j++) {
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + 1 + "" + j).innerHTML &&
            i != 1
          ) {
            success = false;
          }
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + 2 + "" + j).innerHTML &&
            i != 2
          ) {
            success = false;
          }
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + 3 + "" + j).innerHTML &&
            i != 3
          ) {
            success = false;
          }
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + 4 + "" + j).innerHTML &&
            i != 4
          ) {
            success = false;
          }
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + 5 + "" + j).innerHTML &&
            i != 5
          ) {
            success = false;
          }
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + 6 + "" + j).innerHTML &&
            i != 6
          ) {
            success = false;
          }
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + 7 + "" + j).innerHTML &&
            i != 7
          ) {
            success = false;
          }
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + 8 + "" + j).innerHTML &&
            i != 8
          ) {
            success = false;
          }
          if (
            document.getElementById("box" + i + "" + j).innerHTML ==
              document.getElementById("box" + 9 + "" + j).innerHTML &&
            i != 9
          ) {
            success = false;
          }
        }
      }

      if (!success) {
        alert("incorrect solution in one of the columns.");
      }

      /* There is another technique for checking validity of the 3 X 3 block of cells
			It goes by inserting the 9 cells of the block into an array.
			Then you sort this array.
			Once sorted you check that index 'i' of the array doesn't equal index 'i+1'.
			When done without having any equal values then you have a valid 3 X 3 block of cells */

<<<<<<< HEAD
      // the outer for loops are for traversing the blocks of 9 cells
      for (var i = 1; i <= 9; i += 3) {
        for (var j = 1; j <= 9; j += 3) {
          // these inner loops are for traversing the cells of the block
          for (var m = i; m < i + 3; m++) {
            for (var n = j; n < j + 3; n++) {
              if (
                document.getElementById("box" + m + "" + n).innerHTML ==
                  document.getElementById("box" + i + "" + j).innerHTML &&
                m != i &&
                n != j
              ) {
                success = false;
              }
              if (
                document.getElementById("box" + m + "" + n).innerHTML ==
                  document.getElementById("box" + i + "" + (j + 1)).innerHTML &&
                m != i &&
                n != j + 1
              ) {
                success = false;
              }
              if (
                document.getElementById("box" + m + "" + n).innerHTML ==
                  document.getElementById("box" + i + "" + (j + 2)).innerHTML &&
                m != i &&
                n != j + 2
              ) {
                success = false;
              }
              if (
                document.getElementById("box" + m + "" + n).innerHTML ==
                  document.getElementById("box" + (i + 1) + "" + j).innerHTML &&
                m != i + 1 &&
                n != j
              ) {
                success = false;
              }
              if (
                document.getElementById("box" + m + "" + n).innerHTML ==
                  document.getElementById("box" + (i + 1) + "" + (j + 1))
                    .innerHTML &&
                m != i + 1 &&
                n != j + 1
              ) {
                success = false;
              }
              if (
                document.getElementById("box" + m + "" + n).innerHTML ==
                  document.getElementById("box" + (i + 1) + "" + (j + 2))
                    .innerHTML &&
                m != i + 1 &&
                n != j + 2
              ) {
                success = false;
              }
              if (
                document.getElementById("box" + m + "" + n).innerHTML ==
                  document.getElementById("box" + (i + 2) + "" + j).innerHTML &&
                m != i + 2 &&
                n != j
              ) {
                success = false;
              }
              if (
                document.getElementById("box" + m + "" + n).innerHTML ==
                  document.getElementById("box" + (i + 2) + "" + (j + 1))
                    .innerHTML &&
                m != i + 2 &&
                n != j + 1
              ) {
                success = false;
              }
              if (
                document.getElementById("box" + m + "" + n).innerHTML ==
                  document.getElementById("box" + (i + 2) + "" + (j + 2))
                    .innerHTML &&
                m != i + 2 &&
                n != j + 2
              ) {
                success = false;
              }
=======
		if(!success){
			alert("incorrect solution");
		}else{
			alert("congratulations");
		}
	},
	setTime() {
		this.totalSeconds = this.totalSeconds+1;
		this.secondsLabel.innerHTML = this.pad(this.totalSeconds % 60);
		this.minutesLabel.innerHTML = this.pad(parseInt(this.totalSeconds / 60));
	},
	pad(val) {
		var valString = val + "";
		if (valString.length < 2) {
			return "0" + valString;
		} else {
			return valString;
		}
	},


  },
  mounted: function(){
    for(var i = 1; i<=9; i++){
        for(var j = 1; j<=9; j++){
            if(this.g1[i-1][j-1]==0){
                document.getElementById("box"+i+""+j).innerHTML = '';
            }else{
                document.getElementById("box"+i+""+j).innerHTML = this.g1[i-1][j-1];
>>>>>>> fef39a75205ac323189492cb8da981eace702050
            }
          }
        }
      }
      if (!success) {
        alert("incorrect solution in one of the 3X3 blocks.");
      }

      if (!success) {
        alert("incorrect solution");
      } else {
        alert("congratulations");
      }
    },
    setTime() {
      this.totalSeconds = this.totalSeconds + 1;
      this.secondsLabel.innerHTML = this.pad(this.totalSeconds % 60);
      this.minutesLabel.innerHTML = this.pad(parseInt(this.totalSeconds / 60));
    },
    pad(val) {
      var valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    }
  },
  mounted: function() {
    for (var i = 1; i <= 9; i++) {
      for (var j = 1; j <= 9; j++) {
        if (this.solved[i - 1][j - 1] == 0) {
          document.getElementById("box" + i + "" + j).innerHTML = "";
        } else {
          document.getElementById("box" + i + "" + j).innerHTML = this.solved[
            i - 1
          ][j - 1];
        }
      }
    }
    // https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
    // the timer and its associated functions were copied from this site
    this.minutesLabel = document.getElementById("minutes");
    this.secondsLabel = document.getElementById("seconds");
    setInterval(this.setTime, 1000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#box11,
#box12,
#box13,
#box14,
#box15,
#box16,
#box17,
#box18,
#box19,
#box21,
#box22,
#box23,
#box24,
#box25,
#box26,
#box27,
#box28,
#box29,
#box31,
#box32,
#box33,
#box34,
#box35,
#box36,
#box37,
#box38,
#box39,
#box41,
#box42,
#box43,
#box44,
#box45,
#box46,
#box47,
#box48,
#box49,
#box51,
#box52,
#box53,
#box54,
#box55,
#box56,
#box57,
#box58,
#box59,
#box61,
#box62,
#box63,
#box64,
#box65,
#box66,
#box67,
#box68,
#box69,
#box71,
#box72,
#box73,
#box74,
#box75,
#box76,
#box77,
#box78,
#box79,
#box81,
#box82,
#box83,
#box84,
#box85,
#box86,
#box87,
#box88,
#box89,
#box91,
#box92,
#box93,
#box94,
#box95,
#box96,
#box97,
#box98,
#box99 {
  position: absolute;
  text-align: center;
}

.boxed {
  display: block;
  text-align: center;
  position: absolute;
  background: -webkit-linear-gradient(to right, #ffaf7b, #d76d77);
  background: linear-gradient(to right, #ffaf7b, #d76d77);
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.header {
  display: block;
  z-index: 1;
}

.header h1 {
  text-align: center;
  background: #f2b24e;
}

@media only screen and (min-width: 700px) {
  .boxed {
    border: 4px solid green;
    width: 630px;
    height: 630px;
    margin-top: 5rem;
    color: black;
    font-size: 3rem;
  }

  .innerBoxes {
    border: 1px solid green;
    width: 70px;
    height: 70px;
  }
  /* first row */
  #box11,
  #box12,
  #box13,
  #box14,
  #box15,
  #box16,
  #box17,
  #box18,
  #box19 {
    top: 0px;
  }
  /* second row */
  #box21,
  #box22,
  #box23,
  #box24,
  #box25,
  #box26,
  #box27,
  #box28,
  #box29 {
    top: 70px;
  }
  /* third row*/
  #box31,
  #box32,
  #box33,
  #box34,
  #box35,
  #box36,
  #box37,
  #box38,
  #box39 {
    top: 140px;
    border-bottom: 4px solid green;
  }
  /* fourth row */
  #box41,
  #box42,
  #box43,
  #box44,
  #box45,
  #box46,
  #box47,
  #box48,
  #box49 {
    top: 210px;
  }
  /* fifth row */
  #box51,
  #box52,
  #box53,
  #box54,
  #box55,
  #box56,
  #box57,
  #box58,
  #box59 {
    top: 280px;
  }
  /* sixth row */
  #box61,
  #box62,
  #box63,
  #box64,
  #box65,
  #box66,
  #box67,
  #box68,
  #box69 {
    top: 350px;
    border-bottom: 4px solid green;
  }
  /* seventh row */
  #box71,
  #box72,
  #box73,
  #box74,
  #box75,
  #box76,
  #box77,
  #box78,
  #box79 {
    top: 420px;
  }
  /* eighth row */
  #box81,
  #box82,
  #box83,
  #box84,
  #box85,
  #box86,
  #box87,
  #box88,
  #box89 {
    top: 490px;
  }
  /* ninth row */
  #box91,
  #box92,
  #box93,
  #box94,
  #box95,
  #box96,
  #box97,
  #box98,
  #box99 {
    top: 560px;
  }

  /* first column from left */
  #box11,
  #box21,
  #box31,
  #box41,
  #box51,
  #box61,
  #box71,
  #box81,
  #box91 {
    left: 0px;
  }
  /* second column from left */
  #box12,
  #box22,
  #box32,
  #box42,
  #box52,
  #box62,
  #box72,
  #box82,
  #box92 {
    left: 70px;
  }
  /* third column from left */
  #box13,
  #box23,
  #box33,
  #box43,
  #box53,
  #box63,
  #box73,
  #box83,
  #box93 {
    left: 140px;
    border-right: 4px solid green;
  }
  /* fourth column from left */
  #box14,
  #box24,
  #box34,
  #box44,
  #box54,
  #box64,
  #box74,
  #box84,
  #box94 {
    left: 210px;
  }
  /* fifth column from left */
  #box15,
  #box25,
  #box35,
  #box45,
  #box55,
  #box65,
  #box75,
  #box85,
  #box95 {
    left: 280px;
  }
  /* sixth column from left */
  #box16,
  #box26,
  #box36,
  #box46,
  #box56,
  #box66,
  #box76,
  #box86,
  #box96 {
    left: 350px;
    border-right: 4px solid green;
  }
  /* seventh column from left */
  #box17,
  #box27,
  #box37,
  #box47,
  #box57,
  #box67,
  #box77,
  #box87,
  #box97 {
    left: 420px;
  }
  /* eight column from left */
  #box18,
  #box28,
  #box38,
  #box48,
  #box58,
  #box68,
  #box78,
  #box88,
  #box98 {
    left: 490px;
  }
  /* ninth column from left */
  #box19,
  #box29,
  #box39,
  #box49,
  #box59,
  #box69,
  #box79,
  #box89,
  #box99 {
    left: 560px;
  }
}

@media only screen and (max-width: 700px) and (min-width: 400px) {
  .boxed {
    border: 3px solid green;
    width: 450px;
    height: 450px;
  }
  .innerBoxes {
    border: 1px solid green;
    width: 50px;
    height: 50px;
  }

  /* first row */
  #box11,
  #box12,
  #box13,
  #box14,
  #box15,
  #box16,
  #box17,
  #box18,
  #box19 {
    top: 0px;
  }
  /* second row */
  #box21,
  #box22,
  #box23,
  #box24,
  #box25,
  #box26,
  #box27,
  #box28,
  #box29 {
    top: 50px;
  }
  /* third row*/
  #box31,
  #box32,
  #box33,
  #box34,
  #box35,
  #box36,
  #box37,
  #box38,
  #box39 {
    top: 100px;
    border-bottom: 3px solid green;
  }
  /* fourth row */
  #box41,
  #box42,
  #box43,
  #box44,
  #box45,
  #box46,
  #box47,
  #box48,
  #box49 {
    top: 150px;
  }
  /* fifth row */
  #box51,
  #box52,
  #box53,
  #box54,
  #box55,
  #box56,
  #box57,
  #box58,
  #box59 {
    top: 200px;
  }
  /* sixth row */
  #box61,
  #box62,
  #box63,
  #box64,
  #box65,
  #box66,
  #box67,
  #box68,
  #box69 {
    top: 250px;
    border-bottom: 3px solid green;
  }
  /* seventh row */
  #box71,
  #box72,
  #box73,
  #box74,
  #box75,
  #box76,
  #box77,
  #box78,
  #box79 {
    top: 300px;
  }
  /* eighth row */
  #box81,
  #box82,
  #box83,
  #box84,
  #box85,
  #box86,
  #box87,
  #box88,
  #box89 {
    top: 350px;
  }
  /* ninth row */
  #box91,
  #box92,
  #box93,
  #box94,
  #box95,
  #box96,
  #box97,
  #box98,
  #box99 {
    top: 400px;
  }
  /* first column from left */
  #box11,
  #box21,
  #box31,
  #box41,
  #box51,
  #box61,
  #box71,
  #box81,
  #box91 {
    left: 0px;
  }
  /* second column from left */
  #box12,
  #box22,
  #box32,
  #box42,
  #box52,
  #box62,
  #box72,
  #box82,
  #box92 {
    left: 50px;
  }
  /* third column from left */
  #box13,
  #box23,
  #box33,
  #box43,
  #box53,
  #box63,
  #box73,
  #box83,
  #box93 {
    left: 100px;
    border-right: 3px solid green;
  }
  /* fourth column from left */
  #box14,
  #box24,
  #box34,
  #box44,
  #box54,
  #box64,
  #box74,
  #box84,
  #box94 {
    left: 150px;
  }
  /* fifth column from left */
  #box15,
  #box25,
  #box35,
  #box45,
  #box55,
  #box65,
  #box75,
  #box85,
  #box95 {
    left: 200px;
  }
  /* sixth column from left */
  #box16,
  #box26,
  #box36,
  #box46,
  #box56,
  #box66,
  #box76,
  #box86,
  #box96 {
    left: 250px;
    border-right: 3px solid green;
  }
  /* seventh column from left */
  #box17,
  #box27,
  #box37,
  #box47,
  #box57,
  #box67,
  #box77,
  #box87,
  #box97 {
    left: 300px;
  }
  /* eight column from left */
  #box18,
  #box28,
  #box38,
  #box48,
  #box58,
  #box68,
  #box78,
  #box88,
  #box98 {
    left: 350px;
  }
  /* ninth column from left */
  #box19,
  #box29,
  #box39,
  #box49,
  #box59,
  #box69,
  #box79,
  #box89,
  #box99 {
    left: 400px;
  }
}

@media only screen and (max-width: 399px) {
  .boxed {
    border: 2px solid green;
    width: 315px;
    height: 315px;
  }

  .innerBoxes {
    border: 1px solid green;
    width: 35px;
    height: 35px;
  }

  /* first row */
  #box11,
  #box12,
  #box13,
  #box21,
  #box22,
  #box23,
  #box31,
  #box32,
  #box33 {
    top: 0px;
  }
  /* second row */
  #box14,
  #box15,
  #box16,
  #box24,
  #box25,
  #box26,
  #box34,
  #box35,
  #box36 {
    top: 35px;
  }
  /* third row*/
  #box17,
  #box18,
  #box19,
  #box27,
  #box28,
  #box29,
  #box37,
  #box38,
  #box39 {
    top: 70px;
    border-bottom: 2px solid green;
  }
  /* fourth row */
  #box41,
  #box42,
  #box43,
  #box51,
  #box52,
  #box53,
  #box61,
  #box62,
  #box63 {
    top: 105px;
  }
  /* fifth row */
  #box44,
  #box45,
  #box46,
  #box54,
  #box55,
  #box56,
  #box64,
  #box65,
  #box66 {
    top: 140px;
  }
  /* sixth row */
  #box47,
  #box48,
  #box49,
  #box57,
  #box58,
  #box59,
  #box67,
  #box68,
  #box69 {
    top: 175px;
    border-bottom: 2px solid green;
  }
  /* seventh row */
  #box71,
  #box72,
  #box73,
  #box81,
  #box82,
  #box83,
  #box91,
  #box92,
  #box93 {
    top: 210px;
  }
  /* eighth row */
  #box74,
  #box75,
  #box76,
  #box84,
  #box85,
  #box86,
  #box94,
  #box95,
  #box96 {
    top: 245px;
  }
  /* ninth row */
  #box77,
  #box78,
  #box79,
  #box87,
  #box88,
  #box89,
  #box97,
  #box98,
  #box99 {
    top: 280px;
  }
  /* first column from left */
  #box11,
  #box14,
  #box17,
  #box41,
  #box44,
  #box47,
  #box71,
  #box74,
  #box77 {
    left: 0px;
  }
  /* second column from left */
  #box12,
  #box15,
  #box18,
  #box42,
  #box45,
  #box48,
  #box72,
  #box75,
  #box78 {
    left: 35px;
  }
  /* third column from left */
  #box13,
  #box16,
  #box19,
  #box43,
  #box46,
  #box49,
  #box73,
  #box76,
  #box79 {
    left: 70px;
    border-right: 2px solid green;
  }
  /* fourth column from left */
  #box21,
  #box24,
  #box27,
  #box51,
  #box54,
  #box57,
  #box81,
  #box84,
  #box87 {
    left: 105px;
  }
  /* fifth column from left */
  #box22,
  #box25,
  #box28,
  #box52,
  #box55,
  #box58,
  #box82,
  #box85,
  #box88 {
    left: 140px;
  }
  /* sixth column from left */
  #box23,
  #box26,
  #box29,
  #box53,
  #box56,
  #box59,
  #box83,
  #box86,
  #box89 {
    left: 175px;
    border-right: 2px solid green;
  }
  /* seventh column from left */
  #box31,
  #box34,
  #box37,
  #box61,
  #box64,
  #box67,
  #box91,
  #box94,
  #box97 {
    left: 210px;
  }
  /* eight column from left */
  #box32,
  #box35,
  #box38,
  #box62,
  #box65,
  #box68,
  #box92,
  #box95,
  #box98 {
    left: 245px;
  }
  /* ninth column from left */
  #box33,
  #box36,
  #box39,
  #box63,
  #box66,
  #box69,
  #box93,
  #box96,
  #box99 {
    left: 280px;
  }
}
</style>
