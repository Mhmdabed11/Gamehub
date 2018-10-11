<template>
    <div >
        <div class="login">
            <form action="">
                <label for="username">Username</label><br>
                <input type="text" name="username" placeholder="ex. Jon Doe"> <br>
                <label for="password">Password</label><br>
                <input type="password" name="password">
                <input type="submit" value="Log in">
                <p>Don't have an account?</p>
                <button v-on:click="signup">Register</button>
            </form>
        </div>
        <div class="signup">
            <form action="">
                <label for="username">Username</label><br>
                <input type="text" name="username" placeholder="ex. Jon Doe">
                <label for="password">Password</label><br>
                <input type="password" name="password">
                 <label for="repeatpass">Repeat Password</label><br>
                <input type="password" name="repeatpass" >
                <input type="submit" value="Sign up">
                <a class="terms">Terms and Conditions of Use</a>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    signup() {
      document.getElementsByClassName("signup")[0].style.display = "block";
      document.getElementsByClassName("login")[0].style.display = "none";
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.terms {
  font-size: 12px;
}
label {
  color: black;
  float: left;
  margin-left: 4%;
}
.login {
  background-color: rgb(239, 239, 239);
  width: 350px;
  height: 400px;
  margin-top: 10%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.signup {
  display: none;
  background-color: rgb(239, 239, 239);
  width: 350px;
  height: 400px;
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

input[type="submit"] {
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

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>

