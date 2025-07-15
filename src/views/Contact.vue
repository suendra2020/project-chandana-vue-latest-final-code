<template>
  <div class="page-content">
    <div class="container">
     
      <h1 class="page-title">Contact Us</h1>

    <section class="contact-intro">
      <p>
        We welcome your inquiries, feedback, and suggestions regarding Project CHAnDAnA. Please feel free to reach out to us using any of the contact methods below.
      </p>
    </section>

    <div class="helpline-box">
      <h3>Helpline</h3>
      <span class="helpline-number">080-22358910</span>
      <span class="helpline-time">Available Monday to Friday, 9:00 AM to 5:00 PM</span>
    </div>

    <section class="district-contacts">
      <div class="row">
        <div class="col-md-12">
          <section class="contact-section">
            <h2>Project Chandana Contact Information</h2>
            <div class="districts-container">
              <div class="contact-info-box">
                <div class="contact-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-details">
                          <h3 class="mt-2">Project officer</h3>
                  <h3>Command Centre Address</h3>
                  <p>
                   
                    Indian Institute of Science<br /> Address: Badam Marg, Mathikere, Bengaluru,<br /> Karnataka 560012
                  </p>
                </div>
              </div>
              <div class="contact-info-box">
                <div class="contact-icon">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div class="contact-details">
                  <h3 class="mt-2">Phone</h3>
                  <p>
                    Helpline:080-22358910<br /> 
Office: 080-2293 22691
                  </p>
                </div>
              </div>
              <!-- <div class="contact-info-box">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-details">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:support@projectchandana.gov.in">example.com</a>
                  </p>
                </div>
              </div> -->
              <div class="contact-info-box">
                <div class="contact-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="contact-details">
                  <h3 class="mt-2">Office Hours</h3>
                  <p>
                    Monday to Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Closed on Sundays and Government Holidays
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-md-6">
          <!-- Form can be added here in the future -->
        </div>
      </div>
    </section>

    <section class="map-section">
      <h2>Our Location</h2>
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2924168765758!2d77.56335117321055!3d13.017041413884186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d757d11bfb%3A0x3fc1cd64d345c13f!2sIndian%20Institute%20of%20Science%20(Bengaluru)!5e0!3m2!1sen!2sin!4v1751958531773!5m2!1sen!2sin" allowfullscreen="" loading="lazy" title="Map showing our office location"></iframe>
      </div>
    </section>

    <section class="district-contacts">
      <h2>District Coordinators</h2>
      <div class="districts-container">
        <div class="contact-info-box">
          <h3>Mysuru District</h3>
          <p><b>Dr Akhila G</b></p>
          <p><b>Phone:</b> 0821-2345678</p>
          <p>
            <!-- <strong>Email:</strong>
            <a href="mailto:mysuru.dho@example.com">mysuru.dho@example.com</a> -->
          </p>
          <p><b>Address:</b> District TB center Benki nawaba street, Irwin road cross, Mandimohalla Mysuru-570021</p>
        </div>

        <div class="contact-info-box">
          <h3>Kodagu District</h3>
          <p><b>Dr Mamatha H G</b> </p>
          <p><b>Phone:</b> 9535460451</p>
          <p>
            <!-- <strong>Email:</strong>
            <a href="mailto:kodagu.dho@example.com">kodagu.dho@example.com</a> -->
          </p>
          <p>
            <strong>Address:</strong> District Consultant /Public Health Officer
          </p>
        </div>

        <div class="contact-info-box">
          <h3>Chamarajanagar District</h3>
          <p><b>Dr Darshini V</b> </p>
          <p><strong>Phone:</strong> 6361895721</p>
          <p>
            <!-- <strong>Email:</strong>
            <a href="mailto:chamarajanagar.dho@example.com">chamarajanagar.dho@example.com</a> -->
          </p>
          <p><strong>Address:</strong>1st Floor, District Tuberculosis Office, Government Ayurvedic Hospital Campus, behind District Hospital, Rachayya Double Road, Chamrajnagara, Chamrajnagara district. 571313</p>
        </div>
      </div>
    </section>

     <section class="partners-section">
      <h2>Our Partners</h2>
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
  name: 'Contact',
   data() {
    return {
      openSection: 0, // Initially open the first section
   
      partners: [
         { logo: this.$base + "images/healthmission.png", alt: "National Sickle Cell Anemia Elimination Mission" },
        { logo: this.$base + "images/karnatka.png", alt: "Government of Karnataka" },
        { logo: this.$base + "images/indianoil-logo.png", alt: "IndianOil Aarogyam" },
        { logo: this.$base + "images/isim.png", alt: "Indian Institute of Science" },
      ]
    };
  },
}
</script>

 <style>
        .contact-section {
            margin-bottom: 40px;
        }
        
        .contact-info {
            background-color: #f8f9fa;
            padding: 30px;
            border-radius: 8px;
            margin-bottom: 30px;
        }
        
        .contact-info-item {
            display: flex;
            margin-bottom: 20px;
        }
        
        .contact-info-item:last-child {
            margin-bottom: 0;
        }
        
        .contact-icon {
            width: 50px;
            height: 50px;
            background-color: var(--primary-color);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 20px;
            flex-shrink: 0;
        }
        
        .contact-icon i {
            color: white;
            font-size: 1.5rem;
        }
        
        .contact-details h3 {
            color: var(--primary-color);
            margin-bottom: 5px;
        }
        
        .contact-form {
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        .form-control {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
        }
        
        textarea.form-control {
            height: 150px;
            resize: vertical;
        }
        
        .form-check {
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
        }
        
        .form-check-input {
            margin-right: 10px;
            margin-top: 5px;
        }
        
        .map-container {
            height: 400px;
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 30px;
        }
        
        .map-container iframe {
            width: 100%;
            height: 100%;
            border: 0;
        }
        
        .helpline-box {
            background-color: var(--primary-color);
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .helpline-box h3 {
            margin-bottom: 10px;
            color: #fff !important;
        }
        
        .helpline-number {
            font-size: 1.5rem;
            font-weight: bold;
            display: block;
            margin-bottom: 10px;
        }
        
        .helpline-time {
            font-size: 0.9rem;
            opacity: 0.8;
        }
/*     
  .districts-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    margin: 30px 0;
  } */

  .contact-info-box {
    flex: 1 1 calc(33.333% - 20px);
    background-color: #f8f9fa;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    min-width: 280px;
  }

  .contact-info-box h3 {
    margin-bottom: 12px;
    font-size: 1.25rem;
  }

  .contact-info-box p {
    margin-bottom: 6px;
    line-height: 1.5;
    text-align: left;
  }

  .contact-info-box a {
    color: #007bff;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .contact-info-box {
      flex: 1 1 100%;
    }
  }
    </style>