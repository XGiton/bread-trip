<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  padding-top: 20px;
  width: 80%;
  margin: 0 auto;
  position: relative;
}
</style>
