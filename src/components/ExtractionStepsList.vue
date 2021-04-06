<template>
  <div class="container">
    <h1>Passo {{number}}</h1>
    <h2>{{title}}</h2>
    <ul>
      <li v-for="item in list" :key="item.key">
        {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ExtractionStepsList",
    props: {
      number: String,
      title: String,
      list: Object,
    },
  }
</script>

<style scoped>
  .container {
    background-color: #D381C6;
    padding: 1rem 0.75rem;
    margin: 0;
    width: 95%;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    color: #FFFFFF;
  }

  .container h1 {
    font-size: 2.25rem;
    font-weight: 500;
    margin: 0 0 1rem;
  }

  .container h2 {
    margin: 0 0 1rem;
  }

  .container ul {
    margin: 0;
  }

  .container h2, .container li {
    font-size: 1.4rem;
    font-weight: 500;
  }

  .container li {
    text-align: start;
    margin-bottom: 1rem;
  }

  .container li:last-of-type {
    margin-bottom: 0;
  }
</style>