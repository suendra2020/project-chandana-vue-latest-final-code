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
    <div class="report-section">
      
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
    </div>

    <h1 class="page-title">Reports & Publications</h1>
    <section class="reports-intro">
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
</template>

<script>
export default {
  name: 'Reports',
   data() {
    return {
      stats: [
        { id: 'count1', end: 198737, label: 'Total Screenings Tests Completed', icon: '🔒', isPercentage: false, displayValue: '0',bgClass: 'bg-red' },
        { id: 'count2', end: 75, label: 'Awareness Activities Performed', icon: '📋', isPercentage: false, displayValue: '0',bgClass: 'bg-orange' },
        { id: 'count3', end: 1275, label: 'Sickle Cell Disease Cases', icon: '🧭', isPercentage: false, displayValue: '0',bgClass: 'bg-green' },
        { id: 'count4', end: 80.02, label: 'Target Achieved Using HPOS', icon: '👥', isPercentage: true, displayValue: '0%',bgClass: 'bg-purple' }
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

    @media (max-width: 600px) {
      .report-box h3 { font-size: 1.4rem; }
    }
    </style>