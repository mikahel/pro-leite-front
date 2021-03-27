<template>
  <div class="checkbox-input-container">
    <input type="checkbox" :id="id">
    <label 
    :for="id" 
    :style="textDecoration ? 'text-decoration:underline' : 'text-decoration:none'"
    >
      {{labelText}}
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckboxInput",
  props: {
    labelText: String,
    textDecoration: Boolean,
    id: String,
  },
};
</script>

<style scoped>
  .checkbox-input-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem 0;
  }

  .checkbox-input-container input {
    -ms-transform: scale(1.4); /* IE */
    -moz-transform: scale(1.4); /* FF */
    -webkit-transform: scale(1.4); /* Safari and Chrome */
    -o-transform: scale(1.4); /* Opera */
    transform: scale(1.4);
    margin: 0;
  }

  .checkbox-input-container label {
    margin-left: 0.8rem;
  }
</style>