// $(function () {
//    // $(".slider").slick({
 
//    // });
 
//    $(".slider").slick({
//      centerMode: true,
//      centerPadding: "60px",
//      slidesToShow: 3,
//      arrows: true,
//      focusOnSelect: true,
//      initialSlide: 1,
//      speed: 600,
//      prevArrow: "<button class='btn__prev'><img src='./images/reviews/arrow-prev.svg'></button>",
//      nextArrow: '<button class="btn__next"><img src="./images/reviews/arrow-next.svg"></button>',
//      responsive: [
//        {
//          breakpoint: 768,
//          settings: {
//            arrows: false,
//            centerMode: true,
//            centerPadding: "40px",
//            slidesToShow: 3,
//          },
//        },
//        {
//          breakpoint: 480,
//          settings: {
//            arrows: false,
//            centerMode: true,
//            centerPadding: "40px",
//            slidesToShow: 1,
//          },
//        },
//      ],
//     });
//  }).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
//    $(this)
//      .find('.slick-slide[data-slick-index="' + nextSlide + '"]')
//      .addClass("blur");
//    $(this)
//      .find('.slick-slide[data-slick-index="' + currentSlide + '"]')
//      .removeClass("removeBlur");
//  });


// const swiper = new Swiper('.swiper', {
//    // Default parameters
//    spaceBetween: 30,
//    slidesPerView: 3,
//    centeredSlides: true,
//   //  roundLengths: true,
//   //  loop: true,
//   //  loopAdditionalSlides: 30,
//    pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     clickable:true,
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
//    // Responsive breakpoints
//   //  breakpoints: {
//   //    // when window width is >= 320px
//   //    320: {
//   //      slidesPerView: 2,
//   //      spaceBetween: 20
//   //    },
//   //    // when window width is >= 480px
//   //    480: {
//   //      slidesPerView: 3,
//   //      spaceBetween: 30
//   //    },
//   //    // when window width is >= 640px
//   //    640: {
//   //      slidesPerView: 4,
//   //      spaceBetween: 40
//   //    }
//   //  }
//  })

// $(document).ready(function() {
//   // Assign some jquery elements we'll need
//   var $swiper = $(".swiper");
//   var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
//   // into a fixed position for animation purposes
//   var $bottomSlideContent = null; // Slide content that gets passed between the
//   // panning slide stack and the position 'behind'
//   // the stack, needed for correct animation style

  const mySwiper = new Swiper(".swiper", {
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
// });
