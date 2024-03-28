import filterImagesByCategory from './filterImagesByCategory.ts';
import Images from './lib/Images.ts';

export default function printCategoryContainer(
  images: Images[],
  mainContainer: HTMLDivElement
) {
  const categoriesSet = new Set(images.map((image) => image.category));

  categoriesSet.forEach((category) => {
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category_container');
    categoryContainer.textContent = category;
    mainContainer.append(categoryContainer);

    const imagesInCategory = filterImagesByCategory(images, category);
  });
}
