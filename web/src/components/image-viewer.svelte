<script context="module">
  import { urlFor } from "../../utilities/urlForImage-client";
</script>

<script>
  import { swipeable } from "@react2svelte/swipeable";
  export let images;
  export let project;
  export let nextProject;
  export let keyword;
  const keywordPlural = keyword + "s";

  let imageIndex = 0;

  const nextImage = () => {
    if (imageIndex < images.length - 1) {
      imageIndex++;
    } else {
      imageIndex = 0;
    }
  };

  const previousImage = () => {
    if (imageIndex > 0) {
      imageIndex--;
    } else {
      imageIndex = images.length - 1;
    }
  };

  const onSwipe = (event) => {
    const direction = event.detail.dir;
    if (direction === "Left") {
      nextImage();
    } else if (direction === "Right") {
      previousImage();
    }
  };

  const goToNextProject = () => {
    window.location.href = nextProject.slug.current;
  };

  const openModal = () => {
    const modalBackground = document.querySelector(".popup__background");
    const modal = document.querySelector(".popup");
    modal.classList.remove("hide");
    modalBackground.classList.remove("hide");
    const popupBtn = document.querySelector(".popup__btn");
    const background = document.querySelector(".popup__background");
    popupBtn.addEventListener("click", closeModal);
    background.addEventListener("click", closeModal);
  };

  const closeModal = () => {
    const modalBackground = document.querySelector(".popup__background");
    const modal = document.querySelector(".popup");
    modal.classList.add("hide");
    modalBackground.classList.add("hide");
  };
</script>

<div class="image-container" use:swipeable on:swiped={onSwipe}>
  {#key imageIndex}
    <button class="image-modal-button" on:click={openModal}>
      <img
        class="image"
        src={urlFor(images[imageIndex]).width(1200).url()}
        alt={images[imageIndex].alt}
      />
    </button>
  {/key}
  <div class="info">
    <div class="credits">
      {#if images.length > 1}
        <button class="next-image" on:click={previousImage}
          ><p>previous image</p></button
        >
      {/if}
      <p class="image-credits">{images[imageIndex].credits ?? ""}</p>
    </div>
    <div class="details">
      {#if images.length > 1}
        <button class="next-image" on:click={nextImage}
          ><p>next image</p></button
        >
      {/if}
      <button class="next-image" on:click={goToNextProject}
        ><p>next {keyword}</p></button
      >

      <p class="project-title">{project.title}</p>
      <p>{project.description ?? ""}</p>
    </div>
  </div>
  <a class="projects-link" href="/{keywordPlural}"><h4>{keywordPlural}</h4></a>
</div>

<div class="popup__background hide">&nbsp;</div>
<div class="popup hide">
  <span class="popup__btn">&nbsp;</span>
  <img src={urlFor(images[imageIndex]).url()} alt={images[imageIndex].alt} />
  <p class="image-credits">{images[imageIndex].credits ?? ""}</p>
</div>

<style lang="scss">
  .image-modal-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    width: 100%;
  }
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
    height: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-block: 4rem;
    margin-inline: 6rem;
    max-width: 1200px;

    @media (min-width: 1800px) {
      height: 65rem;
    }

    @media (max-width: 800px) {
      margin-inline: 1rem;
    }
  }

  .image {
    max-height: 50rem;
  }

  .info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-basis: 100%;
    width: 100%;
  }

  .credits {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

  .hide {
    display: none;
  }

  .popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    z-index: 8000;

    img {
      max-width: 80vw;
      max-height: 80vh;
    }

    &__btn {
      right: -15px;
      top: -15px;
      position: absolute;
      cursor: pointer;

      &::before,
      &::after {
        position: absolute;
        right: 15px;
        content: " ";
        height: 2px;
        width: 33px;
        background-color: #333;
        margin-left: -2.5rem;
      }

      &::before {
        transform: rotate(135deg);
      }
      &::after {
        transform: rotate(-135deg);
      }
    }

    &__background {
      background-color: rgba(220, 220, 220, 0.8);
      height: 100vh;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      transition: all 0.3s;

      @supports (-webkit-backdrop-filter: blur(1rem)) or
        (backdrop-filter: blur(1rem)) {
        -webkit-backdrop-filter: blur(1rem);
        backdrop-filter: blur(1rem);
        background-color: rgba(220, 220, 220, 0.3);
      }
    }
  }
</style>
