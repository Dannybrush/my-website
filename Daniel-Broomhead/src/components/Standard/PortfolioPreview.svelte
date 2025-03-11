<script>
    export let projects = [
        { title: 'Project 1', description: 'Short description of project', image: '/path-to-image.jpg' },
        { title: 'Project 2', description: 'Another project description', image: '/path-to-image2.jpg' },
        { title: 'Project 3', description: 'Short description', image: '/path-to-image3.jpg' }
    ];
</script>

<section class="portfolio-preview">
    {#each projects as project}
        <div class="project-card">
            <img src={project.image} alt={project.title} class="project-image" />
            <div class="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    {/each}
</section>

<style>
    .portfolio-preview {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .project-card {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .project-card:hover {
        transform: scale(1.05);
    }

    .project-image {
        width: 100%;
        height: auto;
        transition: opacity 0.3s ease;
    }

    .project-card:hover .project-image {
        opacity: 0.8;
    }

    .project-info {
        position: absolute;
        bottom: 10px;
        left: 10px;
        color: white;
    }
</style>
