<!-- src/routes/+layout.svelte -->
<script>
    let showMenu = false;
  </script>
  
  <header class="navbar">
    <!-- Logo Section -->
    <a href="/" class="logo">
      <img src="/logo-placeholder.png" alt="JC Packaging Limited Logo">
    </a>
  
    <!-- Desktop Navigation Links -->
    <div class="nav-links">
      <a href="/" class="nav-item">Home</a>
      <a href="/about" class="nav-item">About Us</a>
      <a href="/news" class="nav-item">News</a>
      <a href="/portfolio" class="nav-item">Portfolio</a>
      <a href="/contact" class="nav-item">Contact Us</a>
    </div>
  
    <!-- Mobile Menu Button -->
    <button class="menu-toggle" on:click={() => showMenu = !showMenu}>
      ☰
    </button>
  
    <!-- Mobile Menu -->
    {#if showMenu}
      <div class="mobile-menu">
        <a href="/" class="nav-item">Home</a>
        <a href="/about" class="nav-item">About Us</a>
        <a href="/news" class="nav-item">News</a>
        <a href="/portfolio" class="nav-item">Portfolio</a>
        <a href="/contact" class="nav-item">Contact Us</a>
      </div>
    {/if}
  </header>
  
  <main class="hero-section">
    <div class="hero-content">
      <h1>Welcome to JC Packaging Limited</h1>
      <p>Your trusted partner for packaging solutions.</p>
      <a href="/portfolio" class="cta-button">View Our Work</a>
    </div>
  </main>
  
  <footer class="footer">
    <p>&copy; 2025 JC Packaging Limited. All Rights Reserved.</p>
    <div class="social-links">
      <a href="#">LinkedIn</a>
      <a href="#">Twitter</a>
      <a href="#">Facebook</a>
    </div>
  </footer>
  
  <style>
  /* Navbar Styling */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    background-color: #0077B6;
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  
  .logo img {
    height: 40px;
  }
  
  .nav-links {
    display: flex;
    gap: 24px;
  }
  
  .nav-item {
    color: #CAF0F8;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .nav-item:hover {
    background-color: #90E0EF;
    color: #03045E;
  }
  
  .menu-toggle {
    display: none;
    font-size: 24px;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  
  .mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: #0077B6;
    padding: 16px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Hero Section Styling */
  .hero-section {
    background: linear-gradient(to bottom right, #0077B6, #CAF0F8);
    color: #fff;
    text-align: center;
    padding: 80px 20px;
  }
  
  .hero-content h1 {
    font-size: 3rem;
    margin-bottom: 16px;
  }
  
  .hero-content p {
    font-size: 1.2rem;
    margin-bottom: 32px;
  }
  
  .cta-button {
    background-color: #03045E;
    color: #CAF0F8;
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #90E0EF;
    color: #03045E;
  }
  
  /* Footer Styling */
  .footer {
    background-color: #03045E;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    margin-top: 40px;
  }
  
  .footer .social-links a {
    color: #CAF0F8;
    margin: 0 10px;
    text-decoration: none;
  }
  
  .footer .social-links a:hover {
    color: #90E0EF;
  }
  
  /* Responsive Styling */
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  
    .menu-toggle {
      display: block;
    }
  
    .hero-content h1 {
      font-size: 2.5rem;
    }
  }
  </style>
  