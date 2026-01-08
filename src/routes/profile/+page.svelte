<script>
  import FadeInAnimation from "../FadeInAnimation.svelte";
</script>

<svelte:head>
  <meta property="og:title" content="TOKU Profile" />
</svelte:head>

<div class="header-skipper"></div>
<img src="/images/sheet.png" alt="Toku Character Sheet" class="sheet">
<div class="spacer" style="height: 50px;"></div>
<div class="container">
  <FadeInAnimation>
    <div class="section">
      <div class="title">INFO</div>
      <div class="content">
        <ul>
          <li>이름: 토쿠</li>
          <li>종족: 족제비</li>
          <li>성별: 수컷</li>
          <li>키: 172cm</li>
          <li>몸무게: 63kg</li>
          <li>성격: 소심함, 호기심, 완벽주의</li>
          <li>MBTI: ISTJ</li>
          <li>좋아하는 것: 말차 라떼</li>
          <li>싫어하는 것: 쓴 커피, 갑작스러운 질문</li>
        </ul>
      </div>
    </div>
  </FadeInAnimation>
  <FadeInAnimation>
    <div class="section">
      <div class="title">APPEARANCE</div>
      <div class="content">
        토쿠는 부드러운 말차색 털을 가진 족제비이다.
        눈은 어두운 녹색으로 빛나며, 항상 호기심 가득한 표정을 짓고 있다.
        날씬한 체형에 민첩한 움직임을 자랑하며, 꼬리는 길고 풍성하여 균형을 잘 잡아준다.
      </div>
      <div class="content">
        검은색 안경을 착용하고 있으며, 이는 토쿠의 한 가지에 집중하는 성격을 반영한다.
        평소에는 검은색 티셔츠와 흰색 가운을 즐겨 입는다.
      </div>
    </div>
  </FadeInAnimation>
  <FadeInAnimation>
    <div class="section">
      <div class="title">PERSONALITY</div>
      <div class="content">
        토쿠는 매우 호기심 많고 창의적인 성격을 가지고 있다.
        새로운 것에 도전하는 것을 좋아하며, 항상 주변을 탐험하고 배우려는 열정을 지니고 있다.
      </div>
      <div class="content">
        토쿠는 사회생활을 어려워하지만, 친한 친구들과 함께 있을 때는 매우 다정하고 유쾌한 모습을 보인다.
        또한, 문제 해결 능력이 뛰어나며, 어려운 상황에서도 침착하게 대처하는 모습을 보인다.
      </div>
    </div>
  </FadeInAnimation>
  <FadeInAnimation>
    <div class="section">
      <div class="title">HOBBIES</div>
      <div class="content">
        토쿠는 손재주가 뛰어나며, 다양한 예술 창작 활동을 즐긴다.
        또한, 토쿠는 자연을 탐험하는 것을 좋아하며, 산책이나 꽃 구경을 즐긴다.
      </div>
      <div class="content">
        토쿠는 맛있는 음식을 즐기며, 특히 말차 라떼를 좋아한다.
        요즘은 연구소에서 새로운 말차 음료를 개발하는 데에 관심을 가지고 있다.
      </div>
    </div>
  </FadeInAnimation>
</div>

<style>
  .sheet {
    width: 600px;
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    filter: drop-shadow(0 0 100px #A9B58C);
  }

  .container {
    padding: 0 20px;
    column-count: 2;
    column-gap: 40px;
    max-width: 900px;
    margin: auto;
  }

  @media (max-width: 600px) {
    .header-skipper {
      height: 50px;
    }

    .container {
      column-count: 1;
    }
  }

  .section {
    break-inside: avoid;
    margin-bottom: 40px;
  }

  .title {
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 20px;
    text-shadow: 0 2px 0 #A9B58C;
  }

  .content {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 8px;
  }
</style>
