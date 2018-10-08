<template>
<div>
    <div class="grid">
        <div class="grid-items" v-for="i in 64"  v-on:click="alertme($event,Math.floor((i-1)/8),(i-1)-(8*(Math.floor((i-1)/8))))" v-bind:key=i><div  :class="{unit: isactive}"></div></div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      matrix: "",
      isactive: true,
      color1: "red",
      color2: "black",
      leftdiagonalred: false,
      rightdiagonalred: false,
      leftdiagonal2red: false,
      rightdiagonal2red: false,
      leftdiagonalblack: false,
      rightdiagonalblack: false,
      leftdiagonal2black: false,
      rightdiagonal2black: false
    };
  },
  methods: {
    alertme(e, itr, itr3) {
      if (this.matrix[itr][itr3].children[0].classList[1] == "red") {
        this.$store.commit("setprevi", itr);
        this.$store.commit("setprevj", itr3);
        this.$store.commit("setcolor", this.color1);
        if (this.$store.getters.geti != "" || this.$store.getters.getj != "") {
          this.matrix[this.$store.getters.geti][
            this.$store.getters.getj
          ].classList.remove("highlighted");
        }
        if (
          this.$store.getters.geti1 != "" &&
          this.$store.getters.getj1 != ""
        ) {
          this.matrix[this.$store.getters.geti1][
            this.$store.getters.getj1
          ].classList.remove("highlighted");
        }
        if (
          this.$store.getters.geti2 != "" &&
          this.$store.getters.getj2 != ""
        ) {
          this.matrix[this.$store.getters.geti2][
            this.$store.getters.getj2
          ].classList.remove("highlighted");
        }
        if (
          this.$store.getters.geti3 != "" &&
          this.$store.getters.getj3 != ""
        ) {
          this.matrix[this.$store.getters.geti3][
            this.$store.getters.getj3
          ].classList.remove("highlighted");
        }
        if (
          this.$store.getters.geti4 != "" &&
          this.$store.getters.getj4 != ""
        ) {
          this.matrix[this.$store.getters.geti4][
            this.$store.getters.getj4
          ].classList.remove("highlighted");
        }

        if (this.matrix[itr - 1] && this.matrix[itr - 1][itr3 + 1]) {
          if (
            this.matrix[itr - 1][itr3 + 1].children[0].classList[1] != "red" &&
            this.matrix[itr - 1][itr3 + 1].children[0].classList[1] != "black"
          ) {
            this.matrix[itr - 1][itr3 + 1].classList.add("highlighted");
            this.$store.commit("seti", itr - 1);
            this.$store.commit("setj", itr3 + 1);
          }
        }
        if (this.matrix[itr - 1] && this.matrix[itr - 1][itr3 - 1]) {
          if (
            this.matrix[itr - 1][itr3 - 1].children[0].classList[1] != "red" &&
            this.matrix[itr - 1][itr3 - 1].children[0].classList[1] != "black"
          ) {
            this.matrix[itr - 1][itr3 - 1].classList.add("highlighted");
            this.$store.commit("seti1", itr - 1);
            this.$store.commit("setj1", itr3 - 1);
          }
        }

        if (this.matrix[itr - 2] && this.matrix[itr - 2][itr3 - 2]) {
          if (
            this.matrix[itr - 1][itr3 - 1].children[0].classList[1] ==
              "black" &&
            this.matrix[itr - 2][itr3 - 2].children[0].classList[1] !=
              "black" &&
            this.matrix[itr - 2][itr3 - 2].children[0].classList[1] != "red"
          ) {
            this.matrix[itr - 2][itr3 - 2].classList.add("highlighted");
            this.$store.commit("seti1", itr - 2);
            this.$store.commit("setj1", itr3 - 2);
            this.leftdiagonalred = true;
          }
        }
        if (this.matrix[itr - 4] && this.matrix[itr - 4][itr3 - 4]) {
          if (
            this.matrix[itr - 3][itr3 - 3].children[0].classList[1] ==
              "black" &&
            this.matrix[itr - 4][itr3 - 4].children[0].classList[1] !=
              "black" &&
            this.matrix[itr - 4][itr3 - 4].children[0].classList[1] != "red" &&
            this.matrix[itr - 2][itr3 - 2].children[0].classList[1] != "red" &&
            this.matrix[itr - 2][itr3 - 2].children[0].classList[1] !=
              "black" &&
            this.matrix[itr - 1][itr3 - 1].children[0].classList[1]
          ) {
            this.matrix[itr - 4][itr3 - 4].classList.add("highlighted");
            this.$store.commit("seti2", itr - 4);
            this.$store.commit("setj2", itr3 - 4);
            this.leftdiagonal2red = true;
          }
        }
        if (this.matrix[itr - 2] && this.matrix[itr - 2][itr3 + 2]) {
          if (
            this.matrix[itr - 1][itr3 + 1].children[0].classList[1] ==
              "black" &&
            this.matrix[itr - 2][itr3 + 2].children[0].classList[1] !=
              "black" &&
            this.matrix[itr - 2][itr3 + 2].children[0].classList[1] != "red"
          ) {
            this.matrix[itr - 2][itr3 + 2].classList.add("highlighted");
            this.$store.commit("seti", itr - 2);
            this.$store.commit("setj", itr3 + 2);
            this.rightdiagonalred = true;
          }
        }
        if (this.matrix[itr - 4] && this.matrix[itr - 4][itr3 + 4]) {
          if (
            this.matrix[itr - 3][itr3 + 3].children[0].classList[1] ==
              "black" &&
            this.matrix[itr - 4][itr3 + 4].children[0].classList[1] !=
              "black" &&
            this.matrix[itr - 4][itr3 + 4].children[0].classList[1] != "red" &&
            this.matrix[itr - 2][itr3 + 2].children[0].classList[1] != "red" &&
            this.matrix[itr - 2][itr3 + 2].children[0].classList[1] !=
              "black" &&
            this.matrix[itr - 1][itr3 + 1].children[0].classList[1]
          ) {
            this.matrix[itr - 4][itr3 + 4].classList.add("highlighted");
            this.$store.commit("seti4", itr - 4);
            this.$store.commit("setj4", itr3 + 4);
            this.rightdiagonal2red = true;
          }
        }
      }
      //!black;
      if (this.matrix[itr][itr3].children[0].classList[1] == "black") {
        this.$store.commit("setprevi", itr);
        this.$store.commit("setprevj", itr3);

        this.$store.commit("setcolor", this.color2);
        if (this.$store.getters.geti != "" || this.$store.getters.getj != "") {
          this.matrix[this.$store.getters.geti][
            this.$store.getters.getj
          ].classList.remove("highlighted");
        }
        if (
          this.$store.getters.geti1 != "" &&
          this.$store.getters.getj1 != ""
        ) {
          this.matrix[this.$store.getters.geti1][
            this.$store.getters.getj1
          ].classList.remove("highlighted");
        }
        if (
          this.$store.getters.geti4 != "" &&
          this.$store.getters.getj4 != ""
        ) {
          this.matrix[this.$store.getters.geti4][
            this.$store.getters.getj4
          ].classList.remove("highlighted");
        }
        if (
          this.$store.getters.geti3 != "" &&
          this.$store.getters.getj3 != ""
        ) {
          this.matrix[this.$store.getters.geti3][
            this.$store.getters.getj3
          ].classList.remove("highlighted");
        }

        if (this.matrix[itr + 1] && this.matrix[itr + 1][itr3 + 1]) {
          if (
            this.matrix[itr + 1][itr3 + 1].children[0].classList[1] != "red" &&
            this.matrix[itr + 1][itr3 + 1].children[0].classList[1] != "black"
          ) {
            this.matrix[itr + 1][itr3 + 1].classList.add("highlighted");
            this.$store.commit("seti", itr + 1);
            this.$store.commit("setj", itr3 + 1);
          }
        }
        if (this.matrix[itr + 1] && this.matrix[itr + 1][itr3 - 1]) {
          if (
            this.matrix[itr + 1][itr3 - 1].children[0].classList[1] != "red" &&
            this.matrix[itr + 1][itr3 - 1].children[0].classList[1] != "black"
          ) {
            this.matrix[itr + 1][itr3 - 1].classList.add("highlighted");
            this.$store.commit("seti1", itr + 1);
            this.$store.commit("setj1", itr3 - 1);
          }
        }

        if (this.matrix[itr + 2] && this.matrix[itr + 2][itr3 - 2]) {
          if (
            this.matrix[itr + 1][itr3 - 1].children[0].classList[1] == "red" &&
            this.matrix[itr + 2][itr3 - 2].children[0].classList[1] !=
              "black" &&
            this.matrix[itr + 2][itr3 - 2].children[0].classList[1] != "red"
          ) {
            this.matrix[itr + 2][itr3 - 2].classList.add("highlighted");
            this.$store.commit("seti1", itr + 2);
            this.$store.commit("setj1", itr3 - 2);
            this.leftdiagonalblack = true;
          }
        }
        if (this.matrix[itr + 2] && this.matrix[itr + 2][itr3 + 2]) {
          if (
            this.matrix[itr + 1][itr3 + 1].children[0].classList[1] == "red" &&
            this.matrix[itr + 2][itr3 + 2].children[0].classList[1] !=
              "black" &&
            this.matrix[itr + 2][itr3 + 2].children[0].classList[1] != "red"
          ) {
            this.matrix[itr + 2][itr3 + 2].classList.add("highlighted");
            this.$store.commit("seti", itr + 2);
            this.$store.commit("setj", itr3 + 2);
            this.rightdiagonalblack = true;
          }
        }
        if (this.matrix[itr + 4] && this.matrix[itr + 4][itr3 - 4]) {
          if (
            this.matrix[itr + 3][itr3 - 3].children[0].classList[1] == "red" &&
            this.matrix[itr + 4][itr3 - 4].children[0].classList[1] !=
              "black" &&
            this.matrix[itr + 4][itr3 - 4].children[0].classList[1] != "red" &&
            this.matrix[itr + 2][itr3 - 2].children[0].classList[1] != "red" &&
            this.matrix[itr + 2][itr3 - 2].children[0].classList[1] !=
              "black" &&
            this.matrix[itr + 1][itr3 - 1].children[0].classList[1]
          ) {
            this.matrix[itr + 4][itr3 - 4].classList.add("highlighted");
            this.$store.commit("seti4", itr + 4);
            this.$store.commit("setj4", itr3 - 4);
            this.leftdiagonal2black = true;
          }
        }
        if (this.matrix[itr + 4] && this.matrix[itr + 4][itr3 + 4]) {
          if (
            this.matrix[itr + 3][itr3 + 3].children[0].classList[1] == "red" &&
            this.matrix[itr + 4][itr3 + 4].children[0].classList[1] !=
              "black" &&
            this.matrix[itr + 4][itr3 + 4].children[0].classList[1] != "red" &&
            this.matrix[itr + 2][itr3 + 2].children[0].classList[1] != "red" &&
            this.matrix[itr + 2][itr3 + 2].children[0].classList[1] !=
              "black" &&
            this.matrix[itr + 1][itr3 + 1].children[0].classList[1]
          ) {
            this.matrix[itr + 4][itr3 + 4].classList.add("highlighted");
            this.$store.commit("seti4", itr + 4);
            this.$store.commit("setj4", itr3 + 4);
            this.rightdiagonal2black = true;
          }
        }
      }
      //!black
      else {
        this.move(
          e,
          this.$store.getters.getprevi,
          this.$store.getters.getprevj
        );
      }
    },
    move(e, itr, itr1) {
      if (e.target.classList[2] == "highlighted") {
        if (e.target.children[0].classList[1] == "black") {
          e.target.children[0].classList.remove("black");
        }
        if (e.target.children[0].classList[1] == "red") {
          e.target.children[0].classList.remove("red");
        }
        if (this.$store.getters.getcolor == "red") {
          e.target.children[0].classList.add("red");
          this.matrix[itr][itr1].children[0].classList.remove("red");
        } else if (this.$store.getters.getcolor == "black") {
          e.target.children[0].classList.add("black");
          this.matrix[itr][itr1].children[0].classList.remove("black");
        }

        if (this.$store.getters.geti != "" || this.$store.getters.getj != "") {
          this.matrix[this.$store.getters.geti][
            this.$store.getters.getj
          ].classList.remove("highlighted");
        }
        if (
          this.$store.getters.geti2 != "" ||
          this.$store.getters.getj2 != ""
        ) {
          this.matrix[this.$store.getters.geti2][
            this.$store.getters.getj2
          ].classList.remove("highlighted");
        }
        if (
          this.$store.getters.geti3 != "" &&
          this.$store.getters.getj3 != ""
        ) {
          this.matrix[this.$store.getters.geti3][
            this.$store.getters.getj3
          ].classList.remove("highlighted");
        }
        if (
          this.$store.getters.geti1 != "" ||
          this.$store.getters.getj1 != ""
        ) {
          this.matrix[this.$store.getters.geti1][
            this.$store.getters.getj1
          ].classList.remove("highlighted");
        }
        if (
          this.$store.getters.geti4 != "" &&
          this.$store.getters.getj4 != ""
        ) {
          this.matrix[this.$store.getters.geti4][
            this.$store.getters.getj4
          ].classList.remove("highlighted");
        }
        if (this.leftdiagonalred == true) {
          if (this.matrix[itr - 2] && this.matrix[itr - 2][itr1 - 2]) {
            if (e.target == this.matrix[itr - 2][itr1 - 2]) {
              this.matrix[itr - 1][itr1 - 1].children[0].classList.remove(
                "black"
              );
            }
          }
        }
        if (this.rightdiagonalred == true) {
          if (this.matrix[itr - 2] && this.matrix[itr - 2][itr1 + 2]) {
            if (e.target == this.matrix[itr - 2][itr1 + 2]) {
              this.matrix[itr - 1][itr1 + 1].children[0].classList.remove(
                "black"
              );
            }
          }
        }
        if (this.leftdiagonalblack == true) {
          if (this.matrix[itr + 2] && this.matrix[itr + 2][itr1 - 2]) {
            if (e.target == this.matrix[itr + 2][itr1 - 2]) {
              this.matrix[itr + 1][itr1 - 1].children[0].classList.remove(
                "red"
              );
            }
          }
        }
        if (this.rightdiagonalblack == true) {
          if (this.matrix[itr + 2] && this.matrix[itr + 2][itr1 + 2]) {
            if (e.target == this.matrix[itr + 2][itr1 + 2]) {
              this.matrix[itr + 1][itr1 + 1].children[0].classList.remove(
                "red"
              );
            }
          }
        }
        if (this.leftdiagonal2red == true) {
          if (this.matrix[itr - 4] && this.matrix[itr - 4][itr1 - 4]) {
            if (e.target == this.matrix[itr - 4][itr1 - 4]) {
              this.matrix[itr - 3][itr1 - 3].children[0].classList.remove(
                "black"
              );
              this.matrix[itr - 1][itr1 - 1].children[0].classList.remove(
                "black"
              );
            }
          }
        }
        if (this.leftdiagonal2black == true) {
          if (this.matrix[itr + 4] && this.matrix[itr + 4][itr1 - 4]) {
            if (e.target == this.matrix[itr + 4][itr1 - 4]) {
              this.matrix[itr + 3][itr1 - 3].children[0].classList.remove(
                "red"
              );
              this.matrix[itr + 1][itr1 - 1].children[0].classList.remove(
                "red"
              );
            }
          }
        }
        if (this.rightdiagonal2red == true) {
          if (this.matrix[itr - 4] && this.matrix[itr - 4][itr1 + 4]) {
            if (e.target == this.matrix[itr - 4][itr1 + 4]) {
              this.matrix[itr - 3][itr1 + 3].children[0].classList.remove(
                "black"
              );
              this.matrix[itr - 1][itr1 + 1].children[0].classList.remove(
                "black"
              );
            }
          }
        }
        if (this.rightdiagonal2black == true) {
          if (this.matrix[itr + 4] && this.matrix[itr + 4][itr1 + 4]) {
            if (e.target == this.matrix[itr + 4][itr1 + 4]) {
              this.matrix[itr + 3][itr1 + 3].children[0].classList.remove(
                "red"
              );
              this.matrix[itr + 1][itr1 + 1].children[0].classList.remove(
                "red"
              );
            }
          }
        }
        this.leftdiagonalred = false;
        this.rightdiagonalred = false;
        this.leftdiagonalblack = false;
        this.rightdiagonalblack = false;
        this.leftdiagonal2red = false;
        this.rightdiagonal2red = false;
        this.leftdiagonal2black = false;
        this.rightdiagonalblack = false;
      }
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      var divarray = document.getElementsByClassName("grid-items");
      this.matrix = new Array();

      for (let i = 0; i < 8; i++) {
        var itr = 8 * i;
        var range = itr + 8;
        var columnarray = new Array();
        for (let j = 8 * i; j < 8 * i + 8; j++) {
          columnarray.push(divarray[j]);
        }
        this.matrix.push(columnarray);
      }
      for (let i = 0; i < 3; i++) {
        if (i % 2 == 0) {
          for (let j = 1; j < 8; j++) {
            this.matrix[i][j].children[0].classList.add("black");
            j++;
          }
        } else {
          for (let j = 0; j < 8; j++) {
            this.matrix[i][j].children[0].classList.add("black");
            j++;
          }
        }
      }
      for (let i = 5; i < 8; i++) {
        if (i % 2 == 0) {
          for (let j = 1; j < 8; j++) {
            this.matrix[i][j].children[0].classList.add("red");
            j++;
          }
        } else {
          for (let j = 0; j < 8; j++) {
            this.matrix[i][j].children[0].classList.add("red");
            j++;
          }
        }
      }
      for (let i = 0; i < 8; i++) {
        if (i % 2 == 0) {
          for (let j = 0; j < 8; j++) {
            if (j % 2 == 0) this.matrix[i][j].classList.add("one");
            else this.matrix[i][j].classList.add("two");
          }
        } else if (i % 2 != 0) {
          for (let j = 0; j < 8; j++) {
            if (j % 2 == 0) this.matrix[i][j].classList.add("two");
            else this.matrix[i][j].classList.add("one");
          }
        }
      }
    });
  }
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  height: 500px;
  width: 500px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  justify-items: center;
}
.grid > div {
  display: flex;
  width: 100%;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.unit {
  margin: 0 auto;
  width: 80%;
  height: 80%;
  border-radius: 100%;
  pointer-events: none;
}
.one {
  background-color: #8c4811;
}
.two {
  background-color: #cf9349;
}
.black {
  background-color: black;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
}
.red {
  background-color: red;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
}
.grid-items:hover {
  background-color: grey;
}
.highlighted {
  background-color: white;
}
</style>
