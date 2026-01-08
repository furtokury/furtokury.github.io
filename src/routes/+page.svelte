<script>
  import FadeInAnimation from "./FadeInAnimation.svelte";
</script>

<svelte:head>
  <meta property="og:title" content="TOKU" />
</svelte:head>

<div class="banner">
  <img class="banner-image" src="/images/banner.jpg" alt="Banner">
  <div class="banner-overlay">
    <div class="banner-overlay-text">
      <div>SCROLL DOWN</div>
    </div>
  </div>
</div>
<FadeInAnimation>
  <div class="container">
    <div class="description">
      <div class="description-header">
        <img src="/images/logo.svg" alt="TOKU Logo" width="15">
        <div>FURTOKURY</div>
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

  .container {
    max-width: 900px;
    margin: auto;
    padding: 0 20px;
  }

  @media (max-width: 600px) {
    .container {
      padding: 0 12px;
    }
  }

  .description {
    text-align: center;
  }

  .description img {
    filter: drop-shadow(0 2px 0 #A9B58C);
  }

  .description-header {
    font-size: 52px;
    font-weight: 900;
    margin-bottom: 40px;
    text-shadow: 0 2px 0 #A9B58C;
  }

  .description-text div {
    margin-bottom: 16px;
    line-height: 1.6;
  }
</style>
