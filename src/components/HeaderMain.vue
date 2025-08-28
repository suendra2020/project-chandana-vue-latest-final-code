<template>
  <header class="mobile-header-top">
    <div class="container mobile-header">
      <div class="header-main">
        <div class="logo">
          <router-link to="/" class="logo-home">
          <img :src="$base + 'images/nsa.svg'" alt="National Sickle Cell Anemia Elimination Mission Logo" width="80" height="80">
          <div class="logo-text">
            <h1>PROJECT CHAnDAnA</h1>
            <p>National Sickle Cell Anemia Elimination Mission</p>
          </div>
          </router-link>
        </div>
        <nav id="main-nav" role="navigation" aria-label="Main navigation" class="headermain-nav">
    <div class="container">
      <ul class="main-menu">
        <li><router-link to="/" active-class="active">Home</router-link></li>
        <li><router-link to="/about" active-class="active">About Us</router-link></li>
        <li><router-link to="/vision" active-class="active">Vision</router-link></li>
        <li><router-link to="/teams" active-class="active">Teams</router-link></li>
        <li><router-link to="/activities" active-class="active">Activities</router-link></li>
        <li><router-link to="/reports" active-class="active">Reports</router-link></li>
        <li><router-link to="/events" active-class="active">Events</router-link></li>
        <li><router-link to="/contact" active-class="active">Contact Us</router-link></li>
      </ul>
    </div>
  </nav> 
        <!-- <div class="header-right">
          <div class="search-bar">
            <label for="search" class="visually-hidden">Search</label>
            <input type="text" id="search" v-model="searchQuery" placeholder="Search..." aria-label="Search">
            <button type="submit" @click="performSearch" aria-label="Submit search">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <div class="helpline">
            <a href="tel:08022358910" aria-label="Call helpline">
              <i class="fas fa-phone-alt"></i>
              <span><b>Helpline</b> 080-22358910</span>
            </a>
          </div>
          <div class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu" :aria-expanded="menuOpen" aria-controls="main-nav">
            <i class="fas fa-bars"></i>
          </div>
        </div> -->
         <div class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu" :aria-expanded="menuOpen" aria-controls="main-nav">
            <i class="fas fa-bars"></i>
          </div>
      </div>
    </div>
  </header>
  <header>

  <nav id="main-nav" role="navigation" v-if="menuOpen" aria-label="Main navigation" class="mobile-nav" :class="{ 'menu-open': menuOpen }">
    <div class="container">
      <ul  class="main-menu" :class="{ active: menuOpen }">
        <li><router-link to="/" active-class="active" @click="toggleMenu">Home</router-link></li>
        <li><router-link to="/about" active-class="active" @click="toggleMenu">About Us</router-link></li>
        <li><router-link to="/vision" active-class="active" @click="toggleMenu">Vision</router-link></li>
        <li><router-link to="/teams" active-class="active" @click="toggleMenu">Teams</router-link></li>
        <li><router-link to="/activities" active-class="active" @click="toggleMenu">Activities</router-link></li>
        <li><router-link to="/reports" active-class="active" @click="toggleMenu">Reports</router-link></li>
        <li><router-link to="/events" active-class="active" @click="toggleMenu">Events</router-link></li>
        <li><router-link to="/contact" active-class="active" @click="toggleMenu">Contact Us</router-link></li>
      </ul>
    </div>
  </nav>

  </header>
</template>

<script>
export default {
  name: 'HeaderMain',
  data() {
    return {
      searchQuery: '',
      menuOpen: false
    }
  },
  methods: {
    performSearch() {
      console.log('Searching for:', this.searchQuery)
      // Implement search functionality
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
      this.$emit('menu-toggle', this.menuOpen)
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}
</script>

