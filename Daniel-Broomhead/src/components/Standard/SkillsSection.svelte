<script>
    export let skills = [
        { name: 'Svelte', icon: '/path-to-icon.svg' },
        { name: 'JavaScript', icon: '/path-to-icon2.svg' },
        { name: 'CSS', icon: '/path-to-icon3.svg' },
        { name: 'Node.js', icon: '/path-to-icon4.svg' }
    ];
</script>

<section class="skills-section">
    {#each skills as skill}
        <div class="skill">
            <img src={skill.icon} alt={skill.name} class="skill-icon" />
            <p>{skill.name}</p>
        </div>
    {/each}
</section>

<style>
    .skills-section {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
    }

    .skill {
        text-align: center;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .skill-icon {
        width: 60px;
        height: 60px;
        transition: transform 0.3s ease;
    }

    .skill:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }

    .skill-icon:hover {
        transform: rotate(360deg);
    }
</style>
