<script lang="ts">
  import { onMount } from "svelte";

  export let src;
  export let title = "";
  export let date = "2024. 5. 1";

  let height = 0;

  onMount(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      height = 250 / aspectRatio;
    };
  });
</script>

<div class="gallery-item" style="background-image: url({src}); height: {height}px;">
  <div class="overlay">
    <div class="title">{title}</div>
    <div class="date">{date}</div>
    <slot></slot>
  </div>
</div>

<style>
  .gallery-item {
    background-color: lightgrey;
    flex: 1;
    min-width: 200px;
    background-size: cover;
    background-position: center;
    position: relative;
    margin: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease;
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
</style>
