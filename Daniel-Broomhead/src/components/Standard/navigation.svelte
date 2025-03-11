<!-- src/components/Navigation.svelte -->
<script>
    export let links = [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" }
    ];
  </script>
  
  <style>
    nav {
      background-color: #03045E;
      padding: 1rem;
      text-align: center;
    }
  
    a {
      color: white;
      text-decoration: none;
      margin: 0 15px;
      font-size: 1.2rem;
    }
  
    a:hover {
      text-decoration: underline;
    }
  </style>
  
  <nav>
    {#each links as { href, label }}
      <a href={href}>{label}</a>
    {/each}
  </nav>
  