<script>
    // Data for projects, can be replaced with a fetch from an API
    let projects = [
        {
            title: "Project One",
            description: "A web application built with SvelteKit and Supabase.",
            link: "https://github.com/project-one"
        },
        {
            title: "Project Two",
            description: "A portfolio template for creative professionals.",
            link: "https://github.com/project-two"
        },
        {
            title: "Project Three",
            description: "An e-commerce website built with modern technologies.",
            link: "https://github.com/project-three"
        }
    ];
</script>

<svelte:head>
    <title>John Doe | Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
</svelte:head>

<style>
    body {
        margin: 0;
        font-family: 'Inter', sans-serif;
        background-color: #f8f9fa;
        color: #03045E;
    }
    .container {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    header {
        text-align: center;
        padding: 50px 0;
    }
    header h1 {
        font-size: 2.5em;
        color: #0077B6;
    }
    header p {
        font-size: 1.2em;
        color: #00B4D8;
    }
    .about-me {
        text-align: center;
        margin-top: 40px;
        font-size: 1.2em;
        color: #0077B6;
    }
    .projects {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin-top: 40px;
    }
    .project-card {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        padding: 20px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .project-card h3 {
        color: #0077B6;
    }
    .project-card p {
        color: #03045E;
    }
    .project-card a {
        display: inline-block;
        margin-top: 10px;
        padding: 10px 15px;
        background-color: #0077B6;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }
    .project-card a:hover {
        background-color: #00B4D8;
    }
    footer {
        text-align: center;
        padding: 20px;
        background-color: #03045E;
        color: #fff;
        position: fixed;
        width: 100%;
        bottom: 0;
    }
</style>

<div class="container">
    <header>
        <h1>John Doe</h1>
        <p>Web Developer | Designer | Problem Solver</p>
    </header>

    <section class="about-me">
        <p>Welcome to my portfolio. I'm a passionate web developer who loves building dynamic and interactive web applications.</p>
    </section>

    <section class="projects">
        {#each projects as project}
            <div class="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank">View Project</a>
            </div>
        {/each}
    </section>
</div>

<footer>
    &copy; 2025 John Doe. All rights reserved.
</footer>
