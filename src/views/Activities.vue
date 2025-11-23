<template>
  <div class="page-content">
    <div class="container">
      <div class="container">
    <h1 class="page-title">Our Activities</h1>

    <section class="activities-intro">
      <p>
        Project CHAnDAnA implements a range of activities to address Sickle Cell
        Anemia in Karnataka. Our approach combines screening, awareness,
        education, and treatment to create a comprehensive healthcare solution
        for affected communities.
      </p>
    </section>
    <h2 class="my-4">🌟 Project CHAnDAnA – IOCL–IISc CSR Initiative (2024–26)</h2>
    <div class="impact-container">

  <!-- CARD 1 – Funding & Mission -->
  <div class="impact-card-activity">
    <h3>💰 Funding & Mission</h3>
    <ul>
      <li>₹18 crore CSR support from IOCL</li>
      <li>Led by IISc + Govt. of Karnataka</li>
      <li>Supports National Sickle Cell Anaemia Elimination Mission 2047</li>
    </ul>
    
  </div>

  <!-- CARD 2 – Infrastructure & Deployment -->
  <div class="impact-card-activity">
    <h3>🏗️ Infrastructure & Deployment</h3>
    <ul>
      <li>🧪 1 IVD & Kits Quality Testing Lab (IISc)</li>
      <li>🖥️ 1 Central Command Centre</li>
      <li>🏥 422 HPOS devices installed in PHCs</li>
      <li>🔬 2 HPLC labs setup</li>
      <li>🚐 3 Mobile MITR vans deployed</li>
      <li>📦 2,34,850 test kits distributed</li>
    </ul>
    
  </div>

  <!-- CARD 3 – Capacity Building -->
  <div class="impact-card-activity">
    <h3>👩‍⚕️ Capacity Building</h3>
    <ul>
      <li>🎓 10 students trained</li>
      <li>🔬 5 postdocs supported</li>
      <li>👥 31 project staff engaged</li>
      <li>🩺 2,849 ASHA workers trained</li>
      <li>🏥 650 CHOs trained</li>
      <li>👨‍⚕️ 200 Medical Officers trained</li>
    </ul>
    
  </div>

  <!-- CARD 4 – Screening Impact -->
  <div class="impact-card-activity">
    <h3>🔍 Screening Impact</h3>
    <ul>
      <li>👥 2,03,621 individuals screened (81.5%)</li>
      <li>📍 3 districts • 18 taluks • 405 villages</li>
      <li>🩸 577 SCD patients identified</li>
      <li>🧬 4,664 SCT carriers detected</li>
    </ul>
   
  </div>

  <!-- CARD 5 – Technology Innovations -->
  <div class="impact-card-activity">
    <h3>🧪 Technology Innovations</h3>
    <ul>
      <li>📊 %HbS estimation using HPOS field tests</li>
      <li>🧫 Single-test kit simplified format</li>
      <li>⏱️ Real-time stability validation</li>
      <li>🤖 Anaemia classification AI models</li>
      <li>🔍 MicroHeme • MiniHeme • SpectroHeme devices</li>
    </ul>
   
  </div>

  <!-- CARD 6 – Community Outreach -->
  <div class="impact-card-activity">
    <h3>🌍 Community Outreach</h3>
    <ul>
      <li>📢 150+ awareness programs</li>
      <li>📰 Strong IEC materials & rural engagement</li>
      <li>🩺 Free on-spot screening (minutes → months)</li>
      <li>❤️ Immediate treatment & counselling</li>
      <li>🆔 Digital health IDs + follow-up tracking</li>
    </ul>
    
  </div>

  <!-- CARD 7 – National Impact -->
  <div class="impact-card-activity">
    <h3>🏆 National Impact</h3>
    <ul>
      <li>🤝 Public–private–government collaboration</li>
      <li>📈 Advances 6 UN SDGs</li>
      <li>🇮🇳 Scalable national model for underserved communities</li>
    </ul>
   
  </div>

</div>

<div class="impact-card">
<div class="tagline">
    <h1>🌿 Project Chandana Impact 🌿</h1>
    <ul>
      <li>✅ <strong>2,849 ASHA workers</strong> trained &amp; facilitated</li>
      <li>✅ <strong>650 CHO workers</strong> trained &amp; facilitated</li>
    </ul>
    </div>
    <img :src="$base + 'images/trained.png'" alt="Impact Image" style="width:100%; height:auto; border-radius:8px; margin-top:20px;">
   
  </div>
  <div class="impact-card">
    <h1>🌿 Project Chandana Impact 🌿</h1>
    <ul>
      <li>✅ <strong>577 SCD</strong> cases identified</li>
      <li>✅ <strong>4,666 SCT</strong> carriers identified</li>
    </ul>
    <ul class="description">
      <li><strong>SCD (Sickle-Cell Disease)</strong> – a hereditary blood disorder in which the body produces abnormal, sickle-shaped red blood cells.</li>
      <li><strong>SCT (Sickle-Cell Trait)</strong> – when a person carries just one copy of the sickle-cell gene. They usually don’t have symptoms of the disease but can pass the gene to their children.</li>
    </ul>
     <img :src="$base + 'images/ssd.png'" alt="Impact Image" style="width:100%; height:auto; border-radius:8px; margin-top:20px;">
  </div>

    <section class="activities-grid">
      <div class="row" v-for="(activityRow, index) in activities" :key="index">
        <div class="col-md-12" v-for="activity in activityRow" :key="activity.title">
          <div class="activity-card">
            <img
              v-if="activity.image"
              :src="activity.image"
              :alt="activity.title"
              class="activity-image"
            />
            <div class="activity-content">
              <div class="activity-meta">
                <span><i class="fas fa-calendar-alt"></i> {{ activity.frequency }}</span>
                <span><i class="fas fa-map-marker-alt"></i> {{ activity.location }}</span>
              </div>
              <h3>{{ activity.title }}</h3><h3>
           <!-- Link section -->
            <!-- <h3>
            <a
              href="https://drive.google.com/drive/folders/1Gwr9HbhXeA0o4LOjSfwGP7x4mlv5ZxDN"
              class="btn btn-outline drive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fas fa-cloud"></i>
              OneDrive access to all information regarding Project CHAnDAnA
            </a>
          </h3> -->
        <h3 v-if="activity.links">
          <a :href="activity.links" target="_blank" rel="noopener noreferrer" class="btn btn-outline drive">
            {{ activity.textabout }}
          </a>
        </h3>
          </h3>
              <p v-for="(para, i) in activity.description" :key="i">{{ para }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="upcoming-activities">
      <h2>Upcoming Activities</h2>
      <ul class="upcoming-list">
        <li v-for="(item, index) in upcomingActivities" :key="index">
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.location }}</p>
          </div>
          <span class="upcoming-date">{{ item.date }}</span>
        </li>
      </ul>
  
    </section>

    <section class="partners-section">
      <h2>Our Implementation Partners</h2>
      <div class="partners-logo-container">
        <div class="partner-logo" v-for="(partner, index) in partners" :key="index">
          <img :src="partner.logo" :alt="partner.name" />
        </div>
      </div>
    </section>
  </div>
    </div>
  </div>
</template>

<script>
// import { act } from 'react';

export default {
  name: 'Activities',
  data() {
    return {
   activities: [
        [
          {
            title: "Screening Camps",
            image: "",
            frequency: "Ongoing",
            location: "All Districts",
            links:"https://drive.google.com/drive/folders/1TeRmOnEy3m7qjErNDx5ovayWZYiUMw7y",
            textabout:"screening camps photos",
            description: [
              "We conduct regular screening camps in tribal areas to identify individuals with Sickle Cell Anemia. Our mobile units are equipped with the latest HPOS technology for rapid on-the-spot diagnosis.",
              "These camps are organized in collaboration with local healthcare facilities and community leaders to ensure maximum participation and effectiveness."
            ]
          },
          {
            title: "Healthcare Worker Training",
            image: "images/training-1.jpeg",
            frequency: "Quarterly",
            location: "District Hospitals",
             links:"https://drive.google.com/drive/folders/1cFV2w8esHpbnP7gyLbAVNdkPEuzXgtW7",
            textabout:"Healthcare Training photos",
            description: [
              "We provide comprehensive training to local healthcare workers on the diagnosis, treatment, and management of Sickle Cell Anemia.",
              "These training programs include both theoretical knowledge and practical skills, ensuring workers are well-equipped."
            ]
          }
        ],
        [
          {
            title: "Community Awareness Programs",
            image: "images/awerners-1.jpg",
            frequency: "Monthly",
            location: "Village Centers",
             links:"https://drive.google.com/drive/folders/1HV8h9XwY6_e23mPdVIYxkItI-9heNS-D",
            textabout:"Community Awareness photos",
            description: [
              "We organize regular awareness programs in communities to educate people about Sickle Cell Anemia, its symptoms, prevention, and management.",
              "These programs use culturally appropriate communication methods in partnership with local leaders."
            ]
          },
          {
            title: "latest News papers",
            image: "images/news-papers.jpeg",
            frequency: "Monthly",
            location: "Village Centers",
             links:"https://drive.google.com/drive/folders/1pkUlNcbKQE7jBiy5yRGlLfqY0obOxNvH",
            textabout:"News papers photos",
            description: [
              "Here is a detailed description of newspaper reports related to Project Chandana based on articles from The Times of India, Deccan Herald, PharmaBiz, and News Trail India:",
              "These programs use culturally appropriate communication methods in partnership with local leaders."
            ]
          },
          {
            title: "IOCL Director Visit 1st Visit",
            image: "images/ocl.jpeg",
            frequency: "Monthly",
            location: "Karnataka Project Sites",
             links:"https://drive.google.com/drive/folders/1ovj5h4hFeSTOvWPvp25VH7TznicMokg9",
            textabout:"Visit photos and documents",
            description: [
              "The Director of Indian Oil Corporation Limited (IOCL) visited the Project CHAnDAnA sites to review the progress and impact of the initiative.",
              "During the visit, key stakeholders showcased the implementation of screening camps, awareness programs, and HPOS technology."
            ]
          },          
          {
            title: "Research and Innovation",
            image: "images/hpcs.png",
            frequency: "Ongoing",
            location: "IISc, Bengaluru",
            description: [
              "In collaboration with the Indian Institute of Science, we are developing innovative approaches to diagnosis and treatment.",
              "Our HPOS device is a result of this ongoing research to improve healthcare access in resource-limited settings."
            ]
          }
        ]
      ],
      upcomingActivities: [
        {
          title: "Screening Camp",
          location: "Mysore piryaypatna, Chamarajanagar, Mysore HD kote",
          date: "Sep 03-13, 2025"
        },
        {
          title: "World Sickle Cell Awareness Day",
          location: "District Hospitals in Mysuru, Kodagu, and Chamarajanagar",
          date: "June 19, 2025"
        },
        {
          title: "Healthcare Worker Training",
          location: "Kodagu District Hospital",
          date: "July 5-7, 2025"
        },
        {
          title: "Community Awareness Program",
          location: "Chamarajanagar Tribal Villages",
          date: "July 15-25, 2025"
        }
      ],
      partners: [
         { logo: this.$base + "images/healthmission.png", alt: "National Sickle Cell Anemia Elimination Mission" },
        { logo: this.$base + "images/karnatka.png", alt: "Government of Karnataka" },
        { logo: this.$base + "images/indianoil-logo.png", alt: "IndianOil Aarogyam" },
        { logo: this.$base + "images/isim.png", alt: "Indian Institute of Science" },
      ]
}
  }
  };
</script>

 <style>
        .activity-card {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            margin-bottom: 30px;
            transition: transform 0.3s ease;
        }
        
        .activity-card:hover {
            transform: translateY(-5px);
        }
        
        .activity-image {
            width: 100%;
            /* height: 300px; */
            object-fit: cover;
        }
        
        .activity-content {
            padding: 25px;
        }
        
        .activity-content h3 {
            color: var(--primary-color);
            margin-bottom: 15px;
        }
        
        .activity-meta {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            color: var(--secondary-color);
            font-size: 0.9rem;
        }
        
        .activity-meta span {
            display: flex;
            align-items: center;
        }
        
        .activity-meta i {
            margin-right: 5px;
        }
        
        .upcoming-activities {
            background-color: #f8f9fa;
            padding: 30px;
            border-radius: 8px;
            margin-top: 40px;
        }
        
        .upcoming-list {
            list-style-type: none;
            padding: 0;
        }
        
        .upcoming-list li {
            padding: 15px 0;
            border-bottom: 1px solid #e9ecef;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .upcoming-list li:last-child {
            border-bottom: none;
        }
        
        .upcoming-date {
            background-color: var(--primary-color);
            color: white;
            padding: 8px 12px;
            border-radius: 4px;
            font-weight: bold;
        }
.impact-container{
   display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    }

 

  /* HOVER EFFECT: ZOOM + BORDER GLOW + SHADOW BOOST */
  .impact-card-activity:hover {
    transform: scale(1.05); /* zoom in */
    border-color: #2b6841; /* green border highlight */
    box-shadow: 0 10px 25px rgba(0,0,0,0.18); /* deeper shadow */
  }
    .impact-card-activity{
        flex: 1 1 366px;
    min-width: 180px;
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 10px #00000014;
    position: relative;
    border: 1px solid #e3e3e3;
        /* Animation properties */
    transition: 
      transform .35s ease,
      border-color .35s ease,
      box-shadow .35s ease;
  }
   

           .impact-card,.impact-card-activity {
      background: #ffffff;
      border-radius: 16px;
      padding: 40px;
      margin-bottom: 2rem;
      text-align: left;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
    .impact-card h1 {
      color: #2f855a; /* green accent */
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    .impact-card ul {
      list-style: none;
      padding: 0;
      margin: 0 0 1rem 0;
      font-size: 1.2rem;
      color: #333;
    }
    .impact-card ul li {
      margin: 0.5rem 0;
    }
    .impact-card .tagline {
      font-size: 1rem;
      color: #555;
    }
     .impact-card .description {
      text-align: left;
      margin-top: 1rem;
      font-size: 0.95rem;
      color: #444;
    }
    .hashtags {
      margin-top: 1rem;
      color: #777;
      font-size: 0.9rem;
    }
    </style>


