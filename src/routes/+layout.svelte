<script lang="ts">
  import '../app.css';
  
  // Svelte 5: Use children prop instead of slot
  let { children } = $props();
</script>

{@render children()}