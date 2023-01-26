var menu = ['Доставка по Узбекистану', 'Международная доставка']
var mySwiper = new Swiper ('.newSwiper', {
	slidesPerView: 1,
	spaceBetween: 60,
	loop: true,
	simulateTouch: false,
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
        	renderBullet: function (index, className) {
          	return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

  })