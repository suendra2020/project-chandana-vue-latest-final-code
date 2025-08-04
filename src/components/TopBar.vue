<template>
  <div class="top-bar">
      <div class="container">
            <div class="top-bar-content">
                    <div class="top-bar-left">
                              <span>Government of Karnataka</span>
                                      </div>
                                              <div class="top-bar-right">
                                                        <div class="font-size-controls" aria-label="Change font size">
                                                                    <span>Text Size:</span>
                                                                                <button class="font-size-btn" @click="decreaseFont" aria-label="Decrease font size">A-</button>
                                                                                            <button class="font-size-btn" @click="defaultFont" aria-label="Default font size">A</button>
                                                                                                        <button class="font-size-btn" @click="increaseFont" aria-label="Increase font size">A+</button>
                                                                                                                  </div>
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