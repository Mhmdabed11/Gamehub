<template>
    <div >
        <div class="signup">
           
                <label for="username" >Username</label><br>
                <input type="text" v-model="username" name="username" placeholder="ex. Jon Doe"><br>
                <label for="password" >Password</label><br>
                <input type="password" v-model="password" name="password"> <br>
                <button class="btnsignup" v-on:click="signup"  type="submit">Sign up</button>
                <p v-bind:class="{err:true, errshow:wrong}">User Already Exists</p>
                <a class="terms">Terms and Conditions of Use</a>
                <br>
                <a href="#/login">Log in</a>
           
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "signup",
  data() {
    return {
      username: "",
      password: "",
      wrong: true
    };
  },
  methods: {
    signup() {
      let ref = this;
      axios({
        method: "post",
        url: "http://localhost:8888/signup",
        data: {
          username: this.username,
          password: this.password
        },
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(function(response) {
          console.log(response);
          ref.wrong = true;
          ref.$router.push({ name: "login" });
        })
        .catch(function(error) {
          ref.wrong = false;
        });
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.err {
  font-size: 10px;
  color: red;
}
.errshow {
  display: none;
}
.terms {
  font-size: 12px;
}
label {
  color: black;
  float: left;
  margin-left: 4%;
}

.signup {
  background-color: rgb(239, 239, 239);
  width: 350px;
  height: 375px;
  margin-top: 10%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
input[type="text"],
select {
  width: 90%;
  margin-left: 4%;
  padding: 12px 20px;
  margin-top: 30px;
  display: block;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type="password"] {
  width: 90%;
  margin-left: 4%;
  padding: 12px 20px;
  margin-top: 20px;
  display: block;
  border-radius: 4px;
  box-sizing: border-box;
}

.btnsignup {
  width: 90%;
  background-color: #4caf50;
  color: white;
  display: block;
  padding: 12px 20px;
  margin-top: 30px;
  margin-left: 4%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btnsignup:hover {
  background-color: #45a049;
}
</style>

