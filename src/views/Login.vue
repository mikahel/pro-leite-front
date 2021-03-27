<template>
  <div class="home">
    <img alt="Vue logo" src="../../public/img/proLeiteLogo.png" />
    
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
