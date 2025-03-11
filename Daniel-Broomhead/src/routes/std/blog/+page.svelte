<script>
  import Card from '$components/Standard/Card.svelte';

  let blogPosts = [
    { title: "Blog Post 1", description: "A brief description of blog post 1", link: "#" },
    { title: "Blog Post 2", description: "A brief description of blog post 2", link: "#" },
    { title: "Blog Post 3", description: "A brief description of blog post 3", link: "#" }
  ];
</script>

<div class="blog-posts">
  <h2>Featured Blog Posts</h2>
  <div class="cards-container">
    {#each blogPosts as post}
      <Card title={post.title} description={post.description} link={post.link} />
    {/each}
  </div>
</div>

<style>
  .blog-posts {
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
