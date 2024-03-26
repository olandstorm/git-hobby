export default function printStartPage(): void {
  const mainContainer: HTMLDivElement | null = document.querySelector('#app');
  if (mainContainer) {
    mainContainer.innerHTML = '';
  }

  const logoImg: HTMLImageElement = document.createElement('img');
  logoImg.src = './img/travels_logo_color.webp';
  logoImg.classList.add('logo_img');

  mainContainer?.appendChild(logoImg);
}
