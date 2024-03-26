export default function printContactPage() {
  const mainContainer = document.querySelector('#app');
  if (mainContainer) {
    mainContainer.innerHTML = '';
  }

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact_container');

  const contactHeader = document.createElement('h2');
  contactHeader.innerText = 'Contact';
  contactHeader.classList.add('contact_header');

  const contactOptionsContainer = document.createElement('div');
  contactOptionsContainer.classList.add('contact_options_container');

  const githubLink = document.createElement('a');
  githubLink.innerText = 'Github';
  githubLink.href = 'https://github.com/olandstorm';

  const linkedinLink = document.createElement('a');
  linkedinLink.innerText = 'LinkedIn';
  linkedinLink.href = 'https://www.linkedin.com/in/oskar-landstrom/';

  contactOptionsContainer.append(githubLink, linkedinLink);

  contactContainer.append(contactHeader, contactOptionsContainer);

  mainContainer?.appendChild(contactContainer);
}
