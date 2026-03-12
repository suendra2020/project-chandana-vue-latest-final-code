<template>
  <section class="districts-section section" aria-labelledby="districts-heading">
    <div class="container">
      <h2 id="districts-heading" class="section-title">Our Project Districts</h2>

      <div class="districts-container">
        <router-link
          v-for="district in districts"
          :key="district.id"
          :to="{ path: '/reports', query: { district: district.slug } }"
          class="district-card"
        >
          <img :src="district.image" :alt="district.name">
          <h3>{{ district.name }}</h3>
        </router-link>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "DistrictsSection",
  data() {
    return {
      districts: [
        {
          id: 1,
          name: "Mysuru",
          slug: "mysuru",
          image: this.$base + "images/mysore/mysore-palace.jpg"
        },
        {
          id: 2,
          name: "Chamarajanagar",
          slug: "chamarajanagar",
          image: this.$base + "images/chamarajanagar/chamarajanagar-landscape.jpg"
        },
        {
          id: 3,
          name: "Kodagu",
          slug: "kodagu",
          image: this.$base + "images/kodagu/kodagu-waterfall.jpg"
        }
      ]
    }
  }
}
</script>