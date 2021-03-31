<template>
  <div class="login">
    <Header />
    <form>
      <Input placeholder="Email" id="login-email"/>
      <Input placeholder="Senha" id="login-password"/>
      <CheckboxInput id="remember-password" labelText="Manter-me conectada"/>
      <span>Esqueci a minha senha</span>
      <Button text="Entrar" path="/main" :style="{'background-color': '#818ED3'}"/>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
// @ts-ignore
import Input from "@/components/Input"
// @ts-ignore
import Button from '@/components/Button.vue'
// @ts-ignore
import Header from '@/components/Header.vue'
// @ts-ignore
import CheckboxInput from '@/components/CheckboxInput.vue'

export default {
  name: "Login",
  components: {
    Button, Input, Header, CheckboxInput
  },
};
</script>

<style scoped>
  .login {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .login img {
    width: 11rem;
  }

  .login form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .login form > span {
    text-decoration: underline;
    margin: 1rem 0 2rem;
  }
</style>
