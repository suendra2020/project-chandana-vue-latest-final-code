<template>
  <div class="page-content">
    <div class="container">
      <div class="events-programs">
    <h1 class="page-title">Events & Programs</h1>

    <section class="events-intro">
      <p>
        Project CHAnDAnA organizes various events and programs to raise awareness about
        Sickle Cell Anemia, provide screening services, and engage with communities.
        Check out our upcoming events and past activities.
      </p>
    </section>

    <div class="report-card1">
      <!-- Optional: add image if needed -->
      <!-- <img src="@/assets${this.$base}images/reports.png" alt="Annual Progress Report 2024" class="report-image"> -->

      <div class="report-content1">
        <div class="report-meta1">
          <h3>
            <a
              href="https://drive.google.com/drive/u/0/folders/1Gwr9HbhXeA0o4LOjSfwGP7x4mlv5ZxDN"
              class="btn btn-outline drive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fas fa-cloud"></i>
              OneDrive access to all information regarding Project CHAnDAnA
            </a>
          </h3>
        </div>

        <!-- Optional Actions -->
        <!--
        <div class="report-actions">
          <a href="#" class="btn btn-outline"><i class="fas fa-eye"></i> View</a>
          <a href="#" class="btn btn-primary"><i class="fas fa-download"></i> Download</a>
        </div>
        -->
      </div>
    </div>
  </div>
      <div class="accordion-gallery">
    <div
      v-for="(section, index) in gallerySections"
      :key="index"
      class="content-1"
    >
      <button class="collapsible" @click="toggleSection(index)">
        {{ section.title }}
      </button>

      <div class="content" :class="{ open: openSection === index }">
        <div class="gallery-grid">
          <img
            v-for="(img, i) in section.images"
            :key="i"
            :src="img.src"
            :alt="img.alt"
          />
        </div>
      </div>
    </div>
  </div>

    <section class="partners-section">
      <h2>Our Events Partners</h2>
      <div class="partners-logo-container">
        <div
          class="partner-logo"
          v-for="partner in partners"
          :key="partner.alt"
        >
          <img :src="partner.logo" :alt="partner.alt" />
        </div>
      </div>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "events",
  data() {
    return {
      openSection: 0, // Initially open the first section
      gallerySections: [
        {
          title: "Command Center Team",
          images: [
            { src: this.$base + "images/cmd-1.png", alt: "Command Center 1" },
            { src: this.$base + "images/cmd-2.png", alt: "Command Center 2" },
            { src: this.$base + "images/cmd-3.png", alt: "Command Center 3" },
            { src: this.$base + "images/cmd-4.png", alt: "Command Center 4" },
            { src: this.$base + "images/cmd-5.png", alt: "Command Center 5" },
            { src: this.$base + "images/cmd-6.png", alt: "Command Center 6" },
          ],
        },
        {
          title: "Genetic Counseling and Education",
          images: [
            { src: this.$base + "images/gent-1.png", alt: "Genetic Counseling 1" },
            { src: this.$base + "images/gent-2.png", alt: "Genetic Counseling 2" },
            { src: this.$base + "images/gent-3.png", alt: "Genetic Counseling 3" },
            { src: this.$base + "images/gent-4.png", alt: "Genetic Counseling 4" },
            { src: this.$base + "images/gent-5.png", alt: "Genetic Counseling 5" },
            { src: this.$base + "images/gent-6.png", alt: "Genetic Counseling 6" },
          ],
        },
        {
          title: "Awareness Campaigns and Workshops",
          images: [
            { src: this.$base + "images/awe-1.png", alt: "Campaign 1" },
            { src: this.$base + "images/awe-2.png", alt: "Campaign 2" },
            { src: this.$base + "images/awe-3.png", alt: "Campaign 3" },
            { src: this.$base + "images/awe-4.png", alt: "Campaign 4" },
            { src: this.$base + "images/awe-5.png", alt: "Campaign 5" },
            { src: this.$base + "images/awe-6.png", alt: "Campaign 6" },
          ],
        },
        {
          title: "Health Camps and On-the-Spot Diagnosis Drives",
          images: [
            { src: this.$base + "images/ht-1.png", alt: "Diagnosis 1" },
            { src: this.$base + "images/ht-2.png", alt: "Diagnosis 2" },
            { src: this.$base + "images/ht-3.png", alt: "Diagnosis 3" },
            { src: this.$base + "images/ht-4.png", alt: "Diagnosis 4" },
            { src: this.$base + "images/ht-5.png", alt: "Diagnosis 5" },
            { src: this.$base + "images/ht-6.png", alt: "Diagnosis 6" },
          ],
        },
      ],
      partners: [
       { logo: this.$base + "images/healthmission.png", alt: "National Sickle Cell Anemia Elimination Mission" },
        { logo: this.$base + "images/karnatka.png", alt: "Government of Karnataka" },
        { logo: this.$base + "images/indianoil-logo.png", alt: "IndianOil Aarogyam" },
        { logo: this.$base + "images/isim.png", alt: "Indian Institute of Science" },
      ]
    };
  },
  methods: {
    toggleSection(index) {
      this.openSection = this.openSection === index ? -1 : index;
    },
  },
};
</script>





  <style>
        .event-card {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            margin-bottom: 30px;
            transition: transform 0.3s ease;
        }
        
        .event-card:hover {
            transform: translateY(-5px);
        }
        
        .event-image {
            width: 100%;
            object-fit: cover;
        }
        
        .event-content {
            padding: 25px;
        }
        
        .event-content h3 {
            color: var(--primary-color);
            margin-bottom: 15px;
        }
        
        .event-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 15px;
        }
        
        .event-meta-item {
            display: flex;
            align-items: center;
            color: var(--secondary-color);
            font-size: 0.9rem;
        }
        
        .event-meta-item i {
            margin-right: 5px;
        }
        
        .event-actions {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }
        
        .event-actions .btn {
            flex: 1;
            text-align: center;
            padding: 8px 12px;
        }
        
        .event-tabs {
            display: flex;
            border-bottom: 2px solid #e9ecef;
            margin-bottom: 30px;
        }
        
        .event-tab {
            padding: 15px 25px;
            cursor: pointer;
            font-weight: bold;
            position: relative;
        }
        
        .event-tab.active {
            color: var(--primary-color);
        }
        
        .event-tab.active::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--primary-color);
        }
        
        .event-calendar {
            margin-bottom: 40px;
        }
        
        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }
        
        .calendar-nav {
            display: flex;
            gap: 10px;
        }
        
        .calendar-nav button {
            background-color: transparent;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 5px 10px;
            cursor: pointer;
        }
        
        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 5px;
        }
        
        .calendar-day-header {
            text-align: center;
            font-weight: bold;
            padding: 10px;
        }
        
        .calendar-day {
            border: 1px solid #e9ecef;
            padding: 10px;
            min-height: 80px;
            position: relative;
        }
        
        .calendar-day.has-event {
            background-color: rgba(var(--primary-color-rgb), 0.1);
        }
        
        .calendar-day-number {
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 0.8rem;
            color: #6c757d;
        }
        
        .calendar-event-dot {
            display: block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: var(--primary-color);
            margin-top: 5px;
        }



        .collapsible {
      /* background: linear-gradient(90deg, #1c8f5f, #68b283); */
      color: white;
      padding: 15px;
      border: none;
      width: 100%;
      text-align: left;
      outline: none;
      font-size: 1.1rem;
      font-weight: bold;
      border-radius: 8px;
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }
    .collapsible:after {
      content: '+';
      font-size: 1.5rem;
    }
    .collapsible.active:after {
      content: '-';
    }
    .content {
      padding: 0 15px;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
      background-color: white;
      border-radius: 0 0 12px 12px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.08);
      margin-bottom: 20px;
    }
    .content.open {
      padding: 20px 15px;
      max-height: 5000px;
      transition: max-height 0.5s ease-in;
    }
    .team-grid, .gallery-grid {
          display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 30px;
    }
    .person-card {
      background: #f0f8f6;
      border-radius: 8px;
      padding: 10px;
      flex: 1 1 150px;
      text-align: center;
      min-width: 130px;
    }
    .person-card img, .gallery-grid img {

      width: 100%;
    border-radius: 8px;
    object-fit: cover;
    height: 250px;
    background: #e5eff6;
    }
    .person-card img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin-bottom: 8px;
    }
    .person-name { font-weight: bold; margin-bottom: 2px; }
    .person-role { font-size: 0.85rem; color: #444; }
    h3 { margin-top: 1.5rem; font-size: 1.2rem; color: #1c4d3f; }

    @media (max-width: 768px) {
      .team-grid, .gallery-grid { flex-direction: column; align-items: center; }
    }
    .page-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.events-intro p {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1.5rem;
}



.report-meta h3 a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn.btn-outline.drive {
  border: 1px solid #fff;
  padding: 0.5rem 1rem;
  color: #fff;
  border-radius: 6px;
  transition: all 0.3s;
}

.btn.btn-outline.drive:hover {

  color: #fff;
}

.fas.fa-cloud {
  margin-right: 8px;
}
.drive{
  background: linear-gradient(90deg, #0a2463, #68b283);
  color: #fff;
}
    </style>