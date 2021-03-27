<template>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  background: rgb(129,211,211);
  background: -moz-linear-gradient(196deg, rgba(129,211,211,1) 0%, rgba(205,129,211,0.5) 100%);
  background: -webkit-linear-gradient(196deg, rgba(129,211,211,1) 0%, rgba(205,129,211,0.5) 100%);
  background: linear-gradient(196deg, rgba(129,211,211,1) 0%, rgba(205,129,211,0.5) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#81d3d3",endColorstr="#cd81d3",GradientType=1);
  height: 100vh;
  font-size: 16px;
}

#app {
  font-family: Quicksand, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
