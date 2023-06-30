<script context="module">
  import { urlFor } from "../../utilities/urlForImage-client";
</script>

<script>
  export let images;
  export let project;
  export let nextProject;

  let imageIndex = 0;

  const nextImage = () => {
    if (imageIndex < images.length - 1) {
      imageIndex++;
    } else {
      imageIndex = 0;
    }
  };

  const goToNextProject = () => {
    window.location.href = nextProject.slug.current;
  };

  const openModal = () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("is-active");
  };
</script>

<div class="image-container">
  {#key imageIndex}
    <img
      class="image"
      src={urlFor(images[imageIndex]).width(1200).height(800).url()}
      alt={images[0].alt}
    />
  {/key}
  <div class="info">
    <p class="image-credits">{images[imageIndex].credits ?? ""}</p>
    <div class="details">
      <button class="next-image" on:click={nextImage}><p>next image</p></button>
      <button class="next-image" on:click={goToNextProject}
        ><p>next project</p></button
      >

      <p class="project-title">{project.title}</p>
      <p>{project.description ?? ""}</p>
    </div>
  </div>
  <a class="projects-link" href="/projects"><h4>projects</h4></a>
</div>

<style lang="scss">
  .next-image {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
  }

  .image-container {
    height: 50rem;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-block: 2rem;
    margin-inline: 6rem;
    max-width: 1200px;

    @media (min-width: 1800px) {
      height: 65rem;
    }

    @media (max-width: 800px) {
      margin: auto;
    }
  }

  .image {
    height: 100%;
    object-fit: contain;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-basis: 100%;
    width: 100%;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: 800px) {
      margin-inline-end: 0.5rem;
    }
  }

  .project-title {
    margin-block-start: 1rem;
  }

  .image-credits {
    margin-block-end: auto;
  }

  p {
    text-align: end;
  }

  .projects-link {
    text-decoration: none;
    margin-block: 2rem;
    margin-inline-end: 0.5rem;
  }
</style>
