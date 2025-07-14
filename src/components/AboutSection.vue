<template>
  <section id="about" class="section" aria-labelledby="about-heading">
    <div class="container">
      <h2 id="about-heading" class="section-title">Project CHAnDAnA</h2>
      <div class="about-content">
        <div class="about-text">
          <p>Project CHAnDAnA is a comprehensive healthcare mission to eliminate Sickle Cell Anemia. It is a combined effort of IOCL (Indian Oil), Govt of Karnataka, and the Indian Institute of Science (Govt institute).</p>
          <p>The project aims to screen approximately 2.56 lakh tribal individuals over two years to identify and manage cases of sickle cell anaemia in Mysuru, Kodagu, and Chamarajanagar districts.</p>
          <router-link to="/about" class="btn btn-secondary" role="button">Read More</router-link>
        </div>
        <div class="about-image">
          <img :src="`${$base}images/banner-sai.png`" alt="MOU Exchange Ceremony between government officials and partners">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

