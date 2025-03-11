<!-- src/components/ProjectCard.svelte -->
<script>
    export let imageUrl = "";
    export let title = "Project Title";
    export let description = "A short description of the project.";
    export let link = "#";
  </script>
  
  <style>
    .project-card {
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: transform 0.3s ease;
    }
  
    .project-card:hover {
      transform: translateY(-10px);
    }
  
    .project-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  
    .project-card-content {
      padding: 20px;
    }
  
    .project-card-content h3 {
      color: #03045E;
    }
  
    .project-card-content p {
      color: #555;
      font-size: 1rem;
    }
  
    .project-card-content a {
      background-color: #00B4D8;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      text-decoration: none;
      font-size: 1rem;
      transition: background-color 0.3s ease;
    }
  
    .project-card-content a:hover {
      background-color: #0077B6;
    }
  </style>
  
  <div class="project-card">
    <img src={imageUrl} alt={title} />
    <div class="project-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>View Project</a>
    </div>
  </div>
  