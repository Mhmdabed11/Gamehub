<template>
    <div>
        <h1>Welcome to Gamehub, Please select a game from above and beat your Highscore.</h1>
        <img :src="image" >
    </div>
</template>

<script>
import image from "/Users/mohammadabed/gamehub/Gamehub/Frontend/gamehub/src/assets/liamneeson.jpg";
export default {
  name: "welcome",
  data() {
    return {
      image: image
    };
  },
  methods: {}
};
</script>
<style>
</style>
