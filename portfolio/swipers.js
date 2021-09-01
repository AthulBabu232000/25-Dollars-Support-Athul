      var swiper = new Swiper(".swiper-video", {
        
        slidesPerView: 3,
        spaceBetween: 30,
      
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      
      centeredSlides:true,
      breakpoints:{
        350:{
          slidesPerView:1,
          spaceBetween:20
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
      },
      navigation: {
        nextEl: ".video-ctrl-nxt",
        prevEl: ".video-ctrl-pre",
      },
      });
    
  
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        freeMode: true,
        centeredSlides:true,
        breakpoints: {
          350: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        },
        pagination: {
          el: "",
          clickable: true,
        },
        navigation: {
          nextEl: ".category-display-nxt",
          prevEl: ".category-display-pre",
        },
      });
    

  
      var swiperTable = new Swiper(".myTable", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    

      var swiperReview = new Swiper(".swiper-review",{
        slidesPerView: "auto",
        spaceBetween: 30,
        freeMode: true,
        centeredSlides:true,
        autoplay:true,
        breakpoints: {
          350: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
       
      })