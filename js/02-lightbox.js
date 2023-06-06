import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGalleryRef = document.querySelector(".gallery");
const markupItem = madeMarkupGallery(galleryItems);

// listGalleryRef.innerHTML += markupItem;
listGalleryRef.insertAdjacentHTML("beforeend", markupItem);

let lightbox = new SimpleLightbox(".gallery__item a", {
  /* options */
  captionsData: "alt",
  captionDelay: "250",
});

function madeMarkupGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            title = 'sjdhfls'
          />
        </a>
      </li>`;
    })
    .join("");
}
