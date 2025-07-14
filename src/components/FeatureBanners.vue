<template>
  <section class="feature-banners" aria-label="Key features">
    <!-- Banner 1: What is Sickle Cell Anemia -->
    <div class="feature-banner" id="banner-1" style="background-color: var(--primary-color);" aria-labelledby="banner1-heading">
      <div class="container">
        <div class="banner-content">
          <h2 id="banner1-heading">What is Sickle Cell Anemia?</h2>
          <div class="banner-flex">
            <div class="banner-text">
              <p>A genetic disorder affecting hemoglobin in red blood cells, leading to various health complications such as anaemia, acute and chronic pain, infections, and more.</p>
              <!-- <a href="#" class="btn btn-outline" role="button">Understand the Disease</a> -->
            </div>
            <div class="banner-image">
              <img :src="$base + 'images/blood.jpeg'" alt="Comparison of normal round red blood cells and crescent-shaped sickle cells">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Banner 2: Project Impact -->
    <div class="feature-banner" id="banner-2" style="background-color: var(--secondary-color);" aria-labelledby="banner2-heading">
      <div class="container">
        <div class="banner-content">
          <h2 id="banner2-heading">Project Impact</h2>
          <div class="stats-container">
            <div class="stat-item">
    <span class="stat-number" aria-label="4567 total tests">4567</span>
    <span class="stat-label">Tests Conducted</span>
    <span class="stat-growth">1234321</span>
  </div>
  <div class="stat-item">
    <span class="stat-number" aria-label="3 districts">4</span>
    <span class="stat-label">Target Districts</span>
  </div>
  <div class="stat-item">
    <span class="stat-number1" aria-label="2.56 lakh target population">2.56 L</span>
    <span class="stat-label">Target Population</span>
  </div>
  <div class="stat-item">
    <span class="stat-number1" aria-label="2.56 lakh target population">1.3 L</span>
    <span class="stat-label">Population Covered</span>
  </div>
          </div>
          <router-link to="/reports" class="btn btn-outline" role="button">View Our Progress</router-link>
        </div>
      </div>
    </div>

    <!-- Banner 3: Technology Innovation -->
    <div class="feature-banner" id="banner-3" style="background-color: var(--primary-color);" aria-labelledby="banner3-heading">
      <div class="container">
        <div class="banner-content">
          <h2 id="banner3-heading">Technology Innovation</h2>
          <div class="banner-flex">
            <div class="banner-text">
              <p>In collaboration with the Indian Institute of Science (IISc), a new 'Deep Science based technology (HPOS) device' has been developed for rapid on-the-spot diagnosis, providing results within 15 minutes.</p>
              <!-- <a href="#" class="btn btn-outline" role="button">Discover Our Technology</a> -->
            </div>
            <div class="banner-image">
              <img :src="$base + 'images/hpcs.png'" alt="Healthcare professional using the HPOS device for rapid blood testing">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Banner 4: Community Outreach -->
    <div class="feature-banner" id="banner-4" style="background-color: var(--secondary-color);" aria-labelledby="banner4-heading">
      <div class="container">
        <div class="banner-content">
          <h2 id="banner4-heading">Community Outreach</h2>
          <div class="banner-flex">
            <div class="banner-text mb-4">
              <p class="quote">"The first step to healing is awareness. Knowledge is the best defense."</p>
              <p>Our awareness programs educate communities about Sickle Cell Anemia, identify patients, and provide free testing and treatment.</p>
              <router-link to="/events" class="btn btn-outline" role="button">Join Our Awareness Programs</router-link>
            </div>
            <div class="banner-image">
              <img :src="$base + 'images/students.jpg'" alt="Healthcare professional conducting an awareness session in a rural village">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Banner 5: Preventive Measures -->
    <div class="feature-banner" id="banner-5" style="background-color: var(--primary-color);" aria-labelledby="banner5-heading">
      <div class="container">
        <div class="banner-content">
          <h2 id="banner5-heading">Preventive Measures</h2>
          <div class="banner-flex">
            <div class="banner-text mb-4">
              <ul class="measures-list" aria-label="List of preventive measures">
                <li>Awareness campaigns and workshops</li>
                <li>Screening and Early Detection</li>
                <li>Genetic Counseling and Education</li>
                <li>Mobile Screening and testing camps</li>
                <li>Medical Treatment and Management</li>
              </ul>
              <router-link to="/activities" class="btn btn-outline" role="button">Explore Our Activities</router-link>
            </div>
            <div class="banner-image">
              <img :src="$base + 'images/awe-1.jpg'" alt="Infographic showing five preventive measures for sickle cell anemia">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureBanners',
  data() {
    return {
      animatedStats: {
        tests: 0,
        districts: 0,
        population: '0'
      },
      targetStats: {
        tests: 4567,
        districts: 3,
        population: '2.56L'
      }
    }
  },
  mounted() {
    this.animateStats()
  },
  methods: {
    animateStats() {
      // Animate tests count
      let testsCount = 0
      const testsInterval = setInterval(() => {
        testsCount += 50
        this.animatedStats.tests = testsCount
        if (testsCount >= this.targetStats.tests) {
          this.animatedStats.tests = this.targetStats.tests
          clearInterval(testsInterval)
        }
      }, 20)

      // Animate districts count
      let districtsCount = 0
      const districtsInterval = setInterval(() => {
        districtsCount += 1
        this.animatedStats.districts = districtsCount
        if (districtsCount >= this.targetStats.districts) {
          this.animatedStats.districts = this.targetStats.districts
          clearInterval(districtsInterval)
        }
      }, 500)

      // Set population after delay
      setTimeout(() => {
        this.animatedStats.population = this.targetStats.population
      }, 1500)
    }
  }
}
</script>

