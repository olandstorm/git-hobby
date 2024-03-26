export default function printNav() {
  const navContainer: HTMLHeadElement = document.createElement('header');
  navContainer.classList.add('header');

  const iconImg: HTMLImageElement = document.createElement('img');
  iconImg.src = './img/travels_icon_color.webp';
  iconImg.classList.add('icon_img');

  const nav: HTMLElement = document.createElement('nav');
  nav.classList.add('nav_container');

  const homeBtn: HTMLButtonElement = document.createElement('button');
  homeBtn.classList.add('nav_button');
  homeBtn.innerText = 'Home';

  const aboutBtn: HTMLButtonElement = document.createElement('button');
  aboutBtn.classList.add('nav_button');
  aboutBtn.innerText = 'About';

  const contactBtn: HTMLButtonElement = document.createElement('button');
  contactBtn.classList.add('nav_button');
  contactBtn.innerText = 'Contact';

  nav.append(homeBtn, aboutBtn, contactBtn);

  navContainer.append(iconImg, nav);

  document.body.prepend(navContainer);
}
