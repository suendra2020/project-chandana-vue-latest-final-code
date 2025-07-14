<template>
  <div class="page-content">
    <div class="container">
        <h1 class="page-title">About Project CHAnDAnA</h1>
      <p>This is the About Us page. Content from about.html will be implemented here.</p>
       <b-container class="about-section">
        <b-row>
          <b-col md="6">
            <h2>Our Mission</h2>
            <p>
              Project CHAnDAnA (Comprehensive Healthcare Advancement for Neglected Disease Awareness) is a pioneering initiative focused on addressing Sickle Cell Anemia in Karnataka, particularly in the districts of Mysore, Chamarajanagar, and Kodagu.
            </p>
            <p>
              Our mission is to improve healthcare outcomes for individuals affected by Sickle Cell Anemia through early detection, comprehensive treatment, and community education.
            </p>
          </b-col>
          <!-- Optional image block can be added here -->
        </b-row>
      </b-container>

      <b-container class="timeline-section">
        <h2 class="text-center mb-4">Our Journey (Chronological Order)</h2>
        <div class="timeline-container">
          <div v-for="(item, index) in timelineItems" :key="index" class="timeline-item">
            <div class="timeline-content">
              <h3>{{ item.title }}</h3>
              <p class="date">{{ item.date }}</p>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </b-container>

      <b-container>
        <div class="timeline">
          <div v-for="(event, index) in events" :key="index" class="event">
            <div class="circle" :class="event.color">{{ index + 1 }}</div>
            <div class="event-content">
              <div class="event-title">{{ event.title }}</div>
              <div class="event-date">{{ event.date }}</div>
              <div class="event-description">{{ event.description }}</div>
            </div>
          </div>
        </div>
      </b-container>

      <b-container class="about-section">
        <h2>Our Approach</h2>
        <p>Project CHAnDAnA takes a holistic approach to addressing Sickle Cell Anemia through:</p>
        <b-row>
          <b-col md="4" class="mb-4 p-4 d-block transition-padding" v-for="(approach, index) in approaches" :key="index">
            <b-card class="h-100">
              <h3 class="card-title">{{ approach.title }}</h3>
              <p class="card-text">{{ approach.text }}</p>
            </b-card>
          </b-col>
        </b-row>
      </b-container>

          <PartnersSection />
    </div>
  </div>
</template>

<script>
export default {
  components: {
   
    PartnersSection
  },
  data() {
    return {
      timelineItems: [
        { title: 'Project Inception', date: 'January 2022', description: 'Project CHAnDAnA was officially launched as a collaborative initiative between the National Health Mission, Indian Institute of Science, Government of Karnataka, and Indian Oil Corporation.' },
        { title: 'Baseline Studies', date: 'June 2022', description: 'Comprehensive baseline studies were conducted across the three target districts to understand the prevalence of Sickle Cell Anemia and identify high-risk communities.' },
        { title: 'Healthcare Worker Training', date: 'December 2022', description: 'Training programs were initiated for local healthcare workers to improve diagnosis and management of Sickle Cell Anemia in rural settings.' },
        { title: 'Community Outreach', date: 'March 2023', description: 'Large-scale community outreach programs were launched to raise awareness about Sickle Cell Anemia and promote early screening.' },
        { title: 'Research Collaboration', date: 'September 2023', description: 'Research partnerships were established with national and international institutions to develop innovative approaches to Sickle Cell Anemia management.' },
        { title: 'Expansion Phase', date: 'January 2024', description: 'Project CHAnDAnA expanded its scope to include additional vulnerable communities and implement comprehensive healthcare services.' },
      ],
      events: [
        { title: 'MOU Signed', date: '12 MAR 2024', description: 'IOCL (CSR funding), IISc (tech expertise), and GoK joined hands to fight Sickle Cell Disease.', color: 'peach' },
        { title: 'Official Launch', date: '12 MAR 2024', description: 'The initiative officially launched to eliminate Sickle Cell Disease in tribal and rural regions of Karnataka.', color: 'purple' },
        { title: 'Device Deployment', date: '18 JUN – 18 SEP 2024', description: 'Training of 200 MOs, 700 CHOs, and 2000 ASHA workers to conduct screening.', color: 'blue' },
        { title: 'Community Awareness Drives', date: '29 JUN 2024 – 23 MAR 2025', description: 'Educational activities across 18 taluks to raise awareness about Sickle Cell Disease.', color: 'yellow' },
        { title: 'Mobile Vans Flag-off', date: '21 JUN 2024', description: 'Mobile units sent to 3 districts to support outreach efforts.', color: 'pink' },
        { title: 'Command Center Inauguration', date: '11 Nov 2024', description: 'Central hub set up to coordinate tracking, data, and logistics.', color: 'red' },
        { title: 'CM Program & Report', date: '12 Nov 2024', description: 'CM showcases progress at HD Kote & Mysuru; screening in tribal areas.', color: 'indigo' },
        { title: 'HPLC handover to Chamarajanagar', date: '12 Dec 2024', description: 'Advanced testing device deployed; training provided to PG and HOD.', color: 'cyan' },
        { title: 'HPLC Device Handover', date: '25 Feb 2025', description: 'Delivered to Kodagu District Hospital for precision diagnostics.', color: 'green' },
        { title: 'ASHA Worker Incentives', date: '28 Mar 2025', description: 'Incentives provided for their contribution to screening and follow-up.', color: 'sky' },
        { title: 'Digital ID & Counseling Cards', date: 'Apr 2025', description: 'Video-based digital counseling & ID cards introduced for support.', color: 'orange' },
      ],
      approaches: [
        { title: 'Early Detection', text: 'Implementing screening programs in vulnerable communities to identify individuals with Sickle Cell Anemia at an early stage.' },
        { title: 'Treatment Access', text: 'Ensuring access to quality healthcare services and treatments for affected individuals.' },
        { title: 'Community Education', text: 'Raising awareness about Sickle Cell Anemia through educational programs and community outreach.' },
      ],
      
    }
  }
}
import PartnersSection from '../components/PartnersSection.vue'
</script>


<style scoped>
 .timeline-section {
            position: relative;
            padding: 2rem 0;
        }
        
        .timeline-container {
            position: relative;
            width: 100%;
            max-width: 1140px;
            margin: 0 auto;
            padding: 2rem 0;
        }
        
        .timeline-container::after {
            content: '';
            position: absolute;
            width: 6px;
            background-color: var(--primary-color);
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -3px;
        }
        
        .timeline-item {
            padding: 10px 40px;
            position: relative;
            width: 50%;
            box-sizing: border-box;
            margin-bottom: 2rem;
        }
        
        .timeline-item::after {
            content: '';
            position: absolute;
            width: 25px;
            height: 25px;
            right: -12px;
            background-color: white;
            border: 4px solid var(--primary-color);
            top: 15px;
            border-radius: 50%;
            z-index: 1;
        }
        
        .timeline-item:nth-child(odd) {
            left: 0;
        }
        
        .timeline-item:nth-child(even) {
            left: 50%;
        }
        
        .timeline-item:nth-child(even)::after {
            left: 22px;
        }
        
        .timeline-content {
            padding: 20px;
            background-color: white;
            position: relative;
            border-radius: 6px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .timeline-content h3 {
            margin-top: 0;
            color: var(--primary-color);
        }
        
        .timeline-content .date {
            font-weight: bold;
            color: var(--secondary-color);
            margin-bottom: 1rem;
        }
        
        .timeline-image {
            width: 100%;
            border-radius: 6px;
            margin-bottom: 1rem;
        }
        
        @media screen and (max-width: 768px) {
            .timeline-container::after {
                left: 31px;
            }
            
            .timeline-item {
                width: 100%;
                padding-left: 70px;
                padding-right: 25px;
            }
            
            .timeline-item:nth-child(even) {
                left: 0;
            }
            
            .timeline-item::after {
                left: 18px;
                top: 15px;
            }
            
            .timeline-item:nth-child(even)::after {
                left: 18px;
            }
        }




        /*chronological order*/
        .timeline {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    .event {
      display: flex;
      gap: 1rem;
      padding: 1.5rem;
      border-radius: 1rem;
      background: #fff;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      align-items: flex-start;
    }

    .circle {
      flex-shrink: 0;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      font-weight: bold;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
    }

    .event-content {
      flex-grow: 1;
    }

    .event-title {
      font-size: 1.1rem;
      font-weight: bold;
      margin-bottom: 0.2rem;
    }

    .event-date {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 0.5rem;
    }

    .event-description {
      font-size: 0.95rem;
      color: #333;
    }

    /* Color classes */
    .peach { background: #ffe2d3; }
    .purple { background: #e8d9f5; }
    .blue { background: #cde8ef; }
    .yellow { background: #fff7cd; }
    .pink { background: #fcd4e0; }
    .red { background: #fbe2df; }
    .indigo { background: #d8d2f0; }
    .cyan { background: #d4f3f3; }
    .green { background: #d3eed4; }
    .sky { background: #caecf7; }
    .orange { background: #fff1d6; }

    @media (max-width: 768px) {
      .timeline {
        grid-template-columns: 1fr;
      }
    }
</style>