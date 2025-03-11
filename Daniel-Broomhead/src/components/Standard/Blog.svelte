<script>
  const posts = [
    { title: 'Blog Post 1', excerpt: 'Short description of the blog post.', link: '#' },
    { title: 'Blog Post 2', excerpt: 'Short description of the blog post.', link: '#' },
  ];
</script>

<section id="blog" class="blog">
  <h2>Recent Blog Posts</h2>
  <div class="blog-posts">
    {#each posts as post}
      <div class="post">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <a href={post.link}>Read More</a>
      </div>
    {/each}
  </div>
</section>

<style>
  .blog {
    background-color: #CAF0F8;
    padding: 50px;
  }
  .blog-posts {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .post {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
</style>
