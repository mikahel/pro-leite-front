<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
// @ts-ignore
import Header from '../components/Header.vue';
// @ts-ignore
import ExtractionStepsList from '../components/ExtractionStepsList.vue';
import JsonFile from '../assets/passosDoacao.json';

export default {
  name: "MilkExtractionSteps",
  components: {
    Header, ExtractionStepsList
  },
  data () {
    return {
      passo: JsonFile[0]
    }
  }
}
</script>

<style scoped>

</style>