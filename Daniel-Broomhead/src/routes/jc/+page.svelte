<script>
    // Add any interactivity or script if needed (e.g., for animations, image carousels)
    import { goto } from '$app/navigation';

  </script>
  
  <style>
    /* Page Styling */
    .home-page {
      font-family: 'Arial', sans-serif;
      background-color: #f4f7fc;
      color: #333;
      padding: 2rem;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    header {
      width: 100%;
      padding: 1rem;
      background-color: #03045E;
      color: #fff;
      text-align: center;
      font-size: 1.5rem;
    }
  
    /* Hero Section */
    .hero-section {
      width: 100%;
      background-color: #0077B6;
      color: #fff;
      padding: 6rem 2rem;
      text-align: center;
      margin-bottom: 3rem;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  
    .hero-section h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  
    .hero-section p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  
    .hero-section button {
      padding: 1rem 2rem;
      background-color: #00B4D8;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1.1rem;
    }
  
    .hero-section button:hover {
      background-color: #0077B6;
    }
  
    /* Services Section */
    .services-section {
      width: 100%;
      padding: 4rem 2rem;
      text-align: center;
      margin-bottom: 3rem;
    }
  
    .services-section h2 {
      font-size: 2.5rem;
      color: #03045E;
      margin-bottom: 1.5rem;
    }
  
    .services-section p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  
    .services-section .service-cards {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
    }
  
    .service-card {
      background-color: #ffffff;
      padding: 2rem;
      width: 30%;
      text-align: center;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
    }
  
    .service-card:hover {
      transform: scale(1.05);
    }
  
    .service-card h3 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  
    .service-card p {
      font-size: 1.1rem;
    }
  
    /* Footer Styling */
    footer {
      width: 100%;
      padding: 2rem;
      background-color: #03045E;
      color: white;
      text-align: center;
      font-size: 0.9rem;
    }
  
    footer .footer-links {
      margin-bottom: 1rem;
    }
  
    footer .footer-links a {
      color: #90E0EF;
      text-decoration: none;
      margin: 0 1rem;
    }
  
    footer .footer-links a:hover {
      text-decoration: underline;
    }
  
    footer .footer-info {
      margin-top: 1rem;
    }
  </style>
  
  <div class="home-page">
    <header>
      <p>J.C. Packaging Limited</p>
    </header>
  
<!-- Hero Section -->
<section class="hero-section">
    <h1>Welcome to J.C. Packaging Limited</h1>
    <p>
      Providing reliable and efficient packaging solutions with over 30 years of experience. We offer a wide range of machinery and project management services tailored to your needs.
    </p>
    <button on:click={() => goto('/jcabout')}>Learn More</button>
  </section>
  
    <!-- Services Section -->
    <section class="services-section">
      <h2>Our Services</h2>
      <p>From machinery sales to full turnkey packaging lines, J.C. Packaging offers a comprehensive range of services:</p>
  
      <div class="service-cards">
        <div class="service-card">
          <h3>Machinery Supply</h3>
          <p>Supplying leading packaging machinery from top manufacturers across Europe.</p>
        </div>
        <div class="service-card">
          <h3>Turnkey Installations</h3>
          <p>End-to-end installation services, from consultation to full line setup.</p>
        </div>
        <div class="service-card">
          <h3>Refurbishment</h3>
          <p>Extending the life of your equipment with high-quality refurbishment services.</p>
        </div>
      </div>
    </section>
  
    <!-- Footer Section -->
    <footer>
      <div class="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-and-conditions">Terms & Conditions</a>
        <a href="/sitemap">Sitemap</a>
      </div>
      <div class="footer-info">
        <p>&copy; 2025 J.C. Packaging Limited. All rights reserved.</p>
        <p>123 Business Street, City, Country | Phone: (123) 456-7890 | Email: contact@jcpackaging.com</p>
      </div>
    </footer>
  </div>
  