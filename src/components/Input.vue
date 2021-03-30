<template>
    <div class="input-container">
        <input type="text" :placeholder="placeholder" :id="id">
    </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    placeholder: String,
    id: String,
  },
};
</script>

<style scoped>
  .input-container input {
    width: 20rem;
    height: 4.3rem;
    padding: 0.2rem 1rem;
    border-radius: 10px;
    border: none;
    margin: 1rem 0;
    font-size: 22px;
  }
</style>