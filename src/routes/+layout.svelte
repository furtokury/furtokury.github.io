<script lang="ts">
  import { onMount } from "svelte";

	let { children } = $props();

  let contacts = $state([]);

  onMount(() => {
    fetch("/contacts.json")
      .then((response) => response.json())
      .then((data) => {
        contacts = data;
      });
  });
</script>

<svelte:head>
  <title>TOKU</title>
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://toku.shtelo.org/" />
  <meta property="og:image" content="https://toku.shtelo.org/images/icon.svg" />
  <meta property="og:description" content="말차 족제비 토쿠 개인 웹사이트" />
  <meta property="og:site_name" content="TOKU" />
  <meta property="og:locale" content="ko_KR" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="TOKU" />
  <meta name="twitter:description" content="말차 족제비 토쿠 개인 웹사이트" />
  <meta name="twitter:image" content="https://toku.shtelo.org/images/icon.svg" />
  <meta name="keywords" content="TOKU, Toku, 말차 족제비, 개인 웹사이트, 웹사이트, 포트폴리오" />
  <meta name="author" content="furtokury" />
  <meta name="description" content="말차 족제비 토쿠 개인 웹사이트" />
  <meta name="theme-color" content="#5b7531" />
</svelte:head>

<div class="header">
  <div class="header-container">
    <div class="header-content">
      <div class="header-logo">
        <a href="/"><img src="/images/logo-beige.svg" style="height: 24px; transform: translateY(3px);"> TOKU</a>
      </div>
      <div class="header-navigation">
        <div class="header-navigation-item">
          <a href="/">홈</a>
        </div>
        <div class="header-navigation-item">
          <a href="/profile">프로필</a>
        </div>
        <div class="header-navigation-item">
          <a href="/illusts">일러스트</a>
        </div>
        <div class="header-navigation-item">
          <a href="/meetings">모임</a>
        </div>
        <div class="header-navigation-item">
          <a href="/contact">연락처</a>
        </div>
      </div>
    </div>
  </div>
  <div class="header-footer"></div>
  <div class="header-shadow"></div>
</div>
<div style="height: 64px;"></div>
{@render children()}
<div class="footer">
  <div class="footer-content">
    <div class="footer-column">
      <div class="footer-column-title">NAVIGATION</div>
      <div class="footer-column-items">
        <div><a href="/">홈</a></div>
        <div><a href="/profile">프로필</a></div>
        <div><a href="/illusts">일러스트</a></div>
        <div><a href="/meetings">모임</a></div>
        <div><a href="/contact">연락처</a></div>
      </div>
    </div>
    <div class="footer-column">
      <div class="footer-column-title">CONTACT</div>
      <div class="footer-column-items">
        {#each contacts as contact}
          <div><a href="{contact.url}" target="_blank" rel="noopener">{contact.name}</a></div>
        {/each}
      </div>
    </div>
    <div class="footer-column">
      <div class="footer-column-title">SHORTCUTS</div>
      <div class="footer-column-items">
        <div><a href="https://github.com/furtokury/furtokury.github.io">GitHub 레포지토리</a></div>
      </div>
    </div>
    <div class="footer-column">
    </div>
    <div class="footer-column footer-column-right">
      <img src="/images/logo-beige.svg" alt="TOKU Logo" width="15">
      <div class="footer-column-right-name">© 2025-{new Date().getFullYear()} TOKU.<br>All rights reserved.</div>
    </div>
  </div>
</div>

<style>
  .header {
    position: fixed;
    width: 100vw;
    z-index: 1;
  }

  .header a {
    color: #faf7ea;
    text-decoration: none;
  }

  .header a:hover {
    text-decoration: underline;
  }

  .header-container {
    background-color: #5b7531;
    padding: 0 8px;
  }

  .header-content {
    display: flex;
    gap: 100px;
    max-width: 900px;
    padding: 12px 0 0 0;
    margin: auto;
  }

  .header-logo {
    font-size: 24px;
    font-weight: 900;
  }

  .header-navigation {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  .header-footer {
    background-color: #5b7531;
    height: 20px;
    clip-path: polygon(0 0, 100% 0, 0% 100%);
  }

  .header-shadow {
    background-color: #d9aa8b;
    position: relative;
    top: -20px;
    height: 30px;
    clip-path: polygon(0 20px, 100% 0, 100% 10px, 0% 30px);
  }

  .footer {
    margin-top: 100px;
    padding: 20px;
    background-color: #5b7531;
    color: #faf7ea;
  }

  .footer a {
    color: #faf7ea;
    text-decoration: none;
  }

  .footer a:hover {
    text-decoration: underline;
  }

  .footer-content {
    max-width: 900px;
    margin: auto;
    display: flex;
    gap: 20px;
  }

  .footer-column {
    flex: 1;
  }

  .footer-column-items div {
    margin-bottom: 4px;
  }

  .footer-column-title {
    margin-bottom: 8px;
    font-size: 12px;
    color: #A9B58C;
  }

  .footer-column-right {
    text-align: right;
    font-size: 11px;
  }

  .footer-column-right-name {
    margin-top: 8px;
  }

  @media (max-width: 600px) {
    .header-logo {
      flex: 1;
      text-align: center;
    }

    .header-content {
      gap: 20px;
      flex-direction: column;
    }

    .header-navigation {
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .footer-content {
      flex-direction: column;
      gap: 40px;
    }

    .footer-column-right {
      text-align: center;
    }
  }
</style>
