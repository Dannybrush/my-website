<script>
    export let title = "Contact Me";
  </script>
  
  <style>
    .contact-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px;
      font-family: 'Arial', sans-serif;
    }
  
    h1 {
      text-align: center;
      color: #03045E;
    }
  
    form {
      display: flex;
      flex-direction: column;
    }
  
    input, textarea {
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    button {
      background-color: #00B4D8;
      color: #fff;
      padding: 12px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background-color: #0077B6;
    }
  </style>
  
  <div class="contact-container">
    <h1>{title}</h1>
    <form action="#">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
  