<script>
  import { onMount, tick } from 'svelte';

  let bannerImages = $state([]);

  let currentImageIndex = $state(0);
  let currentImage = $derived(bannerImages[currentImageIndex] || {});

  function changeImageIndex(index) {
    return () => {
      currentImageIndex = index;
      lastChanged = new Date().getTime();
    };
  }

  let bannerXOffset = 0;
  let width = 0;
  let targetXOffset = $derived(-currentImageIndex * width);
  let bannerImageContainer;
  let bannerLoadingBarFills = $state([]);

  let bannerImageElements = $state([]);
  function resize() {
    width = window.innerWidth;
    bannerImageElements.forEach((img, i) => {
      img.style.left = `${i * width}px`;
    });
    targetXOffset = -currentImageIndex * width;
    bannerXOffset = targetXOffset;
  }

  let lastChanged = new Date().getTime();

  let dragging = false;

  onMount(async () => {
    await fetch("/bannerimages.json")
      .then((response) => response.json())
      .then((data) => {
        bannerImages = data;
      });

    await tick();

    document.addEventListener("resize", resize);
    window.addEventListener("resize", resize);
    resize();

    let mouseDownX = 0;

    bannerImageContainer.addEventListener("touchmove", (e) => {
      lastChanged = new Date().getTime();

      if (dragging) {
        e.preventDefault();
        const touch = e.touches[0];
        const dx = touch.clientX - mouseDownX;
        mouseDownX = touch.clientX;
        bannerXOffset += dx;
        bannerImageContainer.style.transform = `translateX(${bannerXOffset}px)`;
      }
    });

    bannerImageContainer.addEventListener("touchstart", (e) => {
      dragging = true;
      lastChanged = new Date().getTime();
      mouseDownX = e.touches[0].clientX;
    });

    bannerImageContainer.addEventListener("touchend", (e) => {
      dragging = false;
      lastChanged = new Date().getTime();

      if (bannerImages.length <= 1) return;
      const newIndex = Math.round(-bannerXOffset / width);
      currentImageIndex = Math.min(Math.max(newIndex, 0), bannerImages.length - 1);
    });

    const interval = setInterval(() => {
      if (dragging) { return; }

      if (bannerImageContainer) {
        bannerXOffset += (targetXOffset - bannerXOffset) * 0.03;
        bannerImageContainer.style.transform = `translateX(${bannerXOffset}px)`;
      }

      if (bannerImages.length <= 1) return;

      if (new Date().getTime() - lastChanged > 5000) {
        currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
        lastChanged = new Date().getTime();
      }

      if (bannerLoadingBarFills.length > currentImageIndex && bannerLoadingBarFills[currentImageIndex]) {
        bannerLoadingBarFills[currentImageIndex].style.width = `${((new Date().getTime() - lastChanged) / 5000) * 100}%`;
        for (let i = 0; i < bannerLoadingBarFills.length; i++) {
          if (i !== currentImageIndex && bannerLoadingBarFills[i]) {
            bannerLoadingBarFills[i].style.width = "0";
          }
        }
      }
    });

    return () => {
      clearInterval(interval);
      document.removeEventListener("resize", resize);
    };
  });
</script>

<div class="banner">
  <div class="banner-image-container" bind:this={bannerImageContainer}>
    {#each bannerImages as image, index}
      <img
        src={image.url}
        alt={image.alt || `Banner Image ${index + 1}`}
        class="banner-image"
        key={image.url}
        bind:this={bannerImageElements[index]}
      />
    {/each}
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
          <div class="banner-button-loading-bar">
            <div class="banner-button-loading-bar-fill" bind:this={bannerLoadingBarFills[index]}></div>
          </div>
          </button>
        {/each}
      </div>
      <div class="banner-scroll-down">SCROLL DOWN</div>
    </div>
  </div>
</div>

<style>
  .banner {
    top: -64px;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .banner-image {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-color: lightgrey;
    position: absolute;
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
    border: none;
    color: white;
    margin: 0 4px;
    cursor: pointer;
    pointer-events: auto;
    padding: 0;
    background-color: transparent;
  }

  .banner-button-loading-bar {
    background-color: rgba(255, 255, 255, 0.3);
    width: 8px;
    height: 8px;
    border-radius: 1000px;
    transition: width 0.5s;
    transition: background-color 0.3s, width 0.1s;
  }

  .banner-button-loading-bar-fill {
    background-color: white;
    height: 100%;
    width: 0;
    border-radius: 1000px;
  }

  .banner-overlay-navigation-button.active .banner-button-loading-bar {
    width: 48px;
  }

  .banner-overlay-navigation-button.active .banner-button-loading-bar,
  .banner-overlay-navigation-button:hover .banner-button-loading-bar {
    background-color: rgba(255, 255, 255, 0.7);
  }
</style>
