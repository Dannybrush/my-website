<!-- src/components/NavBar.svelte -->
<script>
  let showMenu = false;
</script>

<nav class="navbar">
  <!-- Logo Section -->
  <a href="/" class="logo">
    <img src="/jc/Argosy.png" alt="JC Packaging Limited Logo">
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
</nav>

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

/* Responsive Styling */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
