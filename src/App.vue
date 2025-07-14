<template>
  <div id="app">
    <TopBar />
    <HeaderMain />
    <MainNav />
    <!-- <Breadcrumb /> -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import HeaderMain from './components/HeaderMain.vue'
import MainNav from './components/MainNav.vue'
// import Breadcrumb from './components/Breadcrumb.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    HeaderMain,
    MainNav,
    Footer
  }
}
</script>

<style>
/* Global styles will be loaded from CSS files in public folder */
</style>

