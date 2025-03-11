<script>
    let showMenu = false;
  </script>
  
  <header class="bg-primary text-white p-4 flex justify-between items-center">
    <img src= "/std/Dan- Codemonkey.jpg" alt="JC Packaging Limited Logo" class="logo cursor-pointer" on:click={() => window.location = '/'}>
    <nav class="hidden md:flex space-x-4">
      <a href="/" class="hover:underline">Home</a>
      <a href="/about" class="hover:underline">About Us</a>
      <a href="/news" class="hover:underline">News</a>
      <a href="/portfolio" class="hover:underline">Portfolio</a>
      <a href="/contact" class="hover:underline">Contact Us</a>
    </nav>
    <button class="md:hidden" on:click={() => showMenu = !showMenu}>
      ☰
    </button>
  </header>
  
  {#if showMenu}
    <nav class="mobile-menu bg-primary text-white p-4 space-y-2">
      <a href="/" class="block">Home</a>
      <a href="/about" class="block">About Us</a>
      <a href="/news" class="block">News</a>
      <a href="/portfolio" class="block">Portfolio</a>
      <a href="/contact" class="block">Contact Us</a>
    </nav>
  {/if}
  
  <main class="p-8">
    <section id="portfolio" class="py-16">
      <h2 class="text-3xl font-bold mb-8">Our Portfolio</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each [1, 2, 3, 4, 5, 6] as client}
          <div class="card bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer" on:click={() => showPopup(client)}>
            <img src="/client-logo-placeholder.png" alt="Client Logo" class="w-full h-32 object-contain">
            <h3 class="mt-4 text-xl font-semibold">Client {client}</h3>
          </div>
        {/each}
      </div>
    </section>
  
    <div id="popup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden" bind:this={popup}>
      <div class="bg-white p-8 rounded shadow-lg w-96">
        <button class="absolute top-4 right-4 text-black" on:click={() => popup.classList.add('hidden')}>✖</button>
        <img src="/client-logo-placeholder.png" alt="Client Logo" class="w-full h-32 object-contain mb-4">
        <p class="text-gray-700">This is a brief description about the client. Their logo above links to their website.</p>
        <a href="#" class="text-blue-500 hover:underline mt-4 block">Visit Website</a>
      </div>
    </div>
  
    <section id="contact" class="py-16 bg-light-blue">
      <h2 class="text-3xl font-bold mb-8">Contact Us</h2>
      <form class="bg-white p-8 rounded shadow-md max-w-md mx-auto">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" class="mt-1 block w-full p-2 border rounded">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" class="mt-1 block w-full p-2 border rounded">
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows="4" class="mt-1 block w-full p-2 border rounded"></textarea>
        </div>
        <button type="submit" class="bg-primary text-white px-4 py-2 rounded hover:bg-dark-blue">Send</button>
      </form>
      <div class="mt-8 text-center">
        <p>J.C. Packaging Limited</p>
        <p>123 Business Road, Business City, BC 12345</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@jcpackaging.com</p>
      </div>
    </section>
  </main>
  
  <style>
    .bg-primary {
      background-color: #0077B6;
    }
  
    .bg-light-blue {
      background-color: #CAF0F8;
    }
  
    .text-white {
      color: #ffffff;
    }
  
    .logo {
      height: 50px;
    }
  
    .mobile-menu {
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
    }
  
    .card {
      transition: box-shadow 0.3s ease-in-out;
    }
  
    .card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  
    #popup {
      display: flex;
    }
  </style>
  