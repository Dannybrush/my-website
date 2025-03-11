<!-- src/components/HeroSection.svelte -->
<script>
  export let title = "Welcome to My Website!";
  export let subtitle = "Building innovative and interactive web experiences.";
</script>
.hero {
  background-image: url('path-to-your-image.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;  /* Full screen height */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 0 20px;
}

.hero h1 {
  font-size: 3rem;
  letter-spacing: 2px;
  font-weight: 800;
  text-transform: uppercase;
}

.hero p {
  font-size: 1.2rem;
  margin-top: 20px;
  font-weight: 300;
}
