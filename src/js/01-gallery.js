import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const itemsMarkUp = createGalleryElementMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', itemsMarkUp);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryElementMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
     <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join('');
}
