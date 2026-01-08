<script lang="ts">
  import { onMount } from "svelte";

  export let src;
  export let title = "";
  export let date = "";

  let height = 0;

  onMount(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      height = 250 / aspectRatio;
    };
  });

  let floatViewer: HTMLDivElement;

  function toggleFloatViewer() {
    if (floatViewer) {
      if (floatViewer.style.display === 'block') {
        floatViewer.style.display = 'none';
      } else {
        floatViewer.style.display = 'block';
      }
    }
  }
</script>

<div class="gallery-item" style="background-image: url({src}); height: {height}px;" on:click={toggleFloatViewer}>
  <div class="overlay">
    <div class="title">{title}</div>
    <div class="date">{date}</div>
  </div>
</div>

<div class="float-viewer" on:click={toggleFloatViewer} bind:this={floatViewer}>
  <img {src} alt={title} />
  <div class="float-viewer-metadata">
    <div class="float-viewer-title">{title}</div>
    <div class="float-viewer-date">{date}</div>
    <div class="float-viewer-description">
      <slot></slot>
    </div>
  </div>
</div>

<style>
  .gallery-item {
    flex: 1;
    min-width: 250px;
    background-color: white;
    background-size: 110%;
    background-position: center;
    position: relative;
    margin: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .gallery-item:hover {
    transform: scale(1.05);
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 16px;
    color: transparent;
    transition: background 0.3s ease, color 0.3s ease;
  }

  .overlay:hover {
    background: rgba(0, 0, 0, 0.5);
    color: white;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
  }

  .date {
    font-size: 14px;
    margin-top: 8px;
  }

  .float-viewer {
    display: none;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    cursor: pointer;
  }

  .float-viewer img {
    max-width: 90%;
    max-height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .float-viewer-metadata {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 8px;
  }

  .float-viewer-title {
    font-weight: bold;
  }

  .float-viewer-date {
    font-size: 11px;
    margin-top: 4px;
  }

  .float-viewer-description {
    margin-top: 12px;
  }
</style>
