import './styles.scss';
import 'swiper/css';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);
console.log( new Date());

var swiper = new Swiper(".header-swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".logo-swiper", {
    loop: true,
    autoplay: {
        delay: 5000,
      },
    slidesPerView: 5,
    spaceBetween: 0,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,

      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
  const hamburgerMenu = document.querySelector(".hamburger");
  const closeButton = document.querySelector(".close-button");
  const sidebar = document.querySelector('.sidebar');
  hamburgerMenu.addEventListener('click',showNav);
  closeButton.addEventListener('click',closeNav);

  function showNav(){
    sidebar.classList.remove('hidden');
  }

  function closeNav(){
    sidebar.classList.add('hidden');
  }