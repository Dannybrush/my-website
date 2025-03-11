<script>
  import Card from '$components/Standard/Card.svelte';

  let portfolioProjects = [
    { title: "Portfolio Project 1", description: "A brief description of portfolio project 1", link: "#" },
    { title: "Portfolio Project 2", description: "A brief description of portfolio project 2", link: "#" },
    { title: "Portfolio Project 3", description: "A brief description of portfolio project 3", link: "#" }
  ];
</script>

<div class="portfolio-projects">
  <h2>Featured Portfolio Projects</h2>
  <div class="cards-container">
    {#each portfolioProjects as project}
      <Card title={project.title} description={project.description} link={project.link} />
    {/each}
  </div>
</div>

<style>
  .portfolio-projects {
    padding: 40px 20px;
    text-align: center;
    background-color: #f5f5f5;
  }

  h2 {
    font-size: 2.5rem;
    color: #03045E;
    margin-bottom: 20px;
  }

  .cards-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }
</style>
