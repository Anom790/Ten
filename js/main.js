
 var swiper = new Swiper(".mySwiper", {

	loopedSlides: 1,
	slidesPerView: 5,
	centeredSlides: false,
	loop: true,


	navigation: {
		nextEl: '.s-button-next',
		prevEl: '.s-button-prev',
	},


	
	breakpoints: {
			// when window width is >= 320px
			310: {
				loop: true,
			  slidesPerView: 1,
			  

			},
			// when window width is >= 480px
			480: {
				loop: true,
			  slidesPerView: 2,

			},
			// when window width is >= 640px
			700: {
				loop: true,
			  slidesPerView: 3,
			  spaceBetween: 20
			},


			970: {
				loop: true,
				slidesPerView: 4,
				spaceBetween: 20
			 },


			 1100: {
				loop: true,
				slidesPerView: 5,
				spaceBetween: 20
			 }




		}
 });



 const btn = document.querySelector('.menu-btn');
 const nav = document.querySelector('.nav');

 btn.addEventListener('click', ()=>{
		nav.classList.toggle('menu-open');
 });






