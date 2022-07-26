import 'swiper/css/bundle';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

var swiper = new Swiper(".header-swiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,

  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".logo-swiper", {
    loop: true,
    autoplay: {
        delay: 3000,
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