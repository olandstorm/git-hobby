import printContactPage from './printContactPage.ts';
import printStartPage from './printStartPage.ts';
import printAboutPage from './printAboutPage.ts';

export default function addEventlistenersToNav(
  homeBtn: HTMLButtonElement,
  aboutBtn: HTMLButtonElement,
  contactBtn: HTMLButtonElement
) {
  homeBtn.addEventListener('click', () => {
    printStartPage();
  });
  aboutBtn.addEventListener('click', () => {
    printAboutPage();
  });
  contactBtn.addEventListener('click', () => {
    printContactPage();
  });
}
