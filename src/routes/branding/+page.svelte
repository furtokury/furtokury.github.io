<script>
  import Title from '../Title.svelte';
  import "bootstrap-icons/font/bootstrap-icons.css";
  import { _ } from "svelte-i18n";

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
  <div class="paragraph">{$_("branding.symbol.paragraph1")}</div>
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
  <div class="paragraph">{$_("branding.logo.paragraph1")}</div>
  <div class="paragraph">{$_("branding.logo.paragraph2")}</div>
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
  <div class="paragraph">{$_("branding.colors.paragraph1")}</div>
  <div class="gallery">
    <div style="background-color: #5b7531;" class="color-swatch">
      <div>{$_("branding.colors.matcha")}</div>
      <div class="color-code">#5B7531</div>
    </div>
    <div style="background-color: #faf7ea; color: rgba(0, 0, 0, 0.9)" class="color-swatch">
      <div>{$_("branding.colors.ivory")}</div>
      <div class="color-code">#FAF7EA</div>
    </div>
    <div style="background-color: #d9aa8b; color: rgba(0, 0, 0, 0.9);" class="color-swatch">
      <div>{$_("branding.colors.ocher")}</div>
      <div class="color-code">#D9AA8B</div>
    </div>
  </div>
  <div class="header">LEGAL GUIDELINES</div>
  <div class="paragraph">{$_("branding.legal.paragraph1")}</div>
  <div class="paragraph">
    <button onclick={toggleToS}><i class="bi bi-chevron-right" bind:this={tosToggleIcon} /> {$_("branding.legal.button")}</button>
  </div>
  <div bind:this={tosSection} style="display: none; margin-top: 16px;">
    {$_("branding.legal.dos.intro")}
    <div class="paragraph">
      <ul class="list">
        <li>{$_("branding.legal.dos.item1")}</li>
        <li>{$_("branding.legal.dos.item2")}</li>
        <li>{$_("branding.legal.dos.item3")}</li>
      </ul>
    </div>
    {$_("branding.legal.donts.intro")}
    <div class="paragraph">
      <ul class="list">
        <li>{$_("branding.legal.donts.item1")}</li>
        <li>{$_("branding.legal.donts.item2")}</li>
        <li>{$_("branding.legal.donts.item3")}</li>
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
