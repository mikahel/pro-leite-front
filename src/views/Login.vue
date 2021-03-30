<template>
  <div class="home">
    <img alt="Vue logo" src="../../public/img/proLeiteLogo.png" />
    <form class="buttons-container" action="/action_page.php">
      <input placeholder="E-mail" type="text" id="femail" name="femail">
      <input placeholder="Senha" type="password" id="fpassword" name="fpassword">
      <input type="submit" value="Submit">
    </form>
    <Buttom msg="Entrar" />
  </div>
</template>

<script>
// @ is an alias to /src
import Buttom from "../components/Buttom"

export default {
  name: "Login",
  components: {
    Buttom,
  },
};
</script>

<style scoped>
  .buttons-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    text-align-last: center;
    width: 300px;
  }
  input {
    border-radius: 10px;
  }
</style>
