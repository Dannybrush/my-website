<script>
  export let title;
  export let description;
  export let link;
  
  let isSpinning = false;

  function toggleSpin() {
    isSpinning = !isSpinning;
  }
</script>

<div class="card" class:spin={isSpinning} on:click={toggleSpin}>
  <h3>{title}</h3>
  <p>{description}</p>
  <a href={link}>Learn More</a>
</div>

<style>
  .card {
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  .card.spin {
    animation: spin 1s ease-in-out forwards;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
