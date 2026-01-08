<script>
  import { onMount } from "svelte";
  import FadeInAnimation from "./FadeInAnimation.svelte";

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
</svelte:head>

<div class="banner">
  <img class="banner-image" src="/images/banner.jpg" alt="Banner">
  <div class="banner-overlay">
    <div class="banner-overlay-text">
      <div class="banner-scroll-down">SCROLL DOWN</div>
    </div>
  </div>
</div>
<FadeInAnimation>
  <div class="container">
    <div class="description-header">
      <img src="/images/logo.svg" alt="TOKU Logo" width="15">
      <div>FUR<strong>TOKU</strong>RY</div>
    </div>
    <div class="description-text">
      <div>“ 말차 족제비 토쿠 ”</div>
      <div>
        안녕하세요! 저는 '토쿠'라는 이름으로 활동하는 말차 족제비 토쿠입니다.<br>
        제 이름은 일본어로 '풀다'를 의미하는 '토쿠'에서 유래되었습니다. 저는 다양한 창작 활동을 통해 여러분과 소통하고자 합니다.
      </div>
      <div>
        저는 주로 퍼슈팅, 퍼슈트 제작 작업을 하고 있습니다. 퍼슈팅은 저의 열정이자 창작의 원천입니다.<br>
        또한, 퍼슈트 제작 작업을 통해 저만의 독특한 스타일과 아이디어를 표현하고 있습니다.
      </div>
      <div>
        저는 제 작품을 통해 여러분과 소통하고, 새로운 아이디어를 공유하고자 합니다.<br>
        제 작업에 관심이 있으시다면 언제든지 연락해 주세요. 함께 창작의 즐거움을 나누고 싶습니다!
      </div>
      <div>감사합니다!</div>
    </div>
  </div>
</FadeInAnimation>
<FadeInAnimation>
  <div class="container">
    토쿠의 생일은 2025년 1월 27일이고,
    토쿠는 지금 <strong bind:this={ageSpan} on:mouseenter={ageSpanMouseEnter} on:mouseleave={ageSpanMouseLeave} style="text-decoration: dotted underline; font-variant-numeric: tabular-nums;"></strong>살이에요 🤗
  </div>
</FadeInAnimation>

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
</style>
