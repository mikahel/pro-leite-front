<template>
  <div class="sign-up-page2">
    <label for="sign-up-sickness-list">Você possui alguma doença?</label>
    <Input placeholder="" id="sign-up-sickness-list"/>
    <label for="sign-up-medication-list">Você toma algum remédio?</label>
    <Input placeholder="" id="sign-up-medication-list"/>
    <CheckboxInput 
      id="terms-of-service" 
      labelText="Concordo com os termos de uso" 
      textDecoration="true"
    />
    <Button 
      text="Cadastrar"
      path="/signup/2" 
      :style="{
        'background-color': '#7CD15F',
        'align-self': 'center'
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
// @ts-ignore
import CheckboxInput from '@/components/CheckboxInput.vue'

export default {
  name: "SignUpPage2",
  components: {
    Button, Input, Header, CheckboxInput
  },
};
</script>

<style scoped>
  .sign-up-page2 {
    display: flex;
    flex-direction: column;
  }

  .sign-up-page2 label {
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 40%);
  }
</style>