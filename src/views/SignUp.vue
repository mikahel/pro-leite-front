<template>
  <div class="sign-up">
    <Header />
    <form>
      <router-view />
    </form>
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
  name: "SignUp",
  components: {
    Button, Input, Header
  },
};
</script>

<style scoped>
  .sign-up {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
</style>