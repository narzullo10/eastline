var swiper = new Swiper(".mySwiper", {
    spaceBetween: -25,
    slidesPerView:"auto",
    loop:true,
    autoplay: {
      delay:100,
      disableOnInteraction:false,
      waitForTransition:false,
    },
    speed:1000,
   
    breakpoints: {
      240:{
       /* slidesPerView: 1.2,*/
        spaceBetween: -25,
      },
      361:{
        /*slidesPerView: 1.3,*/
        spaceBetween: -25,
      },
      414: {
      /*  slidesPerView: 1.6,*/
        spaceBetween: -20,
      },
      651: {
      /*  slidesPerView: 2.2,*/
        spaceBetween: -20,
      },
      840:{
        /*slidesPerView: 2.6,*/
        spaceBetween: -25,
      },
      1024: {
       /* slidesPerView: 3,*/
        spaceBetween: -20,
      },
      1200: {
        /*slidesPerView: 4.5,*/
        spaceBetween: -20,
      },
    },
  });

  const toggleButton = document.getElementsByClassName('menubar')[0];
  const navbarLinks = document.getElementsByClassName('mobile-menu')[0];
  
  if(toggleButton){
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('mobile-active')
      toggleButton.classList.toggle('change')
    })
  };

