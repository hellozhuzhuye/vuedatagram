<template>
  <div id="app">
    <el-header>
      <NavMenu></NavMenu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu";

export default {
  name: 'App',
  components: {
    NavMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
