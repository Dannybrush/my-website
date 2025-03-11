<script>
    import { goto } from '$app/navigation';
  </script>
  
  <style>
    /* Global Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f7fc;
      color: #333;
    }
  
    h1, h2, h3 {
      color: #03045E;
    }
  
    /* Hero Section */
    .hero {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #0077B6 0%, #00B4D8 100%);
      color: white;
      text-align: center;
      padding: 2rem;
    }
  
    .hero h1 {
      font-size: 3.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  
    .hero p {
      font-size: 1.3rem;
      margin-bottom: 2rem;
      line-height: 1.6;
    }
  
    .cta-btn {
      padding: 1rem 2rem;
      background-color: #CAF0F8;
      color: #03045E;
      font-size: 1.2rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      text-transform: uppercase;
      transition: background-color 0.3s ease;
    }
  
    .cta-btn:hover {
      background-color: #90E0EF;
    }
  
    /* About Section */
    .about {
      padding: 5rem 2rem;
      background-color: #ffffff;
      text-align: center;
    }
  
    .about h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
  
    .about p {
      font-size: 1.2rem;
      line-height: 1.8;
      margin-bottom: 2rem;
    }
  
    .about .about-image {
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
  
    /* Services Section */
    .services {
      background-color: #f9f9f9;
      padding: 5rem 2rem;
      text-align: center;
    }
  
    .services h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
  
    .service-item {
      display: inline-block;
      width: 250px;
      margin: 2rem;
      padding: 2rem;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .service-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
  
    .service-item h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  
    .service-item p {
      font-size: 1.1rem;
      color: #555;
      line-height: 1.6;
    }
  
    /* Testimonials Section */
    .testimonials {
      padding: 5rem 2rem;
      background-color: #ffffff;
      text-align: center;
    }
  
    .testimonials h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
  
    .testimonial {
      font-style: italic;
      color: #555;
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }
  
    .testimonial-author {
      font-weight: bold;
      color: #0077B6;
      margin-top: 1rem;
    }
  
    /* Footer Section */
    footer {
      background-color: #03045E;
      color: white;
      padding: 2rem;
      text-align: center;
    }
  
    footer .footer-links a {
      color: #90E0EF;
      text-decoration: none;
      margin: 0 1rem;
      font-weight: 600;
    }
  
    footer .footer-links a:hover {
      text-decoration: underline;
    }
  </style>
  
  <main>
    <!-- Hero Section -->
    <section class="hero">
      <div>
        <h1>Welcome to J.C. Packaging Limited</h1>
        <p>Your trusted partner in packaging machinery solutions, offering expert services across industries.</p>
        <button class="cta-btn" on:click={() => goto('/about')}>Learn More</button>
      </div>
    </section>
  
    <!-- About Section -->
    <section class="about">
      <h2>About Us</h2>
      <p>
        With over 30 years of experience, J.C. Packaging Limited provides advanced packaging machinery solutions to a wide variety of industries including food, pharmaceutical, and dairy. We offer complete project management services from design to installation and maintenance.
      </p>
      <img src="https://via.placeholder.com/400x250" alt="Packaging Machinery" class="about-image" />
    </section>
  
    <!-- Services Section -->
    <section class="services">
      <h2>Our Services</h2>
      <div class="service-item">
        <h3>Packaging Machinery</h3>
        <p>We provide top-quality machinery for various packaging needs, ensuring reliability and efficiency.</p>
      </div>
      <div class="service-item">
        <h3>Project Management</h3>
        <p>Our experts oversee complete packaging installations, ensuring smooth transitions from setup to operation.</p>
      </div>
      <div class="service-item">
        <h3>Refurbishment</h3>
        <p>We offer comprehensive refurbishment programs to extend the life of your packaging machinery, providing cost-effective solutions.</p>
      </div>
    </section>
  
    <!-- Testimonials Section -->
    <section class="testimonials">
      <h2>What Our Clients Say</h2>
      <div class="testimonial">
        <p>"J.C. Packaging provided an excellent solution for our production line. Their expertise and dedication made the entire process seamless." - Client A</p>
        <div class="testimonial-author">Client A, Food Industry</div>
      </div>
      <div class="testimonial">
        <p>"We’ve been working with J.C. Packaging for years, and they never fail to deliver top-notch service and quality." - Client B</p>
        <div class="testimonial-author">Client B, Pharmaceutical Industry</div>
      </div>
    </section>
  
    <!-- Footer Section -->
    <footer>
      <div class="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-and-conditions">Terms & Conditions</a>
        <a href="/contact">Contact Us</a>
      </div>
      <p>&copy; 2025 J.C. Packaging Limited. All rights reserved.</p>
    </footer>
  </main>
  