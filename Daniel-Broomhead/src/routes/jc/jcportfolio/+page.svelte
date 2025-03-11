<script>
    import { goto } from '$app/navigation';
  </script>
  
  <style>
    /* Global Styles */
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4; /* Light grey background */
      color: #03045E; /* Use your dark blue for text */
    }
  
    .section-title {
      text-align: center;
      font-size: 2.5rem;
      color: #03045E;
      margin-bottom: 2rem;
    }
  
    /* Portfolio container */
    .portfolio-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  
    .portfolio-tile {
      background-color: #CAF0F8;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
      border: 2px solid #0077B6; /* Blue border to match your brand */
    }
  
    .portfolio-tile:hover {
      transform: translateY(-10px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      border-color: #00B4D8; /* Lighter blue on hover */
    }
  
    .portfolio-tile img {
      max-width: 100%;
      height: auto;
      margin-bottom: 1rem;
    }
  
    .portfolio-tile h3 {
      font-size: 1.2rem;
      color: #03045E;
      margin-bottom: 1rem;
    }
  
    .portfolio-tile p {
      font-size: 1rem;
      color: #0077B6;
      margin-bottom: 1rem;
    }
  
    .portfolio-tile a {
      color: #00B4D8;
      text-decoration: none;
      font-weight: bold;
      font-size: 1rem;
    }
  
    .portfolio-tile a:hover {
      text-decoration: underline;
    }
  
    /* Header and Footer */
    header {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #03045E;
      padding: 1rem 0;
      color: white;
    }
  
    header img {
      max-width: 200px;
    }
  
    footer {
      background-color: #03045E;
      color: white;
      padding: 1rem;
      text-align: center;
    }
  </style>
  
  <main>
    <header>
      <!-- Add J.C. Packaging LTD logo here -->
      <img src="/jc/jcpackagingdemo.webp" alt="J.C. Packaging LTD Logo" />
    </header>
  
    <section class="portfolio">
      <h1 class="section-title">Our Clients</h1>
  
      <div class="portfolio-container">
        <div class="portfolio-tile" on:click={() => goto('https://hdg-packaging.com/home_1_DE.html')}>
          <img src="/jc/HDG.png" alt="HDG Packaging Logo" />
          <h3>HDG Packaging</h3>
          <p>Specializes in designing and manufacturing packaging machines and systems, offering customized solutions for various industries.</p>
          <a href="https://hdg-packaging.com/home_1_DE.html" target="_blank">Visit Website</a>
        </div>
  
        <div class="portfolio-tile" on:click={() => goto('https://gic.uk.net/')}>
          <img src="/jc/GIC.png" alt="GIC UK Logo" />
          <h3>GIC UK</h3>
          <p>Provides packaging solutions in the UK, although specific service details are not publicly available.</p>
          <a href="https://gic.uk.net/" target="_blank">Visit Website</a>
        </div>
  
        <div class="portfolio-tile" on:click={() => goto('https://www.robopac.com/en/business-units/sotemapack')}>
          <img src="/jc/RoboPAc.png" alt="Sotemapack Logo" />
          <h3>Sotemapack</h3>
          <p>Part of the Aetna Group, designing and manufacturing packaging machines for various industries including P.E. sleeve wrapping and shrink wrapping solutions.</p>
          <a href="https://www.robopac.com/en/business-units/sotemapack" target="_blank">Visit Website</a>
        </div>
  
        <div class="portfolio-tile" on:click={() => goto('https://www.zetamachines.com/en')}>
          <img src="/jc/Zeta.png" alt="ZETA Machines Logo" />
          <h3>ZETA Machines</h3>
          <p>Focuses on automatic end-of-line machines for secondary packaging in cardboard boxes and palletizing solutions across various sectors.</p>
          <a href="https://www.zetamachines.com/en" target="_blank">Visit Website</a>
        </div>
  
        <div class="portfolio-tile" on:click={() => goto('https://www.argosymachineryltd.co.uk/')}>
          <img src="/jc/Argosy.png" alt="Argosy Machinery Ltd Logo" />
          <h3>Argosy Machinery Ltd</h3>
          <p>Manufactures flow wrapping machinery, 4-side seal machinery, and converting machinery for the packaging industry in the UK.</p>
          <a href="https://www.argosymachineryltd.co.uk/" target="_blank">Visit Website</a>
        </div>
  
        <div class="portfolio-tile" on:click={() => goto('https://www.sichera.com')}>
          <img src="/jc/Sichera.png" alt="Sichera Logo" />
          <h3>Sichera</h3>
          <p>Offers a range of packaging solutions including packing, palletizing, stretch wrapping, and internal logistics tailored for various industries.</p>
          <a href="https://www.sichera.com" target="_blank">Visit Website</a>
        </div>
      </div>
    </section>
  
    <footer>
      <p>© 2025 J.C. Packaging LTD | All Rights Reserved</p>
    </footer>
  </main>
  