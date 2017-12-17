<template>
  <div class="app-wrapper">
      <nav-bar></nav-bar>
      <router-view></router-view>
  </div>
</template>

<script>
import navBar from './components/Navbar'
export default {
  name: 'layout',
  components: {
    navBar
  },
  computed: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
