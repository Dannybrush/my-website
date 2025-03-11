<script>
  let name = '';
  let email = '';
  let message = '';
  let status = '';

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (send data to an API or email service)
    status = 'Thank you for your message!';
    name = '';
    email = '';
    message = '';
  };
</script>

<style>
  /* Page Styling */
  .contact-page {
    font-family: 'Arial', sans-serif;
    background-color: #f4f7fc;
    color: #333;
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header {
    width: 100%;
    padding: 1rem;
    background-color: #03045E;
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
  }

  .hero-section {
    width: 100%;
    background-color: #0077B6;
    color: #fff;
    padding: 4rem 2rem;
    text-align: center;
    margin-bottom: 3rem;
  }

  .hero-section h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .hero-section p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .contact-form-container {
    display: grid;
    justify-items: center;
    width: 100%;
  }

  .contact-form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 600px;
    width: 100%;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .contact-form label {
    font-weight: bold;
    font-size: 1rem;
    color: #333;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #fff;
  }

  .contact-form textarea {
    resize: vertical;
    min-height: 120px;
  }

  .contact-form button {
    padding: 0.8rem 1.5rem;
    background-color: #00B4D8;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }

  .contact-form button:hover {
    background-color: #0077B6;
  }

  .status-message {
    margin-top: 1rem;
    font-size: 1rem;
    color: green;
    text-align: center;
  }

  /* Footer Styling */
  footer {
    width: 100%;
    padding: 2rem;
    background-color: #03045E;
    color: white;
    text-align: center;
    margin-top: 3rem;
    font-size: 0.9rem;
  }

  footer .footer-links {
    margin-bottom: 1rem;
  }

  footer .footer-links a {
    color: #90E0EF;
    text-decoration: none;
    margin: 0 1rem;
  }

  footer .footer-links a:hover {
    text-decoration: underline;
  }

  footer .footer-info {
    margin-top: 1rem;
  }
</style>

<div class="contact-page">
  <header>
    <p>Contact Us</p>
  </header>

  <section class="hero-section">
    <h1>We'd Love to Hear From You</h1>
    <p>Have questions or need assistance? Please reach out and we’ll get back to you as soon as possible.</p>
  </section>

  <div class="contact-form-container">
    <div class="contact-form">
      <h2>Get in Touch</h2>
      <form on:submit={handleSubmit}>
        <label for="name">Name</label>
        <input type="text" id="name" bind:value={name} required placeholder="Your name">

        <label for="email">Email</label>
        <input type="email" id="email" bind:value={email} required placeholder="Your email address">

        <label for="message">Message</label>
        <textarea id="message" bind:value={message} required placeholder="Your message"></textarea>

        <button type="submit">Send Message</button>
      </form>
      
      {#if status}
        <div class="status-message">{status}</div>
      {/if}
    </div>
  </div>

  <!-- Footer Section -->
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
