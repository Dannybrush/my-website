<!-- src/routes/about/+page.svelte -->
<script>
    import Navigation from '$components/Navigation.svelte';
    import Footer from '$components/Footer.svelte';
  </script>
  
  <section class="about">
    <h1>About Me</h1>
    <p>Hi, I'm Daniel Broomhead. I'm a web developer passionate about creating interactive and dynamic websites. I specialize in front-end development, and I enjoy working with modern web technologies like Svelte and SvelteKit.</p>
  
    <h2>My Skills</h2>
    <ul>
      <li>Svelte & SvelteKit</li>
      <li>JavaScript (ES6+)</li>
      <li>HTML, CSS</li>
      <li>Web Design & UX</li>
    </ul>
  </section>

  <style>
    .about {
      padding: 40px 20px;
      background-color: #90E0EF;
      color: #03045E;
    }
  
    h1 {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 20px;
    }
  
    h2 {
      font-size: 2rem;
      margin-top: 20px;
    }
  
    ul {
      list-style: none;
      padding: 0;
    }
  
    li {
      font-size: 1.2rem;
      margin: 10px 0;
    }
  </style>
  