<script>
    let name = '';
    let email = '';
    let message = '';
  
    function handleSubmit() {
      // Form submission logic here (e.g., email service or API call)
      alert('Form submitted!');
    }
  </script>
  
  <section id="contact" class="contact">
    <h2>Contact Me</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <input type="text" bind:value={name} placeholder="Your Name" required />
      <input type="email" bind:value={email} placeholder="Your Email" required />
      <textarea bind:value={message} placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
  
  <style>
    .contact {
      background-color: #90E0EF;
      padding: 50px;
    }
    input, textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 8px;
      border: 1px solid #0077B6;
    }
    button {
      background-color: #0077B6;
      color: white;
      padding: 10px 20px;
      font-size: 1.2rem;
      border: none;
      cursor: pointer;
    }
  </style>
  