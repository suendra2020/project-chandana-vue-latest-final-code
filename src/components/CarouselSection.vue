<template>
  <section class="carousel-section">
    <div class="carousel-container" aria-label="Banner carousel">

      <!-- Slides -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="['carousel-slide', { active: currentSlide === index }]"
      >

        <!-- Image Slide -->
        <div
          v-if="!slide.type"
          class="slide-image"
          :style="{ backgroundImage: `url('${slide.image}')` }"
        ></div>

        <!-- Video Slide -->
  <video
    v-if="slide.type === 'video'"
    class="video-slide"
    autoplay
    muted
    loop
    playsinline
  >
    <source :src="slide.video" type="video/mp4" />
  </video>

      </div>

      <!-- Left Arrow -->
      <div class="carousel-arrow prev" @click="prevSlide">
        ❮
      </div>

      <!-- Right Arrow -->
      <div class="carousel-arrow next" @click="nextSlide">
        ❯
      </div>

      <!-- Dots -->
      <div class="carousel-dots">
        <div
          v-for="(slide, index) in slides"
          :key="'dot' + index"
          :class="['carousel-dot', { active: currentSlide === index }]"
          @click="goToSlide(index)"
        ></div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "CarouselSection",

  data() {
    return {
      currentSlide: 0,
      interval: null,

      slides: [

        /* Video Slide */
        {
          type: "video",
          video: "/images/chandana-video.mp4"
        },

        /* Image Slides */
        {
          image: "/images/new-banners/sickcell-banner.png"
        },
        {
          image: "/images/new-banners/banner-1.png"
        },
        {
          image: "/images/baby.jpeg"
        },
        {
          image: "/images/stand-pillau.jpeg"
        },
        {
          image: "/images/vans-1.jpeg"
        }

      ]
    }
  },

  mounted() {
    this.startAutoSlide()
  },

  beforeUnmount() {
    clearInterval(this.interval)
  },

  methods: {

    nextSlide() {
      const slide = this.slides[this.currentSlide]

      /* Stop auto slide if video is playing */
      if (slide.type === "video") return

      this.currentSlide =
        (this.currentSlide + 1) % this.slides.length
    },

    prevSlide() {
      this.currentSlide =
        this.currentSlide === 0
          ? this.slides.length - 1
          : this.currentSlide - 1
    },

    goToSlide(index) {
      this.currentSlide = index
    },

    startAutoSlide() {
      this.interval = setInterval(() => {
        this.nextSlide()
      }, 5000)
    }
  }
}
</script>

<style scoped>

.carousel-section{
  width:100%;
  position:relative;
}

.carousel-container{
  position:relative;
  width:100%;
  height:500px;
  overflow:hidden;
}

/* Slides */

.carousel-slide{
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  opacity:0;
  transition:opacity 0.8s ease;
}

.carousel-slide.active{
  opacity:1;
  z-index:1;
}

/* Image */

.slide-image{
  width:100%;
  height:100%;
  background-size:cover;
  background-position:center;
}

/* Video */

.video-slide{
  width:100%;
  height:100%;
  object-fit:cover;
}

/* Arrows */

.carousel-arrow{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  font-size:35px;
  color:white;
  cursor:pointer;
  z-index:5;
  padding:10px;
}

.carousel-arrow.prev{
  left:20px;
}

.carousel-arrow.next{
  right:20px;
}

/* Dots */

.carousel-dots{
  position:absolute;
  bottom:20px;
  left:50%;
  transform:translateX(-50%);
  display:flex;
  gap:10px;
}

.carousel-dot{
  width:12px;
  height:12px;
  background:#ccc;
  border-radius:50%;
  cursor:pointer;
}

.carousel-dot.active{
  background:white;
}

</style>