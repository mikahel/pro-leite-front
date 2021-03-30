<template>
    <div>
        <button class="custom-button" :style="cssVars">
            <!-- <router-link to="{path}">{{msg}}</router-link> -->
            <router-link :to="{ path: 'path' }">{{msg}}</router-link>
        </button>
    </div>
</template>

<script>
export default {
  name: "Buttom",
  props: {
    msg: String,
    path: String,
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
  .custom-button {
    background-color: var(--button-color);
    border: solid var(--button-color);
    border-radius: 10px;
    font-size: x-large;
    margin: 15px 0;
    min-width: 250px;
    padding: 5px 12px;
  }
  a {
    color: white;
    text-decoration: none;
  }
</style>