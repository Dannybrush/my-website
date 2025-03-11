<script>
    // Optional: You could add any interactivity or dynamic content if needed.
  </script>
  
  <style>
    .news-page {
      font-family: 'Arial', sans-serif;
      background-color: #f4f7fc;
      color: #333;
      padding: 3rem;
      min-height: 100vh;
      line-height: 1.6;
    }
  
    header {
      text-align: center;
      margin-bottom: 3rem;
    }
  
    header h1 {
      font-size: 3rem;
      color: #03045E;
      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
  
    .news-article {
      background-color: #ffffff;
      padding: 2.5rem;
      margin-bottom: 3rem;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .news-article:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
  
    .news-article h2 {
      font-size: 2.2rem;
      color: #0077B6;
      font-weight: 600;
      margin-bottom: 1rem;
      position: relative;
      padding-left: 30px;
    }
  
    .news-article h2::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 5px;
      height: 60%;
      background-color: #00B4D8;
      transform: translateY(-50%);
    }
  
    .news-article p {
      font-size: 1.1rem;
      color: #555;
      line-height: 1.8;
      margin-bottom: 1.5rem;
      text-align: justify;
      letter-spacing: 0.5px;
    }
  
    .news-article p:last-child {
      margin-bottom: 0;
    }
  
    .news-article a {
      color: #0077B6;
      font-weight: bold;
      text-decoration: none;
      transition: color 0.3s ease;
    }
  
    .news-article a:hover {
      color: #00B4D8;
      text-decoration: underline;
    }
  
    footer {
      width: 100%;
      padding: 2.5rem;
      background-color: #03045E;
      color: white;
      text-align: center;
      font-size: 1rem;
      margin-top: 3rem;
    }
  
    footer .footer-links {
      margin-bottom: 1.5rem;
    }
  
    footer .footer-links a {
      color: #90E0EF;
      text-decoration: none;
      margin: 0 1.5rem;
      font-weight: 600;
    }
  
    footer .footer-links a:hover {
      text-decoration: underline;
    }
  
    footer .footer-info {
      margin-top: 1rem;
      font-size: 0.9rem;
    }
  </style>
  
  <div class="news-page">
    <header>
      <h1>J.C. Packaging News</h1>
    </header>
  
    <!-- News Article 1 -->
    <section class="news-article">
      <h2>J.C. Packaging in Bologna</h2>
      <p>
        J.C. Packaging have now retained the services of a packaging specialist in the Packaging Heartland of Bologna, Italy. Mr. Ovidio Zucchini is known to us for over twenty years and has already proved to be a valuable asset being on the ‘doorstep’ of many of Europe’s most prominent packaging machinery manufacturers.
      </p>
    </section>
  
    <!-- News Article 2 -->
    <section class="news-article">
      <h2>ZETAutomation</h2>
      <p>
        J.C. Packaging are delighted to have taken on the UK agency for ZETAutomation of Bologna, Italy. Read more about ZETAutomation in our <a href="/portfolio">portfolio section</a>.
      </p>
    </section>
  
    <!-- News Article 3 -->
    <section class="news-article">
      <h2>Bag in Box South Africa</h2>
      <p>
        J.C. Packaging have recently completed the successful relocation of a Bag in Box Packaging line from South America to South Africa. J.C. Packaging were asked to assist this major company with our Project Management Services.
        Working closely with the company Project team, J.C. Packaging oversaw the removal and preparation for shipping in South America together with the re-installation, commissioning, and training of factory personnel in South Africa.
      </p>
    </section>
  
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
  