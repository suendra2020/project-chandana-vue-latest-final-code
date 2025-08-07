<template>
  <div class="top-bar">
      <div class="container">
            <div class="top-bar-content">
                    <div class="top-bar-left">
                              <div class="d-block text-start w-100">Government of Karnataka</div> <div class="header-right">
          <div class="search-bar">
            <label for="search" class="visually-hidden">Search</label>
            <input type="text" id="search" v-model="searchQuery" placeholder="Search..." aria-label="Search">
            <button type="submit" @click="performSearch" aria-label="Submit search">
              <i class="fas fa-search"></i>
            </button>
          </div>
          
          <div class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu" :aria-expanded="menuOpen" aria-controls="main-nav">
            <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
          </div>
        </div>
                                      </div>
                                              <div class="top-bar-right">
                                                <div class="helplines">
            <a href="tel:08022358910" aria-label="Call helpline">
              <i class="fas fa-phone-alt"></i>
              <span><b>Helpline</b> 080-22358910</span>
            </a>
          </div>
                                                        <!-- <div class="font-size-controls" aria-label="Change font size">
                                                                    <span>Text Size:</span>
                                                                                <button class="font-size-btn" @click="decreaseFont" aria-label="Decrease font size">A-</button>
                                                                                            <button class="font-size-btn" @click="defaultFont" aria-label="Default font size">A</button>
                                                                                                        <button class="font-size-btn" @click="increaseFont" aria-label="Increase font size">A+</button>
                                                                                                                  </div> -->
                                                                                                                            <!-- <a href="#" aria-label="Site Map">Site Map</a>
                                                                                                                                      <a href="#" aria-label="Accessibility Statement">Accessibility</a> -->
                                                                                                                                              </div>
                                                                                                                                                    </div>
                                                                                                                                                        </div>
                                                                                                                                                          </div>
                                                                                                                                                          </template>
                                                                                                                                                          
                                                                                                                                                          
                                                                                                                                                          <script>
                                                                                                                                                          export default {
                                                                                                                                                            data() {
                                                                                                                                                                return {
                                                                                                                                                                      baseFontSize: 16, // default in px
                                                                                                                                                                          };
                                                                                                                                                                            },
                                                                                                                                                                              mounted() {
                                                                                                                                                                                  document.documentElement.style.fontSize = `${this.baseFontSize}px`;
                                                                                                                                                                                    },
                                                                                                                                                                                      methods: {
                                                                                                                                                                                          increaseFont() {
                                                                                                                                                                                                if (this.baseFontSize < 24) {
                                                                                                                                                                                                        this.baseFontSize += 1;
                                                                                                                                                                                                                document.documentElement.style.fontSize = `${this.baseFontSize}px`;
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                          },
                                                                                                                                                                                                                              decreaseFont() {
                                                                                                                                                                                                                                    if (this.baseFontSize > 12) {
                                                                                                                                                                                                                                            this.baseFontSize -= 1;
                                                                                                                                                                                                                                                    document.documentElement.style.fontSize = `${this.baseFontSize}px`;
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                  defaultFont() {
                                                                                                                                                                                                                                                                        this.baseFontSize = 16;
                                                                                                                                                                                                                                                                              document.documentElement.style.fontSize = `${this.baseFontSize}px`;
                                                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                                                                    </script>
                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                    >