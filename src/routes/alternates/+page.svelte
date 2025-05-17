<script>
    import { Rocket, Code2, BrainCircuit, Github, Linkedin, Mail } from '@lucide/svelte';
  </script>
  
  <div class="page-container">
    <section class="hero">
      <h1 class="title">
        <span class="gradient-text">Daniel Broomhead</span>
      </h1>
      <p class="subtitle">Turning complex code into elegant, professional digital experiences.</p>
    </section>
  
    <section class="about-box">
      <div class="about-text">
        <h2>👨‍💻 About Me</h2>
        <p>
          I'm a full-stack developer blending art with logic to craft interactive, high-performance web applications.
          Obsessed with clean code, blazing-fast interfaces, and seamless UX. Specializing in SvelteKit, Supabase, and modern frontend design.
        </p>
  
        <p>
          When not coding, I push pixels, solve complex problems, and contribute to open source.
        </p>
      </div>
  
      <div class="icon-grid">
        <Rocket class="icon neon pulse" />
        <Code2 class="icon neon spin" />
        <BrainCircuit class="icon neon flicker" />
      </div>
    </section>
  
    <section class="skills">
      <h2>⚡ Skills</h2>
      <div class="skill-grid">
        <span>SvelteKit</span>
        <span>TypeScript</span>
        <span>Supabase</span>
        <span>Tailwind</span>
        <span>Node.js</span>
        <span>PostgreSQL</span>
      </div>
    </section>
  
    <section class="contact-section">
      <h2>📡 Let's Connect</h2>
      <div class="socials">
        <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub"><Github class="social-icon neon" /></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn"><Linkedin class="social-icon neon" /></a>
        <a href="mailto:your@email.com" aria-label="Email"><Mail class="social-icon neon" /></a>
      </div>
    </section>
  </div>
  
  <style>
    /* Base styles */
    .page-container {
      max-width: 900px;
      margin: 3rem auto;
      padding: 3rem 2.5rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #1a1f2a, #121721);
      border-radius: 18px;
      box-shadow:
        0 0 12px rgba(0, 255, 210, 0.15),
        0 12px 30px rgba(0, 255, 210, 0.25);
      color: #cbd5e1;
      position: relative;
      overflow: hidden;
    }
  
    /* Glowing gradient blobs for complexity */
    .page-container::before,
    .page-container::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      filter: blur(90px);
      opacity: 0.12;
      animation: float 25s ease-in-out infinite alternate;
      z-index: 0;
    }
    .page-container::before {
      width: 350px;
      height: 350px;
      background: #00ffd6;
      top: -100px;
      left: -100px;
      animation-delay: 0s;
    }
    .page-container::after {
      width: 420px;
      height: 420px;
      background: #ff4577;
      bottom: -140px;
      right: -140px;
      animation-delay: 12s;
    }
  
    @keyframes float {
      0% { transform: translate(0, 0); opacity: 0.12; }
      100% { transform: translate(30px, 30px); opacity: 0.3; }
    }
  
    /* Hero section */
    .hero {
      text-align: center;
      margin-bottom: 4rem;
      animation: fadeIn 1.2s ease forwards;
      position: relative;
      z-index: 1;
    }
  
    .title {
      font-size: 4.5rem;
      font-weight: 900;
      margin-bottom: 1rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-shadow:
        0 0 15px #00ffd6,
        0 0 30px #00ffd6;
    }
  
    .gradient-text {
  -webkit-text-stroke: 1.5px black; /* thickness and color of outline */
  -webkit-text-fill-color: transparent; /* keeps fill transparent if you want just outline */
  color: white; /* fallback fill color if needed */
  /* keep your existing gradient and styles */
  background: linear-gradient(90deg, #00ffd6, #ff4577);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

  
    .subtitle {
      font-size: 1.75rem;
      font-weight: 600;
      color: #94a3b8;
      letter-spacing: 0.03em;
      text-shadow: 0 0 8px #94a3b8;
      animation: slideIn 1.5s ease forwards;
    }
  
    /* About box */
    .about-box {
      background: rgba(18, 23, 33, 0.9);
      border: 2px solid #00ffd6;
      border-radius: 22px;
      padding: 3rem 3rem 3rem 3.5rem;
      box-shadow:
        0 0 30px #00ffd6cc,
        inset 0 0 15px #00ffd6aa;
      display: grid;
      gap: 2.5rem;
      grid-template-columns: 2.5fr 1fr;
      align-items: center;
      animation: fadeInUp 1.2s ease forwards;
      position: relative;
      z-index: 1;
    }
  
    .about-text h2 {
      font-size: 2.4rem;
      margin-bottom: 1.25rem;
      color: #ff4577;
      letter-spacing: 0.04em;
      text-shadow:
        0 0 8px #ff4577,
        0 0 16px #ff4577aa;
    }
  
    .about-text p {
      font-size: 1.125rem;
      line-height: 1.8;
      margin-bottom: 1.3rem;
      color: #cbd5e1cc;
      text-shadow: 0 0 4px #121721;
    }
  
    /* Icon grid */
    .icon-grid {
      display: flex;
      justify-content: center;
      gap: 3rem;
    }
  
    .icon {
      width: 80px;
      height: 80px;
      stroke: #00ffd6;
      cursor: default;
      filter: drop-shadow(0 0 6px #00ffd6cc);
      transition: transform 0.3s ease;
    }
  
    .icon:hover {
      transform: scale(1.15) rotate(10deg);
      filter: drop-shadow(0 0 20px #ff4577cc);
    }
  
    .neon {
      animation-timing-function: ease-in-out;
    }
  
    .pulse {
      animation: pulse 2.4s infinite alternate;
    }
  
    .spin {
      animation: spin 5.5s linear infinite;
    }
  
    .flicker {
      animation: flicker 3.8s infinite ease-in-out;
    }
  
    /* Skills */
    .skills {
      margin-top: 5.5rem;
      text-align: center;
      position: relative;
      z-index: 1;
    }
  
    .skills h2 {
      font-size: 2.4rem;
      margin-bottom: 1.75rem;
      color: #00ffd6;
      letter-spacing: 0.04em;
      text-shadow: 0 0 12px #00ffd6;
    }
  
    .skill-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.8rem;
      font-weight: 700;
      color: #ff4577;
      font-size: 1.2rem;
      text-shadow:
        0 0 10px #ff4577cc,
        0 0 20px #ff4577bb;
    }
  
    .skill-grid span {
      background: rgba(18, 23, 33, 0.8);
      padding: 0.7rem 1.4rem;
      border-radius: 12px;
      box-shadow:
        0 0 15px #ff4577cc,
        inset 0 0 8px #00ffd6cc;
      transition: background-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
      cursor: default;
    }
  
    .skill-grid span:hover {
      background-color: #ff4577;
      color: #121721;
      box-shadow:
        0 0 25px #ff4577ee,
        inset 0 0 15px #00ffd6ee;
      transform: scale(1.15);
    }
  
    /* Contact section */
    .contact-section {
      margin-top: 6rem;
      text-align: center;
      position: relative;
      z-index: 1;
    }
  
    .contact-section h2 {
      color: #ff4577;
      font-size: 2.4rem;
      margin-bottom: 1.6rem;
      text-shadow:
        0 0 12px #ff4577,
        0 0 20px #ff4577bb;
    }
  
    .socials {
      display: flex;
      justify-content: center;
      gap: 2.5rem;
    }
  
    .social-icon {
      width: 46px;
      height: 46px;
      stroke: #00ffd6;
      filter: drop-shadow(0 0 8px #00ffd6cc);
      transition: stroke 0.3s ease, filter 0.3s ease, transform 0.3s ease;
    }
  
    .social-icon:hover {
      stroke: #ff4577;
      filter: drop-shadow(0 0 18px #ff4577cc);
      transform: scale(1.3);
    }
  
    /* Animations */
    @keyframes pulse {
      0% { filter: drop-shadow(0 0 10px #00ffd6cc); }
      100% { filter: drop-shadow(0 0 25px #00ffd6ff); }
    }
  
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  
    @keyframes flicker {
      0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        filter: drop-shadow(0 0 15px #00ffd6cc);
        opacity: 1;
      }
      20%, 22%, 24%, 55% {
        filter: none;
        opacity: 0.6;
      }
    }
  
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px);}
      to { opacity: 1; transform: translateY(0);}
    }
  
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(40px);}
      to { opacity: 1; transform: translateY(0);}
    }
  
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-50px);}
      to { opacity: 1; transform: translateX(0);}
    }
  
    /* Responsive */
    @media (max-width: 768px) {
      .about-box {
        grid-template-columns: 1fr;
        padding: 2rem 1.5rem;
      }
  
      .icon-grid {
        justify-content: center;
        gap: 2rem;
        margin-top: 2rem;
      }
  
      .title {
        font-size: 3.2rem;
      }
  
      .subtitle {
        font-size: 1.3rem;
      }
    }
  </style>
  