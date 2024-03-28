export default function printFooter() {
  const footerContainer: HTMLHeadElement = document.createElement('footer');
  footerContainer.classList.add('footer');

  const iconImg: HTMLImageElement = document.createElement('img');
  iconImg.src = './img/travels_icon_color.webp';
  iconImg.classList.add('icon_footer_img');

  const footerText: HTMLElement = document.createElement('p');

  const copyrightText: HTMLElement = document.createElement('span');
  copyrightText.classList.add('copyright_text');
  copyrightText.innerText = '&copy; Oskar Landström 2024';

  footerText.appendChild(copyrightText);

  footerContainer.append(footerText, iconImg);

  document.body.appendChild(footerContainer);
}
