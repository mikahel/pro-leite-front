<template>
  <div class="container">
    <ExtractionStepsList :number="passo.passo" :title="passo.titulo" :list="passo.descricao" class="steps-card"/>
    <div class="button-container">
      <Button 
        text="Voltar" 
        path="/milk-extraction-steps/page3" 
        :style="{
          'background-color': '#818ED3', 
          'width': '9rem', 
          'height': '3rem',
        }"
      />
      <Button 
        text="Próximo" 
        path="/main" 
        :style="{
          'background-color': '#7CD15F', 
          'width': '9rem', 
          'height': '3rem',
        }"
      />
    </div>
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
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .steps-card {
    margin-top: 3rem;
  }
  
  .button-container {
    display: flex;
    width: 95%;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }
</style>