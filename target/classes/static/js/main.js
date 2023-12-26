 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
 });

jQuery(document).ready(function($) {

	"use strict";

	
	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	

	var siteCarousel = function () {
		// if ( $('.nonloop-block-13').length > 0 ) {
		// 	$('.nonloop-block-13').owlCarousel({
		//     center: false,
		//     items: 1,
		//     loop: true,
		// 		stagePadding: 0,
		//     margin: 20,
		//     smartSpeed: 1000,
		//     autoplay: true,
		//     nav: true,
		//     responsive:{
	    //     600:{
	    //     	margin: 20,
	    //     	nav: true,
	    //       items: 2
	    //     },
	    //     1000:{
	    //     	margin: 20,
	    //     	stagePadding: 0,
	    //     	nav: true,
	    //       items: 2
	    //     }
		//     }
		// 	});
		// 	$('.custom-next').click(function(e) {
		// 		e.preventDefault();
		// 		$('.nonloop-block-13').trigger('next.owl.carousel');
		// 	})
		// 	$('.custom-prev').click(function(e) {
		// 		e.preventDefault();
		// 		$('.nonloop-block-13').trigger('prev.owl.carousel');
		// 	})
		// }

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1500,
	    autoplay: true,
	    pauseOnHover: false,
	    dots: true,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });

	  if ( $('.owl-all').length > 0 ) {
			$('.owl-all').owlCarousel({
		    center: false,
		    items: 1,
		    loop: false,
				stagePadding: 0,
		    margin: 0,
		    autoplay: false,
		    nav: false,
		    dots: true,
		    touchDrag: true,
  			mouseDrag: true,
  			smartSpeed: 1000,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        768:{
	        	margin: 30,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	          items: 1
	        },
	        992:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	        	touchDrag: false,
  					mouseDrag: false,
	          items: 3
	        },
	        1200:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	        	touchDrag: false,
  					mouseDrag: false,
	          items: 3
	        }
		    }
			});
		}
		
	};
	siteCarousel();

	

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	// siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');

   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top - 50
      }, 600, 'easeInOutExpo', function() {
        // window.location.hash = hash;

      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();


	var counter = function() {
			
			$('#about-section').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

					var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
					$('.number > span').each(function(){
						var $this = $(this),
							num = $this.data('number');
						$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
						);
					});
					
				}

			} , { offset: '95%' } );

		}
		counter();



});
$(document).ready(function() {
    $('.js-example-basic-single').select2({
		minimumResultsForSearch: -1
	});

	const addSaloonBtn = document.querySelector('#addSaloonBtn');
	const addCarBtn = document.querySelector('#addCarBtn');
	const getOrderBtn = document.querySelector('#request-btn');
	const authBtn = document.querySelector('#signinBtn');

	const saloonCountryInp = document.querySelector('#saloonCountryInp');
	const saloonCityInp = document.querySelector('#saloonCityInp');
	const saloonAddressInp = document.querySelector('#saloonAddressInp');
	const saloonPhoneInp = document.querySelector('#saloonPhoneInp');

	const carCategoryInp = document.querySelector('#carCategoryInp');
	const carBrandInp = document.querySelector('#carBrandInp');
	const carModelInp = document.querySelector('#carModelInp');
	const carYearInp = document.querySelector('#carYearInp');
	const carAvailableInp = document.querySelector('#carAvailableInp');
	const carPriceInp = document.querySelector('#carPriceInp');

	const daysCount = document.querySelector('#daysCountInput');
	const productPage = document.querySelector('.request__wrapper');

	const accountCatalog = document.querySelector('.account__catalog');
	const accountOrdersContainer = document.querySelector('.account__orders-procesed');
	const accountCompletedOrdersContainer = document.querySelector('.account__orders-completed');
	const profileBtn = document.querySelector('#profileBtn');
	const exitBtn = document.querySelector('#exit');

	const fioInput = document.querySelector('#FioInput');
	const emailInput = document.querySelector('#EmailInput');
	const phoneInput = document.querySelector('#PhoneInput');
	const passportInput = document.querySelector('#PassportInput');

	const orderPage = document.querySelector('.order__body');
	const saloonsSelect = document.querySelector('#saloonSelect');

	const signupBtn = document.querySelector('#signupBtn');
	const signupFioInput = document.querySelector('#signupFioInput');
	const signupEmailInput = document.querySelector('#signupEmailInput');
	const signupPhoneInput = document.querySelector('#signupPhoneInput');
	const signupPassportInput = document.querySelector('#signupPassportInput');
	const signupPasswordInput = document.querySelector('#signupPasswordInput');

	const saloonModal = document.querySelector('.saloon__modal');

	// const saloonsSelect

	if(signupBtn){
		signupBtn.addEventListener('click', e => {
			e.preventDefault();

			signup(signupFioInput.value, signupEmailInput.value, signupPhoneInput.value, signupPassportInput.value, signupPasswordInput.value)
		})
	}

	if(localStorage.getItem('userRole')){
		localStorage.getItem('userRole') === 'ROLE_ADMIN' ?
			profileBtn.href = 'admin.html' :
			profileBtn.href = 'profile.html'
	}

	if(orderPage){
		const orderModel = orderPage.querySelector('#orderModel');
		const orderDate = orderPage.querySelector('#orderDate');
		const orderDays = orderPage.querySelector('#orderDays');
		const orderPrice = orderPage.querySelector('#orderPrice');
		const orderBtn = document.querySelector('.order__btn');
		const orderId = orderPage.querySelector('.order__title');

		let url = `/order/${localStorage.getItem('userId')}`

		if(localStorage.getItem('userRole') === 'ROLE_ADMIN') url = '/order'

		orderBtn.addEventListener('click', e => {
			e.preventDefault();

			window.location = "/index.html"
		})

		$.ajax({
			url: url,
			type: 'get',

			beforeSend: function (xhr) {
				xhr.setRequestHeader ("Authorization", "Basic " + btoa(`${localStorage.getItem('userLogin')}` + ":" + `${localStorage.getItem('userPass')}`));
			},

			success: function (res) {
				for (let i = 0; i < res.data.length; i++) {
					console.log(res.data[i])
					if(res.data[i].id === Number(window.location.search.split('&')[0].replace('?', ''))){
						console.log(res.data[i])

						orderModel.textContent = res.data[i].car.brand;
						orderDate.textContent = res.data[i].localDate;
						orderDays.textContent = res.data[i].countDays;
						orderPrice.textContent = res.data[i].sum + ' руб.';
						orderId.textContent = 'Заказ №' + String(res.data[i].id);
					}
				}
			}
		});
	}

	if(fioInput){
		fioInput.value = localStorage.getItem('userFIO');
		emailInput.value = localStorage.getItem('userLogin');
		phoneInput.value = localStorage.getItem('userPhone');
		passportInput.value = localStorage.getItem('userPassport');
	}

	if(productPage){
		(function(){
			const productPrice = productPage.querySelector('#productPrice');
			const productCategory = productPage.querySelector('#productCategory');
			const productBrand = productPage.querySelector('#productBrand');
			const productModel = productPage.querySelector('#productModel');
			const productYear = productPage.querySelector('#productYear');
			const productAvailable = productPage.querySelector('#productAvailable');
			const productSaloon = productPage.querySelector('#productSaloon');

			$.ajax({
				url: `/car/category/${window.location.search.split('&')[1]}`,
				type: 'get',

				// beforeSend: function (xhr) {
				// 	xhr.setRequestHeader ("Authorization", "Basic " + btoa('hren@mail.ru' + ":" + '123'));
				// },

				beforeSend: function (xhr) {
					xhr.setRequestHeader ("Authorization", "Basic " + btoa(`${localStorage.getItem('userLogin')}` + ":" + `${localStorage.getItem('userPass')}`));
				},

				success: function (res) {
					for (let i = 0; i < res.length; i++) {
						if(Number(res[i].id) === Number(window.location.search.split('&')[0].replace('?', ''))){
							let available = res[i].carPlace.id ? "Доступно" : "Недоступно";

							productPrice.textContent = res[i].price + 'руб. / день';
							productCategory.textContent = res[i].category;
							productBrand.textContent = res[i].brand;
							productModel.textContent = res[i].model;
							productYear.textContent = res[i].year;
							productAvailable.textContent = available;
							productSaloon.textContent = res[i].carPlace.address;
						}
					}
				}
			});
		}());
	}

	if(exitBtn){
		exitBtn.addEventListener('click', e => {
			localStorage.clear();
			window.location = "/index.html"
		})
	}

	if(authBtn){
		const loginInput = document.querySelector('#loginInput');
		const passwordInput = document.querySelector('#passwordInput');

		authBtn.addEventListener('click', e => {
			e.preventDefault();

			signin(loginInput.value, passwordInput.value);
			getUsers()
		})
	}

	if(addSaloonBtn){
		addSaloonBtn.addEventListener('click', e => {
			e.preventDefault();

			addSaloon(saloonCountryInp.value, saloonCityInp.value, saloonAddressInp.value, saloonPhoneInp.value);
		})
	}

	if(saloonsSelect){
		getSaloons();

		if(document.querySelector('.main-page')){
			saloonsSelect.addEventListener('change', e => {
				getCars('saloon');
			})
		}

	}

	if(addCarBtn){

		addCarBtn.addEventListener('click', e => {
			e.preventDefault();

			addCar(carCategoryInp.value, carBrandInp.value, carModelInp.value, carYearInp.value, carAvailableInp.value, carPriceInp.value);
		})
	}

	if(getOrderBtn){
		getOrderBtn.addEventListener('click', e => {
			e.preventDefault();

			addOrder(daysCount.value)
		})
	}

	if(accountCatalog){
		getCars('');
	}

	if(accountOrdersContainer){
		getOrders();
	}

	function addSaloon(country, city, address, phone){
		let data = {
			"country" : country,
			"city" : city,
			"address" :address,
			"phone" : phone,
		};

		if(country != '' && city != '' && address != '' && phone != ''){
			$.ajax({
				url: '/carplace',
				type: 'post',
				contentType: "application/json",
				data: JSON.stringify(data),

				// beforeSend: function (xhr) {
				// 	xhr.setRequestHeader ("Authorization", "Basic " + btoa('hren@mail.ru' + ":" + '123'));
				// },
				
				success: function () {
					alert("Салон успешно Добавлен");
				}
			});
		}

		else{
			alert('Все поля обязательны для заполнения');
		}
	}

	function addCar(category, brand, model, year, available, price){
		if(category != '' && brand != '' && model != '' && year != '' && available != '' && price != ''){
			let data = {
				"category" : category,
				"brand" : brand,
				"model" :model,
				"year" : year,
				"available" : false,
				"price" : price
			};
			$.ajax({
				url: `/car/${saloonsSelect.value}`,
				type: 'post',
				contentType: "application/json",
				data: JSON.stringify(data),

				// beforeSend: function (xhr) {
				// 	xhr.setRequestHeader ("Authorization", "Basic " + btoa('hren@mail.ru' + ":" + '123'));
				// },
				
				success: function () {
					alert("Машина успешно добавлена");
				}
			});
		}

		else{
			alert('Все поля обязательны для заполнения');
		}
	}

	function addOrder(daysCount){
		if(daysCount != ''){
			let data = {
				"countDays" : Number(daysCount),
			};
			$.ajax({
				url: `/order/${Number(window.location.search.split('&')[0].replace('?', ''))}`,
				type: 'post',
				contentType: "application/json",
				data: JSON.stringify(data),

				// beforeSend: function (xhr) {
				// 	xhr.setRequestHeader ("Authorization", "Basic " + btoa(`${localStorage.getItem('userLogin')}` + ":" + `${localStorage.getItem('userPass')}`));
				// },

				success: function () {
					alert("Заказ успешно создан");
				}
			});
		}

		else{
			alert('Все поля обязательны для заполнения');
		}
	}

	function getCars(filter){
		$.ajax({
			url: '/car',
			type: 'get',

			beforeSend: function (xhr) {
				xhr.setRequestHeader ("Authorization", "Basic " + btoa(`${localStorage.getItem('userLogin')}` + ":" + `${localStorage.getItem('userPass')}`));
			},
			
			success: function (res) {
				if(filter === 'saloon'){
					document.querySelector('.main-catalog').innerHTML = '<div class="nonloop-block-13 owl-carousel"></div>';
				}

				for (let i = 0; i < res.data.length; i++) {
					console.log(res.data)

					let available = res.data[i].carPlace.id ? "Доступно" : "Недоступно"
					let html = `
						<div class="item-1">
							<a href="request.html?${res.data[i].id}&${res.data[i].category}"><img src="images/img_1.jpg" alt="Image" class="img-fluid"></a>
							<div class="item-1-contents">
							<div class="text-center">
							<h3><a href="request.html?${res.data[i].id}&${res.data[i].category}">${res.data[i].brand}</a></h3>
							<div class="rating">
								<span class="icon-star text-warning"></span>
								<span class="icon-star text-warning"></span>
								<span class="icon-star text-warning"></span>
								<span class="icon-star text-warning"></span>
								<span class="icon-star text-warning"></span>
							</div>
							<div class="rent-price"><span>${res.data[i].price} Руб. /</span>день</div>
							</div>
							<ul class="specs">
								<li>
								<span>Категория</span>
								<span class="spec">${res.data[i].category}</span>
								</li>
								<li>
								<span>Бренд</span>
								<span class="spec">${res.data[i].brand}</span>
								</li>
								<li>
								<span>Модель</span>
								<span class="spec">${res.data[i].model}</span>
								</li>
								<li>
								<span>Год</span>
								<span class="spec">${res.data[i].year}</span>
								</li>
								<li>
								<span>В наличии</span>
								<span class="spec">${available}</span>
								</li>
								<li>
								<span>Салон</span>
								<span data-saloon="${res.data[i].carPlace.id}" class="spec saloon-info">${res.data[i].carPlace.address}</span>
								</li>
								<li>
								<span>Цена/день</span>
								<span class="spec">${res.data[i].price} Руб.</span>
								</li>
							</ul>
							<div class="d-flex action">
								<a href="request.html?${res.data[i].id}&${res.data[i].category}" class="btn btn-primary ${!available ? '_blocked' : ''}">Арендовать сейчас</a>
							</div>
							</div>
						</div>`

					if(filter === 'saloon'){
						if(Number(res.data[i].carPlace.id) === Number(saloonsSelect.value)) {
							document.querySelector('.nonloop-block-13').insertAdjacentHTML('beforeend', html)
						}
					}

					else{
						accountCatalog.insertAdjacentHTML('beforeend', html)
					}

					document.querySelectorAll('.saloon-info').forEach(element => {
						element.addEventListener('click', e => {
							e.preventDefault();

							if(saloonModal){

								$.ajax({
									url: '/carplace',
									type: 'get',

									beforeSend: function (xhr) {
										xhr.setRequestHeader ("Authorization", "Basic " + btoa(`${localStorage.getItem('userLogin')}` + ":" + `${localStorage.getItem('userPass')}`));
									},

									success: function (res) {
										for (let i = 0; i < res.data.length; i++){
											if(Number(element.dataset.saloon) === res.data[i].id){
												saloonModal.querySelector('#saloonCountry').textContent = `Страна: ${res.data[i].country}`;
												saloonModal.querySelector('#saloonCity').textContent = `Город: ${res.data[i].city}`;
												saloonModal.querySelector('#saloonAddress').textContent = `Адрес: ${res.data[i].address}`;
												saloonModal.querySelector('#saloonPhone').textContent = `Телефон: ${res.data[i].phone}`;
											}
										}
									}
								})

								saloonModal.classList.add('_active');

								saloonModal.querySelector('.saloon__modal-close').addEventListener('click', e => {
									e.preventDefault();

									saloonModal.classList.remove('_active');
								})

								window.addEventListener('click', e => {
									const target = e.target
									if (!target.closest('.saloon-info') && !target.closest('.saloon__modal-content')) {
										saloonModal.classList.remove('_active')
									}
								})
							}
						})
					})
				}

				// if()

				if ( $('.nonloop-block-13').length > 0 ) {
					$('.nonloop-block-13').owlCarousel({
						center: false,
						items: 1,
						loop: false,
						stagePadding: 0,
						margin: 20,
						smartSpeed: 1000,
						autoplay: false,
						nav: true,
						responsive:{
							600:{
								margin: 20,
								nav: true,
								items: 2
							},
							1000:{
								margin: 20,
								stagePadding: 0,
								nav: true,
								items: 2
							}
						}
					});
					$('.custom-next').click(function(e) {
						e.preventDefault();
						$('.nonloop-block-13').trigger('next.owl.carousel');
					})
					$('.custom-prev').click(function(e) {
						e.preventDefault();
						$('.nonloop-block-13').trigger('prev.owl.carousel');
					})
				}
			}
		});
	}

	function getOrders(){
		let url = `/order/${localStorage.getItem('userId')}`

		if(localStorage.getItem('userRole') === 'ROLE_ADMIN') url = '/order'

		$.ajax({
			url: url,
			type: 'get',

			beforeSend: function (xhr) {
				xhr.setRequestHeader ("Authorization", "Basic " + btoa(`${localStorage.getItem('userLogin')}` + ":" + `${localStorage.getItem('userPass')}`));
			},
			
			success: function (res) {
				console.log(res)
				for (let i = 0; i < res.data.length; i++) {
					const currentDate = new Date();
					currentDate.setDate(currentDate.getDate() + Number(res.data[i].countDays));
					let html = `<a href="/order.html?${res.data[i].id}&${res.data[i].user.id}" class="account__orders-item">Заказ №${res.data[i].id}</a>`

					console.log(currentDate < new Date())

					if(currentDate < new Date()){
						accountCompletedOrdersContainer.insertAdjacentHTML('beforeend', html)
					}

					else{
						accountOrdersContainer.insertAdjacentHTML('beforeend', html)
					}

				}
			}
		});
	}

	function getUsers(){
		$.ajax({
			url: '/user',
			type: 'get',
			
			success: function (res) {
				console.log(res)
			}
		});
	}

	function getSaloons(){
		$.ajax({
			url: '/carplace',
			type: 'get',

			beforeSend: function (xhr) {
				xhr.setRequestHeader ("Authorization", "Basic " + btoa(`${localStorage.getItem('userLogin')}` + ":" + `${localStorage.getItem('userPass')}`));
			},

			success: function (res) {
				if(saloonsSelect){

					for (let i = 0; i < res.data.length; i++){
						let html = `<option value="${res.data[i].id}">${res.data[i].address}</option>`;
						if(saloonsSelect) saloonsSelect.insertAdjacentHTML('beforeend', html)
					}

					if(document.querySelector('#selectedSaloon')) {
						document.querySelector('#selectedSaloon').textContent = `Предложения в салоне "${saloonsSelect.querySelector('option').textContent}"`;

						getCars('saloon')
					}
				}
			}
		});
	}

	function signin(login, password){
		$.ajax({
			url: '/carplace',
			type: 'get',

			beforeSend: function (xhr) {
				xhr.setRequestHeader ("Authorization", "Basic " + btoa(`${login}` + ":" + `${password}`));
			},

			success: function (res) {
				$.ajax({
					url: '/user',
					type: 'get',

					beforeSend: function (xhr) {
						xhr.setRequestHeader ("Authorization", "Basic " + btoa(login + ":" + password));
					},

					success: function (res) {
						// let userId = 0;
						// let userRole = '';
						// let userFIO = '';
						// let userPhone = '';
						// let userPassport = '';

						for (let i = 0; i < res.data.length; i++){
							if(res.data[i].email === login){

								localStorage.setItem('userId', res.data[i].id);
								localStorage.setItem('userLogin', login);
								localStorage.setItem('userPass', password);
								localStorage.setItem('userRole', res.data[i].roles);
								localStorage.setItem('userFIO', res.data[i].fio);
								localStorage.setItem('userPhone', res.data[i].phone);
								localStorage.setItem('userPassport', res.data[i].passport);

								res.data[i].roles === 'ROLE_USER' ? window.location = 'profile.html' : window.location = 'admin.html'
							}
						}

					},
				});
			},

				statusCode: {
					401: function(xhr) {
						alert("Неверный логин или пароль");
					}
				}
		});
	}

	function signup(fio, email, phone, passport, password){
		if(fio != '' && email != '' && phone != '' && passport != '' &&  password != ''){
			let data = {
				fio: fio,
				email: email,
				phone: phone,
				passport: passport,
				password: password,
				roles: 'ROLE_USER'
			}

			$.ajax({
				url: '/user',
				type: 'post',
				contentType: "application/json",
				data: JSON.stringify(data),

				success: function (res) {
					alert('Вы успешно зарегистрировались');
					window.location = '/auth.html'
				},

				statusCode: {
					400: function(xhr) {
						alert("Такой пользователь уже существует...");
					}
				}
			});
		}

		else{
			alert("Все поля обязательны для заполнения");
		}
	}
});