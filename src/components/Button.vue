<template>
    <button :style="String(cssVars)">
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
    customColor: {
      type: String,
      default: "#818ED3"
    }
  },
  computed: {
    // custom css vars go here
    cssVars() {
      return {
        '--button-color': this.customColor
      }
    }
  }
};
</script>

<style scoped>
  button {
    background-color: var(--button-color);
    border: solid var(--button-color);
    height: 4rem;
    width: 18rem;
    border-radius: 10px;
    border: none;
    margin: 0.5rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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