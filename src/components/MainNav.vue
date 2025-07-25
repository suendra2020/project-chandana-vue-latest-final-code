<template>
  <nav id="main-nav" role="navigation" aria-label="Main navigation">
    <div class="container">
      <ul class="main-menu">
        <li><router-link to="/" active-class="active">Home</router-link></li>
        <li><router-link to="https://projectchandana.com/about" active-class="active">About Us</router-link></li>
        <li><router-link to="https://projectchandana.com/vision" active-class="active">Vision</router-link></li>
        <li><router-link to="https://projectchandana.com/teams" active-class="active">Teams</router-link></li>
        <li><router-link to="https://projectchandana.com/activities" active-class="active">Activities</router-link></li>
        <li><router-link to="https://projectchandana.com/reports" active-class="active">Reports</router-link></li>
        <li><router-link to="https://projectchandana.com/events" active-class="active">Events</router-link></li>
        <li><router-link to="https://projectchandana.com/contact" active-class="active">Contact Us</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNav'
}
</script>

