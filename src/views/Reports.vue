<template>
  <div class="page-content">
    <div class="container">
      <div class="container">
         <h1 class="page-title">Reports</h1>

    <section class="activities-intro">
      <p>
       Screening Statistics
      </p>
       <p class="text-muted">Number of tests conducted, locations covered</p>
    </section>

     <!-- District Reports -->
      <div class="report-section">
        <h4>Consolidated Data District-wise reports till date</h4>
    <div class="district-wrapper">

      <div
        class="district-column"
        v-for="district in districts"
        :key="district.name"
:class="district.bg"
      >

        <!-- District Heading -->
        <h2 class="district-title">
          {{ district.name }}
        </h2>

        <!-- Cards -->
        <div class="district-cards">

          <div
            v-for="stat in district.stats"
            :key="stat.label"
            class="report-box"
          >
           <div class="icon" :class="stat.color">
<i :class="stat.icon"></i>
</div>

            <h3>{{ stat.value.toLocaleString() }}</h3>
            <p>{{ stat.label }}</p>

          </div>

        </div>

      </div>
    <!-- <div class="report-section">
      
      <div class="report-grid">
  <div
    class="report-box"
    v-for="stat in stats"
    :key="stat.id"
    :class="stat.bgClass"
  >
    <div class="icon">{{ stat.icon }}</div>
    <h3>{{ stat.displayValue }}</h3>
    <p>{{ stat.label }}</p>
  </div>
</div>
    </div> -->

    
    <section class="reports-intro">
      <h1 class="page-title">Reports & Publications</h1>
      <p>
        Project CHAnDAnA regularly publishes reports, research papers, and other
        publications related to Sickle Cell Anemia in Karnataka. These documents
        provide valuable insights into our work, findings, and impact.
      </p>
    </section>

    <section class="reports-grid">
      <div class="row">
        <div
          class="col-md-12 mb-4 p-2"
          v-for="report in reports"
          :key="report.title"
        >
          <div class="report-card">
            <div class="report-content">
              <div class="report-meta">
                <span><i class="fas fa-calendar-alt"></i> {{ report.date }}</span>
                <span><i class="fas fa-file-pdf"></i> PDF</span>
              </div>
              <h3>{{ report.title }}</h3>
              <p>{{ report.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="partners-section">
      <h2>Our Research Partners</h2>
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
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Reports',
   data() {
    return {
      stats: [
        { id: 'count1', end: 211728, label: 'Total Screenings Tests Completed', icon: '🔒', isPercentage: false, displayValue: '0',bgClass: 'bg-red' },
        { id: 'count2', end: 75, label: 'Awareness Activities Performed', icon: '📋', isPercentage: false, displayValue: '0',bgClass: 'bg-orange' },
        { id: 'count3', end: 1275, label: 'Sickle Cell Disease Cases', icon: '🧭', isPercentage: false, displayValue: '0',bgClass: 'bg-green' },
        { id: 'count4', end: 80.02, label: 'Target Achieved Using HPOS', icon: '👥', isPercentage: true, displayValue: '0%',bgClass: 'bg-white' },
        { id: 'count5', end: 135328, label: 'Mysore', icon: '👥', isPercentage: false, displayValue: '0%',bgClass: 'bg-red' },
        { id: 'count6', end: 16197, label: 'Kodagu', icon: '👥', isPercentage: false, displayValue: '0%',bgClass: 'bg-blue' },
         { id: 'count7', end: 54962, label: 'Chamarajanagar', icon: '👥', isPercentage: false, displayValue: '0%',bgClass: 'bg-orange' },
         { id: 'count8', end: 206487, label: 'Total', icon: '👥', isPercentage: false, displayValue: '0%',bgClass: 'bg-red' },
          { id: 'count6', end: 16197, label: 'Kodagu', icon: '👥', isPercentage: false, displayValue: '0%',bgClass: 'bg-blue' },
         { id: 'count7', end: 54962, label: 'Chamarajanagar', icon: '👥', isPercentage: false, displayValue: '0%',bgClass: 'bg-orange' },
         { id: 'count8', end: 206487, label: 'Total', icon: '👥', isPercentage: false, displayValue: '0%',bgClass: 'bg-red' },
         { id: 'count9', end: 206487, label: 'Total', icon: '👥', isPercentage: false, displayValue: '0%',bgClass: 'bg-red' }
      ],
      reports: [
        {
          title: "Annual Progress Report 2024",
          date: "March 2025",
          description:
            "Comprehensive overview of Project CHAnDAnA's activities, achievements, and impact during the year 2024. Includes detailed statistics on screening, treatment, and awareness programs."
        },
        {
          title: "Prevalence Study: Mysuru District",
          date: "December 2024",
          description:
            "Research paper on the prevalence of Sickle Cell Anemia in tribal populations of Mysuru district. Includes demographic analysis, risk factors, and recommendations for intervention."
        },
        {
          title: "HPOS Technology: Impact Assessment",
          date: "October 2024",
          description:
            "Evaluation of the effectiveness of the HPOS device for rapid diagnosis of Sickle Cell Anemia in field settings. Includes comparison with traditional diagnostic methods."
        },
        {
          title: "Community Awareness Impact Study",
          date: "August 2024",
          description:
            "Analysis of the effectiveness of community awareness programs in increasing knowledge about Sickle Cell Anemia and promoting early screening."
        },
        {
          title: "Healthcare Worker Training Evaluation",
          date: "June 2024",
          description:
            "Assessment of the effectiveness of training programs for healthcare workers in improving their knowledge and skills related to Sickle Cell Anemia management."
        },
        {
          title: "Policy Brief: Sickle Cell Anemia in Karnataka",
          date: "April 2024",
          description:
            "Recommendations for policy interventions to address Sickle Cell Anemia in Karnataka, based on Project CHAnDAnA's findings and experiences."
        }
      ],
      partners: [
        { logo: this.$base + "images/healthmission.png", alt: "National Sickle Cell Anemia Elimination Mission" },
        { logo: this.$base + "images/karnatka.png", alt: "Government of Karnataka" },
        { logo: this.$base + "images/indianoil-logo.png", alt: "IndianOil Aarogyam" },
        { logo: this.$base + "images/isim.png", alt: "Indian Institute of Science" },
      ],
districts: [

{
name: "Chamarajanagar",
bg: "district-orange",
stats: [

{
label: "Normal",
value: 54962,
icon: "fa-solid fa-users",
color: "icon-blue"
},

{
label: "Carriers Sickle Cell Trait",
value: 1363,
icon: "fa-solid fa-dna",
color: "icon-purple"
},

{
label: "Sickle Cell Disease",
value: 128,
icon: "fa-solid fa-droplet",
color: "icon-red"
},

{
label: "Total",
value: 56453,
icon: "fa-solid fa-chart-column",
color: "icon-green"
}

]
},

{
name: "Kodagu",
bg: "district-blue",
stats: [

{
label: "Normal",
value: 16197,
icon: "fa-solid fa-users",
color: "icon-blue"
},

{
label: "Carriers Sickle Cell Trait",
value: 1960,
icon: "fa-solid fa-dna",
color: "icon-purple"
},

{
label: "Sickle Cell Disease",
value: 273,
icon: "fa-solid fa-droplet",
color: "icon-red"
},

{
label: "Total",
value: 18430,
icon: "fa-solid fa-chart-column",
color: "icon-green"
}

]
},

{
name: "Mysuru",
bg: "district-green",
stats: [

{
label: "Normal",
value: 135328,
icon: "fa-solid fa-users",
color: "icon-blue"
},

{
label: "Carriers Sickle Cell Trait",
value: 1341,
icon: "fa-solid fa-dna",
color: "icon-purple"
},

{
label: "Sickle Cell Disease",
value: 176,
icon: "fa-solid fa-droplet",
color: "icon-red"
},

{
label: "Total",
value: 136845,
icon: "fa-solid fa-chart-column",
color: "icon-green"
}

]
}

]
    };
  },
  mounted() {
    this.stats.forEach(stat => {
      this.animateCount(stat);
    });
  },
  methods: {
    animateCount(stat) {
      const startTime = performance.now();
      const duration = 2000;
      const update = currentTime => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = stat.end * progress;
        stat.displayValue = stat.isPercentage
          ? currentValue.toFixed(2) + "%"
          : Math.floor(currentValue).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    }
  }
}
</script>

 <style>
        .report-card {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            margin-bottom: 30px;
            transition: transform 0.3s ease;
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        
        .report-card:hover,.main-header-hover:hover {
            transform: translateY(-5px);
        }
        
        .report-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .report-content {
            padding: 25px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        
        .report-content h3 {
            color: var(--primary-color);
            margin-bottom: 15px;
        }
        
        .report-meta {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            color: var(--secondary-color);
            font-size: 0.9rem;
        }
        
        .report-meta span {
            display: flex;
            align-items: center;
        }
        
        .report-meta i {
            margin-right: 5px;
        }
        
        .report-actions {
            margin-top: auto;
            display: flex;
            gap: 10px;
        }
        
        .report-actions .btn {
            flex: 1;
            text-align: center;
            padding: 8px 12px;
        }
        
        .report-filters {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
        }
        
        .filter-row {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 15px;
        }
        
        .filter-group {
            flex: 1;
            min-width: 200px;
        }
        
        .filter-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        .filter-group select,
        .filter-group input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        
        .filter-actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }


        /* reports section*/
         .report-section {
         background: #fdfdfd;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    /* max-width: 1000px; */
    margin: auto;
    margin: 20px -6px;
    }
    .report-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }
    .report-box {
      flex: 1 1 200px;
      min-width: 180px;
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 4px 10px rgba(0,0,0,0.08);
      position: relative;
      border:1px solid #e3e3e3
    }
    .report-box .icon {
     font-size: 30px;
    margin-bottom: 10px;
    display: inline-block;
    background: #fff;
    border-radius: 12px;
    padding: 3px 8px;
    border: 1px solid #ccc;
    }
    .report-box h3 {
      font-size: 1.8rem;
      margin-bottom: 6px;
      color: #000
    }
    .report-box p {
      font-size: 0.95rem;
      color: #555;
      text-align: center;
    }
    .report-box .change {
      margin-top: 8px;
      font-size: 0.85rem;
      color: #008000;
    }
.bg-red {
  background-color: #ffdddd;
}
.bg-orange {
  background-color: #ffe5cc;
}
.bg-green {
  background-color: #ddffdd;
}
.bg-purple {
  background-color: #f0e5ff;
}
.bg-orange{
background-color: beige;
}
.bg-blue{
background-color: #e4f1ff;
}
.bg-white{
  background-color: #fff;
}

    @media (max-width: 600px) {
      .report-box h3 { font-size: 1.4rem; }
    }
    .district-wrapper{
display:flex;
flex-wrap:wrap;
gap:30px;
justify-content:center;
margin-top:30px;
}

.district-column{
background:#fff;
border-radius:12px;
padding:20px;
box-shadow:0 4px 10px rgba(0,0,0,0.05);
flex:1 1 320px;
}

.district-title{
text-align:center;
margin-bottom:20px;
font-size:22px;
color:#2c3e50;
font-weight:600;
}

.district-cards{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:15px;
}

.report-box{
background:#f9fafb;
border-radius:10px;
padding:18px;
text-align:center;
border:1px solid #e5e7eb;
transition:0.3s;
}

.report-box:hover{
transform:translateY(-4px);
box-shadow:0 4px 12px rgba(0,0,0,0.1);
}

.report-box h3{
font-size:22px;
font-weight:600;
margin-bottom:5px;
}

.report-box p{
font-size:14px;
color:#555;
}

.icon img{
width:32px;
margin-bottom:8px;
}

@media(max-width:768px){

.district-cards{
grid-template-columns:1fr;
}

}
/* District Backgrounds */

.district-orange{
background:#fff3e6;
}

.district-blue{
background:#e8f2ff;
}

.district-green{
background:#eaf9f0;
}
/* Icon Colors */

.icon-blue{
color:#1e88e5;
}

.icon-purple{
color:#8e24aa;
}

.icon-red{
color:#e53935;
}

.icon-green{
color:#2e7d32;
}

    </style>