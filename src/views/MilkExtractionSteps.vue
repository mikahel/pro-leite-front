<template>
  <div>
    <Header />
    <ExtractionStepsList number="1" title="Prepare o frasco" :list="passo"/>
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
  },
  data () {
    return {
      passo: [
        {
          key: 1,
          text: 'Escolha um frasco de vidro com tampa plástica'
        },
        {
          key: 2,
          text: 'Retire possíveis rótulos'
        },
        {
          key: 3,
          text: 'Ferva o vidro e tampa numa panela com água'
        },
        {
          key: 4,
          text: 'Escorra a água, ponha frasco e tampa sobre um pano'
        },
        {
          key: 5,
          text: 'Quando estiver seco, estará pronto'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>