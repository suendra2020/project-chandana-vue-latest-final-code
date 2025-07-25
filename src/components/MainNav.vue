<template>
  <nav id="main-nav" role="navigation" aria-label="Main navigation">
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
</template>

<script>
export default {
  name: 'MainNav'
}
</script>

