export default function printAboutPage() {
  const mainContainer = document.querySelector('#app');
  if (mainContainer) {
    mainContainer.innerHTML = '';
  }

  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about_container');

  const aboutHeader = document.createElement('h2');
  aboutHeader.classList.add('about_header');
  aboutHeader.innerText = 'About';

  const aboutText = document.createElement('p');
  aboutText.classList.add('about_text');
  aboutText.innerText = `Embark on an exhilarating journey through the world of travel with an avid enthusiast eager to share insights and experiences from across the globe. With a profound appreciation for the beauty of cultural diversity and an insatiable thirst for knowledge, I set forth on adventures that provide a unique lens into the human experience. Through my explorations, I strive to break down barriers, cultivate empathy, and inspire others to embrace the wonders of our planet with curiosity and compassion. 
    Join me as I traverse the landscapes of distant lands, uncovering hidden gems and forging connections with people from all walks of life. Whether navigating bustling city streets, meandering through tranquil countryside, or immersing myself in the rhythms of local communities, each journey brings new discoveries and enriching encounters. 
    As we embark on this voyage together, I invite you to join me in navigating the intricacies of global travel. Together, we'll uncover practical tips, engage in thoughtful reflections, and share inspiring stories that illuminate the transformative power of exploration. Let's embark on this transformative journey of discovery and enlightenment, united in our shared love for adventure and discovery.`;

  aboutContainer.append(aboutHeader, aboutText);

  mainContainer?.appendChild(aboutContainer);
}
