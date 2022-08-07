// import Swiper, {Navigation, Pagination} from './swiper'
// import './swiper/css'
// import './swiper/css/navigation'
// import './swiper/css/pagination'

const mySwiper = new Swiper(".swiper", {
  // modules: [Navigation, Pagination],
    spaceBetween: 30,
    slidesPerView: 1,
    // centeredSlides: true,
    roundLengths: true,
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      768: {
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 20
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".r-swiper-button-prev",
      clickable:true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable:true,
      dragSize:'auto',
    },
});
const swiper = new Swiper('.team__swiper', {
  // modules: [Navigation, Pagination],
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.team__swiper-scrollbar',
    draggable:true,
  },
});

const staffsSwiper = new Swiper('.staffs__swiper', {
  // modules: [Navigation, Pagination],
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  // autoplay: {
  //   delay: 1000,
  // },
  breakpoints: {
    // when window width is >= 320px
    767: {
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 20
    },
  },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  //   clickable: true,
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.team__swiper-scrollbar',
  //   draggable:true,
  // },
});
