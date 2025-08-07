<template>
  <div class="page-content">
    <div class="container">
     <h1 class="page-title">Our Vision & Mission</h1>
      
  <section class="vision-section bg-light">
    <b-container>
      <b-row>
       <b-col md="6" class="bg-white p-2 px-4 d-block shadow-sm">
          <h2 class="mb-3">Vision Statement</h2>
          <p>
            To create a Karnataka where Sickle Cell Anemia is effectively managed, its burden is reduced,
            and affected individuals lead healthy, productive lives with access to quality healthcare and support.
          </p>
          <p>
            Project CHAnDAnA envisions a future where early detection, comprehensive treatment, and community awareness
            have significantly reduced the prevalence and impact of Sickle Cell Anemia in the tribal populations of Mysuru,
            Kodagu, and Chamarajanagar districts.
          </p>
        </b-col>
        <b-col md="6">
          <!-- Add image if needed -->
          <!-- <b-img src="@/assets/vision-page.png" alt="Vision illustration" fluid class="vision-image" /> -->
        </b-col>
      </b-row>
    </b-container>
  </section>

  <section class="mission-section">
    <b-container>
      <h2 class="mb-4">Our Mission</h2>
      <b-card class="p-4 shadow-sm bg-white d-block">
        <h3>Comprehensive Healthcare Approach</h3>
        <p>
          Project CHAnDAnA is committed to implementing a comprehensive healthcare approach to address Sickle Cell Anemia
          in Karnataka's tribal populations through:
        </p>
        <ul>
          <li>Screening approximately 2.56 lakh tribal individuals over two years</li>
          <li>Identifying and managing cases of Sickle Cell Anemia</li>
          <li>Providing accessible healthcare services to affected communities</li>
          <li>Raising awareness about prevention and management of the disease</li>
          <li>Building capacity among local healthcare providers</li>
        </ul>
      </b-card>
    </b-container>
  </section>

  <section class="strategic-goals py-2 bg-light">
    <b-container>
      <h2 class="mb-4">Strategic Goals</h2>
      <b-row>
         <div class="vision-goals" >
                    <div class="goal-item h-100 shadow-sm" v-for="goal in goals" :key="goal.title">
                        <h4>{{ goal.title }}</h4>
                       <p>{{ goal.description }}</p>
                    </div>
                    </div>

        <!-- <b-col md="4" v-for="goal in goals" :key="goal.title" class="mb-4">
          <b-card class="h-100 shadow-sm">
            <h4>{{ goal.title }}</h4>
            <p>{{ goal.description }}</p>
          </b-card>
        </b-col> -->
      </b-row>
    </b-container>
  </section>
   <section class="partners-section">
      <h2>Our Partners in Vision</h2>
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
  name: 'vision',
  data() {
    return {
      goals: [
        {
          title: 'Early Detection',
          description:
            'Implement comprehensive screening programs to identify individuals with Sickle Cell Anemia at an early stage, enabling timely intervention and management.',
        },
        {
          title: 'Treatment Access',
          description:
            'Ensure that all identified cases have access to quality healthcare services, appropriate treatments, and necessary support systems.',
        },
        {
          title: 'Community Education',
          description:
            'Raise awareness about Sickle Cell Anemia through educational programs, community outreach, and targeted information campaigns.',
        },
        {
          title: 'Research & Innovation',
          description:
            'Support research initiatives to develop innovative approaches to Sickle Cell Anemia management and treatment.',
        },
        {
          title: 'Capacity Building',
          description:
            'Strengthen the capacity of local healthcare providers to effectively diagnose, treat, and manage Sickle Cell Anemia cases.',
        },
        {
          title: 'Policy Advocacy',
          description:
            'Advocate for policies that support the prevention, treatment, and management of Sickle Cell Anemia at the state and national levels.',
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
};
</script>



<style scoped>
/* .vision-section,
.mission-section,
.strategic-goals {
  padding-top: 3rem;
  padding-bottom: 3rem;
} */

ul {
  padding-left: 1.2rem;
}

.goal-item {
  margin-bottom: 1.5rem;
}
 .vision-card {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 25px;
            margin-bottom: 30px;
            transition: transform 0.3s ease;
        }
        
        .vision-card:hover {
            transform: translateY(-5px);
        }
        
        .vision-card h3 {
            color: var(--primary-color);
            margin-bottom: 15px;
            font-size: 1.5rem;
        }
        
        .vision-image {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        
        .vision-goals {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 30px;
        }
        
        .goal-item {
            flex: 1 1 300px;
            background-color: #fff;
            border-left: 4px solid var(--primary-color);
            padding: 20px;
            border-radius: 0 8px 8px 0;
        }
        
        .goal-item h4 {
            color: var(--primary-color);
            margin-bottom: 10px;
        }
</style>