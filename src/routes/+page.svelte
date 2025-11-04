<script lang="ts">
  import { fade, fly, scale } from 'svelte/transition';
  import { quintOut, elasticOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import type { PageData, ActionData } from './$types';
  import { enhance } from '$app/forms';

  // Svelte 5: Use $props() for page data and form results
  let { data, form }: { data: PageData; form: ActionData } = $props();

  // Svelte 5: Use $state() for all reactive state
  let activeFilter = $state<string>('all');
  let isMenuOpen = $state(false);
  let currentTime = $state(new Date());
  let isSubmitting = $state(false);

  // Portfolio data (static, no need for $state)
  const services = [
    {
      id: 'business-website',
      icon: '🏢',
      title: 'Business Websites',
      description: 'Professional, mobile-responsive websites that establish your online presence and attract customers.',
      features: ['Mobile-First Design', 'SEO Optimized', 'Contact Forms', 'Google Maps Integration', 'Fast Loading'],
      price: 'From £1,200',
      popular: true
    },
    {
      id: 'ecommerce',
      icon: '🛒',
      title: 'E-Commerce Solutions',
      description: 'Complete online shops with secure payments, inventory management, and beautiful product displays.',
      features: ['Stripe/PayPal Integration', 'Product Management', 'Shopping Cart', 'Order Tracking', 'Analytics'],
      price: 'From £2,500'
    },
    {
      id: 'web-app',
      icon: '⚡',
      title: 'Web Applications',
      description: 'Custom web apps tailored to your business needs - booking systems, dashboards, and more.',
      features: ['Custom Functionality', 'User Authentication', 'Real-time Updates', 'Database Integration', 'API Development'],
      price: 'From £3,500'
    },
    {
      id: 'maintenance',
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Keep your website running smoothly with regular updates, security patches, and technical support.',
      features: ['Security Updates', 'Bug Fixes', 'Performance Monitoring', 'Content Updates', 'Priority Support'],
      price: 'From £150/month'
    }
  ];

  const portfolioProjects = [
    {
      id: 'local-restaurant',
      title: 'The Crown Restaurant',
      description: 'Modern restaurant website with online booking and menu showcase',
      category: 'business' as const,
      tags: ['Restaurant', 'Booking System', 'Mobile-First'],
      image: '/portfolio/restaurant.jpg',
      featured: true
    },
    {
      id: 'tradesperson',
      title: 'Berkshire Plumbing Services',
      description: 'Lead generation website for local plumber with instant quote calculator',
      category: 'business' as const,
      tags: ['Local Business', 'Lead Gen', 'Calculator'],
      image: '/portfolio/plumber.jpg',
      featured: true
    },
    {
      id: 'shop',
      title: 'Artisan Gift Shop',
      description: 'E-commerce platform for local artisan products with Stripe integration',
      category: 'ecommerce' as const,
      tags: ['E-commerce', 'Stripe', 'Inventory'],
      image: '/portfolio/shop.jpg'
    },
    {
      id: 'booking-system',
      title: 'Salon Booking App',
      description: 'Custom booking system for beauty salon with automated reminders',
      category: 'webapp' as const,
      tags: ['Booking', 'Automation', 'CRM'],
      image: '/portfolio/salon.jpg',
      featured: true
    },
    {
      id: 'landing',
      title: 'Fitness Coach Landing',
      description: 'High-converting landing page for personal trainer with lead capture',
      category: 'landing' as const,
      tags: ['Landing Page', 'Lead Capture', 'SEO'],
      image: '/portfolio/fitness.jpg'
    },
    {
      id: 'accountant',
      title: 'Local Accountancy Firm',
      description: 'Professional services website with client portal integration',
      category: 'business' as const,
      tags: ['Professional Services', 'Portal', 'Secure'],
      image: '/portfolio/accountant.jpg'
    }
  ];

  const testimonials = [
    {
      id: '1',
      name: 'Sarah Mitchell',
      business: 'The Reading Bakery',
      location: 'Reading, Berkshire',
      rating: 5,
      text: "Daniel transformed our online presence completely. We've seen a 300% increase in online orders since launching the new website. His attention to detail and understanding of local business needs is exceptional.",
      image: '/testimonials/sarah.jpg'
    },
    {
      id: '2',
      name: 'James Thompson',
      business: 'Thompson & Sons Plumbing',
      location: 'Shinfield',
      rating: 5,
      text: "The quote calculator Dan built for us has been a game-changer. Customers love getting instant estimates, and we've cut our admin time in half. Highly recommend for any local tradesperson!",
      image: '/testimonials/james.jpg'
    },
    {
      id: '3',
      name: 'Emma Clarke',
      business: 'Serenity Beauty Spa',
      location: 'Wokingham',
      rating: 5,
      text: "The booking system is incredible - our clients can book 24/7 and we've reduced no-shows by 80% with automated reminders. Professional service from start to finish."
    }
  ];

  // Svelte 5: Use $derived() for computed values
  const filteredProjects = $derived(
    activeFilter === 'all' 
      ? portfolioProjects 
      : portfolioProjects.filter(p => p.category === activeFilter)
  );

  const categories = $derived([
    { id: 'all', label: 'All Projects', count: portfolioProjects.length },
    { id: 'business', label: 'Business Sites', count: portfolioProjects.filter(p => p.category === 'business').length },
    { id: 'ecommerce', label: 'E-Commerce', count: portfolioProjects.filter(p => p.category === 'ecommerce').length },
    { id: 'webapp', label: 'Web Apps', count: portfolioProjects.filter(p => p.category === 'webapp').length },
    { id: 'landing', label: 'Landing Pages', count: portfolioProjects.filter(p => p.category === 'landing').length }
  ]);

  onMount(() => {
    const interval = setInterval(() => {
      currentTime = new Date();
    }, 1000);

    return () => clearInterval(interval);
  });

  function formatTime(date: Date): string {
    return date.toLocaleTimeString('en-GB', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  }

  function scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      isMenuOpen = false;
    }
  }
</script>

<svelte:head>
  <title>Daniel Broomhead - Web Developer | Reading, Berkshire | Small Business Websites</title>
  <meta name="description" content="Professional web development for small businesses in Reading, Shinfield & Berkshire. Affordable websites, e-commerce, and web apps. Local discount available." />
  <meta name="keywords" content="web developer reading, website design berkshire, small business websites, web development shinfield, affordable web design reading" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Daniel Broomhead - Web Developer | Reading, Berkshire" />
  <meta property="og:description" content="Professional web development for small businesses in Reading & Berkshire. Local discount available." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://broomhead.co.uk" />
  
  <!-- Schema.org markup -->
  {@html `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Daniel Broomhead Web Development',
    description: 'Professional web development services for small businesses in Reading, Shinfield, and Berkshire',
    url: 'https://broomhead.co.uk',
    email: 'daniel@broomhead.co.uk',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Reading',
      addressRegion: 'Berkshire',
      addressCountry: 'GB'
    },
    areaServed: [
      { '@type': 'City', name: 'Reading' },
      { '@type': 'City', name: 'Shinfield' },
      { '@type': 'State', name: 'Berkshire' }
    ],
    priceRange: '££'
  })}</script>`}
</svelte:head>

<div class="page-wrapper">
  <!-- Animated Background -->
  <div class="animated-bg">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
  </div>

  <!-- Navigation -->
  <nav class="nav-bar" in:fly={{ y: -50, duration: 600 }}>
    <div class="nav-container">
      <button onclick={() => scrollToSection('hero')} class="logo">
        {'<DB />'}
      </button>
      
      <!-- Desktop Menu -->
      <div class="nav-links desktop-only">
        <button onclick={() => scrollToSection('services')}>Services</button>
        <button onclick={() => scrollToSection('portfolio')}>Portfolio</button>
        <button onclick={() => scrollToSection('testimonials')}>Testimonials</button>
        <button onclick={() => scrollToSection('contact')} class="nav-cta">
          Get Your Free Quote
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="mobile-menu-btn"
        onclick={() => isMenuOpen = !isMenuOpen}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="mobile-menu" transition:fly={{ y: -20, duration: 300 }}>
        <button onclick={() => scrollToSection('services')}>Services</button>
        <button onclick={() => scrollToSection('portfolio')}>Portfolio</button>
        <button onclick={() => scrollToSection('testimonials')}>Testimonials</button>
        <button onclick={() => scrollToSection('contact')} class="mobile-cta">
          Get Your Free Quote
        </button>
      </div>
    {/if}
  </nav>

  <!-- Hero Section -->
  <section id="hero" class="hero-section">
    <div class="hero-content">
      <div class="location-badge" in:scale={{ delay: 200, duration: 600, easing: elasticOut }}>
        <span class="badge-icon">📍</span>
        <span>Based in Reading, Berkshire</span>
      </div>
      
      <h1 in:fly={{ y: 50, delay: 300, duration: 800, easing: quintOut }}>
        <span class="hero-title">Professional Websites</span>
        <span class="hero-subtitle">For Local Businesses</span>
      </h1>
      
      <p class="hero-description" in:fly={{ y: 30, delay: 500, duration: 600 }}>
        I help small businesses in <strong>Reading, Shinfield & Berkshire</strong> grow online with 
        fast, modern websites that actually bring in customers. No jargon, no fuss – just results.
      </p>

      <div class="hero-features" in:fly={{ y: 30, delay: 600, duration: 600 }}>
        <div class="feature-item">
          <span class="feature-icon">⚡</span>
          <span>Fast Delivery</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">💰</span>
          <span>Transparent Pricing</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">🎯</span>
          <span>Local Discount</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">🛡️</span>
          <span>Ongoing Support</span>
        </div>
      </div>

      <div class="hero-cta" in:fly={{ y: 30, delay: 700, duration: 600 }}>
        <button onclick={() => scrollToSection('contact')} class="btn-primary-large">
          <span>Get Your Free Quote</span>
          <span class="btn-icon">→</span>
        </button>
        <button onclick={() => scrollToSection('portfolio')} class="btn-secondary-large">
          <span>View My Work</span>
        </button>
      </div>

      <div class="trust-badges" in:fade={{ delay: 900 }}>
        <div class="trust-item">
          <div class="trust-number">15+</div>
          <div class="trust-label">Happy Clients</div>
        </div>
        <div class="trust-item">
          <div class="trust-number">2-3 weeks</div>
          <div class="trust-label">Avg. Delivery</div>
        </div>
        <div class="trust-item">
          <div class="trust-number">100%</div>
          <div class="trust-label">Satisfaction</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="services-section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">What I Offer</span>
        <h2>Services Built for Small Businesses</h2>
        <p class="section-subtitle">
          Affordable, professional web solutions without the agency price tag
        </p>
      </div>

      <div class="services-grid">
        {#each services as service, i}
          <div 
            class="service-card {service.popular ? 'popular' : ''}"
            in:scale={{ delay: 100 * i, duration: 500, easing: quintOut }}
          >
            {#if service.popular}
              <div class="popular-badge">Most Popular</div>
            {/if}
            
            <div class="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p class="service-description">{service.description}</p>
            
            <ul class="service-features">
              {#each service.features as feature}
                <li>
                  <span class="check-icon">✓</span>
                  {feature}
                </li>
              {/each}
            </ul>
            
            <div class="service-price">{service.price}</div>
            <button onclick={() => scrollToSection('contact')} class="btn-service">
              Get Started
            </button>
          </div>
        {/each}
      </div>

      <div class="local-offer" in:scale={{ delay: 600, duration: 600 }}>
        <div class="offer-content">
          <div class="offer-icon">🎉</div>
          <div class="offer-text">
            <strong>Special Offer for Local Businesses:</strong> 
            10% discount for businesses based in Reading, Shinfield & Berkshire area
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Portfolio Section -->
  <section id="portfolio" class="portfolio-section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Recent Work</span>
        <h2>Projects That Drive Results</h2>
        <p class="section-subtitle">
          Real websites for real businesses, delivering measurable growth
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="portfolio-filters">
        {#each categories as category}
          <button
            class="filter-btn {activeFilter === category.id ? 'active' : ''}"
            onclick={() => activeFilter = category.id}
          >
            {category.label}
            <span class="filter-count">{category.count}</span>
          </button>
        {/each}
      </div>

      <!-- Portfolio Grid -->
      <div class="portfolio-grid">
        {#each filteredProjects as project, i (project.id)}
          <div 
            class="portfolio-card {project.featured ? 'featured' : ''}"
            in:scale={{ delay: 50 * i, duration: 400, easing: quintOut }}
          >
            {#if project.featured}
              <div class="featured-badge">⭐ Featured</div>
            {/if}
            
            <div class="portfolio-image">
              <img src={project.image} alt={project.title} />
              <div class="portfolio-overlay">
                <div class="portfolio-tags">
                  {#each project.tags.slice(0, 3) as tag}
                    <span class="portfolio-tag">{tag}</span>
                  {/each}
                </div>
              </div>
            </div>
            
            <div class="portfolio-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div class="portfolio-actions">
                {#if project.liveUrl}
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="portfolio-link">
                    View Live <span>→</span>
                  </a>
                {/if}
                {#if project.githubUrl}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="portfolio-link secondary">
                    Code <span>→</span>
                  </a>
                {/if}
                {#if !project.liveUrl && !project.githubUrl}
                  <button onclick={() => scrollToSection('contact')} class="portfolio-link">
                    Similar Project? <span>→</span>
                  </button>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>

      {#if filteredProjects.length === 0}
        <div class="no-results">
          <p>No projects in this category yet. Check back soon!</p>
        </div>
      {/if}
    </div>
  </section>

  <!-- Testimonials Section -->
  <section id="testimonials" class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Client Success</span>
        <h2>What Clients Say</h2>
        <p class="section-subtitle">
          Don't just take my word for it – hear from businesses I've helped grow
        </p>
      </div>

      <div class="testimonials-grid">
        {#each testimonials as testimonial, i}
          <div 
            class="testimonial-card"
            in:fly={{ y: 50, delay: 100 * i, duration: 600, easing: quintOut }}
          >
            <div class="testimonial-header">
              <div class="testimonial-avatar">
                {#if testimonial.image}
                  <img src={testimonial.image} alt={testimonial.name} />
                {:else}
                  <div class="avatar-placeholder">
                    {testimonial.name.charAt(0)}
                  </div>
                {/if}
              </div>
              <div class="testimonial-info">
                <div class="testimonial-name">{testimonial.name}</div>
                <div class="testimonial-business">{testimonial.business}</div>
                <div class="testimonial-location">📍 {testimonial.location}</div>
              </div>
            </div>

            <div class="testimonial-rating">
              {#each Array(testimonial.rating) as _}
                <span class="star">⭐</span>
              {/each}
            </div>

            <p class="testimonial-text">"{testimonial.text}"</p>
          </div>
        {/each}
      </div>

      <div class="testimonial-cta">
        <p>Ready to join these happy clients?</p>
        <button onclick={() => scrollToSection('contact')} class="btn-testimonial">
          Start Your Project Today
        </button>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Get In Touch</span>
        <h2>Let's Build Something Great</h2>
        <p class="section-subtitle">
          Free quotes, no obligation. Usually respond within 24 hours.
        </p>
      </div>

      <div class="contact-wrapper">
        <!-- Contact Info -->
        <div class="contact-info">
          <h3>Get Your Free Quote</h3>
          <p class="contact-intro">
            Whether you need a simple website or a complex web application, 
            I'd love to hear about your project. Let's chat!
          </p>

          <div class="contact-methods">
            <a href="mailto:daniel@broomhead.co.uk" class="contact-method">
              <div class="method-icon">✉️</div>
              <div class="method-content">
                <div class="method-label">Email Me</div>
                <div class="method-value">daniel@broomhead.co.uk</div>
              </div>
            </a>

            <a href="tel:+447123456789" class="contact-method">
              <div class="method-icon">📞</div>
              <div class="method-content">
                <div class="method-label">Call or Text</div>
                <div class="method-value">07123 456 789</div>
              </div>
            </a>

            <div class="contact-method">
              <div class="method-icon">📍</div>
              <div class="method-content">
                <div class="method-label">Location</div>
                <div class="method-value">Reading, Berkshire</div>
              </div>
            </div>

            <div class="contact-method">
              <div class="method-icon">⏰</div>
              <div class="method-content">
                <div class="method-label">Response Time</div>
                <div class="method-value">Within 24 hours</div>
              </div>
            </div>
          </div>

          <div class="local-discount-box">
            <div class="discount-icon">🎉</div>
            <div class="discount-content">
              <strong>Local Business?</strong>
              <p>Tick the box in the form to claim your 10% Berkshire discount!</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form-container">
          {#if form?.success}
            <div class="form-success" in:scale={{ duration: 400 }}>
              <div class="success-icon">✓</div>
              <h3>Message Sent Successfully!</h3>
              <p>Thanks for getting in touch. I'll review your details and get back to you within 24 hours.</p>
              <button onclick={() => window.location.reload()} class="btn-form-reset">
                Send Another Message
              </button>
            </div>
          {:else}
            <form method="POST" action="?/contact" use:enhance={() => {
              isSubmitting = true;
              return async ({ update }) => {
                await update();
                isSubmitting = false;
              };
            }}>
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Smith"
                    class:error={form?.errors?.name}
                  />
                  {#if form?.errors?.name}
                    <span class="error-message">{form.errors.name}</span>
                  {/if}
                </div>

                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    class:error={form?.errors?.email}
                  />
                  {#if form?.errors?.email}
                    <span class="error-message">{form.errors.email}</span>
                  {/if}
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="phone">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="07123 456789"
                  />
                </div>

                <div class="form-group">
                  <label for="business">Business Name (Optional)</label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    placeholder="Your Business Ltd"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="service">What service are you interested in? *</label>
                <select 
                  id="service" 
                  name="service" 
                  required
                  class:error={form?.errors?.service}
                >
                  <option value="">Select a service...</option>
                  <option value="business-website">Business Website</option>
                  <option value="ecommerce">E-Commerce / Online Shop</option>
                  <option value="web-app">Custom Web Application</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="other">Something Else</option>
                </select>
                {#if form?.errors?.service}
                  <span class="error-message">{form.errors.service}</span>
                {/if}
              </div>

              <div class="form-group">
                <label for="message">Tell me about your project *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="I'm looking for a website that..."
                  class:error={form?.errors?.message}
                ></textarea>
                {#if form?.errors?.message}
                  <span class="error-message">{form.errors.message}</span>
                {/if}
              </div>

              <div class="form-group checkbox-group">
                <label class="checkbox-label">
                  <input type="checkbox" name="isLocal" value="true" />
                  <span class="checkbox-custom"></span>
                  <span class="checkbox-text">
                    My business is based in Reading, Shinfield or Berkshire 
                    <strong>(Claim 10% discount!)</strong>
                  </span>
                </label>
              </div>

              {#if form?.error}
                <div class="form-error">
                  {form.error}
                </div>
              {/if}

              <button 
                type="submit" 
                class="btn-submit"
                disabled={isSubmitting}
              >
                {#if isSubmitting}
                  <span class="spinner"></span>
                  Sending...
                {:else}
                  Send My Free Quote Request
                  <span class="submit-arrow">→</span>
                {/if}
              </button>

              <p class="form-privacy">
                By submitting, you agree to be contacted about your enquiry. 
                I respect your privacy and never share your information.
              </p>
            </form>
          {/if}
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <div class="footer-logo">{'<DB />'}</div>
          <p class="footer-tagline">
            Professional web development for small businesses in Berkshire
          </p>
          <div class="footer-social">
            <a href="https://github.com/daniel-broomhead" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/daniel-broomhead" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div class="footer-column">
          <h4>Quick Links</h4>
          <button onclick={() => scrollToSection('services')}>Services</button>
          <button onclick={() => scrollToSection('portfolio')}>Portfolio</button>
          <button onclick={() => scrollToSection('testimonials')}>Testimonials</button>
          <button onclick={() => scrollToSection('contact')}>Contact</button>
        </div>

        <div class="footer-column">
          <h4>Services</h4>
          <p>Business Websites</p>
          <p>E-Commerce</p>
          <p>Web Applications</p>
          <p>Maintenance & Support</p>
        </div>

        <div class="footer-column">
          <h4>Service Areas</h4>
          <p>Reading</p>
          <p>Shinfield</p>
          <p>Wokingham</p>
          <p>Berkshire & Surrounding</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {new Date().getFullYear()} Daniel Broomhead. Built with Svelte 5 & SvelteKit.</p>
        <p class="footer-location">Based in Reading, Berkshire 🇬🇧</p>
      </div>
    </div>
  </footer>
</div>

<style>
  /* All CSS remains the same - styles don't change with Svelte 5 */
  :global(body) {
    margin: 0;
    background: #000;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }

  .page-wrapper {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(to bottom, #0a0a0a, #050505);
    overflow-x: hidden;
  }

  /* Animated Background */
  .animated-bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }

  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.15;
    animation: float 20s infinite ease-in-out;
  }

  .orb-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, #3b82f6, transparent);
    top: -10%;
    right: -10%;
  }

  .orb-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, #8b5cf6, transparent);
    bottom: -10%;
    left: -5%;
    animation-delay: 7s;
  }

  .orb-3 {
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, #ec4899, transparent);
    top: 50%;
    left: 50%;
    animation-delay: 14s;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.1); }
    66% { transform: translate(-30px, 30px) scale(0.9); }
  }

  /* Navigation */
  .nav-bar {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(59, 130, 246, 0.2);
    padding: 1rem 0;
  }

  .nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 900;
    font-family: 'Courier New', monospace;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .logo:hover {
    transform: scale(1.05);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-links button {
    background: none;
    border: none;
    color: #9ca3af;
    font-size: 0.9375rem;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.3s ease;
    padding: 0;
  }

  .nav-links button:hover {
    color: #3b82f6;
  }

  .nav-cta {
    padding: 0.625rem 1.5rem !important;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white !important;
    border-radius: 9999px;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .nav-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
  }

  .mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .mobile-menu {
    display: none;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(15, 23, 42, 0.95);
    border-top: 1px solid rgba(59, 130, 246, 0.2);
  }

  .mobile-menu button {
    background: none;
    border: none;
    color: #9ca3af;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    padding: 0.75rem;
    text-align: left;
    transition: color 0.3s ease;
  }

  .mobile-menu button:hover {
    color: #3b82f6;
  }

  .mobile-cta {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
    color: white !important;
    border-radius: 8px;
    text-align: center !important;
    margin-top: 0.5rem;
  }

  /* Hero Section */
  .hero-section {
    position: relative;
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 1.5rem 6rem;
    z-index: 10;
  }

  .hero-content {
    max-width: 1000px;
    text-align: center;
  }

  .location-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.5rem;
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.3);
    border-radius: 9999px;
    font-size: 0.875rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
    color: #4ade80;
    font-weight: 600;
  }

  .badge-icon {
    font-size: 1rem;
  }

  h1 {
    font-size: clamp(2.5rem, 7vw, 4.5rem);
    font-weight: 900;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .hero-title {
    display: block;
    background: linear-gradient(135deg, #fff 0%, #e0e7ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-subtitle {
    display: block;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 0.85em;
  }

  .hero-description {
    font-size: clamp(1.125rem, 2vw, 1.375rem);
    color: #9ca3af;
    max-width: 700px;
    margin: 0 auto 2.5rem;
    line-height: 1.7;
  }

  .hero-description strong {
    color: #3b82f6;
    font-weight: 600;
  }

  .hero-features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 12px;
    font-size: 0.9375rem;
    font-weight: 500;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .feature-item:hover {
    border-color: rgba(59, 130, 246, 0.5);
    transform: translateY(-2px);
  }

  .feature-icon {
    font-size: 1.25rem;
  }

  .hero-cta {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;
  }

  .btn-primary-large {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem 3rem;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    border: none;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 1.125rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(59, 130, 246, 0.4);
  }

  .btn-primary-large:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(59, 130, 246, 0.6);
  }

  .btn-secondary-large {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem 3rem;
    background: rgba(255, 255, 255, 0.05);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 9999px;
    font-weight: 700;
    font-size: 1.125rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-secondary-large:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-3px);
  }

  .btn-icon {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
  }

  .btn-primary-large:hover .btn-icon,
  .btn-secondary-large:hover .btn-icon {
    transform: translateX(5px);
  }

  .trust-badges {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
  }

  .trust-item {
    text-align: center;
  }

  .trust-number {
    font-size: 2rem;
    font-weight: 900;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.25rem;
  }

  .trust-label {
    font-size: 0.875rem;
    color: #9ca3af;
  }

  /* Services Section */
  .services-section {
    position: relative;
    padding: 6rem 1.5rem;
    z-index: 10;
    background: linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.3), transparent);
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-tag {
    display: inline-block;
    padding: 0.375rem 1rem;
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 9999px;
    color: #3b82f6;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .section-header h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 900;
    background: linear-gradient(135deg, #fff 0%, #93c5fd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
  }

  .section-subtitle {
    font-size: 1.125rem;
    color: #9ca3af;
    max-width: 600px;
    margin: 0 auto;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .service-card {
    position: relative;
    background: rgba(15, 23, 42, 0.5);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 20px;
    padding: 2.5rem 2rem;
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
    overflow: hidden;
  }

  .service-card.popular {
    border-color: rgba(59, 130, 246, 0.6);
    box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
  }

  .service-card:hover {
    transform: translateY(-10px);
    border-color: rgba(59, 130, 246, 0.6);
    box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
  }

  .popular-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.375rem 0.875rem;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 700;
    color: white;
  }

  .service-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  .service-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
  }

  .service-description {
    color: #9ca3af;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .service-features {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
  }

  .service-features li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0;
    color: #d1d5db;
    font-size: 0.9375rem;
  }

  .check-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: rgba(34, 197, 94, 0.15);
    color: #22c55e;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: 700;
    flex-shrink: 0;
  }

  .service-price {
    font-size: 1.75rem;
    font-weight: 900;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;
  }

  .btn-service {
    width: 100%;
    padding: 0.875rem;
    background: rgba(59, 130, 246, 0.1);
    border: 2px solid rgba(59, 130, 246, 0.3);
    border-radius: 12px;
    color: #3b82f6;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-service:hover {
    background: rgba(59, 130, 246, 0.2);
    border-color: rgba(59, 130, 246, 0.6);
    transform: translateY(-2px);
  }

  .local-offer {
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1));
    border: 2px solid rgba(34, 197, 94, 0.3);
    border-radius: 20px;
    padding: 2rem;
    backdrop-filter: blur(10px);
  }

  .offer-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .offer-icon {
    font-size: 3rem;
  }

  .offer-text {
    font-size: 1.125rem;
    color: #d1d5db;
  }

  .offer-text strong {
    color: #22c55e;
    font-weight: 700;
  }

  /* Portfolio Section */
  .portfolio-section {
    position: relative;
    padding: 6rem 1.5rem;
    z-index: 10;
  }

  .portfolio-filters {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 3rem;
  }

  .filter-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 9999px;
    color: #9ca3af;
    font-weight: 600;
    font-size: 0.9375rem;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .filter-btn:hover {
    border-color: rgba(59, 130, 246, 0.5);
    color: #3b82f6;
  }

  .filter-btn.active {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-color: transparent;
    color: white;
  }

  .filter-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 24px;
    padding: 0 0.5rem;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 700;
  }

  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  .portfolio-card {
    background: rgba(15, 23, 42, 0.5);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 20px;
    overflow: hidden;
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
    position: relative;
  }

  .portfolio-card:hover {
    transform: translateY(-10px);
    border-color: rgba(59, 130, 246, 0.6);
    box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
  }

  .portfolio-card.featured {
    border-color: rgba(139, 92, 246, 0.4);
  }

  .featured-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    padding: 0.375rem 0.875rem;
    background: rgba(139, 92, 246, 0.9);
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 700;
    color: white;
    backdrop-filter: blur(10px);
  }

  .portfolio-image {
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
  }

  .portfolio-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .portfolio-card:hover .portfolio-image img {
    transform: scale(1.1);
  }

  .portfolio-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    display: flex;
    align-items: flex-end;
    padding: 1.5rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .portfolio-card:hover .portfolio-overlay {
    opacity: 1;
  }

  .portfolio-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .portfolio-tag {
    padding: 0.25rem 0.75rem;
    background: rgba(59, 130, 246, 0.9);
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
  }

  .portfolio-content {
    padding: 1.5rem;
  }

  .portfolio-content h3 {
    font-size: 1.375rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.75rem;
  }

  .portfolio-content p {
    color: #9ca3af;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }

  .portfolio-actions {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .portfolio-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.25rem;
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 8px;
    color: #3b82f6;
    font-weight: 600;
    font-size: 0.875rem;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .portfolio-link:hover {
    background: rgba(59, 130, 246, 0.2);
    border-color: rgba(59, 130, 246, 0.6);
    transform: translateX(3px);
  }

  .portfolio-link.secondary {
    background: rgba(139, 92, 246, 0.1);
    border-color: rgba(139, 92, 246, 0.3);
    color: #8b5cf6;
  }

  .portfolio-link.secondary:hover {
    background: rgba(139, 92, 246, 0.2);
    border-color: rgba(139, 92, 246, 0.6);
  }

  .no-results {
    text-align: center;
    padding: 4rem 2rem;
    color: #9ca3af;
    font-size: 1.125rem;
  }

  /* Testimonials Section */
  .testimonials-section {
    position: relative;
    padding: 6rem 1.5rem;
    z-index: 10;
    background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.05), transparent);
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .testimonial-card {
    background: rgba(15, 23, 42, 0.4);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 20px;
    padding: 2rem;
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
  }

  .testimonial-card:hover {
    border-color: rgba(59, 130, 246, 0.6);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
  }

  .testimonial-header {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .testimonial-avatar {
    flex-shrink: 0;
  }

  .testimonial-avatar img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(59, 130, 246, 0.3);
  }

  .avatar-placeholder {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
  }

  .testimonial-info {
    flex: 1;
  }

  .testimonial-name {
    font-size: 1.125rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.25rem;
  }

  .testimonial-business {
    font-size: 0.9375rem;
    color: #3b82f6;
    margin-bottom: 0.25rem;
  }

  .testimonial-location {
    font-size: 0.875rem;
    color: #9ca3af;
  }

  .testimonial-rating {
    display: flex;
    gap: 0.25rem;
    margin-bottom: 1rem;
    font-size: 1.125rem;
  }

  .star {
    filter: drop-shadow(0 2px 4px rgba(234, 179, 8, 0.3));
  }

  .testimonial-text {
    color: #d1d5db;
    line-height: 1.7;
    font-size: 0.9375rem;
    font-style: italic;
  }

  .testimonial-cta {
    text-align: center;
    padding: 3rem 2rem;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
    border: 2px solid rgba(59, 130, 246, 0.3);
    border-radius: 20px;
    backdrop-filter: blur(10px);
  }

  .testimonial-cta p {
    font-size: 1.375rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 1.5rem;
  }

  .btn-testimonial {
    padding: 1rem 2.5rem;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    border: none;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 1.0625rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
  }

  .btn-testimonial:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(59, 130, 246, 0.6);
  }

  /* Contact Section - Continuing from Part 2 artifact styles */
  .contact-section {
    position: relative;
    padding: 6rem 1.5rem;
    z-index: 10;
    background: linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.3));
  }

  .contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .contact-info h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
  }

  .contact-intro {
    color: #9ca3af;
    line-height: 1.7;
    margin-bottom: 2rem;
    font-size: 1.0625rem;
  }

  .contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .contact-method {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    background: rgba(15, 23, 42, 0.5);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .contact-method:hover {
    border-color: rgba(59, 130, 246, 0.5);
    transform: translateX(5px);
  }

  .method-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  .method-content {
    flex: 1;
  }

  .method-label {
    font-size: 0.875rem;
    color: #9ca3af;
    margin-bottom: 0.25rem;
  }

  .method-value {
    font-size: 1.0625rem;
    font-weight: 600;
    color: #fff;
  }

  .local-discount-box {
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1));
    border: 2px solid rgba(34, 197, 94, 0.3);
    border-radius: 16px;
    margin-top: 2rem;
  }

  .discount-icon {
    font-size: 2.5rem;
    flex-shrink: 0;
  }

  .discount-content strong {
    display: block;
    color: #22c55e;
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }

  .discount-content p {
    color: #d1d5db;
    font-size: 0.9375rem;
    line-height: 1.6;
  }

  /* Contact Form */
  .contact-form-container {
    background: rgba(15, 23, 42, 0.5);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 20px;
    padding: 2.5rem;
    backdrop-filter: blur(10px);
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    font-size: 0.9375rem;
    font-weight: 600;
    color: #e5e7eb;
    margin-bottom: 0.5rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 0.875rem 1.25rem;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 8px;
    color: #fff;
    font-size: 1rem;
    transition: all 0.3s ease;
    font-family: inherit;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: rgba(59, 130, 246, 0.6);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .form-group input.error,
  .form-group select.error,
  .form-group textarea.error {
    border-color: #ef4444;
  }

  .error-message {
    display: block;
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }

  .checkbox-group {
    margin-top: 0.5rem;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    padding: 1rem;
    background: rgba(34, 197, 94, 0.05);
    border: 1px solid rgba(34, 197, 94, 0.2);
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .checkbox-label:hover {
    background: rgba(34, 197, 94, 0.1);
    border-color: rgba(34, 197, 94, 0.4);
  }

  .checkbox-label input[type="checkbox"] {
    display: none;
  }

  .checkbox-custom {
    width: 24px;
    height: 24px;
    border: 2px solid rgba(34, 197, 94, 0.5);
    border-radius: 6px;
    flex-shrink: 0;
    position: relative;
    transition: all 0.3s ease;
  }

  .checkbox-label input[type="checkbox"]:checked + .checkbox-custom {
    background: linear-gradient(135deg, #22c55e, #10b981);
    border-color: transparent;
  }

  .checkbox-label input[type="checkbox"]:checked + .checkbox-custom::after {
    content: '✓';
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 0.875rem;
  }

  .checkbox-text {
    color: #d1d5db;
    font-size: 0.9375rem;
    line-height: 1.5;
  }

  .checkbox-text strong {
    color: #22c55e;
  }

  .btn-submit {
    width: 100%;
    padding: 1.25rem;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1.125rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
  }

  .btn-submit:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(59, 130, 246, 0.6);
  }

  .btn-submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .spinner {
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .submit-arrow {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
  }

  .btn-submit:hover .submit-arrow {
    transform: translateX(5px);
  }

  .form-privacy {
    text-align: center;
    color: #6b7280;
    font-size: 0.8125rem;
    margin-top: 1rem;
    line-height: 1.5;
  }

  .form-success {
    text-align: center;
    padding: 3rem 2rem;
  }

  .success-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    background: linear-gradient(135deg, #22c55e, #10b981);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: white;
    font-weight: 700;
    box-shadow: 0 10px 40px rgba(34, 197, 94, 0.4);
  }

  .form-success h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
  }

  .form-success p {
    color: #9ca3af;
    font-size: 1.0625rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  .btn-form-reset {
    padding: 0.875rem 2rem;
    background: rgba(59, 130, 246, 0.1);
    border: 2px solid rgba(59, 130, 246, 0.3);
    border-radius: 9999px;
    color: #3b82f6;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-form-reset:hover {
    background: rgba(59, 130, 246, 0.2);
    border-color: rgba(59, 130, 246, 0.6);
    transform: translateY(-2px);
  }

  .form-error {
    padding: 1rem;
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-radius: 8px;
    color: #ef4444;
    font-size: 0.9375rem;
    margin-bottom: 1rem;
  }

  /* Footer */
  .footer {
    background: #0a0a0a;
    border-top: 1px solid rgba(59, 130, 246, 0.2);
    padding: 3rem 1.5rem 2rem;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .footer-logo {
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Courier New', monospace;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
  }

  .footer-tagline {
    color: #9ca3af;
    font-size: 0.9375rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .footer-social {
    display: flex;
    gap: 1rem;
  }

  .footer-social a {
    padding: 0.5rem 1rem;
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 8px;
    color: #3b82f6;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .footer-social a:hover {
    background: rgba(59, 130, 246, 0.2);
    border-color: rgba(59, 130, 246, 0.5);
    transform: translateY(-2px);
  }

  .footer-column h4 {
    color: #fff;
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 1.0625rem;
  }

  .footer-column button,
  .footer-column p {
    display: block;
    color: #9ca3af;
    background: none;
    border: none;
    text-align: left;
    padding: 0;
    margin-bottom: 0.75rem;
    font-size: 0.9375rem;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .footer-column button:hover {
    color: #3b82f6;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(59, 130, 246, 0.1);
    flex-wrap: wrap;
    gap: 1rem;
  }

  .footer-bottom p {
    color: #6b7280;
    font-size: 0.875rem;
    margin: 0;
  }

  .footer-location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  /* Responsive Styles */
  @media (max-width: 1024px) {
    .contact-wrapper {
      grid-template-columns: 1fr;
    }

    .contact-info {
      order: 2;
    }

    .contact-form-container {
      order: 1;
    }
  }

  @media (max-width: 768px) {
    .desktop-only {
      display: none !important;
    }

    .mobile-menu-btn {
      display: block;
    }

    .mobile-menu {
      display: flex;
    }

    .hero-section {
      min-height: auto;
      padding: 3rem 1.5rem 4rem;
    }

    .hero-features {
      gap: 0.75rem;
    }

    .feature-item {
      font-size: 0.875rem;
      padding: 0.625rem 1rem;
    }

    .hero-cta {
      flex-direction: column;
      align-items: stretch;
    }

    .btn-primary-large,
    .btn-secondary-large {
      width: 100%;
      justify-content: center;
    }

    .trust-badges {
      gap: 2rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
    }

    .portfolio-grid {
      grid-template-columns: 1fr;
    }

    .testimonials-grid {
      grid-template-columns: 1fr;
    }

    .form-row {
      grid-template-columns: 1fr;
    }

    .footer-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .footer-bottom {
      flex-direction: column;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }

    .hero-description {
      font-size: 1rem;
    }

    .offer-content {
      text-align: center;
    }

    .offer-text {
      font-size: 1rem;
    }

    .portfolio-filters {
      justify-content: flex-start;
      overflow-x: auto;
      padding-bottom: 0.5rem;
    }

    .filter-btn {
      flex-shrink: 0;
    }

    .contact-form-container {
      padding: 1.5rem;
    }

    .local-discount-box {
      flex-direction: column;
      text-align: center;
    }
  }
</style>