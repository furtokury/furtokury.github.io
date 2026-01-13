<script>
  import FadeInAnimation from "../FadeInAnimation.svelte";
  import { _ } from "svelte-i18n";
</script>

<svelte:head>
  <meta property="og:title" content="TOKU Profile" />
  <meta name="twitter:title" content="TOKU Profile" />
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
          <li>
            {$_("profile.name")}
            <ul>
              <li>{$_("profile.name.en")}</li>
              <li>{$_("profile.name.ja")}</li>
              <li>{$_("profile.name.cn")}</li>
            </ul>
          </li>
          <li>{$_("profile.species")}</li>
          <li>{$_("profile.gender")}</li>
          <li>{$_("profile.height")}</li>
          <li>{$_("profile.weight")}</li>
          <li>{$_("profile.personality")}</li>
          <li>{$_("profile.mbti")}</li>
          <li>{$_("profile.likes")}</li>
          <li>{$_("profile.dislikes")}</li>
        </ul>
      </div>
    </div>
  </FadeInAnimation>
  <FadeInAnimation>
    <div class="section">
      <div class="title">APPEARANCE</div>
      <div class="content">{$_("profile.appearance.paragraph1")}</div>
      <div class="content">{$_("profile.appearance.paragraph2")}</div>
    </div>
  </FadeInAnimation>
  <FadeInAnimation>
    <div class="section">
      <div class="title">PERSONALITY</div>
      <div class="content">{$_("profile.personality.paragraph1")}</div>
      <div class="content">{$_("profile.personality.paragraph2")}</div>
    </div>
  </FadeInAnimation>
  <FadeInAnimation>
    <div class="section">
      <div class="title">HOBBIES</div>
      <div class="content">{$_("profile.hobbies.paragraph1")}</div>
      <div class="content">{$_("profile.hobbies.paragraph2")}</div>
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
