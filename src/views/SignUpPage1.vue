<template>
  <div class="sign-up-page1">
    <Input placeholder="Nome" id="sign-up-name"/>
    <Input placeholder="Email" id="sign-up-email"/>
    <Input placeholder="Senha" id="sign-up-password"/>
    <Input placeholder="Endereço" id="sign-up-address"/>
    <Input placeholder="Telefone" id="sign-up-phone"/>
    <Button 
      text="Próximo" 
      path="/signup/page2" 
      :style="{
        'background-color': '#7CD15F', 
        'width': '9rem', 
        'height': '3rem',
        'align-self': 'flex-end'
      }"
    />
  </div>
</template>

<script>
// @ts-ignore
import Button from "@/components/Button.vue"
// @ts-ignore
import Input from '@/components/Input.vue'
// @ts-ignore
import Header from '@/components/Header.vue'

export default {
  name: "SignUpPage1",
  components: {
    Button, Input, Header
  },
};
</script>

<style scoped>
  .sign-up-page1 {
    display: flex;
    flex-direction: column;
  }
</style>