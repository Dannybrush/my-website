<!-- src/components/Footer.svelte -->
<script>
    export let footerText = "© 2024 Daniel Broomhead. All Rights Reserved.";
  </script>
  
  <style>
    footer {
      background-color: #0077B6;
      color: white;
      padding: 20px;
      text-align: center;
    }
  
    a {
      color: white;
      text-decoration: none;
      margin-left: 10px;
    }
  
    a:hover {
      text-decoration: underline;
    }
  </style>
  
  <footer>
    <p>{footerText}</p>
    <p>
      <a href="#">GitHub</a> | <a href="#">LinkedIn</a>
    </p>
  </footer>
  