<script lang="ts">
  import GalleryItem from "./GalleryItem.svelte";
  import { onMount } from "svelte";

  let illustData = [];

  onMount(() => {
    fetch("/illusts.json")
      .then((response) => response.json())
      .then((data) => {
        illustData = data;
      })
      .catch((error) => {
        console.error("Error loading illusts data:", error);
      });
  });
</script>

<svelte:head>
  <meta name="og:title" content="Gallery" />
</svelte:head>

<div class="container">
  <div class="title">ILLUSTS</div>
  {#each illustData as year}
    <div class="timestamp">{year.year}</div>
    <div class="images">
      {#each year.items as item}
        <GalleryItem src={'/illusts/' + item.src} title={item.title} date={item.date}>
          {item.description}
        </GalleryItem>
      {/each}
    </div>
  {/each}
</div>

<style>
  .container {
    max-width: 900px;
    margin: auto;
    padding: 0 20px;
  }

  .title {
    font-size: 64px;
    font-weight: 900;
    margin-top: 96px;
    margin-bottom: 40px;
    text-shadow: 0 2px 0 #A9B58C;
    text-align: center;
  }

  .timestamp {
    font-size: 24px;
    font-weight: 700;
    margin-top: 64px;
    margin-bottom: 24px;
    color: #5b7531;
    text-shadow: 0 1px 0 #a9b58c;
  }

  .images {
    display: flex;
    flex-wrap: wrap;
  }
</style>
