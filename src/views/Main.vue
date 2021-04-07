<template>
  <div class="main">
    <Header class="header"/>
    <div >
      <Button text="Como fazer a doação" path="/milk-extraction-steps"/>
      <Button text="Agendar coleta de leite" path="/main" customColor="#D381C6" />
    </div>
  </div>
</template>

<script>
  // @ts-ignore
  import Header from '@/components/Header.vue'
   // @ts-ignore
  import Button from '@/components/Button.vue'

  export default {
    name: "Main",
    components: {
      Header, Button
    }
  }
</script>

<style scoped>
  .main{
    flex: 1;
    display: flex;;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1.2rem;
  }
  .header{
    margin: 8rem 0 6rem;
  }
</style>