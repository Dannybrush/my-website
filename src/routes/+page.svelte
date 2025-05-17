<script>
    // Import Svelte 5 runes
    import { onMount } from 'svelte';
    import { spring } from 'svelte/motion';
    import { fade, fly } from 'svelte/transition';
    
    // Import icons from Lucide
    import { 
      Rocket, 
      Code, 
      BrainCircuit, 
      Github, 
      Linkedin, 
      Mail, 
      ExternalLink,
      Monitor,
      Database,
      Server,
      Layers,
      Globe
    } from '@lucide/svelte';
    
    // === RUNES SYNTAX ===
    // Personal information - CUSTOMIZE THESE VALUES
    let PII = $state({
      name: "Daniel Broomhead", // CHANGE: Your name
      title: "Full-Stack Developer",
      tagline: "Turning complex code into elegant, professional digital experiences",
      about: [
        "I'm a full-stack developer blending art with logic to craft interactive, high-performance web applications. Obsessed with clean code, blazing-fast interfaces, and seamless UX. Specializing in SvelteKit, Supabase, and modern frontend design.",
        "When not coding, I push pixels, solve complex problems, and contribute to open source."
      ],
      skills: {
        frontend: ["SvelteKit", "TypeScript", "React", "Tailwind CSS", "Three.js"],
        backend: ["Node.js", "Supabase", "PostgreSQL", "Redis", "GraphQL"],
        tools: ["Git", "Docker", "Figma", "AWS", "Vercel"]
      },
      projects: [
        {
          title: "Project Nebula", // CHANGE: Your project names
          description: "Interactive 3D space exploration app built with SvelteKit and Three.js",
          tags: ["SvelteKit", "Three.js", "TypeScript"],
          link: "https://github.com/yourusername/project-nebula" // CHANGE: Your project links
        },
        {
          title: "DataSync Pro",
          description: "Real-time database synchronization tool with advanced filtering options",
          tags: ["Supabase", "WebSockets", "SvelteKit"],
          link: "https://github.com/yourusername/datasync-pro" // CHANGE: Your project links
        }
      ],
      social: {
        github: "https://github.com/yourusername", // CHANGE: Your social links
        linkedin: "https://linkedin.com/in/yourusername", // CHANGE: Your social links
        email: "your@email.com" // CHANGE: Your email
      }
    });
    
    // Interactive elements state
    let element = $state({
      activeSkillTab: "frontend",
      scrollY: 0,
      cursorPosition: { x: 0, y: 0 },
      introComplete: false
    });
    
    // Spring animations for smooth interactions
    const cursorSpring = spring({ x: 0, y: 0 }, {
      stiffness: 0.1,
      damping: 0.4
    });
    
    // Scroll detection for parallax effects
    const handleScroll = () => {
      element.scrollY = window.scrollY;
    };
    
    // Track mouse movement for interactive effects
    const handleMouseMove = (e) => {
      element.cursorPosition = { 
        x: e.clientX, 
        y: e.clientY 
      };
      cursorSpring.set(element.cursorPosition);
    };
    
    $effect(() => {
      // Update cursor spring animation when cursor position changes
      if (element.cursorPosition.x && element.cursorPosition.y) {
        cursorSpring.set(element.cursorPosition);
      }
    });
    
    let pageContainer;
    let heroSection;
    let aboutSection;
    let skillsSection;
    let projectsSection;
    
    // Calculate parallax offset based on scroll position
    function parallaxOffset(factor) {
      return element.scrollY * factor;
    }
    
    onMount(() => {
      // Add scroll and mousemove event listeners
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('mousemove', handleMouseMove);
      
      // Trigger intro animation sequence
      setTimeout(() => {
        element.introComplete = true;
      }, 500);
      
      // Setup intersection observers for scroll animations
      const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, observerOptions);
      
      // Observe all sections
      document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
      });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
        observer.disconnect();
      };
    });
  </script>
  
  <svelte:head>
    <title>{PII.name} - {PII.title}</title>
    <meta name="description" content={PII.tagline} />
  </svelte:head>
  
  <div 
    class="page-container" 
    bind:this={pageContainer} 
    onmousemove={handleMouseMove}
  >
    <!-- Animated background blobs -->
    <div 
      class="blob blob-1" 
      style:transform={`translate(${$cursorSpring.x * 0.02}px, ${$cursorSpring.y * 0.02 - parallaxOffset(0.05)}px)`}    <div 
      ></div>
<div 
class="blob blob-2" 
      style:transform={`translateY(${parallaxOffset(-0.1)}px)`}    ></div>
    
    <!-- Grid overlay -->
    <div class="grid-overlay"></div>
    
<!-- Hero Section -->
<section 
  class="hero" 
  bind:this={heroSection}
  in:fade={{ duration: 1000, delay: 200 }}
>
  <div class="hero-content" style:transform={`translateY(${parallaxOffset(-0.1)}px)`}>
     <h1 class="title">
          <span 
            class="gradient-text"
            in:fly={{ y: -50, duration: 1000, delay: 300 }}
          >{PII.name}</span>
        </h1>
        
        <div class="title-badge" in:fly={{ y: 30, duration: 1000, delay: 600 }}>
          <span>{PII.title}</span>
        </div>
        
        <p 
          class="subtitle"
          in:fly={{ y: 30, duration: 1000, delay: 900 }}
        >
          {PII.tagline}
        </p>
        
        <div class="cta-container" in:fly={{ y: 30, duration: 1000, delay: 1200 }}>
          <a href="#about" class="primary-button">Discover My Work</a>
          <a href="#contact" class="secondary-button">Get In Touch</a>
        </div>
      </div>
      
      <div class="scroll-indicator" in:fade={{ duration: 1000, delay: 1500 }}>
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <div>Scroll Down</div>
      </div>
    </section>
  
    <!-- About Section -->
    <section id="about" class="about-section animated-section" bind:this={aboutSection}>
      <div class="about-box">
        <div class="about-text">
          <h2>About Me</h2>
          {#each PII.about as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
  
        <div class="icon-grid">
          <Rocket class="icon neon pulse" />
          <Code class="icon neon spin" />
          <BrainCircuit class="icon neon flicker" />
        </div>
      </div>
    </section>
  
    <!-- Skills Section -->
    <section id="skills" class="skills-section animated-section" bind:this={skillsSection}>
      <h2>Tech Stack</h2>
      
      <div class="skills-tabs">
        <button 
          class:active={element.activeSkillTab === "frontend"}
          onclick={() => element.activeSkillTab = "frontend"}
        >
          <Monitor size={20} />
          Frontend
        </button>
        <button 
          class:active={element.activeSkillTab === "backend"}
          onclick={() => element.activeSkillTab = "backend"}
        >
          <Server size={20} />
          Backend
        </button>
        <button 
          class:active={element.activeSkillTab === "tools"}
          onclick={() => element.activeSkillTab = "tools"}
        >
          <Layers size={20} />
          Tools
        </button>
      </div>
      
      <div class="skill-container">
        {#if element.activeSkillTab === "frontend"}
          <div class="skill-grid" in:fade={{ duration: 300 }}>
            {#each PII.skills.frontend as skill}
              <span>{skill}</span>
            {/each}
          </div>
        {:else if element.activeSkillTab === "backend"}
          <div class="skill-grid" in:fade={{ duration: 300 }}>
            {#each PII.skills.backend as skill}
              <span>{skill}</span>
            {/each}
          </div>
        {:else}
          <div class="skill-grid" in:fade={{ duration: 300 }}>
            {#each PII.skills.tools as skill}
              <span>{skill}</span>
            {/each}
          </div>
        {/if}
      </div>
    </section>
    
    <!-- Projects Section -->
    <section id="projects" class="projects-section animated-section" bind:this={projectsSection}>
      <h2>Featured Projects</h2>
      
      <div class="projects-grid">
        {#each PII.projects as project, i}
          <div 
            class="project-card"
            in:fly={{ y: 50, duration: 500, delay: i * 200 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div class="project-tags">
              {#each project.tags as tag}
                <span class="project-tag">{tag}</span>
              {/each}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" class="project-link">
              View Project <ExternalLink size={16} />
            </a>
          </div>
        {/each}
      </div>
    </section>
  
    <!-- Contact Section -->
    <section id="contact" class="contact-section animated-section">
      <h2>Let's Connect</h2>
      <div class="contact-card">
        <p>Interested in working together? Feel free to reach out through any of these channels:</p>
        
        <div class="socials">
          <a href={PII.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github class="social-icon neon" />
            <span>GitHub</span>
          </a>
          <a href={PII.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin class="social-icon neon" />
            <span>LinkedIn</span>
          </a>
          <a href={`mailto:${PII.social.email}`} aria-label="Email">
            <Mail class="social-icon neon" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
    
    <footer>
      <div class="footer-content">
        <p>Designed & Built with <span class="heart">♥</span> using SvelteKit</p>
        <p>© {new Date().getFullYear()} {PII.name}</p>
      </div>
    </footer>
  </div>
  
  <style>
    /* Base styles and resets */
    :global(html) {
      scroll-behavior: smooth;
    }
    
    :global(body) {
      background: #0a0e17;
      color: #cbd5e1;
      font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }
  
    /* Page container */
    .page-container {
      max-width: 100%;
      margin: 0 auto;
      padding: 0;
      position: relative;
      overflow: hidden;
      background: #0a0e17;
    }
  
    /* Grid overlay for cyberpunk effect */
    .grid-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(rgba(0, 255, 214, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 214, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      pointer-events: none;
      z-index: 1;
    }
  
    /* Animated background blobs */
    .blob {
      position: fixed;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.15;
      pointer-events: none;
      z-index: 0;
      will-change: transform;
    }
  
    .blob-1 {
      width: 500px;
      height: 500px;
      background: #00ffd6;
      top: -200px;
      left: -100px;
    }
  
    .blob-2 {
      width: 600px;
      height: 600px;
      background: #ff4577;
      bottom: -200px;
      right: -200px;
    }
  
    /* Section styles */
    section {
      position: relative;
      padding: 6rem 2rem;
      z-index: 2;
      opacity: 0.4;
      transform: translateY(30px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
  
    section.in-view {
      opacity: 1;
      transform: translateY(0);
    }
  
    h2 {
      font-size: 2.5rem;
      margin-bottom: 2.5rem;
      text-align: center;
      font-weight: 800;
      letter-spacing: 0.05em;
    }
  
    /* Hero section */
    .hero {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0 2rem;
      position: relative;
      overflow: hidden;
      opacity: 1;
      transform: none;
    }
  
    .hero-content {
      will-change: transform;
    }
  
    .title {
      font-size: 5rem;
      font-weight: 900;
      margin-bottom: 1.5rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      position: relative;
    }
  
    .gradient-text {
      background: linear-gradient(110deg, #00ffd6, #00a2ff, #ff4577);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 1px rgba(255,255,255,0.1);
      filter: drop-shadow(0 0 15px rgba(0, 255, 214, 0.5));
      padding: 0.5rem 0;
    }
  
    .title-badge {
      background: rgba(255, 69, 119, 0.15);
      border: 1px solid rgba(255, 69, 119, 0.3);
      border-radius: 50px;
      padding: 0.5rem 1.5rem;
      display: inline-block;
      margin-bottom: 1.5rem;
      backdrop-filter: blur(10px);
      color: #ff4577;
      font-weight: 600;
      box-shadow: 0 0 15px rgba(255, 69, 119, 0.3);
    }
  
    .subtitle {
      font-size: 1.8rem;
      font-weight: 400;
      color: #a3b1c6;
      max-width: 700px;
      margin: 0 auto 3rem;
      line-height: 1.4;
    }
  
    .cta-container {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      margin-top: 2rem;
    }
  
    .primary-button, .secondary-button {
      padding: 0.8rem 2rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      cursor: pointer;
      text-decoration: none;
    }
  
    .primary-button {
      background: linear-gradient(90deg, #00ffd6, #02c5a6);
      color: #0a0e17;
      border: none;
      box-shadow: 0 0 20px rgba(0, 255, 214, 0.4);
    }
  
    .primary-button:hover {
      box-shadow: 0 0 30px rgba(0, 255, 214, 0.6);
      transform: translateY(-3px);
    }
  
    .secondary-button {
      background: transparent;
      color: #00ffd6;
      border: 2px solid #00ffd6;
      box-shadow: 0 0 10px rgba(0, 255, 214, 0.2);
    }
  
    .secondary-button:hover {
      background: rgba(0, 255, 214, 0.1);
      box-shadow: 0 0 20px rgba(0, 255, 214, 0.4);
      transform: translateY(-3px);
    }
  
    /* Scroll indicator */
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.9rem;
      color: #a3b1c6;
      opacity: 0.7;
    }
  
    .mouse {
      width: 30px;
      height: 50px;
      border: 2px solid #a3b1c6;
      border-radius: 20px;
      margin-bottom: 10px;
      position: relative;
    }
  
    .wheel {
      position: absolute;
      width: 6px;
      height: 6px;
      background: #a3b1c6;
      border-radius: 50%;
      left: 50%;
      transform: translateX(-50%);
      top: 10px;
      animation: wheel 1.5s infinite;
    }
  
    @keyframes wheel {
      0% {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }
      100% {
        transform: translateX(-50%) translateY(20px);
        opacity: 0;
      }
    }
  
    /* About section */
    .about-section {
      padding: 8rem 2rem;
    }
  
    .about-box {
      background: rgba(13, 18, 28, 0.9);
      border: 2px solid #00ffd6;
      border-radius: 24px;
      padding: 3.5rem;
      box-shadow:
        0 0 30px rgba(0, 255, 214, 0.25),
        inset 0 0 20px rgba(0, 255, 214, 0.1);
      display: grid;
      gap: 3rem;
      grid-template-columns: 2.5fr 1fr;
      align-items: center;
      position: relative;
      max-width: 1100px;
      margin: 0 auto;
      backdrop-filter: blur(10px);
    }
  
    .about-text h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      color: #ff4577;
      letter-spacing: 0.04em;
      text-shadow:
        0 0 8px rgba(255, 69, 119, 0.5),
        0 0 16px rgba(255, 69, 119, 0.3);
      text-align: left;
    }
  
    .about-text p {
      font-size: 1.2rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
      color: #cbd5e1;
    }
  
    /* Icon grid */
    .icon-grid {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 3rem;
    }
  
    .icon {
      width: 80px;
      height: 80px;
      stroke: #00ffd6;
      cursor: default;
      filter: drop-shadow(0 0 8px rgba(0, 255, 214, 0.5));
      transition: transform 0.3s ease, filter 0.3s ease;
    }
  
    .icon:hover {
      transform: scale(1.15) rotate(10deg);
      filter: drop-shadow(0 0 20px rgba(255, 69, 119, 0.5));
      stroke: #ff4577;
    }
  
    /* Icon animations */
    .neon {
      animation-timing-function: ease-in-out;
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.1);
        opacity: 0.8;
      }
    }

    .pulse {
      animation: pulse 3s infinite alternate;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .spin {
      animation: spin 12s linear infinite;
    }

    @keyframes flicker {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
      25%, 75% {
        opacity: 0.7;
      }
    }

    .flicker {
      animation: flicker 4s infinite ease-in-out;
    }
  
    /* Skills section */
    .skills-section {
      background: rgba(10, 14, 23, 0.8);
      padding: 8rem 2rem;
    }
  
    .skills-section h2 {
      color: #00ffd6;
      text-shadow: 0 0 12px rgba(0, 255, 214, 0.5);
    }
  
    .skills-tabs {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
    }
  
    .skills-tabs button {
      background: rgba(13, 18, 28, 0.7);
      color: #a3b1c6;
      border: 1px solid rgba(0, 255, 214, 0.3);
      border-radius: 8px;
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  
    .skills-tabs button.active {
      background: rgba(0, 255, 214, 0.1);
      color: #00ffd6;
      border-color: #00ffd6;
      box-shadow: 0 0 15px rgba(0, 255, 214, 0.3);
    }
  
    .skills-tabs button:hover:not(.active) {
      background: rgba(13, 18, 28, 0.9);
      border-color: rgba(0, 255, 214, 0.5);
    }
  
    .skill-container {
      height: 180px;
      position: relative;
    }
  
    .skill-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.2rem;
      position: absolute;
      width: 100%;
    }
  
    .skill-grid span {
      background: rgba(13, 18, 28, 0.8);
      color: #ff4577;
      padding: 0.8rem 1.5rem;
      border-radius: 12px;
      box-shadow:
        0 0 15px rgba(255, 69, 119, 0.3),
        inset 0 0 8px rgba(0, 255, 214, 0.2);
      transition: all 0.4s ease;
      cursor: default;
      font-weight: 600;
      border: 1px solid rgba(255, 69, 119, 0.3);
    }
  
    .skill-grid span:hover {
      background: rgba(255, 69, 119, 0.9);
      color: #ffffff;
      box-shadow:
        0 0 25px rgba(255, 69, 119, 0.5),
        inset 0 0 15px rgba(0, 255, 214, 0.3);
      transform: scale(1.12) translateY(-5px);
    }
  
    /* Projects section */
    .projects-section {
      padding: 8rem 2rem;
    }
  
    .projects-section h2 {
      color: #ff4577;
      text-shadow: 0 0 12px rgba(255, 69, 119, 0.5);
    }
  
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2.5rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  
    .project-card {
      background: rgba(13, 18, 28, 0.85);
      border-radius: 16px;
      padding: 2.5rem;
      box-shadow: 0 0 25px rgba(0, 255, 214, 0.15);
      transition: all 0.3s ease;
      border: 1px solid rgba(0, 255, 214, 0.2);
      position: relative;
      overflow: hidden;
    }
  
    .project-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background: linear-gradient(90deg, #00ffd6, #ff4577);
      opacity: 0.6;
      transition: opacity 0.3s ease;
    }
  
    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(0, 255, 214, 0.25);
    }
  
    .project-card:hover::before {
      opacity: 1;
    }
  
    .project-card h3 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      color: #00ffd6;
    }
  
    .project-card p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      color: #a3b1c6;
    }
  
    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      margin-bottom: 2rem;
    }
  
    .project-tag {
      background: rgba(255, 69, 119, 0.1);
      color: #ff4577;
      padding: 0.4rem 0.8rem;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 600;
      border: 1px solid rgba(255, 69, 119, 0.2);
    }
  
    .project-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: #00ffd6;
      font-weight: 600;
      text-decoration: none;
      padding: 0.5rem 0;
      position: relative;
      transition: all 0.3s ease;
    }
  
    .project-link::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 0;
      background: #00ffd6;
      transition: width 0.3s ease;
    }
  
    .project-link:hover {
      color: #00ffd6;
      filter: drop-shadow(0 0 8px rgba(0, 255, 214, 0.5));
    }
  
    .project-link:hover::after {
      width: 100%;
    }
  
    /* Contact section */
    .contact-section {
      padding: 8rem 2rem;
      background: rgba(10, 14, 23, 0.8);
    }
  
    .contact-section h2 {
      color: #ff4577;
      text-shadow: 0 0 12px rgba(255, 69, 119, 0.5);
    }
  
/* Continuing from where the style section was cut off */
.contact-card {
      background: rgba(13, 18, 28, 0.85);
      border-radius: 16px;
      padding: 3rem;
      max-width: 800px;
      margin: 0 auto;
      box-shadow: 0 0 30px rgba(0, 255, 214, 0.2);
      border: 1px solid rgba(0, 255, 214, 0.2);
      text-align: center;
    }
  
    .contact-card p {
      font-size: 1.2rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      color: #a3b1c6;
    }
  
    .socials {
      display: flex;
      justify-content: center;
      gap: 2.5rem;
      margin-top: 1.5rem;
    }
  
    .socials a {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: #cbd5e1;
      text-decoration: none;
      transition: all 0.3s ease;
      padding: 1rem;
    }
  
    .socials a:hover {
      transform: translateY(-8px);
    }
  
    .socials a:hover .social-icon {
      stroke: #ff4577;
      filter: drop-shadow(0 0 12px rgba(255, 69, 119, 0.6));
    }
  
    .socials a:hover span {
      color: #ff4577;
    }
  
    .social-icon {
      width: 30px;
      height: 30px;
      stroke: #00ffd6;
      transition: all 0.3s ease;
      filter: drop-shadow(0 0 8px rgba(0, 255, 214, 0.4));
    }
  
    /* Footer */
    footer {
      padding: 3rem 2rem;
      text-align: center;
      background: rgba(10, 14, 23, 0.9);
      position: relative;
      z-index: 2;
      border-top: 1px solid rgba(0, 255, 214, 0.1);
    }
  
    .footer-content {
      max-width: 800px;
      margin: 0 auto;
      color: #a3b1c6;
    }
  
    .heart {
      color: #ff4577;
      display: inline-block;
      animation: heartbeat 1.5s infinite;
      transform-origin: center;
    }
  
    @keyframes heartbeat {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
    }
  
    /* Responsive styles */
    @media (max-width: 1200px) {
      .title {
        font-size: 4rem;
      }
      
      .subtitle {
        font-size: 1.5rem;
      }
      
      .about-box {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2.5rem;
      }
      
      .icon-grid {
        flex-direction: row;
        justify-content: space-around;
      }
    }
  
    @media (max-width: 768px) {
      .title {
        font-size: 3rem;
      }
      
      .subtitle {
        font-size: 1.2rem;
      }
      
      .cta-container {
        flex-direction: column;
        gap: 1rem;
      }
      
      .primary-button, .secondary-button {
        width: 100%;
        text-align: center;
      }
      
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .skills-tabs {
        flex-direction: column;
        width: 100%;
        max-width: 300px;
        margin: 0 auto 2rem;
      }
      
      .socials {
        flex-direction: column;
        gap: 1rem;
      }
      
      .socials a {
        flex-direction: row;
        gap: 1rem;
      }
    }
  
    @media (max-width: 480px) {
      .title {
        font-size: 2.2rem;
      }
      
      section {
        padding: 4rem 1.5rem;
      }
      
      .about-box, .contact-card, .project-card {
        padding: 1.5rem;
      }
      
      h2 {
        font-size: 2rem;
      }
    }
  </style>