<template>
    <div>
        <button>
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
  },
};
</script>

<style scoped>

</style>