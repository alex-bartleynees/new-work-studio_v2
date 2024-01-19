<script context="module">
  import { urlFor } from "../../utilities/urlForImage-client";
</script>

<script>
  import { onMount } from "svelte";

  export let images;
  export let project;
  export let previousProject;
  export let nextProject;
  export let firstProject;
  export let lastProject;

  let showButton = false;

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      showButton = true;
    } else {
      showButton = false;
    }
  }
</script>

<div class="container">
  {#each images as image, index}
    {#if index === 0}
      <img
        class="full-size-img first-image"
        src={urlFor(image).height(2000).url()}
        alt=""
      />
      <div class="details">
        <h4 class="text image-title">{project?.title ?? ""}</h4>
        <h4 class="text awards">{project?.awards ?? ""}</h4>
        <h4 class="text">{project?.description ?? ""}</h4>
      </div>

      <a href={nextProject.slug.current} title="Next Project">
        <span class="material-symbols-outlined arrow-next-project">
          keyboard_arrow_right
        </span>
      </a>

      <a href={lastProject.slug.current} title="Last Project">
        <span class="material-symbols-outlined arrow-next-project--last">
          keyboard_double_arrow_right
        </span>
      </a>

      <a href={previousProject.slug.current} title="Previous Project">
        <span class="material-symbols-outlined arrow-previous-project">
          keyboard_arrow_left
        </span>
      </a>

      <a href={firstProject.slug.current} title="First Project">
        <span class="material-symbols-outlined arrow-previous-project--first">
          keyboard_double_arrow_left
        </span>
      </a>
    {/if}

    {#if index === 0}
      <img
        class="full-size-img second-image"
        src={urlFor(image).url()}
        alt=""
      />
    {:else if image.orientation === "portrait"}
      <img
        class="full-size-img portrait"
        src={urlFor(image).height(2000).url()}
        alt=""
      />
    {:else}
      <img
        class="full-size-img"
        src={urlFor(image).height(2000).url()}
        alt=""
      />
    {/if}
  {/each}
</div>

{#if showButton}
  <div class="back-to-top">
    <a href="#top">
      <span tile="Return to top" class="material-symbols-outlined arrow-up">
        arrow_upward
      </span>
    </a>
  </div>
{/if}

<style lang="scss">
  .container {
    scroll-snap-type: y mandatory;
    overflow-y: hidden;
  }
  .portrait {
    object-fit: contain !important;
    object-position: left !important;

    @media screen and (max-width: 37.5em) {
      object-position: center !important;
      object-fit: cover !important;
    }
  }
  .first-image {
    position: absolute;
    top: 0;
  }
  .second-image {
    margin-top: -56px;
  }
  .full-size-img {
    width: 100svw;
    height: 100svh;
    object-fit: cover;
    scroll-snap-align: start;
  }
  .details {
    position: absolute;
    margin-inline: 3.5rem;
  }

  .arrow-next-project {
    position: absolute;
    bottom: 0;
    right: 5rem;
    z-index: 200;
    font-size: 5rem;
    color: #ffffffff;
    margin: 1rem;
    cursor: pointer;
  }

  .arrow-next-project--last {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 200;
    font-size: 5rem;
    color: #ffffffff;
    margin: 1rem;
    cursor: pointer;
  }

  .arrow-previous-project {
    position: absolute;
    bottom: 0;
    left: 5rem;
    z-index: 200;
    font-size: 5rem;
    color: #ffffffff;
    margin: 1rem;
    cursor: pointer;
  }

  .arrow-previous-project--first {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 200;
    font-size: 5rem;
    color: #ffffffff;
    margin: 1rem;
    cursor: pointer;
  }

  .text {
    position: relative;
    z-index: 200;
    margin: 1rem 0;
    max-width: 50ch;
  }

  .awards {
    white-space: pre;
  }

  .image-title {
    font-weight: bolder;
  }

  .back-to-top {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 200;
  }

  .arrow-up {
    font-size: 5rem;
    color: #ffffffff;
    margin: 1rem;
  }
</style>
