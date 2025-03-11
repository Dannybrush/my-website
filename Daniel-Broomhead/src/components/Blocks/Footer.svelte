<!-- src/components/Footer.svelte -->
<footer class="bg-primary text-white py-6">
  <div class="container mx-auto text-center">
    <p>&copy; {new Date().getFullYear()} JC Packaging Limited. All rights reserved.</p>
    <p>
      <a href="mailto:info@jcpackaging.com" class="hover:underline">info@jcpackaging.com</a> | 
      <a href="tel:+441234567890" class="hover:underline">+44 123 456 7890</a>
    </p>
    <p>
      JC Packaging Limited, 123 Business Park, Suite 456, London, UK
    </p>
  </div>
</footer>

<style>
  footer {
    background-color: #0077B6;
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
