<template>
  <div class="home">
    <img alt="Pro Leite" src="@/assets/proLeiteLogo.png" />
    <Button text="Cadastre-se" path="/signup" customColor="#D381C6" />
    <Button text="Entrar" path="/login" />
  </div>
</template>

<script>
// @ is an alias to /src
// @ts-ignore
import Button from "@/components/Button.vue"

export default {
  name: "Home",
  components: {
    Button,
  },
};
</script>

<style scoped>
  .home {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 90%;
    align-items: center;
    justify-content: center;
  }

  .home img {
    margin-bottom: 2.3rem;
  }
</style>
