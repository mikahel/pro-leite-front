<template>
  <div>
    <ExtractionStepsList :number="passo.passo" :title="passo.titulo" :list="passo.descricao"/>
    <Button 
      text="Voltar" 
      path="/milk-extraction-steps/page3" 
      :style="{
        'background-color': '#7CD15F', 
        'width': '9rem', 
        'height': '3rem',
        'align-self': 'flex-start'
      }"
    />
    <Button 
      text="Próximo" 
      path="/main" 
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
  name: "MilkExtStepsPage4",
  components: {
    ExtractionStepsList, Button
  },
  data () {
    return {
      passo: JsonFile[3]
    }
  }
}
</script>

<style scoped>

</style>