<template>
  <section class="carousel-section">
    <div class="carousel-container" aria-label="Banner carousel">
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        :class="['carousel-slide', { active: currentSlide === index }]"
        :style="{ backgroundImage: `url('${slide.image}')` }"
      ></div>

      <div class="carousel-arrow prev" @click="prevSlide"><i class="fas fa-chevron-left"></i></div>
      <div class="carousel-arrow next" @click="nextSlide"><i class="fas fa-chevron-right"></i></div>

      <div class="carousel-dots">
        <div 
          v-for="(slide, index) in slides" 
          :key="index"
          :class="['carousel-dot', { active: currentSlide === index }]"
          @click="goToSlide(index)"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CarouselSection',
  data() {
    return {
      currentSlide: 0,
      slides: []
    }
  },
  created() {
    this.slides = [
      {
        image: this.$base + 'images/new-banners/sickcell-banner.png',
        content: null
      },
      {
        image: this.$base + 'images/new-banners/banner-1.png',
        content: {
          title: "Explore Karnataka's Natural Beauty",
          description: "Our mission covers the beautiful districts of Mysore, Chamarajanagar, and Kodagu"
        }
      },
      {
        image: this.$base + 'images/baby.jpeg',
        content: {
          title: "Reaching Remote Communities",
          description: "Bringing healthcare services to the most vulnerable populations"
        }
      },
      {
        image: this.$base + 'images/stand-pillau.jpeg',
        content: {
          title: "Cultural Heritage of Karnataka"
        }
      },
      {
        image: this.$base + 'images/vans-1.jpeg',
        content: {
          title: "Cultural Heritage of Karnataka"
        }
      }
    ]
  },
  mounted() {
    this.startAutoSlide()
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1
    },
    goToSlide(index) {
      this.currentSlide = index
    },
    startAutoSlide() {
      setInterval(() => {
        this.nextSlide()
      }, 5000)
    }
  }
}
</script>
