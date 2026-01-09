<script>
  import "bootstrap-icons/font/bootstrap-icons.css";
  import { onMount } from "svelte";
  import Title from "../Title.svelte";

  let pages = $state([]);

  onMount(() => {
    fetch("/pages.json")
      .then((response) => response.json())
      .then((data) => {
        pages = data;
      });
  });
</script>

<svelte:head>
  <meta property="og:title" content="Pages" />
</svelte:head>

<Title>PAGES</Title>
<div class="container">
  <div class="pages-list">
    {#each pages as page}
      <a href={page.url} class="page-entry">
        <div class="entry-title"><i class="bi bi-{page.icon}"></i> {page.title}</div>
        <div class="entry-description">{page.description}</div>
      </a>
    {/each}
  </div>
</div>

<style>
  .container {
    max-width: 900px;
    margin: auto;
    padding: 0 20px;
  }

  .pages-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .page-entry {
    padding: 12px 16px;
    border-bottom: 2px solid #A9B58C;
    transition: background-color 0.3s, box-shadow 0.3s;
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .entry-title {
    font-weight: 700;
    margin-bottom: 4px;
  }

  .page-entry:hover {
    background-color: #5b753120;
  }

  .link {
    font-weight: 100;
    margin-left: 8px;
  }

  .entry-description {
    font-size: 14px;
  }
</style>
