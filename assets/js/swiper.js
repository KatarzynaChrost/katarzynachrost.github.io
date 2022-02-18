import Swiper, {
  Autoplay,
  Navigation,
  Pagination
} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Autoplay, Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  spaceBetween: 25,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 900,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1300: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    970: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    450: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  }
});