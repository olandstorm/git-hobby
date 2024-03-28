import Images from './lib/Images.ts';

export function printImages(container: HTMLDivElement, images: Images[]) {
  images.forEach((image) => {
    const imgElement = document.createElement('img');
    imgElement.src = image.url;
    imgElement.alt = image.alt;
    container.appendChild(imgElement);
  });
}
