<template>
  <div class="page-content">
    <div class="container">
   
       <div class="container">
          
            
           <h1 class="page-title">Overview of Project CHAnDAnA</h1>
            
            <section class="team-intro">
                <!-- <p>Project CHAnDAnA brings together experts from various fields to address Sickle Cell Anemia in Karnataka. Our team consists of dedicated professionals from healthcare, research, community outreach, and administration who work collaboratively to achieve our mission.</p> -->
            </section>
            <section>
              <div class="bg-white p-3  d-block shadow-sm mb-3">
             <h4>The National Sickle Cell Anaemia Elimination Mission (NSCAEM)</h4>
             <p>is a major Government of India initiative to eliminate sickle cell disease by 2047. It aims to screen crores of people, provide genetic counselling, expand treatment access, and spread awareness so families can make informed choices and break the cycle of the disease.
</p>
</div>
 <div class="bg-white p-3  d-block shadow-sm mb-3">
 <h4>Project Chandana supports this mission in Karnataka through a well-organised team structure</h4>
             <p>The Project Director leads planning and partnerships, while the Medical Program Head designs screening and treatment processes with local hospitals. The Outreach Coordinator runs awareness campaigns, the Screening Manager handles camps and logistics, and the Treatment & Support Officer ensures patient care. Community Health Workers connect villages, supported by Data Analysts, Finance staff, and volunteers who keep the project running smoothly.

</p>
</div>
 <div class="bg-white p-3  d-block shadow-sm mb-3">
 <h4>At the state level, Karnataka State Officers and Deputy Directors align Project Chandana’s work with the national mission</h4>
             <p>They guide policy, ensure supplies and training, monitor progress, and link state health departments with the project’s leadership, keeping efforts standardised and effective across regions.


</p>
</div>
 <div class="bg-white p-3  d-block shadow-sm mb-3">
<h4>District Health Officers (DHOs) and District Tribal Welfare Officers (DTOs) </h4>
             <p>Mysore, Chamarajanagar, and Kodagu ensure smooth ground-level execution. They organise screening camps, mobilise local health staff, and coordinate with PHCs and Community Health Workers to reach remote families. By connecting communities with treatment and follow-up, they strengthen Karnataka’s impact under the National Mission, helping families lead healthier, sickle cell–free lives.



</p>
</div>
<div class="bg-white p-3  d-block shadow-sm mb-3">
<h4>Indian Oil Corporation Limited (IOL) </h4>
<p>Indian Oil Corporation Limited (IOL) is playing a crucial role in strengthening Project Chandana through its Corporate Social Responsibility (CSR) initiatives. By providing financial support, IOL helps fund large-scale screening camps, mobile health units, and the supply of testing kits and medicines for communities affected by sickle cell anaemia. Additionally, IOL’s support enables the project team to organise awareness campaigns, distribute educational materials in local languages, and train community health workers. This partnership ensures that Project Chandana reaches remote tribal areas effectively, expanding its impact in line with the National Sickle Cell Anaemia Elimination Mission.
</p>
</div>

            </section>
            
          




  <!-- * team section*/ -->
    <h1>Project CHAnDAnA</h1>

    <div v-for="(section, index) in teamSections" :key="index">
      <button
        class="collapsible"
        :class="{ active: section.isOpen }"
        @click="section.isOpen = !section.isOpen"
      >
        {{ section.title }}
      </button>
      <div class="content" :class="{ open: section.isOpen }">
        <div v-html="section.html"></div>
      </div>
    </div>

    <b-container id="partners" class="about-section">
        <h2>Our Partner Organizations</h2>
        <p>Project CHAnDAnA is a collaborative effort between government agencies, academic institutions, and corporate partners:</p>
        <b-row class="partners-logo-container">
          <b-col v-for="(partner, index) in partners" :key="index" cols="6" md="3" class="partner-logo">
            <img :src="partner.img" :alt="partner.alt" class="img-fluid">
          </b-col>
        </b-row>
      </b-container>





  



  
  
        </div>
    </div>
        </div>

</template>

<!-- <script>
export default {
  name: 'Teams'
}
</script> -->


  <!-- <script src="js/accessibility.js"></script> -->
      <script>
 export default {
  name: "CollapsibleSection",
  data() {
    
    return {
      isOpen: false,
     teamMembers: [
      { name: "Dr. Rehan Shahed", image: this.$base + "images/rehan.png" },
      { name: "Dr. Pradhyumma", image: this.$base + "images/pradhyumma.png" },
      { name: "GM Shrishail", image: this.$base + "images/shrishail.png" },
      { name: "Chandan Adhikari", image: this.$base + "images/chandan.png" },
      { name: "Tejaswini S B", image: this.$base + "images/tejaswini.png" },
    ],
    partners: [
      { img: this.$base + 'images/healthmission.png', alt: 'National Sickle Cell Anemia Elimination Mission' },
      { img: this.$base + 'images/karnatka.png', alt: 'Government of Karnataka' },
      { img: this.$base + 'images/indianoil-logo.png', alt: 'IndianOil Aarogyam' },
      { img: this.$base + 'images/isim.png', alt: 'Indian Institute of Science' },
    ],
      teamSections: [
            {
              title: "1. Leadership",
              isOpen: true,
              html: `
                <div class="team-grid one">
                  <div class="profile-section">
                    <img src="${this.$base}images/saisiva.png" alt="Prof. Sai Siva Gorthi">
                    <div class="profile-text">
                      <h3>Prof. Sai Siva Gorthi</h3>
                      <h4>Professor at Indian Institute of Science (IISc), Bangalore</h4>
                      <p>
                       Sai Siva Gorthi received the Doctorate degree in optical metrology from the Swiss Federal Institute of Technology (EPFL), Lausanne, Switzerland, in 2010. He is working as an Assistant Professor in the Department of Instrumentation and Applied Physics, Indian Institute of Science (IISc), Bangalore, India. Prior to joining IISc, he was a Postdoctoral Fellow at the Rowland Institute at Harvard University, where he had developed multiple imaging modalities for recording information of fast flowing cells in microfluidic devices. Currently at IISc..
                      </p>
                    </div>
                  </div>
                </div>`
            },
            {
              title: "2. Project Management Team",
              isOpen: false,
              html: `
                <div class="team-grid">
                  <div class="person-card"><img src="${this.$base}images/rehan.png"><div class="person-name">Dr. Rehan Shahed</div></div>
                  <div class="person-card"><img src="${this.$base}images/pradhyumma.png"><div class="person-name">Dr. Pradhyumma</div></div>
                  <div class="person-card"><img src="${this.$base}images/shrishail.png"><div class="person-name">GM Shrishail</div></div>
                  <div class="person-card"><img src="${this.$base}images/chandan.png"><div class="person-name">Chandan Adhikari</div></div>
                  <div class="person-card"><img src="${this.$base}images/tejaswini.png"><div class="person-name">Tejaswini S B</div></div>
                </div>`
            },
            {
              title: "3. Project Execution Team",
              isOpen: false,
              html: `
                <div class="team-grid">
                  <div class="person-card"><img src="${this.$base}images/anitha.png"><div class="person-name">Anitha<br><strong>IEC Activities Team</strong></div></div>
                  <div class="person-card"><img src="${this.$base}images/sathyanarayana.png"><div class="person-name">Sathyanarayana<br><strong>Command Center</strong></div></div>
                  <div class="person-card"><img src="${this.$base}images/prasath.png"><div class="person-name">Prasath<br><strong>Command Center</strong></div></div>
                  <div class="person-card"><img src="${this.$base}images/ashraf.png"><div class="person-name">Ashraf<br><strong>Command Center</strong></div></div>
                  <div class="person-card"><img src="${this.$base}images/rayees.png"><div class="person-name">Rayees<br><strong>Command Center</strong></div></div>
                  <div class="person-card"><img src="${this.$base}images/prajwal.png"><div class="person-name">Prajwal<br><strong>Field Technicians</strong></div></div>
                  <div class="person-card"><img src="${this.$base}images/prasana.png"><div class="person-name">Prasanna<br><strong>Field Technicians</strong></div></div>
                  <div class="person-card"><img src="${this.$base}images/abhishek.png"><div class="person-name">Abhishek<br><strong>Field Technicians</strong></div></div>
                </div>`
            },
            {
              title: "4. Project Field Team",
              isOpen: false,
              html: `
                <div class="team-section">
        <div class="member">
          <img src="${this.$base}images/nagaraju-sir.png">
          <div class="member-details"><strong>Mr. Nagaraju</strong> Field Ops Manager</div>
        </div>
        <p style="margin: 10px 0 20px; color: #555;">The Field Team is deployed across three regions:</p>
        <div class="team-regions">
          <div class="region-box">
            <h3>Mysuru</h3>
            <div class="member"><img src="${this.$base}images/akhila.png"><div class="member-details"><strong>Dr. Akhila</strong> Public Health Professional</div></div>
            <div class="member"><img src="${this.$base}images/pooja.png"><div class="member-details"><strong>Pooja</strong> Program Assistant</div></div>
            <div class="member"><img src="${this.$base}images/aiyyappa.png"><div class="member-details"><strong>Aiyyappa</strong> Field Co-ordinator</div></div>
            <div class="member"><img src="${this.$base}images/puttabasaviah.png"><div class="member-details"><strong>Puttabasaviah</strong> Field Co-ordinator</div></div>
            <div class="member"><img src="${this.$base}images/venkatesh.png"><div class="member-details"><strong>Venkatesh Murthy</strong> Field Co-ordinator</div></div>
          </div>
          <div class="region-box">
            <h3>Chamarajanagar</h3>
            <div class="member"><img src="${this.$base}images/darashini.png"><div class="member-details"><strong>Dr. Darshini</strong> Public Health Professional</div></div>
            <div class="member"><img src="${this.$base}images/vinuraj.png"><div class="member-details"><strong>Vinuraj</strong> Program Assistant</div></div>
            <div class="member"><img src="${this.$base}images/yogesh.png"><div class="member-details"><strong>Yogesh</strong> Field Co-ordinator</div></div>
            <div class="member"><img src="${this.$base}images/santosh.png"><div class="member-details"><strong>Santosh</strong> Field Co-ordinator</div></div>
            <div class="member"><img src="${this.$base}images/srinivas.png"><div class="member-details"><strong>Srinivas</strong> Field Co-ordinator</div></div>
          </div>
          <div class="region-box">
            <h3>Kodagu</h3>
            <div class="member"><img src="${this.$base}images/mamtha.png"><div class="member-details"><strong>Dr. Mamtha</strong> Public Health Professional</div></div>
            <div class="member"><img src="${this.$base}images/siddaraju.png"><div class="member-details"><strong>Siddaraju</strong> Field Co-ordinator</div></div>
            <div class="member"><img src="${this.$base}images/rakesh.png"><div class="member-details"><strong>Rakesh</strong> Field Co-ordinator</div></div>
          </div>
        </div>
      </div>`
            }
          ]
         
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
 
  </script>
  <style>
        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 30px;
        }
        
        .team-card {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s ease;
        }
        
        .team-card:hover {
            transform: translateY(-5px);
        }
        
        .team-image {
            width: 100%;
            height: 220px;
            object-fit: cover;
        }
        
        .team-info {
            padding: 20px;
        }
        
        .team-info h3 {
            color: var(--primary-color);
            margin-bottom: 5px;
        }
        
        .team-info .designation {
            color: var(--secondary-color);
            font-style: italic;
            margin-bottom: 15px;
            display: block;
        }
        
        .team-category {
            margin-bottom: 40px;
        }
        
        .team-category h2 {
            color: var(--primary-color);
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #ececec;
        }



        /* teams 8*/
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
      max-height: 2000px;
      transition: max-height 0.5s ease-in;
    }
    .team-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-top: 10px;
    }
    .person-card {
         background: #f0f8f6;
    border-radius: 8px;
    padding: 10px;
    flex: 1 1 216px;
    text-align: center;
    min-width: 130px;
    }
    .person-card img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 8px;
    }
    .person-name { font-weight: bold; margin-bottom: 2px; }
    .person-role { font-size: 0.85rem; color: #444; }

    @media (max-width: 768px) {
      .team-grid { flex-direction: column; align-items: center; }
    }

    .person-card img{
        /* Ellipse 9 */



background: linear-gradient(0deg, #E4E4E4, #E4E4E4), url(Checker.png);
box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

    }.team-grid.one{
      display: block !important;
      
    margin-top: 0px;
    }
    .team-grid{
        
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 10px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 30px;
}


.profile-section {
      display: flex;
      flex-wrap: wrap;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
      padding: 20px;
      align-items: center;
      gap: 20px;
    }
    .profile-section img {
      width: 180px;
      height: auto;
      border-radius: 10px;
    }
    .profile-text {
      flex: 1;
    }
    .profile-text h3 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .profile-text h4 {
      font-size: 1rem;
      font-weight: 500;
      color: #333;
      margin-bottom: 10px;
    }
    .profile-text p {
      font-size: 0.9rem;
      color: #555;
      line-height: 1.5;
    }

    @media (max-width: 600px) {
      .report-box h3 { font-size: 1.4rem; }
      .profile-section { flex-direction: column; align-items: flex-start; }
      .profile-section img { width: 100%; max-width: 300px; }
    }

    .team-regions { display: flex; flex-wrap: wrap; gap: 20px; justify-content: space-between; }
    .region-box {
      flex: 1 1 30%;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.06);
      padding: 15px;
    }
    .region-box h3 {
     background: linear-gradient(90deg, #0a2463, #68b283);
      color: white !important;
      border-radius: 8px;
      padding: 8px 12px;
      font-size: 1rem;
      margin-bottom: 10px;
    }
    .member {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    .member img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 10px;
    }
    .member-details {
      font-size: 0.9rem;
    }
    .member-details strong { display: block; }

    @media (max-width: 768px) {
      .report-grid, .team-regions { flex-direction: column; align-items: stretch; }
    }

    </style>