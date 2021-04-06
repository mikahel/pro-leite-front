<template>
  <div>
    <ExtractionStepsList :number="passo.passo" :title="passo.titulo" :list="passo.descricao"/>
    <Button 
      text="Voltar" 
      path="/main" 
      :style="{
        'background-color': '#7CD15F', 
        'width': '9rem', 
        'height': '3rem',
        'align-self': 'flex-start'
      }"
    />
    <Button 
      text="Próximo" 
      path="/milk-extraction-steps/page2" 
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
import ExtractionStepsList from '../components/ExtractionStepsList.vue';
import JsonFile from '../assets/passosDoacao.json';
import Button from "@/components/Button.vue"

export default {
  name: "MilkExtStepsPage1",
  components: {
    ExtractionStepsList, Button
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