<script>
  import PerfectScrollbar from "perfect-scrollbar";
  import "perfect-scrollbar/css/perfect-scrollbar.css";
  export let projects;

  import { onMount } from "svelte";

  let scrollbar;

  onMount(() => {
    new PerfectScrollbar(scrollbar, {
      suppressScrollX: false,
      suppressScrollY: true,
    });
  });
</script>

<div class="container">
  <section class="projects" bind:this={scrollbar}>
    {#each projects as project}
      <a href={`projects/${project.slug}`}>
        <h3>{project.title}</h3>
      </a>
    {/each}
  </section>
</div>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 95svw;
    margin-inline: 3.5rem;
  }

  .projects {
    display: flex;
    gap: 1rem;
    flex-wrap: nowrap;
    min-width: 0;
    position: relative;
    width: max-content;
    max-width: 100%;
    height: 4.5rem;
    white-space: nowrap;
    text-align: center;
  }
</style>
