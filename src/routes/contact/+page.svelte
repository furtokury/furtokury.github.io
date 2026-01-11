<script>
  import { onMount } from "svelte";
  import FadeInAnimation from "../FadeInAnimation.svelte";
  import Title from "../Title.svelte";

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
  <Title>CONTACT</Title>
  <div class="contacts">
    {#each contacts as contact}
      <FadeInAnimation>
        <div class="contact-item">
          <a href={contact.url} target="_blank" rel="noopener noreferrer">
            <img src={'/images/' + contact.icon} alt={contact.name} class="contact-icon" />
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

  .contacts {
    display: flex;
    flex-direction: row;
    gap: 24px;
    margin: auto;
    width: fit-content;
    max-width: 625px;
    margin-top: 48px;
    flex-wrap: wrap;
    justify-content: left;
  }

  .contact-item {
    width: 300px;
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

  .contact-icon {
    border-radius: 30%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
</style>
