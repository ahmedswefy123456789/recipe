const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click",() =>{
    // toggle mobile menu visibility 
    document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click",()=>
    menuOpenButton.click()
);


// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

  // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        
  },

  // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
  },


  //responsive breakpionts
  breakpoints: {
    0 : {
        slidePreView: 1
    },
    768 : {
        slidePreView: 2
    },
    1024 : {
        slidePreView: 3
    },
  }
});