<script>
  import { onMount } from "svelte";
  import FadeInAnimation from "../../FadeInAnimation.svelte";
  import Title from "../../Title.svelte";
  import { _ } from "svelte-i18n";

  let businessCard1Data = $state({owners: [], reserveds: []});

  onMount(() => {
    fetch(`/businesscard/1.json`)
      .then((response) => response.json())
      .then((data) => {
        businessCard1Data = data;
        console.log(data);
      });
  });
</script>

<svelte:head>
  <meta property="og:title" content="Business Cards" />
  <meta name="twitter:title" content="Business Cards" />
</svelte:head>

<Title>BUSINESS CARDS</Title>
<div class="container">
  <div class="title">ILLUST #1</div>
  <div class="content-section">
    <div class="business-card-section">
      <FadeInAnimation>
        <div class="owners-title">Preview</div>
        <div class="image-container">
          <img src="/images/business-card-1.svg" alt="Business Card #1" class="business-card-image" />
          <img src="/images/business-card-1-back.svg" alt="Business Card Back #1" class="business-card-image" />
        </div>
        <div class="image-container-description">
          {$_("businesscards.illust1.description")}
        </div>
      </FadeInAnimation>
    </div>
    <div class="owners-section">
      <FadeInAnimation>
        <div class="owners-title">Owners</div>
        <div class="owners-list">
          {#each businessCard1Data.owners as _, i}
            <div class="owner-entry">
              #{businessCard1Data.owners[i].id} <strong>{businessCard1Data.owners[i].name}</strong>
            </div>
          {/each}
        </div>
      </FadeInAnimation>
      <FadeInAnimation>
        <div class="owners-title">Reserveds</div>
        <div class="owners-list">
          {#each businessCard1Data.reserveds as _, i}
            <div class="owner-entry">
              #{businessCard1Data.reserveds[i].id} <strong>{businessCard1Data.reserveds[i].name}</strong>
            </div>
          {/each}
        </div>
      </FadeInAnimation>
    </div>
  </div>
</div>

<style>
  .container {
    max-width: 900px;
    margin: auto;
    padding: 0 20px;
  }

  .content-section {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .business-card-section {
    flex: 2;
    min-width: 300px;
  }

  .owners-section {
    flex: 1;
    min-width: 200px;
  }

  .title {
    font-size: 20px;
    margin-top: 40px;
    margin-bottom: 20px;
    text-shadow: 0 2px 0 #a9b58c;
  }

  .image-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #5b75311f;
    padding: 40px;
    border-radius: 12px;
  }

  .business-card-image {
    max-width: 5cm;
    box-shadow: 0 0 20px #5b75317f;
  }

  .image-container-description {
    margin-top: 16px;
    font-size: 16px;
  }

  .owners-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 12px;
    margin-top: 20px;
  }

  .owners-list {
    max-height: 300px;
    overflow-y: auto;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .owner-entry {
    font-size: 16px;
    margin-bottom: 6px;
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
    background-color: white;
  }
</style>
