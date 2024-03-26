import printNav from './printNav.ts';

export default function printStartPage(): void {
  printNav();
  const mainContainer: HTMLDivElement | null = document.querySelector('#app');

  const logoImg: HTMLImageElement = document.createElement('img');
  logoImg.src = './img/travels_logo_color.webp';
  logoImg.classList.add('logo_img');

  mainContainer?.appendChild(logoImg);
}
