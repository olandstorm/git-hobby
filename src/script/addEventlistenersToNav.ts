import printStartPage from './printStartPage.ts';

export default function addEventlistenersToNav(
  homeBtn: HTMLButtonElement,
  aboutBtn: HTMLButtonElement,
  contactBtn: HTMLButtonElement
) {
  homeBtn.addEventListener('click', () => {
    printStartPage();
  });
  aboutBtn.addEventListener('click', () => {
    // Add logics to click here
  });
  contactBtn.addEventListener('click', () => {
    // Add logics to click here
  });
}
