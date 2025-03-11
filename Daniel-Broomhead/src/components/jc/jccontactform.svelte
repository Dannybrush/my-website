<script>
  let name = '';
  let email = '';
  let message = '';
  let status = '';

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission logic, like sending data to an API
    status = 'Thank you for your message!';
    // Reset the form
    name = '';
    email = '';
    message = '';
  };
</script>

<style>
  .contact-form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f9f9f9;
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
    background-color: #0077b6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }

  .contact-form button:hover {
    background-color: #005f87;
  }

  .status-message {
    margin-top: 1rem;
    font-size: 1rem;
    color: green;
    text-align: center;
  }
</style>

<div class="contact-form">
  <h2>Contact Us</h2>
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
