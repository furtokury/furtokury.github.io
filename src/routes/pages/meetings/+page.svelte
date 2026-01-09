<script>
  import { onMount } from "svelte";
  import FadeInAnimation from "../../FadeInAnimation.svelte";

  let meetingsData = $state([]);
  let friendInfo = {};

  function getFriendByName(name) {
    if (!name) return;

    for (const friend of meetingsData.friends) {
      if (friend.name === name) {
        return friend;
      }
    }
  }

  onMount(() => {
    fetch("/meetings.json")
      .then((response) => response.json())
      .then((data) => {
        meetingsData = data;

        for (const year of data.meetings) {
          for (let i = 0; i < year.items.length; i++) {
            year.items[i].members?.sort();

            if (year.items[i].members) {
              for (const member of year.items[i].members) {
                const name = member.includes('(') ? member.split(' (')[0] : member;
                const nickname = member.includes('(') ? member.split(' (')[1].slice(0, -1) : null;

                const friend = getFriendByName(nickname) || getFriendByName(name);
                if (!friend) continue;

                friendInfo[member] = {
                  src: `https://unavatar.io/twitter/${friend.twitter}`,
                  href: `https://twitter.com/${friend.twitter}`,
                };
              }
            }
          }
        }
      });
  });
</script>

<svelte:head>
  <meta property="og:title" content="Meetings" />
</svelte:head>

<div class="title">MEETINGS</div>
<div class="container">
  {#each meetingsData.meetings as year}
    <FadeInAnimation>
      <div class="timestamp">{year.year}</div>
    </FadeInAnimation>
    <ul>
      {#each year.items as item}
        <li class="meeting-item">
          <FadeInAnimation>
            {item.date}: <strong>{item.title}</strong> ({item.place}){@html item.members ? '<br>' : ''}
            {#each item.members as member}
              <span class="member">
                {#if friendInfo[member] !== undefined}
                  <a href={friendInfo[member].href} target="_blank"><img src={friendInfo[member].src} alt={member} title={member} class="profile-picture"></a>
                {/if}
                {member}{item.members.indexOf(member) !== item.members.length - 1 ? ', ' : ''}
              </span>
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

  .profile-picture {
    height: 16px;
    width: 16px;
    object-fit: cover;
    border: 1px solid #5b7531;
    border-radius: 50%;
    vertical-align: middle;
    transform: translateY(-2px);
  }
</style>
