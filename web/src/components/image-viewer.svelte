<script context="module">
  import { urlFor } from "../../utilities/urlForImage-client";
</script>

<script>
  import { swipeable } from "@react2svelte/swipeable";
  import { onMount } from "svelte";
  export let images;
  export let project;
  export let nextProject;
  export let keyword;
  let isMobile = false;

  onMount(() => {
    isMobile = window && window.innerWidth <= 600;
  });

  let imageIndex = 0;

  const onSwipe = (event) => {
    const direction = event.detail.dir;
    if (direction === "Left") {
      selectImage(imageIndex + 1);
    } else if (direction === "Right") {
      selectImage(imageIndex - 1);
    }
  };

  const openModal = () => {
    if (isMobile) {
      return;
    }
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

  const selectImage = (index) => {
    if (index < 0) {
      index = images.length - 1;
    } else if (index > images.length - 1) {
      index = 0;
    }
    imageIndex = index;
    images = images.map((image, i) => {
      if (i === index) {
        return { ...image, selected: true };
      } else {
        return { ...image, selected: false };
      }
    });
  };

  selectImage(imageIndex);
</script>

{#each images as image, i (image._key)}
  <div
    class="image-container hide {image.selected ? 'active' : ''}"
    use:swipeable
    on:swiped={onSwipe}
  >
    <button class="image-modal-button" on:click={openModal}>
      <img
        class="image"
        src={urlFor(image).width(1200).url()}
        alt={image.alt}
      />
    </button>
    <div class="info">
      <div class="credits">
        {#if images.length > 1}
          <button class="next-image" on:click={() => selectImage(i - 1)}
            ><p>previous image</p></button
          >
        {/if}
      </div>
      <div class="details">
        {#if images.length > 1}
          <button class="next-image" on:click={() => selectImage(i + 1)}
            ><p>next image</p></button
          >
        {/if}
        <a class="next-image" href={nextProject.slug.current}>
          <p>next {keyword}</p></a
        >

        <p class="project-title">{project.title}</p>
        <p>{project.description ?? ""}</p>
      </div>
    </div>
  </div>
{/each}
<div class="popup__background hide">&nbsp;</div>
<div class="popup hide">
  <span class="popup__btn">&nbsp;</span>
  <img src={urlFor(images[imageIndex]).url()} alt={images[imageIndex].alt} />
</div>

<style lang="scss">
  .image-modal-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
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
    margin-block: auto;
    margin-inline: 6rem;

    @media (min-width: 1800px) {
      height: 65rem;
    }

    @media (max-width: 800px) {
      margin-inline: 1rem;
    }
  }

  .image {
    max-height: 60rem;
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
    max-width: 50ch;

    @media (max-width: 800px) {
      margin-inline-end: 0.5rem;
    }
  }

  .project-title {
    margin-block-start: 1rem;
  }

  p {
    text-align: end;
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

  .active {
    display: flex;
  }
</style>
