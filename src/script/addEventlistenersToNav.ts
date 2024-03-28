import printContactPage from './printContactPage.ts';
import printStartPage from './printStartPage.ts';
import printAboutPage from './printAboutPage.ts';

export default function addEventlistenersToNav(
  homeBtn: HTMLButtonElement,
  aboutBtn: HTMLButtonElement,
  contactBtn: HTMLButtonElement
) {
  homeBtn.addEventListener('click', () => {
    const mainContainer: HTMLDivElement | null = document.querySelector('#app');
    if (mainContainer) {
      printStartPage(mainContainer);
    }
  });
  aboutBtn.addEventListener('click', () => {
    printAboutPage();
  });
  contactBtn.addEventListener('click', () => {
    printContactPage();
  });
}
