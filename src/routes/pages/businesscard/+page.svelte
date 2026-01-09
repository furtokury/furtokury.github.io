<script>
  import { onMount } from "svelte";
  import FadeInAnimation from "../../FadeInAnimation.svelte";

  async function getBusinessCardData(n) {
    const result = {count: 0};

    const data = await fetch(`/businesscard/${n}.json`)
      .then((response) => response.json());

    for (let i = 0; i < data.length; i++) {
      const datum = data[i];
      result[datum.id] = datum;
      result.count = Math.max(result.count, datum.id);
    }

    return result; }

  let businessCard1Data = $state({});

  onMount(() => {
    getBusinessCardData(1).then((data) => businessCard1Data = data);
  });
</script>

<svelte:head>
  <meta property="og:title" content="Business Cards" />
</svelte:head>

<div class="container">
  <div class="title">BUSINESS CARD #1</div>
  <FadeInAnimation>
    <div class="image-container">
      <img src="/images/business-card-1.svg" alt="Business Card #1" class="business-card-image" />
      <img src="/images/business-card-1-back.svg" alt="Business Card Back #1" class="business-card-image" />
    </div>
  </FadeInAnimation>
  <FadeInAnimation>
    <div class="image-container-description">
      토쿠가 직접 디자인하여 100장 한정으로 만든 토쿠의 첫번째 명함입니다.<br>
      토쿠에게 직접 받은 명함에는 토쿠의 수필 서명과 명함 번호가 적혀 있습니다.
    </div>
  </FadeInAnimation>
  <FadeInAnimation>
    <div class="owners-title">Owners</div>
    <div class="owners-list">
      {#each Array(businessCard1Data.count).fill(0).map((_, i) => i + 1) as i}
        {#if businessCard1Data[i]}
          <div class="owner-entry">
            #{i} - <strong>{businessCard1Data[i].name}</strong>
          </div>
        {/if}
      {/each}
    </div>
  </FadeInAnimation>
</div>

<style>
  .container {
    max-width: 900px;
    margin: auto;
    padding: 0 20px;
  }

  .title {
    font-size: 20px;
    font-weight: 900;
    margin-top: 40px;
    margin-bottom: 20px;
    text-shadow: 0 2px 0 #a9b58c;
    text-align: center;
  }

  .image-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .business-card-image {
    max-width: 5cm;
    box-shadow: 0 0 20px #5b75317f;
  }

  .image-container-description {
    text-align: center;
    margin-top: 16px;
    font-size: 16px;
  }

  .owners-title {
    font-size: 18px;
    font-weight: 700;
    margin-top: 32px;
    margin-bottom: 12px;
    text-align: center;
  }

  .owners-list {
    max-height: 300px;
    overflow-y: auto;
    padding: 12px;
    border-radius: 8px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .owner-entry {
    font-size: 16px;
    margin-bottom: 6px;
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    min-width: 120px;
    text-align: center;
    background-color: white;
  }
</style>
