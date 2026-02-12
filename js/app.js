 var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },

    });
    var swiper = new Swiper(".swiperFeature", {
      slidesPerView: 5,
      spaceBetween: 10,
      loop: true,
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    });
    var swiper = new Swiper(".catagorySwiper", {
      navigation: {
        nextEl: ".leftBtn",
        prevEl: ".rightBtn",
      },
      slidesPerView: 5,
      loop:true,
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      },
    });
    var swiper = new Swiper(".swiperReview", {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".dots",
        clickable: true,
      },
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
   
 // countdown jquery file starts here

   $('#cot_sale_timer').countdown('2026/04/30', function(event) {
  var $this = $(this).html(event.strftime(''
    +
    '<div class="cot_sale_timer_para"><span class="span_1">%D</span><span class="span_2">Days</span></div> ' +
    '<span class="colon_sign">:</span>'+
    '<div class="cot_sale_timer_para"><span class="span_1">%H</span><span class="span_2">Hours</span></div> ' +
    '<span class="colon_sign">:</span>'+
    '<div class="cot_sale_timer_para"><span class="span_1">%M</span><span class="span_2">Min</span></div> ' +
    '<span class="colon_sign">:</span>'+
    '<div class="cot_sale_timer_para"><span class="span_1">%S</span><span class="span_2">Sec</span></div> ' 
    
    ));
  });
  // countdown jquery file ends here
