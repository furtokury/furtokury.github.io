<script>
  import { onMount } from "svelte";
  import FadeInAnimation from "./FadeInAnimation.svelte";
  import Banner from "./Banner.svelte";
  import { _ } from "svelte-i18n";

  let ageSpan;

  const birthDate = new Date("2025-01-27T00:00:00"); // 토쿠의 생일
  let decimalPoints = 0;
  let decimalPointsTarget = 0;

  function calculateAge(birthDate) {
    const today = new Date();
    const age = (today - birthDate) / (1000 * 60 * 60 * 24 * 365.25);
    return age.toFixed(decimalPoints);
  }

  function ageSpanMouseEnter() {
    decimalPointsTarget = 10;
  }

  function ageSpanMouseLeave() {
    decimalPointsTarget = 0;
  }

  onMount(() => {
    const interval = setInterval(() => {
      if (ageSpan) {
        ageSpan.textContent = calculateAge(birthDate);
      }

      decimalPoints = (decimalPointsTarget - decimalPoints) * 0.02 + decimalPoints;
    });

    if (ageSpan) {
      ageSpan.textContent = calculateAge(birthDate);
    }

    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <meta property="og:title" content="TOKU" />
  <meta name="twitter:title" content="TOKU" />
</svelte:head>

<Banner />
<FadeInAnimation>
  <div class="container">
    <div class="description-header">
      <img src="/images/logo.svg" alt="TOKU Logo" width="15">
      <div>FUR<strong>TOKU</strong>RY</div>
    </div>
    <div class="description-text">
      <div>{$_("index.furtokury.quote")}</div>
      <div style="font-style: italic;">
        {$_("index.furtokury.age1")}<strong bind:this={ageSpan} on:mouseenter={ageSpanMouseEnter} on:mouseleave={ageSpanMouseLeave} style="text-decoration: dotted underline; font-variant-numeric: tabular-nums;"></strong>{$_("index.furtokury.age2")}
      </div>
      <div>{$_("index.furtokury.intro1")}</div>
      <div>{$_("index.furtokury.intro2")}</div>
      <div>{$_("index.furtokury.intro3")}</div>
    </div>
  </div>
  <div class="container">
    <div class="description-header">
      <img src="/images/logo.svg" alt="TOKU Logo" width="15">
      <div>A <strong>MAKER</strong></div>
    </div>
    <div class="description-text">
      <div>{$_("index.maker.paragraph1")}</div>
      <div>{$_("index.maker.paragraph2")}</div>
      <div>
        {$_("index.maker.paragraph3.1")}
        <a href="https://discord.gg/G6CKPDSqNg">
        {$_("index.maker.paragraph3.2")}
        </a>
        {$_("index.maker.paragraph3.3")}
      </div>
    </div>
  </div>
</FadeInAnimation>

<style>
  .container {
    max-width: 900px;
    margin: auto;
    padding: 0 20px;
    text-align: center;
    margin-bottom: 80px;
  }

  @media (max-width: 600px) {
    .container {
      padding: 0 12px;
    }
  }

  .description img {
    filter: drop-shadow(0 2px 0 #A9B58C);
  }

  .description-header {
    font-size: 52px;
    margin-bottom: 40px;
    text-shadow: 0 2px 0 #A9B58C;
  }

  .description-header strong {
    font-weight: 900;
  }

  .description-text div {
    margin-bottom: 16px;
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: dotted underline;
  }

  a:hover {
    font-weight: bold;
    text-decoration: dashed underline;
  }
</style>
