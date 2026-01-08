<script>
  import { onMount } from "svelte";
  import FadeInAnimation from "../FadeInAnimation.svelte";

  let contacts = $state([]);

  onMount(() => {
    fetch("/contacts.json")
      .then((response) => response.json())
      .then((data) => {
        contacts = data;
      });
  });
</script>

<div class="container">
  <div class="title">CONTACT</div>
  <div class="contacts">
    {#each contacts as contact}
      <FadeInAnimation>
        <div class="contact-item">
          <a href={contact.url} target="_blank" rel="noopener noreferrer">
            <img src={'/images/' + contact.icon} alt={contact.name} />
            <div>
              <div>{contact.name}</div>
              <div>{contact.details}</div>
            </div>
          </a>
        </div>
      </FadeInAnimation>
    {/each}
  </div>
</div>

<style>
  .container {
    max-width: 900px;
    margin: auto;
    padding: 0 20px;
  }

  .title {
    font-size: 64px;
    font-weight: 900;
    margin-top: 96px;
    text-shadow: 0 2px 0 #A9B58C;
    text-align: center;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: auto;
    width: fit-content;
    margin-top: 48px;
  }

  .contact-item a {
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    color: inherit;
  }

  .contact-item img {
    width: 64px;
    height: 64px;
  }

  .contact-item div div:first-child {
    font-size: 20px;
    font-weight: 700;
  }
</style>
