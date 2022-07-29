import '../styles/styles.scss';

  const hamburgerMenu = document.querySelector(".hamburger");
  const closeButton = document.querySelector(".close-button");
  const sidebar = document.querySelector('.sidebar');
  hamburgerMenu.addEventListener('click',showNav);
  closeButton.addEventListener('click',closeNav);

  function showNav(){
    sidebar.classList.remove('hidden');
    closeButton.classList.remove('hidden');
  }

  function closeNav(){
    sidebar.classList.add('hidden');
    closeButton.classList.add('hidden');

  }