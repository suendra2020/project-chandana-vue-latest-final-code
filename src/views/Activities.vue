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
              <h3>{{ activity.title }}</h3>
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
            description: [
              "We conduct regular screening camps in tribal areas to identify individuals with Sickle Cell Anemia. Our mobile units are equipped with the latest HPOS technology for rapid on-the-spot diagnosis.",
              "These camps are organized in collaboration with local healthcare facilities and community leaders to ensure maximum participation and effectiveness."
            ]
          },
          {
            title: "Healthcare Worker Training",
            image: "images/training/healthcare-training.jpg",
            frequency: "Quarterly",
            location: "District Hospitals",
            description: [
              "We provide comprehensive training to local healthcare workers on the diagnosis, treatment, and management of Sickle Cell Anemia.",
              "These training programs include both theoretical knowledge and practical skills, ensuring workers are well-equipped."
            ]
          }
        ],
        [
          {
            title: "Community Awareness Programs",
            image: "images/awerness.jpeg",
            frequency: "Monthly",
            location: "Village Centers",
            description: [
              "We organize regular awareness programs in communities to educate people about Sickle Cell Anemia, its symptoms, prevention, and management.",
              "These programs use culturally appropriate communication methods in partnership with local leaders."
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
          location: "Mysuru District, Tribal Hamlets",
          date: "June 15-20, 2025"
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
    </style>


