export default function printStartPage(): void {
  const mainContainer = document.querySelector('#app');

  const logoImg: HTMLImageElement = document.createElement('img');
  logoImg.src = './img/travels_logo_color.webp';
  logoImg.classList.add('logo_img');

  mainContainer?.appendChild(logoImg);
}
