import './style.scss';
import printStartPage from './script/printStartPage.ts';
import printNav from './script/printNav.ts';
import printFooter from './script/printFooter.ts';

printNav();

const mainContainer: HTMLDivElement | null = document.querySelector('#app');
if (mainContainer) {
  printStartPage(mainContainer);
}

printFooter();
