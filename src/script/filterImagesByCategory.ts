import Images from './lib/Images.ts';

export default function filterImagesByCategory(
  images: Images[],
  category: string
): Images[] {
  return images.filter((image) => image.category === category);
}
