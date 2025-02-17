// new Swiper('.reviews__block', {
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   slidesPerView: 3,
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     766: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//     1135: {
//       slidesPerView: 3,
//     },
//   },
//   spaceBetween: 15,
//   navigation: {
//     nextEl: '.reviews__arrow_right',
//     prevEl: '.reviews__arrow_left',
//   },
// });

new Swiper('.gallery__slider', {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 30,
  speed: 800,
  autoplay: {
    delay: 2000, // Задержка в миллисекундах между переключениями
    disableOnInteraction: true, // Отключение автопрокрутки при взаимодействии пользователя с галереей
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
