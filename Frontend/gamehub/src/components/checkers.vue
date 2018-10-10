<template>
<div id="wrapper">
  <h1 >{{msg}}'s Turn</h1>
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
      color3: "damared",
      color4: "damablack",
      leftdiagonalred: false,
      rightdiagonalred: false,
      leftdiagonal2red: false,
      rightdiagonal2red: false,
      leftdiagonalblack: false,
      rightdiagonalblack: false,
      leftdiagonal2black: false,
      rightdiagonal2black: false,
      leftdiagonalupdama: false,
      rightdiagonalupdama: false,
      leftdiagonaldowndama: false,
      rightdiagonaldowndama: false,
      leftdiagonal2updama: false,
      rightdiagonal2updama: false,
      leftdiagonal2downdama: false,
      rightdiagonal2downdama: false,
      selectedarray: [],
      redturn: true,
      blackturn: false,
      msg: "Red"
    };
  },
  methods: {
    checkred() {
      var isred = false;
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (
            this.matrix[i][j].children[0].classList.contains("red") ||
            this.matrix[i][j].children[0].classList.contains("damared")
          ) {
            isred = true;
            break;
          }
        }
      }
      return isred;
    },
    checkblack() {
      var isblack = false;
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (
            this.matrix[i][j].children[0].classList.contains("black") ||
            this.matrix[i][j].children[0].classList.contains("damablack")
          ) {
            isblack = true;
            break;
          }
        }
      }
      return isblack;
    },
    checkuprightred(itr, itr3, color, eaten) {
      if (this.matrix[itr - 1] && this.matrix[itr - 1][itr3 + 1]) {
        if (
          this.matrix[itr - 1][itr3 + 1].children[0].classList[1] != color &&
          this.matrix[itr - 1][itr3 + 1].children[0].classList[1] != eaten &&
          this.matrix[itr - 1][itr3 + 1].children[0].classList[1] !=
            "damared" &&
          this.matrix[itr - 1][itr3 + 1].children[0].classList[1] != "damablack"
        ) {
          this.matrix[itr - 1][itr3 + 1].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr - 1][itr3 + 1]);
          this.$store.commit("seti", itr - 1);
          this.$store.commit("setj", itr3 + 1);
        }
      }
    },
    checkuprightdama(itr, itr3, color, eaten, damacolor, tobeeaten) {
      if (this.matrix[itr - 1] && this.matrix[itr - 1][itr3 + 1]) {
        if (
          this.matrix[itr - 1][itr3 + 1].children[0].classList[1] != color &&
          this.matrix[itr - 1][itr3 + 1].children[0].classList[1] !=
            damacolor &&
          this.matrix[itr - 1][itr3 + 1].children[0].classList[1] != eaten &&
          this.matrix[itr - 1][itr3 + 1].children[0].classList[1] != tobeeaten
        ) {
          this.matrix[itr - 1][itr3 + 1].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr - 1][itr3 + 1]);
          this.$store.commit("seti", itr - 1);
          this.$store.commit("setj", itr3 + 1);
        }
      }
    },
    checkupleftdama(itr, itr3, color, eaten, damacolor, tobeeaten) {
      if (this.matrix[itr - 1] && this.matrix[itr - 1][itr3 - 1]) {
        if (
          this.matrix[itr - 1][itr3 - 1].children[0].classList[1] != color &&
          this.matrix[itr - 1][itr3 - 1].children[0].classList[1] !=
            damacolor &&
          this.matrix[itr - 1][itr3 - 1].children[0].classList[1] != eaten &&
          this.matrix[itr - 1][itr3 - 1].children[0].classList[1] != tobeeaten
        ) {
          this.matrix[itr - 1][itr3 - 1].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr - 1][itr3 - 1]);
          this.$store.commit("seti", itr - 1);
          this.$store.commit("setj", itr3 - 1);
        }
      }
    },

    checkdownrightblack(itr, itr3, color, eaten) {
      if (this.matrix[itr + 1] && this.matrix[itr + 1][itr3 + 1]) {
        if (
          this.matrix[itr + 1][itr3 + 1].children[0].classList[1] != eaten &&
          this.matrix[itr + 1][itr3 + 1].children[0].classList[1] != color &&
          this.matrix[itr + 1][itr3 + 1].children[0].classList[1] !=
            "damared" &&
          this.matrix[itr + 1][itr3 + 1].children[0].classList[1] != "damablack"
        ) {
          this.matrix[itr + 1][itr3 + 1].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr + 1][itr3 + 1]);
          this.$store.commit("seti", itr + 1);
          this.$store.commit("setj", itr3 + 1);
        }
      }
    },
    checkdownrightdama(itr, itr3, color, eaten, damacolor, tobeeaten) {
      if (this.matrix[itr + 1] && this.matrix[itr + 1][itr3 + 1]) {
        if (
          this.matrix[itr + 1][itr3 + 1].children[0].classList[1] != eaten &&
          this.matrix[itr + 1][itr3 + 1].children[0].classList[1] != color &&
          this.matrix[itr + 1][itr3 + 1].children[0].classList[1] !=
            damacolor &&
          this.matrix[itr + 1][itr3 + 1].children[0].classList[1] != tobeeaten
        ) {
          this.matrix[itr + 1][itr3 + 1].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr + 1][itr3 + 1]);
          this.$store.commit("seti", itr + 1);
          this.$store.commit("setj", itr3 + 1);
        }
      }
    },

    checkupleftred(itr, itr3, color, eaten) {
      if (this.matrix[itr - 1] && this.matrix[itr - 1][itr3 - 1]) {
        if (
          this.matrix[itr - 1][itr3 - 1].children[0].classList[1] != color &&
          this.matrix[itr - 1][itr3 - 1].children[0].classList[1] != eaten &&
          this.matrix[itr - 1][itr3 - 1].children[0].classList[1] !=
            "damared" &&
          this.matrix[itr - 1][itr3 - 1].children[0].classList[1] != "damablack"
        ) {
          this.matrix[itr - 1][itr3 - 1].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr - 1][itr3 - 1]);
          this.$store.commit("seti1", itr - 1);
          this.$store.commit("setj1", itr3 - 1);
        }
      }
    },
    checkdownleftblack(itr, itr3, color, eaten) {
      if (this.matrix[itr + 1] && this.matrix[itr + 1][itr3 - 1]) {
        if (
          this.matrix[itr + 1][itr3 - 1].children[0].classList[1] != eaten &&
          this.matrix[itr + 1][itr3 - 1].children[0].classList[1] != color &&
          this.matrix[itr + 1][itr3 - 1].children[0].classList[1] !=
            "damablack" &&
          this.matrix[itr + 1][itr3 - 1].children[0].classList[1] != "damabred"
        ) {
          this.matrix[itr + 1][itr3 - 1].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr + 1][itr3 - 1]);
          this.$store.commit("seti1", itr + 1);
          this.$store.commit("setj1", itr3 - 1);
        }
      }
    },
    checkdownleftdama(itr, itr3, color, eaten, damacolor, tobeeaten) {
      if (this.matrix[itr + 1] && this.matrix[itr + 1][itr3 - 1]) {
        if (
          this.matrix[itr + 1][itr3 - 1].children[0].classList[1] != eaten &&
          this.matrix[itr + 1][itr3 - 1].children[0].classList[1] != color &&
          this.matrix[itr + 1][itr3 - 1].children[0].classList[1] !=
            damacolor &&
          this.matrix[itr + 1][itr3 - 1].children[0].classList[1] != tobeeaten
        ) {
          this.matrix[itr + 1][itr3 - 1].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr + 1][itr3 - 1]);
          this.$store.commit("seti1", itr + 1);
          this.$store.commit("setj1", itr3 - 1);
        }
      }
    },
    checkuprightby2red(itr, itr3, color, eaten) {
      if (this.matrix[itr - 2] && this.matrix[itr - 2][itr3 + 2]) {
        if (
          (this.matrix[itr - 1][itr3 + 1].children[0].classList[1] == eaten ||
            this.matrix[itr - 1][itr3 + 1].children[0].classList[1] ==
              "damablack") &&
          this.matrix[itr - 2][itr3 + 2].children[0].classList[1] != eaten &&
          this.matrix[itr - 2][itr3 + 2].children[0].classList[1] != color &&
          this.matrix[itr - 2][itr3 + 2].children[0].classList[1] != "damablack"
        ) {
          this.matrix[itr - 2][itr3 + 2].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr - 2][itr3 + 2]);
          this.$store.commit("seti", itr - 2);
          this.$store.commit("setj", itr3 + 2);
          this.rightdiagonalred = true;
        }
      }
    },
    checkuprightby2dama(itr, itr3, color, eaten, damacolor, tobeeaten) {
      if (this.matrix[itr - 2] && this.matrix[itr - 2][itr3 + 2]) {
        if (
          (this.matrix[itr - 1][itr3 + 1].children[0].classList[1] == eaten ||
            this.matrix[itr - 1][itr3 + 1].children[0].classList[1] ==
              tobeeaten) &&
          this.matrix[itr - 2][itr3 + 2].children[0].classList[1] != eaten &&
          this.matrix[itr - 2][itr3 + 2].children[0].classList[1] != color &&
          this.matrix[itr - 2][itr3 + 2].children[0].classList[1] != damacolor
        ) {
          this.matrix[itr - 2][itr3 + 2].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr - 2][itr3 + 2]);
          this.$store.commit("seti", itr - 2);
          this.$store.commit("setj", itr3 + 2);
          this.rightdiagonalupdama = true;
        }
      }
    },
    checkdownrightby2black(itr, itr3, color, eaten) {
      if (this.matrix[itr + 2] && this.matrix[itr + 2][itr3 + 2]) {
        if (
          (this.matrix[itr + 1][itr3 + 1].children[0].classList[1] == eaten ||
            this.matrix[itr + 1][itr3 + 1].children[0].classList[1] ==
              "damared") &&
          this.matrix[itr + 2][itr3 + 2].children[0].classList[1] != color &&
          this.matrix[itr + 2][itr3 + 2].children[0].classList[1] != eaten &&
          this.matrix[itr + 2][itr3 + 2].children[0].classList[1] !=
            "damablack" &&
          this.matrix[itr + 2][itr3 + 2].children[0].classList[1] != "damared"
        ) {
          this.matrix[itr + 2][itr3 + 2].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr + 2][itr3 + 2]);
          this.$store.commit("seti", itr + 2);
          this.$store.commit("setj", itr3 + 2);
          this.rightdiagonalblack = true;
        }
      }
    },
    checkdownrightby2dama(itr, itr3, color, eaten, damacolor, tobeeaten) {
      if (this.matrix[itr + 2] && this.matrix[itr + 2][itr3 + 2]) {
        if (
          (this.matrix[itr + 1][itr3 + 1].children[0].classList[1] == eaten ||
            this.matrix[itr + 1][itr3 + 1].children[0].classList[1] ==
              tobeeaten) &&
          this.matrix[itr + 2][itr3 + 2].children[0].classList[1] != color &&
          this.matrix[itr + 2][itr3 + 2].children[0].classList[1] != eaten &&
          this.matrix[itr + 2][itr3 + 2].children[0].classList[1] != damacolor
        ) {
          this.matrix[itr + 2][itr3 + 2].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr + 2][itr3 + 2]);
          this.$store.commit("seti", itr + 2);
          this.$store.commit("setj", itr3 + 2);
          this.rightdiagonaldowndama = true;
        }
      }
    },
    checkupleftby2red(itr, itr3, color, eaten) {
      if (this.matrix[itr - 2] && this.matrix[itr - 2][itr3 - 2]) {
        if (
          (this.matrix[itr - 1][itr3 - 1].children[0].classList[1] == eaten ||
            this.matrix[itr - 1][itr3 - 1].children[0].classList[1] ==
              "damablack") &&
          this.matrix[itr - 2][itr3 - 2].children[0].classList[1] != eaten &&
          this.matrix[itr - 2][itr3 - 2].children[0].classList[1] != color &&
          this.matrix[itr - 2][itr3 - 2].children[0].classList[1] !=
            "damared" &&
          this.matrix[itr - 2][itr3 - 2].children[0].classList[1] != "damablack"
        ) {
          this.matrix[itr - 2][itr3 - 2].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr - 2][itr3 - 2]);
          this.$store.commit("seti1", itr - 2);
          this.$store.commit("setj1", itr3 - 2);
          this.leftdiagonalred = true;
        }
      }
    },
    checkupleftby2dama(itr, itr3, color, eaten, damacolor, tobeeaten) {
      if (this.matrix[itr - 2] && this.matrix[itr - 2][itr3 - 2]) {
        if (
          (this.matrix[itr - 1][itr3 - 1].children[0].classList[1] == eaten ||
            this.matrix[itr - 1][itr3 - 1].children[0].classList[1] ==
              tobeeaten) &&
          this.matrix[itr - 2][itr3 - 2].children[0].classList[1] != eaten &&
          this.matrix[itr - 2][itr3 - 2].children[0].classList[1] != color &&
          this.matrix[itr - 2][itr3 - 2].children[0].classList[1] != damacolor
        ) {
          this.matrix[itr - 2][itr3 - 2].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr - 2][itr3 - 2]);
          this.$store.commit("seti1", itr - 2);
          this.$store.commit("setj1", itr3 - 2);
          this.leftdiagonalupdama = true;
        }
      }
    },

    replacedama1(eaten, e, itr, itr1, maincolor, tobeeaten) {
      if (this.leftdiagonalupdama == true) {
        if (this.matrix[itr - 2] && this.matrix[itr - 2][itr1 - 2]) {
          if (e.target == this.matrix[itr - 2][itr1 - 2]) {
            this.matrix[itr - 1][itr1 - 1].children[0].classList.remove(eaten);
            this.matrix[itr - 1][itr1 - 1].children[0].classList.remove(
              tobeeaten
            );
          }
        }
      }

      if (this.rightdiagonalupdama == true) {
        if (this.matrix[itr - 2] && this.matrix[itr - 2][itr1 + 2]) {
          if (e.target == this.matrix[itr - 2][itr1 + 2]) {
            this.matrix[itr - 1][itr1 + 1].children[0].classList.remove(eaten);
            this.matrix[itr - 1][itr1 + 1].children[0].classList.remove(
              tobeeaten
            );
          }
        }
      }
      if (this.leftdiagonaldowndama == true) {
        if (this.matrix[itr + 2] && this.matrix[itr + 2][itr1 - 2]) {
          if (e.target == this.matrix[itr + 2][itr1 - 2]) {
            this.matrix[itr + 1][itr1 - 1].children[0].classList.remove(eaten);
            this.matrix[itr + 1][itr1 - 1].children[0].classList.remove(
              tobeeaten
            );
          }
        }
      }
      if (this.rightdiagonaldowndama == true) {
        if (this.matrix[itr + 2] && this.matrix[itr + 2][itr1 + 2]) {
          if (e.target == this.matrix[itr + 2][itr1 + 2]) {
            this.matrix[itr + 1][itr1 + 1].children[0].classList.remove(eaten);
            this.matrix[itr + 1][itr1 + 1].children[0].classList.remove(
              tobeeaten
            );
          }
        }
      }

      if (this.leftdiagonal2updama == true) {
        if (this.matrix[itr - 4] && this.matrix[itr - 4][itr1 - 4]) {
          if (e.target == this.matrix[itr - 4][itr1 - 4]) {
            this.matrix[itr - 3][itr1 - 3].children[0].classList.remove(eaten);
            this.matrix[itr - 1][itr1 - 1].children[0].classList.remove(eaten);
            this.matrix[itr - 3][itr1 - 3].children[0].classList.remove(
              tobeeaten
            );
            this.matrix[itr - 1][itr1 - 1].children[0].classList.remove(
              tobeeaten
            );
          }
        }
      }
      if (this.leftdiagonal2downdama == true) {
        if (this.matrix[itr + 4] && this.matrix[itr + 4][itr1 - 4]) {
          if (e.target == this.matrix[itr + 4][itr1 - 4]) {
            this.matrix[itr + 3][itr1 - 3].children[0].classList.remove(eaten);
            this.matrix[itr + 1][itr1 - 1].children[0].classList.remove(eaten);
            this.matrix[itr + 3][itr1 - 3].children[0].classList.remove(
              tobeeaten
            );
            this.matrix[itr + 1][itr1 - 1].children[0].classList.remove(
              tobeeaten
            );
          }
        }
      }
      if (this.rightdiagonal2updama == true) {
        if (this.matrix[itr - 4] && this.matrix[itr - 4][itr1 + 4]) {
          if (e.target == this.matrix[itr - 4][itr1 + 4]) {
            this.matrix[itr - 3][itr1 + 3].children[0].classList.remove(eaten);
            this.matrix[itr - 1][itr1 + 1].children[0].classList.remove(eaten);
            this.matrix[itr - 3][itr1 + 3].children[0].classList.remove(
              tobeeaten
            );
            this.matrix[itr - 1][itr1 + 1].children[0].classList.remove(
              tobeeaten
            );
          }
        }
      }
      if (this.rightdiagonal2downdama == true) {
        if (this.matrix[itr + 4] && this.matrix[itr + 4][itr1 + 4]) {
          if (e.target == this.matrix[itr + 4][itr1 + 4]) {
            this.matrix[itr + 3][itr1 + 3].children[0].classList.remove(eaten);
            this.matrix[itr + 1][itr1 + 1].children[0].classList.remove(eaten);
            this.matrix[itr + 3][itr1 + 3].children[0].classList.remove(
              tobeeaten
            );
            this.matrix[itr + 1][itr1 + 1].children[0].classList.remove(
              tobeeaten
            );
          }
        }
      }
    },
    checkdownleftby2black(itr, itr3, color, eaten) {
      if (this.matrix[itr + 2] && this.matrix[itr + 2][itr3 - 2]) {
        if (
          (this.matrix[itr + 1][itr3 - 1].children[0].classList[1] == "red" ||
            this.matrix[itr + 1][itr3 - 1].children[0].classList[1] ==
              "damared") &&
          this.matrix[itr + 2][itr3 - 2].children[0].classList[1] != color &&
          this.matrix[itr + 2][itr3 - 2].children[0].classList[1] != eaten &&
          this.matrix[itr + 2][itr3 - 2].children[0].classList[1] !=
            "damared" &&
          this.matrix[itr + 2][itr3 - 2].children[0].classList[1] != "damablack"
        ) {
          this.matrix[itr + 2][itr3 - 2].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr + 2][itr3 - 2]);
          this.$store.commit("seti1", itr + 2);
          this.$store.commit("setj1", itr3 - 2);
          this.leftdiagonalblack = true;
        }
      }
    },
    checkdownleftby2dama(itr, itr3, color, eaten, damacolor, tobeeaten) {
      if (this.matrix[itr + 2] && this.matrix[itr + 2][itr3 - 2]) {
        if (
          (this.matrix[itr + 1][itr3 - 1].children[0].classList[1] == eaten ||
            this.matrix[itr + 1][itr3 - 1].children[0].classList[1] ==
              tobeeaten) &&
          this.matrix[itr + 2][itr3 - 2].children[0].classList[1] != color &&
          this.matrix[itr + 2][itr3 - 2].children[0].classList[1] != eaten &&
          this.matrix[itr + 2][itr3 - 2].children[0].classList[1] != damacolor
        ) {
          this.matrix[itr + 2][itr3 - 2].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr + 2][itr3 - 2]);
          this.$store.commit("seti1", itr + 2);
          this.$store.commit("setj1", itr3 - 2);
          this.leftdiagonaldowndama = true;
        }
      }
    },
    checkupleftby4red(itr, itr3, color, eaten) {
      if (this.matrix[itr - 4] && this.matrix[itr - 4][itr3 - 4]) {
        if (
          this.matrix[itr - 3][itr3 - 3].children[0].classList[1] == eaten &&
          this.matrix[itr - 4][itr3 - 4].children[0].classList[1] != eaten &&
          this.matrix[itr - 4][itr3 - 4].children[0].classList[1] != color &&
          this.matrix[itr - 2][itr3 - 2].children[0].classList[1] != color &&
          this.matrix[itr - 1][itr3 - 1].children[0].classList[1] != color &&
          this.matrix[itr - 2][itr3 - 2].children[0].classList[1] != eaten &&
          this.matrix[itr - 1][itr3 - 1].children[0].classList[1]
        ) {
          this.matrix[itr - 4][itr3 - 4].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr - 4][itr3 - 4]);
          this.$store.commit("seti2", itr - 4);
          this.$store.commit("setj2", itr3 - 4);
          this.leftdiagonal2red = true;
        }
      }
    },
    checkupleftby4dama(itr, itr3, color, eaten, damacolor) {
      if (this.matrix[itr - 4] && this.matrix[itr - 4][itr3 - 4]) {
        if (
          this.matrix[itr - 3][itr3 - 3].children[0].classList[1] == eaten &&
          this.matrix[itr - 4][itr3 - 4].children[0].classList[1] != eaten &&
          this.matrix[itr - 4][itr3 - 4].children[0].classList[1] !=
            damacolor &&
          this.matrix[itr - 4][itr3 - 4].children[0].classList[1] != color &&
          this.matrix[itr - 2][itr3 - 2].children[0].classList[1] != color &&
          this.matrix[itr - 2][itr3 - 2].children[0].classList[1] !=
            damacolor &&
          this.matrix[itr - 1][itr3 - 1].children[0].classList[1] != color &&
          this.matrix[itr - 1][itr3 - 1].children[0].classList[1] !=
            damacolor &&
          this.matrix[itr - 2][itr3 - 2].children[0].classList[1] != eaten &&
          this.matrix[itr - 1][itr3 - 1].children[0].classList[1]
        ) {
          this.matrix[itr - 4][itr3 - 4].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr - 4][itr3 - 4]);
          this.$store.commit("seti2", itr - 4);
          this.$store.commit("setj2", itr3 - 4);
          this.leftdiagonal2updama = true;
        }
      }
    },
    checkdownleftby4black(itr, itr3, color, eaten) {
      if (this.matrix[itr + 4] && this.matrix[itr + 4][itr3 - 4]) {
        if (
          this.matrix[itr + 3][itr3 - 3].children[0].classList[1] == eaten &&
          this.matrix[itr + 4][itr3 - 4].children[0].classList[1] != color &&
          this.matrix[itr + 4][itr3 - 4].children[0].classList[1] != eaten &&
          this.matrix[itr + 2][itr3 - 2].children[0].classList[1] != eaten &&
          this.matrix[itr + 1][itr3 - 1].children[0].classList[1] != color &&
          this.matrix[itr + 2][itr3 - 2].children[0].classList[1] != color &&
          this.matrix[itr + 1][itr3 - 1].children[0].classList[1]
        ) {
          this.matrix[itr + 4][itr3 - 4].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr + 4][itr3 - 4]);
          this.$store.commit("seti4", itr + 4);
          this.$store.commit("setj4", itr3 - 4);
          this.leftdiagonal2black = true;
        }
      }
    },
    checkdownleftby4dama(itr, itr3, color, eaten, damacolor) {
      if (this.matrix[itr + 4] && this.matrix[itr + 4][itr3 - 4]) {
        if (
          this.matrix[itr + 3][itr3 - 3].children[0].classList[1] == eaten &&
          this.matrix[itr + 4][itr3 - 4].children[0].classList[1] != color &&
          this.matrix[itr + 4][itr3 - 4].children[0].classList[1] !=
            damacolor &&
          this.matrix[itr + 4][itr3 - 4].children[0].classList[1] != eaten &&
          this.matrix[itr + 2][itr3 - 2].children[0].classList[1] != eaten &&
          this.matrix[itr + 2][itr3 - 2].children[0].classList[1] !=
            damacolor &&
          this.matrix[itr + 1][itr3 - 1].children[0].classList[1] != color &&
          this.matrix[itr + 1][itr3 - 1].children[0].classList[1] !=
            damacolor &&
          this.matrix[itr + 2][itr3 - 2].children[0].classList[1] != color &&
          this.matrix[itr + 1][itr3 - 1].children[0].classList[1]
        ) {
          this.matrix[itr + 4][itr3 - 4].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr + 4][itr3 - 4]);
          this.$store.commit("seti4", itr + 4);
          this.$store.commit("setj4", itr3 - 4);
          this.leftdiagonal2downdama = true;
        }
      }
    },
    checkuprightby4red(itr, itr3, color, eaten) {
      if (this.matrix[itr - 4] && this.matrix[itr - 4][itr3 + 4]) {
        if (
          this.matrix[itr - 3][itr3 + 3].children[0].classList[1] == eaten &&
          this.matrix[itr - 4][itr3 + 4].children[0].classList[1] != eaten &&
          this.matrix[itr - 4][itr3 + 4].children[0].classList[1] != color &&
          this.matrix[itr - 2][itr3 + 2].children[0].classList[1] != color &&
          this.matrix[itr - 1][itr3 + 1].children[0].classList[1] != color &&
          this.matrix[itr - 2][itr3 + 2].children[0].classList[1] != eaten &&
          this.matrix[itr - 1][itr3 + 1].children[0].classList[1]
        ) {
          this.matrix[itr - 4][itr3 + 4].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr - 4][itr3 + 4]);
          this.$store.commit("seti4", itr - 4);
          this.$store.commit("setj4", itr3 + 4);
          this.rightdiagonal2red = true;
        }
      }
    },
    checkuprightby4dama(itr, itr3, color, eaten, damacolor) {
      if (this.matrix[itr - 4] && this.matrix[itr - 4][itr3 + 4]) {
        if (
          this.matrix[itr - 3][itr3 + 3].children[0].classList[1] == eaten &&
          this.matrix[itr - 4][itr3 + 4].children[0].classList[1] != eaten &&
          this.matrix[itr - 4][itr3 + 4].children[0].classList[1] != color &&
          this.matrix[itr - 4][itr3 + 4].children[0].classList[1] !=
            damacolor &&
          this.matrix[itr - 2][itr3 + 2].children[0].classList[1] != color &&
          this.matrix[itr - 2][itr3 + 2].children[0].classList[1] !=
            damacolor &&
          this.matrix[itr - 1][itr3 + 1].children[0].classList[1] != color &&
          this.matrix[itr - 1][itr3 + 1].children[0].classList[1] !=
            damacolor &&
          this.matrix[itr - 2][itr3 + 2].children[0].classList[1] != eaten &&
          this.matrix[itr - 1][itr3 + 1].children[0].classList[1]
        ) {
          this.matrix[itr - 4][itr3 + 4].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr - 4][itr3 + 4]);
          this.$store.commit("seti4", itr - 4);
          this.$store.commit("setj4", itr3 + 4);
          this.rightdiagonal2updama = true;
        }
      }
    },
    checkdownrightby4black(itr, itr3, color, eaten) {
      if (this.matrix[itr + 4] && this.matrix[itr + 4][itr3 + 4]) {
        if (
          this.matrix[itr + 3][itr3 + 3].children[0].classList[1] == eaten &&
          this.matrix[itr + 4][itr3 + 4].children[0].classList[1] != color &&
          this.matrix[itr + 4][itr3 + 4].children[0].classList[1] != eaten &&
          this.matrix[itr + 2][itr3 + 2].children[0].classList[1] != eaten &&
          this.matrix[itr + 1][itr3 + 1].children[0].classList[1] != color &&
          this.matrix[itr + 2][itr3 + 2].children[0].classList[1] != color &&
          this.matrix[itr + 1][itr3 + 1].children[0].classList[1]
        ) {
          this.matrix[itr + 4][itr3 + 4].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr + 4][itr3 + 4]);
          this.$store.commit("seti4", itr + 4);
          this.$store.commit("setj4", itr3 + 4);
          this.rightdiagonal2black = true;
        }
      }
    },
    checkdownrightby4dama(itr, itr3, color, eaten, damacolor) {
      if (this.matrix[itr + 4] && this.matrix[itr + 4][itr3 + 4]) {
        if (
          this.matrix[itr + 3][itr3 + 3].children[0].classList[1] == eaten &&
          this.matrix[itr + 4][itr3 + 4].children[0].classList[1] != color &&
          this.matrix[itr + 4][itr3 + 4].children[0].classList[1] != eaten &&
          this.matrix[itr + 4][itr3 + 4].children[0].classList[1] !=
            damacolor &&
          this.matrix[itr + 2][itr3 + 2].children[0].classList[1] != eaten &&
          this.matrix[itr + 2][itr3 + 2].children[0].classList[1] !=
            damacolor &&
          this.matrix[itr + 1][itr3 + 1].children[0].classList[1] != color &&
          this.matrix[itr + 1][itr3 + 1].children[0].classList[1] !=
            damacolor &&
          this.matrix[itr + 2][itr3 + 2].children[0].classList[1] != color &&
          this.matrix[itr + 1][itr3 + 1].children[0].classList[1]
        ) {
          this.matrix[itr + 4][itr3 + 4].classList.add("highlighted");
          this.selectedarray.push(this.matrix[itr + 4][itr3 + 4]);
          this.$store.commit("seti4", itr + 4);
          this.$store.commit("setj4", itr3 + 4);
          this.rightdiagonal2downdama = true;
        }
      }
    },

    alertme(e, itr, itr3) {
      // var payload = { username: "mhmd", game: "2048", score: "20139" };
      // this.$store.commit("saveScore", payload);
      console.log(itr, itr3);
      if (this.matrix[itr][itr3].classList.contains("highlighted") == false) {
        for (let i in this.selectedarray) {
          this.selectedarray[i].classList.remove("highlighted");
        }
      }
      if (
        this.matrix[itr][itr3].children[0].classList[1] == "red" &&
        this.matrix[itr][itr3].children[0].classList[2] != "damared" &&
        this.matrix[itr][itr3].children[0].classList[2] != "damablack" &&
        this.redturn == true
      ) {
        var color = "red";
        var eaten = "black";
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

        this.checkuprightred(itr, itr3, color, eaten);
        this.checkupleftred(itr, itr3, color, eaten);
        this.checkuprightby2red(itr, itr3, color, eaten);
        this.checkupleftby2red(itr, itr3, color, eaten);
        this.checkupleftby4red(itr, itr3, color, eaten);
        this.checkuprightby4red(itr, itr3, color, eaten);
      }
      //!black;
      if (
        this.matrix[itr][itr3].children[0].classList[1] == "black" &&
        this.matrix[itr][itr3].children[0].classList[2] != "damared" &&
        this.matrix[itr][itr3].children[0].classList[2] != "damablack" &&
        this.blackturn == true
      ) {
        var color = "black";
        var eaten = "red";
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
        this.checkdownrightblack(itr, itr3, color, eaten);
        this.checkdownleftblack(itr, itr3, color, eaten);
        this.checkdownrightby2black(itr, itr3, color, eaten);
        this.checkdownleftby2black(itr, itr3, color, eaten);
        this.checkdownleftby4black(itr, itr3, color, eaten);
        this.checkdownrightby4black(itr, itr3, color, eaten);
      }
      //!black

      //!damared
      if (
        this.matrix[itr][itr3].children[0].classList[1] == "damared" &&
        this.redturn == true
      ) {
        this.matrix[itr][itr3].children[0].remove["red"];

        var eaten = "black";
        var damacolor = "damared";
        var tobeeaten = "damablack";
        this.$store.commit("setprevi", itr);
        this.$store.commit("setprevj", itr3);
        this.$store.commit("setcolor", this.color3);

        this.checkuprightdama(itr, itr3, "red", eaten, damacolor, tobeeaten);
        this.checkupleftdama(itr, itr3, "red", eaten, damacolor, tobeeaten);
        this.checkdownrightdama(itr, itr3, "red", eaten, damacolor, tobeeaten);
        this.checkdownleftdama(itr, itr3, "red", eaten, damacolor, tobeeaten);
        this.checkupleftby2dama(itr, itr3, "red", eaten, damacolor, tobeeaten);
        this.checkuprightby2dama(itr, itr3, "red", eaten, damacolor, tobeeaten);
        this.checkdownrightby2dama(
          itr,
          itr3,
          "red",
          eaten,
          damacolor,
          tobeeaten
        );
        this.checkdownleftby2dama(
          itr,
          itr3,
          "red",
          eaten,
          damacolor,
          tobeeaten
        );
        this.checkdownleftby4dama(
          itr,
          itr3,
          "red",
          eaten,
          damacolor,
          tobeeaten
        );
        this.checkdownrightby4dama(
          itr,
          itr3,
          "red",
          eaten,
          damacolor,
          tobeeaten
        );
        this.checkupleftby4dama(itr, itr3, "red", eaten, damacolor, tobeeaten);
        this.checkuprightby4dama(itr, itr3, "red", eaten, damacolor, tobeeaten);
      }
      //!damared

      //!damablack
      if (
        this.matrix[itr][itr3].children[0].classList[1] == "damablack" &&
        this.blackturn == true
      ) {
        this.matrix[itr][itr3].children[0].remove["black"];

        var eaten = "red";
        var damacolor = "damablack";
        var tobeeaten = "damared";
        this.$store.commit("setprevi", itr);
        this.$store.commit("setprevj", itr3);
        this.$store.commit("setcolor", this.color4);

        this.checkuprightdama(itr, itr3, "black", eaten, damacolor, tobeeaten);
        this.checkupleftdama(itr, itr3, "black", eaten, damacolor, tobeeaten);
        this.checkdownrightdama(
          itr,
          itr3,
          "black",
          eaten,
          damacolor,
          tobeeaten
        );
        this.checkdownleftdama(itr, itr3, "black", eaten, damacolor, tobeeaten);
        this.checkupleftby2dama(
          itr,
          itr3,
          "black",
          eaten,
          damacolor,
          tobeeaten
        );
        this.checkuprightby2dama(
          itr,
          itr3,
          "black",
          eaten,
          damacolor,
          tobeeaten
        );
        this.checkdownrightby2dama(
          itr,
          itr3,
          "black",
          eaten,
          damacolor,
          tobeeaten
        );
        this.checkdownleftby2dama(
          itr,
          itr3,
          "black",
          eaten,
          damacolor,
          tobeeaten
        );
        this.checkdownleftby4dama(
          itr,
          itr3,
          "black",
          eaten,
          damacolor,
          tobeeaten
        );
        this.checkdownrightby4dama(
          itr,
          itr3,
          "black",
          eaten,
          damacolor,
          tobeeaten
        );
        this.checkupleftby4dama(
          itr,
          itr3,
          "black",
          eaten,
          damacolor,
          tobeeaten
        );
        this.checkuprightby4dama(
          itr,
          itr3,
          "black",
          eaten,
          damacolor,
          tobeeaten
        );
      }
      //!damablack
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
        if (e.target.children[0].classList[1] == "damared") {
          e.target.children[0].classList.remove("damared");
        }
        if (e.target.children[0].classList[1] == "damablack") {
          e.target.children[0].classList.remove("damablack");
        }
        if (this.$store.getters.getcolor == "red") {
          e.target.children[0].classList.add("red");
          this.matrix[itr][itr1].children[0].classList.remove("red");
        } else if (this.$store.getters.getcolor == "black") {
          e.target.children[0].classList.add("black");
          this.matrix[itr][itr1].children[0].classList.remove("black");
        } else if (this.$store.getters.getcolor == "damared") {
          e.target.children[0].classList.add("damared");
          this.matrix[itr][itr1].children[0].classList.remove("damared");
        } else if (this.$store.getters.getcolor == "damablack") {
          e.target.children[0].classList.add("damablack");
          this.matrix[itr][itr1].children[0].classList.remove("damablack");
        }
        for (let j = 0; j < 8; j++) {
          if (e.target == this.matrix[0][j]) {
            if (
              !this.matrix[0][j].children[0].classList.contains("damablack")
            ) {
              e.target.children[0].classList.add("damared");
              this.matrix[0][j].children[0].classList.remove("red");
            }
            break;
          } else if (e.target == this.matrix[7][j]) {
            if (!this.matrix[7][j].children[0].classList.contains("damared")) {
              e.target.children[0].classList.add("damablack");
              this.matrix[7][j].children[0].classList.remove("black");
            }
            break;
          }
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
        for (let i in this.selectedarray) {
          this.selectedarray[i].classList.remove("highlighted");
        }
        if (
          this.$store.getters.geti4 != "" &&
          this.$store.getters.getj4 != ""
        ) {
          this.matrix[this.$store.getters.geti4][
            this.$store.getters.getj4
          ].classList.remove("highlighted");
        }

        this.replacedama1("black", e, itr, itr1, "red", "damared");
        this.replacedama1("red", e, itr, itr1, "black", "damablack");

        if (this.leftdiagonalred == true) {
          if (this.matrix[itr - 2] && this.matrix[itr - 2][itr1 - 2]) {
            if (e.target == this.matrix[itr - 2][itr1 - 2]) {
              this.matrix[itr - 1][itr1 - 1].children[0].classList.remove(
                "black"
              );
              this.matrix[itr - 1][itr1 - 1].children[0].classList.remove(
                "damablack"
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
              this.matrix[itr - 1][itr1 + 1].children[0].classList.remove(
                "damablack"
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
              this.matrix[itr + 1][itr1 - 1].children[0].classList.remove(
                "damared"
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
              this.matrix[itr + 1][itr1 + 1].children[0].classList.remove(
                "damared"
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
              this.matrix[itr - 3][itr1 - 3].children[0].classList.remove(
                "damablack"
              );
              this.matrix[itr - 1][itr1 - 1].children[0].classList.remove(
                "damablack"
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
              this.matrix[itr + 3][itr1 - 3].children[0].classList.remove(
                "damared"
              );
              this.matrix[itr + 1][itr1 - 1].children[0].classList.remove(
                "damared"
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
              this.matrix[itr - 3][itr1 + 3].children[0].classList.remove(
                "damablack"
              );
              this.matrix[itr - 1][itr1 + 1].children[0].classList.remove(
                "damablack"
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
              this.matrix[itr + 3][itr1 + 3].children[0].classList.remove(
                "damared"
              );
              this.matrix[itr + 1][itr1 + 1].children[0].classList.remove(
                "red"
              );
              this.matrix[itr + 1][itr1 + 1].children[0].classList.remove(
                "damared"
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
        (this.leftdiagonalupdama = false),
          (this.rightdiagonalupdama = false),
          (this.leftdiagonaldowndama = false),
          (this.rightdiagonaldowndama = false),
          (this.leftdiagonal2updama = false),
          (this.rightdiagonal2updama = false),
          (this.leftdiagonal2downdama = false),
          (this.rightdiagonal2downdama = false);

        if (this.redturn == true) {
          this.redturn = false;
          this.blackturn = true;
          this.msg = "Black";
        } else if (this.blackturn == true) {
          this.redturn = true;
          this.blackturn = false;
          this.msg = "Red";
        }
      }
      this.checkred();
      if (this.checkred() == false) {
        alert("Game over, Red player loses!");
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            this.matrix[i][j].classList.add("unclickable");
          }
        }
      }
      this.checkblack();
      if (this.checkblack() == false) {
        alert("Game over, Black player loses!");
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            this.matrix[i][j].classList.add("unclickable");
          }
        }
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
  transform: translate(-50%);
  justify-items: center;
}
.unclickable {
  pointer-events: none;
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
.damared {
  background: yellow;
}
.damablack {
  background: blue;
}
</style>
