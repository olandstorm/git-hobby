import Images from './lib/Images.ts';

export function printImages(container: HTMLDivElement, images: Images[]) {
  images.forEach((image) => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img_container');

    const imgElement = document.createElement('img');
    imgElement.src = image.url;
    imgElement.alt = image.alt;
    imgElement.loading = 'lazy';
    imgElement.classList.add('gallery_img');

    imgContainer.appendChild(imgElement);
    container.appendChild(imgContainer);
  });
}
