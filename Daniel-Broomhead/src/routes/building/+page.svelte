
<!-- src/routes/+page.svelte -->

<script lang="ts">
    import type { PageData } from './$types';
    import NavBar from "$components/Blocks/NavBar.svelte";
    import Hero from "$components/Blocks/Hero.svelte";
    import Footer from "$components/Blocks/Footer.svelte";
    import Testing from '$components/Blocks/Testing.svelte';
    //let { data }: { data: PageData } = $props();
</script>

  <NavBar />
  <Hero />
  <main class="p-8">
    <!-- Page content goes here -->
  </main>
  <Footer />
  <Testing/>
  <style>
    main {
      min-height: 60vh;
    }
  </style>
  