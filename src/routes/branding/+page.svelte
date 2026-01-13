<script>
  import Title from '../Title.svelte';
  import "bootstrap-icons/font/bootstrap-icons.css";

  let tosSection;
  let tosToggleIcon;

  function toggleToS() {
    if (tosSection.style.display === 'none') {
      tosSection.style.display = 'block';
      tosToggleIcon.className = 'bi bi-chevron-down';
    } else {
      tosSection.style.display = 'none';
      tosToggleIcon.className = 'bi bi-chevron-right';
    }
  }
</script>

<Title>BRAND ASSETS</Title>

<div class="container">
  <div class="header">SYMBOL</div>
  <div class="paragraph">토쿠의 심볼은 토쿠의 눈을 형상화한 심볼로, 토쿠 브랜드의 정체성을 나타냅니다.</div>
  <div class="gallery logo-gallery">
    <div style="background-color: #FAF7EA;">
      <img src="/assets/logo_green.svg">
    </div>
    <div style="background-color: #5b7531;">
      <img src="/assets/logo_beige.svg">
    </div>
    <div style="background-color: white;">
      <img src="/assets/logo_black.svg">
    </div>
    <div style="background-color: black;">
      <img src="/assets/logo_white.svg">
    </div>
  </div>
  <div class="paragraph-right"><a href="/assets/symbol.zip"><i class="bi bi-download"></i></a></div>
  <div class="header">LOGO</div>
  <div class="paragraph">토쿠 캐릭터와 토쿠 스튜디오는 같은 심볼을 사용하여 로고를 형성합니다.</div>
  <div class="paragraph">레터링 로고에서 글씨체는 <b>Futura Bold</b>를 사용하지만, 편의상 <b>SUIT 900</b>을 사용할 수도 있습니다.</div>
  <div class="gallery logo-gallery">
    <div style="background-color: white;">
      <img src="/assets/toku.svg">
    </div>
    <div style="background-color: white;">
      <img src="/assets/toku_studio.svg">
    </div>
  </div>
  <div class="paragraph-right"><a href="/assets/logo.zip"><i class="bi bi-download"></i></a></div>
  <div class="header">COLORS</div>
  <div class="paragraph">토쿠의 대표 색상은 자연을 연상시키는 녹색 계열입니다. 보조 색상으로는 베이지색과 갈색을 사용합니다.</div>
  <div class="gallery">
    <div style="background-color: #5b7531;" class="color-swatch">
      <div>TOKU 말차색</div>
      <div class="color-code">#5B7531</div>
    </div>
    <div style="background-color: #faf7ea; color: rgba(0, 0, 0, 0.9)" class="color-swatch">
      <div>TOKU 상아색</div>
      <div class="color-code">#FAF7EA</div>
    </div>
    <div style="background-color: #d9aa8b; color: rgba(0, 0, 0, 0.9);" class="color-swatch">
      <div>TOKU 황토색</div>
      <div class="color-code">#D9AA8B</div>
    </div>
  </div>
  <div class="header">LEGAL GUIDELINES</div>
  <div class="paragraph">
    토쿠 로고와 심볼은 토쿠의 상표입니다. 무단 사용을 금지하며, 사용 시 반드시 출처를 명시해 주시기 바랍니다.
  </div>
  <div class="paragraph">
    <button onclick={toggleToS}><i class="bi bi-chevron-right" bind:this={tosToggleIcon} /> 상표 사용 범위 및 지침 열기</button>
  </div>
  <div bind:this={tosSection} style="display: none; margin-top: 16px;">
    <div class="paragraph">토쿠 상표를 사용할 때에는 다음 지침을 준수해 주시기 바랍니다:
      <ul class="list">
        <li>토쿠의 상표는 토쿠 스튜디오의 상품이나 디자인을 활용하고 있음을 나타내는 데에 사용하는 것을 목적으로 합니다.</li>
        <li>토쿠의 상표를 나타낼 때에는 토쿠의 상표임을 나타낼 수 있는 시각 혹은 청각적인 암시를 제공해야 합니다.</li>
        <li>이 페이지에서 배포하는 토쿠의 상표는 디지털 재산에서만 활용할 수 있고, 이것을 실물화하는 것에는 추가적인 허가가 필요합니다.</li>
      </ul>
    </div>
    <div class="paragraph">
      토쿠 상표와 관련해서 다음 사항은 금지됩니다:
      <ul class="list">
        <li>토쿠 혹은 토쿠 스튜디오의 본인이거나, 본인에게 후원을 받거나, 본인에게 고용된 것처럼 보이게 하는 방식으로 사용해서는 안 됩니다.</li>
        <li>토쿠 혹은 토쿠 스튜디오와의 제휴, 후원, 보증을 암시하는 방식으로 사용해서는 안 됩니다.</li>
        <li>토쿠 혹은 토쿠 스튜디오의 명예를 훼손하거나, 오해를 불러일으키는 등의 부정적인 영향을 미치는 방식으로 사용해서는 안 됩니다.</li>
      </ul>
    </div>
  </div>
</div>

<style>
  .container {
    max-width: 900px;
    margin: auto;
  }

  .header {
    font-size: 32px;
    font-weight: bold;
    margin-top: 64px;
  }

  .paragraph {
    margin: 8px 0;
  }

  .paragraph button {
    background-color: transparent;
    border: none;
    color: #5b7531;
    cursor: pointer;
    font-size: 16px;
  }

  .paragraph-right {
    text-align: right;
    margin-top: 8px;
  }

  .paragraph-right a {
    background-color: transparent;
    border: 1px solid #5b7531;
    color: #5b7531;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s, color 0.3s;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    display: inline-block;
  }

  .paragraph-right a:hover {
    background-color: #5b7531;
    color: white;
  }

  .gallery {
    display: flex;
    gap: 24px;
    margin-top: 24px;
  }

  .gallery div {
    flex: 1;
  }

  .logo-gallery div {
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .logo-gallery div img {
    width: 120px;
    display: block;
    margin: 40px auto;
  }

  .color-swatch {
    color: rgba(255, 255, 255, 0.9);
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .color-code {
    opacity: 0.5;
    font-size: 12px;
  }

  .list {
    margin-top: 8px;
    padding-left: 30px;
  }

  .list li {
    margin-bottom: 4px;
  }
</style>
