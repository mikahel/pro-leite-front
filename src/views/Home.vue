<template>
  <div class="home">
    <img class="main-logo" alt="Vue logo" src="../../public/img/proLeiteLogo.png" />
    <div class="buttons-container">
      <Buttom msg="Cadastre-se" customColor="#D381C6" />
      <Buttom msg="Entrar" path="/login" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Buttom from "../components/Buttom"

export default {
  name: "Home",
  components: {
    Buttom,
  },
};
</script>

<style scoped>
  .main-logo {
    margin: 15px 0;
  }
  .buttons-container {
    display: flex;
    flex-direction: column;
  }
</style>
