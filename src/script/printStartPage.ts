import Images from './lib/Images.ts';
import imagesData from '../images.json';
import printCategoryContainer from './printCategoryContainer.ts';

const images: Images[] = imagesData.images;

export default function printStartPage(mainContainer: HTMLDivElement): void {
  mainContainer.innerHTML = '';

  const logoImg: HTMLImageElement = document.createElement('img');
  logoImg.src = './img/travels_logo_color.webp';
  logoImg.classList.add('logo_img');

  mainContainer.appendChild(logoImg);

  printCategoryContainer(images, mainContainer);
}
