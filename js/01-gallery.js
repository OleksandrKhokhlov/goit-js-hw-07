import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGalleryRef = document.querySelector(".gallery");
const markupItem = madeMarkupGallery(galleryItems);

// listGalleryRef.innerHTML += markupItem;
listGalleryRef.insertAdjacentHTML("beforeend", markupItem);

listGalleryRef.addEventListener("click", onGalleruItemClick);

function madeMarkupGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}

function onGalleruItemClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
  <img src="${evt.target.dataset.source}" width="800" height="600">
  `);

  instance.show();

  const closeModalOnEscape = (evt) => {
    if (evt.code === "Escape") {
      instance.close(
        document.removeEventListener("keydown", closeModalOnEscape)
      );
    }
  };

  document.addEventListener("keydown", closeModalOnEscape);
}
