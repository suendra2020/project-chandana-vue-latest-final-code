<template>
 <b-container id="partners" class="about-section container">
        <h2>Our Partners</h2>
        <p>Project CHAnDAnA is a collaborative effort between government agencies, academic institutions, and corporate partners:</p>
        <b-row class="partners-logo-container">
          <b-col v-for="(partner, index) in partners" :key="index" cols="6" md="3" class="partner-logo">
            <img :src="partner.img" :alt="partner.alt" class="img-fluid">
          </b-col>
        </b-row>
      </b-container>
</template>

<script>
export default {
  name: 'PartnersSection',
  data() {
    return {
        partners: [
      { img: this.$base + 'images/healthmission.png', alt: 'National Sickle Cell Anemia Elimination Mission' },
      { img: this.$base + 'images/karnatka.png', alt: 'Government of Karnataka' },
      { img: this.$base + 'images/indianoil-logo.png', alt: 'IndianOil Aarogyam' },
      { img: this.$base + 'images/isim.png', alt: 'Indian Institute of Science' },
    ],
    }
  }
}
</script>

