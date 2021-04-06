<template>
  <div class="container">
    <Header/>
    <router-view />
  </div>
</template>

<script>
// @ts-ignore
import Header from '../components/Header.vue';
// @ts-ignore
import ExtractionStepsList from '../components/ExtractionStepsList.vue';

export default {
  name: "MilkExtractionSteps",
  components: {
    Header, ExtractionStepsList
  }
}
</script>

<style scoped>
  .container {
    padding-top: 1rem;
  }
</style>