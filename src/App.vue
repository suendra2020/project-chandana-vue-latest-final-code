<template>
  <div id="app">
    <div class="sticky-wrapper">
    <TopBar />
    <HeaderMain />
    <MainNav />
    </div>
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
    // MainNav,
    Footer
  }
}
</script>

<style>
/* Global styles will be loaded from CSS files in public folder */
/* Example for App.vue or a global CSS file */
.sticky-wrapper {
  position: sticky;
  top: 0;
  z-index: 999; /* make sure it stays above other content */
}
</style>

