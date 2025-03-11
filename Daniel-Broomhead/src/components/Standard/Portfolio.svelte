<script>
    const projects = [
      { title: 'Project 1', description: 'Description of Project 1', link: '#' },
      { title: 'Project 2', description: 'Description of Project 2', link: '#' },
      { title: 'Project 3', description: 'Description of Project 3', link: '#' },
    ];
  </script>
  
  <section id="portfolio" class="portfolio">
    <h2>My Work</h2>
    <div class="projects">
      {#each projects as project}
        <div class="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>View Project</a>
        </div>
      {/each}
    </div>
  </section>
  
  <style>
    .portfolio {
      background-color: #90E0EF;
      padding: 50px;
    }
    .projects {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    .project-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    h2 {
      color: #03045E;
      font-size: 2rem;
    }
    a {
      text-decoration: none;
      color: #0077B6;
    }
  </style>
  