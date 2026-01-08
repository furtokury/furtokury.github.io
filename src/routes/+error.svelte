<script lang="ts">
  import { goto, afterNavigate } from '$app/navigation';
  import { base } from '$app/paths';

  let previousPage: string | null = base || '/';

  afterNavigate((nav) => {
    if (nav.from?.url) {
      previousPage = nav.from.url.pathname;
    }
  });

  function goBack() {
    if (previousPage) {
      goto(previousPage);
    } else {
      goto(base);
    }
  }
</script>

<div class="title">PAGE NOT FOUND</div>
<div class="description">
  페이지가 존재하지 않습니다.
</div>
<div class="description">
  <button on:click={goBack} class="back-button">뒤로 가기</button>
</div>

<style>
  .title {
    font-size: 32px;
    font-weight: 900;
    text-align: center;
    margin-top: 100px;
    color: #5b7531;
  }

  .description {
    font-size: 18px;
    text-align: center;
    margin-top: 16px;
    color: #5b7531;
  }

  .back-button {
    border: none;
    background-color: #5b7531;
    color: #faf7ea;
    padding: 8px 16px;
    margin-left: 8px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 4px;
  }
</style>
