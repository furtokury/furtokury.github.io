<script>
  import { onMount } from "svelte";
  import FadeInAnimation from "../../FadeInAnimation.svelte";

  let meetings = $state([]);

  onMount(() => {
    fetch("/meetings.json")
      .then((response) => response.json())
      .then((data) => {
        for (let year of data) {
          for (let i = 0; i < year.items.length; i++) {
            year.items[i].members?.sort();
          }
        }

        meetings = data;
      });
  });
</script>

<svelte:head>
  <meta property="og:title" content="Meetings" />
</svelte:head>

<div class="title">MEETINGS</div>
<div class="container">
  {#each meetings as year}
    <FadeInAnimation>
      <div class="timestamp">{year.year}</div>
    </FadeInAnimation>
    <ul>
      {#each year.items as item}
        <li class="meeting-item">
          <FadeInAnimation>
            {item.date}: <strong>{item.title}</strong> ({item.place}){@html item.members ? '<br>' : ''}
            {#each item.members as member}
              {member}{item.members.indexOf(member) !== item.members.length - 1 ? ', ' : ''}
            {/each}
          </FadeInAnimation>
        </li>
      {/each}
    </ul>
  {/each}
</div>

<style>
  .title {
    font-size: 64px;
    font-weight: 900;
    margin-top: 96px;
    margin-bottom: 40px;
    text-shadow: 0 2px 0 #A9B58C;
    text-align: center;
  }

  .container {
    max-width: 900px;
    margin: auto;
    padding: 0 20px;
  }

  .timestamp {
    font-size: 24px;
    font-weight: 700;
    margin-top: 64px;
    margin-bottom: 24px;
    color: #5b7531;
    text-shadow: 0 1px 0 #a9b58c;
  }

  .meeting-item {
    margin-bottom: 16px;
    line-height: 1.5;
  }
</style>
