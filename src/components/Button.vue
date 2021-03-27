<template>
    <button>
        <router-link :to={path} class="router-link">{{text}}</router-link>
    </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    path: String,
    color: String,
  },
};
</script>

<style scoped>
  button {
    height: 4rem;
    width: 18rem;
    border-radius: 10px;
    border: none;
    margin: 0.5rem 0;
    transition: filter 0.2s;
  }
  button:hover{
    filter: brightness(85%);
  }
  .router-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
  }
</style>