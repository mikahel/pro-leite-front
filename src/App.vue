<template>
  <div id="nav">
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(85,9,121,1) 52%, rgba(0,212,255,1) 100%); 
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

html {
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(85,9,121,1) 52%, rgba(0,212,255,1) 100%); 
}
</style>
