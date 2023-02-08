AOS.init({
    // offset: 90,
    disable: 'mobile',
    duration: 500,
  });

$(window).scroll(function () {
  var sticky = $('header'),
      scroll = $(window).scrollTop();
  if (scroll >= 50) sticky.addClass('stickyHeader');
  else sticky.removeClass('stickyHeader');
});


var swiper = new Swiper(".mySwiper", {
	  slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
 
	keyboard: true,
	breakpoints: {
		  992: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        },
});
console.log(swiper)
var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  pagination: {
          el: ".swiper-pagination",
        },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
    },
  keyboard: true,
  breakpoints: {
      1200: {
            slidesPerView: 2,
          },
          1199: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        },
});



var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  pagination: {
          el: ".swiper-pagination",
        },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
    },
  keyboard: true,
  breakpoints: {
      992: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        },
});