<script>
  import { onMount } from 'svelte';

  let bannerImages = $state([]);

  let currentImageIndex = $state(0);
  let currentImage = $derived(bannerImages[currentImageIndex] || {});

  function changeImageIndex(index) {
    return () => {
      currentImageIndex = index;
    };
  }

  onMount(() => {
    fetch("/bannerimages.json")
      .then((response) => response.json())
      .then((data) => {
        bannerImages = data;
      });

    const interval = setInterval(() => {
      currentImageIndex =
        (currentImageIndex + 1) % (bannerImages.length || 1);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="banner">
  <div class="banner-image-container">
    <img
      src={currentImage.url}
      alt={currentImage.alt || "Banner Image"}
      class="banner-image"
    />
  </div>
  <div class="banner-overlay">
    <div class="banner-overlay-text">
      <div class="banner-overlay-navigation">
        {#each bannerImages as image, index}
          <button
            class="banner-overlay-navigation-button"
            onclick={changeImageIndex(index)}
            aria-label={`Show banner image ${index + 1}`}
            class:active={index === currentImageIndex}
          >
            ●
          </button>
        {/each}
      </div>
      <div class="banner-scroll-down">SCROLL DOWN</div>
    </div>
  </div>
</div>

<style>
  .banner-image {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-color: lightgrey;
    position: relative;
    top: -64px;
  }

  .banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.2) 100%);
    pointer-events: none;
  }

  .banner-overlay-text {
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
    color: white;
    text-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
    opacity: 80%;
  }

  .banner-scroll-down {
    animation: scrollDown 2s infinite;
  }

  @keyframes scrollDown {
    0%, 100% {
      transform: translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateY(10px);
      opacity: 0.4;
    }
  }

  .banner-overlay-navigation {
    margin-bottom: 16px;
  }

  .banner-overlay-navigation-button {
    background: none;
    border: none;
    color: white;
    margin: 0 4px;
    cursor: pointer;
    pointer-events: auto;
    transition: opacity 0.3s;
    opacity: 0.5;
  }

  .banner-overlay-navigation-button.active,
  .banner-overlay-navigation-button:hover {
    opacity: 1;
  }
</style>
