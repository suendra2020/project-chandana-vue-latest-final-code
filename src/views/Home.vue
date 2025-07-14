<template>
  <div>
    <AlertSection />
    <CarouselSection />    
    <AboutSection />
    <FeatureBanners />
    <PartnersSection />
    <DistrictsSection />
    <AwarenessSection />
  </div>
</template>

<script>
import CarouselSection from '../components/CarouselSection.vue'
import AlertSection from '../components/AlertSection.vue'
import AboutSection from '../components/AboutSection.vue'
import FeatureBanners from '../components/FeatureBanners.vue'
import PartnersSection from '../components/PartnersSection.vue'
import DistrictsSection from '../components/DistrictsSection.vue'
import AwarenessSection from '../components/AwarenessSection.vue'

export default {
  name: 'Home',
  components: {
    CarouselSection,
    AlertSection,
    AboutSection,
    FeatureBanners,
    PartnersSection,
    DistrictsSection,
    AwarenessSection
  }
}
</script>

