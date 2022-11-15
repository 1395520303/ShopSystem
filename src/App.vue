<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './pages/home.vue'
import Nav from './components/nav.vue'
import SideBar from './components/sidebar.vue'
import Login from './pages/login.vue'

export default {
  name: 'App',
  components: {
    Home,Nav,SideBar,Login
  }
}
</script>

<style>

</style>
