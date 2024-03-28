import filterImagesByCategory from './filterImagesByCategory.ts';
import Images from './lib/Images.ts';
import { printImages } from './printImages.ts';

export default function printCategoryContainer(
  images: Images[],
  mainContainer: HTMLDivElement
) {
  const categoriesSet = new Set(images.map((image) => image.category));

  categoriesSet.forEach((category) => {
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category_container');
    const categoryHeader = document.createElement('h2');
    categoryHeader.innerText = category;
    categoryHeader.classList.add('category_header');

    categoryContainer.appendChild(categoryHeader);

    mainContainer.appendChild(categoryContainer);

    const imagesInCategory = filterImagesByCategory(images, category);

    printImages(categoryContainer, imagesInCategory);
  });
}
