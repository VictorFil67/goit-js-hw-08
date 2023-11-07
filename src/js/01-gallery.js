// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const gallery = document.querySelector('.gallery');

function picTemplate(pic) {
    const { preview, original, description} = pic;
  
    return `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
  }

  function picsTemplate(picsArr) {
    return picsArr.map(picTemplate).join('');
  }

  function renderPics(PicsArr) {
    const markup = picsTemplate(PicsArr);
    gallery.innerHTML = markup;;
  }
  
  renderPics(galleryItems);
console.log(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {captionSelector: 'img', captionType: 'attr', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250});
console.log(galleryItems);
