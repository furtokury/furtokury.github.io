<script lang="ts">
  import GalleryItem from "./GalleryItem.svelte";
</script>

<div class="container">
  <div class="title">GALLERY</div>
  <div class="images">
    NO IMAGES!
  </div>
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

  .images {
    display: flex;
    flex-wrap: wrap;
  }
</style>
