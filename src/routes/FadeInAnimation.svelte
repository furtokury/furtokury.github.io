<script>
  import { onMount } from 'svelte';

  export let delay = 0;        // ms
  export let once = false;     // true면 한 번만 실행
  export let offset = 20;      // px
  export let duration = 600;   // ms

  export let style = '';

  let container;
  let observer;

  onMount(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          if (once) observer.unobserve(entry.target);
        } else {
          if (!once) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = `translateY(${offset}px)`;
          }
        }
      },
      { threshold: 0 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  });
</script>

<div
  bind:this={container}
  class="fade"
  style="
    --delay: {delay}ms;
    --offset: {offset}px;
    --duration: {duration}ms;
    {style}
  "
>
  <slot />
</div>

<style>
  .fade {
    opacity: 0;
    transform: translateY(var(--offset));
    transition:
      opacity var(--duration) ease-out var(--delay),
      transform var(--duration) ease-out var(--delay);
    will-change: opacity, transform;
  }

  /* reduced motion 대응 */
  @media (prefers-reduced-motion: reduce) {
    .fade {
      transition: none;
      transform: none;
      opacity: 1;
    }
  }
</style>
