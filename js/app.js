$(document).ready(function() {
	const carouselCardsOnBody = [
		{
			holster: 'chest',
			holsterClass: 'chest',
			class: 'active',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.',
			btnLabel: 'Shop Chest',
			btnLink: '',
			isOnBody: true
		},
		{
			holster: 'shoulder',
			holsterClass: 'shoulder',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.',
			btnLabel: 'Shop Shoulder',
			btnLink: '',
			isOnBody: true
		},
		{
			holster: 'belly',
			holsterClass: 'belly',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.',
			btnLabel: 'Shop Belly',
			btnLink: '',
			isOnBody: true
		},
		{
			holster: 'appendix',
			holsterClass: 'appendix',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.',
			btnLabel: 'Shop Appendix',
			btnLink: '',
			isOnBody: true
		},
		{
			holster: 'pocket',
			holsterClass: 'pocket',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.',
			btnLabel: 'Shop Pocket',
			btnLink: '',
			isOnBody: true
		},
		{
			holster: 'ankle',
			holsterClass: 'ankle',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.',
			btnLabel: 'Shop Ankle',
			btnLink: '',
			isOnBody: true
		},
		{
			holster: 'outside the Waistband',
			holsterClass: 'owb',
			text: 'OWB',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.',
			btnLabel: 'Shop Outside the Wasitband',
			btnLink: '',
			isOnBody: true
		},
		{
			holster: 'Inside the Waistband',
			holsterClass: 'iwb',
			text: 'IWB',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.',
			btnLabel: 'Shop Inside the Waistband',
			btnLink: '',
			isOnBody: true
		},
		{
			holster: 'drop-leg',
			holsterClass: 'drop-leg',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.',
			btnLabel: 'Shop Drop-Leg',
			btnLink: '',
			isOnBody: true
		}
	];

	const carouselCardsOffBody = [
		{
			holster: 'Home Holsters',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.',
			btnLabel: 'Shop Home Holsters',
			btnLink: ''
		},
		{
			holster: 'Vehicle Holsters',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.',
			btnLabel: 'Shop Vehicle Holsters',
			btnLink: ''
		},
		{
			holster: 'Backpack Holsters',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.',
			btnLabel: 'Shop Backpack Holsters',
			btnLink: ''
		},
		{
			holster: 'Accessories',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.',
			btnLabel: 'Shop Accessories',
			btnLink: ''
		},
	];

	let width;
	let currentLayout;
	let contentParent = document.getElementById('content');

	width = $(window).width();

	if(width <= 967) {
		currentLayout = 'mobile';
	}
	else if(width >= 968) {
		currentLayout = 'desktop';
	}
	locationUpdate(true, width);

	// Event listeners
	$('body').on('click', (el) => {
		let elTarget = el.target;
		let elTargetClass = el.target.getAttribute('class');
		let current = elTarget.parentElement.parentElement;

		console.log('Element Clicked = ', elTarget);
		console.log('Element Clicked Class = ', elTargetClass);
		console.log('Element Clicked Current = ', current);

		if(elTargetClass) {
			if(elTargetClass.includes('nav-link on-body-tab')) {
				toggleActiveTab(0);
			}
			else if(elTargetClass.includes('nav-link off-body-tab')) {
				toggleActiveTab(1);
			}

			onSectionClick(elTargetClass);

			if(elTargetClass.includes('change-holster'))
				$('#onBodyCarousel').carousel(0);
		}
	});
	$(window).resize(function() {
		width = $(window).width();

		if(width <= 967 && currentLayout != 'mobile') {
			currentLayout = 'mobile';
			locationUpdate(false, width);
		}
		if(width >= 968 && currentLayout != 'desktop') {
			currentLayout = 'desktop';
			locationUpdate(false, width);
		}
	});
		
	// funcs
	function locationUpdate(isOnLoad, width) {
		if(width <= 967) {
			if((isOnLoad && currentLayout == 'mobile' || !isOnLoad && currentLayout == 'mobile')) {
				console.log('Switching to mobile =>');
				currentLayout = 'mobile';
				removeAllChildNodes(contentParent);
				updatePageView(currentLayout);
				$('#onBodyCarousel').on('slide.bs.carousel', function (e) {
					enableSlideControls(e.to);
				});
			}
		}

		if(width >= 968) {
			if((isOnLoad && currentLayout == 'desktop' || !isOnLoad && currentLayout == 'desktop')) {
				console.log('Switching to desktop =>');
				currentLayout = 'desktop';
				removeAllChildNodes(contentParent);
				updatePageView(currentLayout);
			}
		}
	}
	function updatePageView(currentLayout) {
		let pageContent;

		if(currentLayout == 'mobile') {
			pageContent = `<ul class="nav nav-tabs">
												<li class="nav-item">
													<a class="nav-link on-body-tab" href="#">On-Body Carry</a>
												</li>
												<li class="nav-item">
													<a class="nav-link off-body-tab" href="#">Off-Body Carry</a>
												</li>
											</ul>
											<div class="mobile-content">
												<div class="content content_1 active mobile">
												<div id="onBodyCarousel" class="carousel slide" data-touch="false" data-interval="false">
													<div class="carousel-inner">
														<div class="carousel-item active">
															<div class="on-body">
																<img src="img/on-body.png" alt="">
																<div class="clickable-area">
																	${addClickableAreas(carouselCardsOnBody)}
																</div>
															</div>
														</div>
														${addHolsterCards(carouselCardsOnBody)}
													</div>
													<div class="on-body-controls inactive">
														<a class="carousel-control-prev" href="#onBodyCarousel" role="button" data-slide="prev">
															<i class="fa fa-chevron-left" aria-hidden="true"></i>
															<span class="sr-only">Previous</span>
														</a>
														<a class="carousel-control-next" href="#onBodyCarousel" role="button" data-slide="next">
															<i class="fa fa-chevron-right" aria-hidden="true"></i>
															<span class="sr-only">Next</span>
														</a>
													</div>
												</div>
											</div>
											<div class="content content_2">
												<div class="off-body-container">
													<div class="icon-container home-carry">
														<img src="./img/home-carry.png" alt="">
														<p>Home Defense</p>
													</div>
													<div class="icon-container vehicle-carry">
														<img src="./img/vehicle-carry.png" alt="">
														<p>Vehicle Carry</p>
													</div>
													<div class="icon-container backpack-carry">
														<img src="./img/backpack-carry.png" alt="">
														<p>Backpack &<br >MOLLE Carry</p>
													</div>
													<div class="icon-container accessories">
														<img src="./img/accessories.png" alt="">
														<p>Accessories</p>
													</div>
												</div>
												<div id="offBodyCarousel" class="carousel slide" data-touch="false"  data-interval="false">
													<div class="carousel-inner">
														${addHolsterCards(carouselCardsOffBody)}
													</div>
													<div class="off-body-controls">
														<a class="carousel-control-prev" href="#offBodyCarousel" role="button" data-slide="prev">
															<i class="fa fa-chevron-left" aria-hidden="true"></i>
															<span class="sr-only">Previous</span>
														</a>
														<a class="carousel-control-next" href="#offBodyCarousel" role="button" data-slide="next">
															<i class="fa fa-chevron-right" aria-hidden="true"></i>
															<span class="sr-only">Next</span>
														</a>
													</div>
												</div>
											</div>
										</div>`;
		}
		else if(currentLayout == 'desktop') {
			pageContent = `<div class="content content_1 active">
											<div class="on-body">
												<ul class="nav nav-tabs">
													<li class="nav-item">
														<a class="nav-link on-body-tab" href="#">On-Body Carry</a>
													</li>
													<li class="nav-item">
														<a class="nav-link off-body-tab" href="#">Off-Body Carry</a>
													</li>
												</ul>
												<img src="img/on-body.png" alt="">
												<div class="clickable-area">
													${addClickableAreas(carouselCardsOnBody)}
												</div>
											</div>
											<div id="onBodyCarousel" class="carousel slide" data-touch="false"  data-interval="false">
												<div class="carousel-inner">
													${addHolsterCards(carouselCardsOnBody)}
												</div>
												<div class="on-body-controls">
													<a class="carousel-control-prev" href="#onBodyCarousel" role="button" data-slide="prev">
													<i class="fa fa-chevron-left" aria-hidden="true"></i>
														<span class="sr-only">Previous</span>
													</a>
													<a class="carousel-control-next" href="#onBodyCarousel" role="button" data-slide="next">
													<i class="fa fa-chevron-right" aria-hidden="true"></i>
														<span class="sr-only">Next</span>
													</a>
												</div>
											</div>
										</div>
										<div class="content content_2">
											<div class="off-body-container">
												<ul class="nav nav-tabs">
													<li class="nav-item">
														<a class="nav-link on-body-tab" href="#">On-Body Carry</a>
													</li>
													<li class="nav-item">
														<a class="nav-link off-body-tab" href="#">Off-Body Carry</a>
													</li>
												</ul>
												<div class="icon-container home-carry">
													<img src="./img/home-carry.png" alt="">
													<p>Home Defense</p>
												</div>
												<div class="icon-container vehicle-carry">
													<img src="./img/vehicle-carry.png" alt="">
													<p>Vehicle Carry</p>
												</div>
												<div class="icon-container backpack-carry">
													<img src="./img/backpack-carry.png" alt="">
													<p>Backpack &<br >MOLLE Carry</p>
												</div>
												<div class="icon-container accessories">
													<img src="./img/accessories.png" alt="">
													<p>Accessories</p>
												</div>
											</div>
											<div id="offBodyCarousel" class="carousel slide" data-touch="false"  data-interval="false">
												<div class="carousel-inner">
													${addHolsterCards(carouselCardsOffBody)}
												</div>
												<div class="off-body-controls">
													<a class="carousel-control-prev" href="#offBodyCarousel" role="button" data-slide="prev">
													<i class="fa fa-chevron-left" aria-hidden="true"></i>
														<span class="sr-only">Previous</span>
													</a>
													<a class="carousel-control-next" href="#offBodyCarousel" role="button" data-slide="next">
													<i class="fa fa-chevron-right" aria-hidden="true"></i>
														<span class="sr-only">Next</span>
													</a>
												</div>
											</div>
										</div>`;
		}
		append(pageContent);
	}
	function addClickableAreas(carouselCards) {
		let holsters = '';
		for(let i = 0; i < carouselCards.length; i ++) {
			 holsters += `<div class="clickable-section-circle ${carouselCards[i].holsterClass}">${carouselCards[i].text ? carouselCards[i].text : ''}</div>`
		}
		return holsters;
	}
	function addHolsterCards(carouselCards) {
		let cards = '';
		for(let i = 0; i < carouselCards.length; i ++) {
			cards += `<div class="carousel-item ${carouselCards[i].class && width >= 767 ? carouselCards[i].class : ''}">
				<div class="card">
					<img src="img/card-img.png" class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">${carouselCards[i].holster}</h5>
						<p class="card-text">${carouselCards[i].infoText}</p>
						<div class="btn-container">
							${carouselCards[i].isOnBody ? `<a href="#" class="btn btn-primary change-holster">Select New Holster</a>` : ''}
							<a href="${carouselCards[i].btnLink}" class="btn btn-primary">${carouselCards[i].btnLabel}</a>
						</div>
					</div>
				</div>
			</div>`
		}
		return cards;
	}
	function append(pageContent) {
		$(contentParent).append(pageContent);
		$('.nav-tabs li').eq(0).addClass('active');
		$('#offBodyCarousel .carousel-item').eq(0).addClass('active');

		
		if(currentLayout == 'desktop') {
			updateClickedSection('.iwb', '#onBodyCarousel', 7);
			updateClickedSection('.icon-container.home-carry', '#offBodyCarousel', 0);
			$('#content').addClass('container');
		}	
		else {
			removeAllClickedItems();
			$('#onBodyCarousel .carousel-item').eq(1).removeClass('active');
			$('#onBodyCarousel').carousel(0);
			$('#content').removeClass('container');
			updateClickedSection('.icon-container.home-carry','#offBodyCarousel', 0);
		}
	}
	function onSectionClick(elTargetClass) {
		removeAllClickedItems();

		switch(elTargetClass) {
			case 'clickable-section-circle chest':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.chest', '#onBodyCarousel', 0);
				else
					updateClickedSection('.clickable-section-circle.chest', '#onBodyCarousel', 1);
				break;
			case 'clickable-section-circle shoulder':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.shoulder', '#onBodyCarousel', 1);
				else
					updateClickedSection('.clickable-section-circle.shoulder', '#onBodyCarousel', 2);
				break;
			case 'clickable-section-circle belly':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.belly', '#onBodyCarousel', 2);
				else
					updateClickedSection('.clickable-section-circle.belly', '#onBodyCarousel', 3);
				break;
			case 'clickable-section-circle appendix':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.appendix', '#onBodyCarousel', 3);
				else
					updateClickedSection('.clickable-section-circle.appendix', '#onBodyCarousel', 4);
				break;
			case 'clickable-section-circle pocket':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.pocket', '#onBodyCarousel', 4);
				else
					updateClickedSection('.clickable-section-circle.pocket', '#onBodyCarousel', 5);
				break;
			case 'clickable-section-circle ankle':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.ankle', '#onBodyCarousel', 5);
				else
					updateClickedSection('.clickable-section-circle.ankle', '#onBodyCarousel', 6);
				break;
			case 'clickable-section-circle owb':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.owb', '#onBodyCarousel', 6);
				else
					updateClickedSection('.clickable-section-circle.owb', '#onBodyCarousel', 7);
				break;
			case 'clickable-section-circle iwb':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.iwb', '#onBodyCarousel', 7);
				else
					updateClickedSection('.clickable-section-circle.iwb', '#onBodyCarousel', 8);
				break;
			case 'clickable-section-circle drop-leg':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.drop-leg', '#onBodyCarousel', 8);
				else
					updateClickedSection('.clickable-section-circle.drop-leg', '#onBodyCarousel', 9);
				break;
			case 'icon-container home-carry':
				updateClickedSection('.icon-container.home-carry', '#offBodyCarousel', 0);
				break;
			case 'icon-container vehicle-carry':
				updateClickedSection('.icon-container.vehicle-carry', '#offBodyCarousel', 1);
				break;
			case 'icon-container backpack-carry':
				updateClickedSection('.icon-container.backpack-carry', '#offBodyCarousel', 2);
				break;
			case 'icon-container accessories':
				updateClickedSection('.icon-container.accessories', '#offBodyCarousel', 3);
				break;
		}
	}
	function updateClickedSection(section, carousel, slide) {
		$(section).addClass('active');
		$(carousel).carousel(slide);
	}
	function toggleActiveTab(tab) {
		if(tab == 0) {
			$('.content_2').removeClass('active');
			$('.content_1').addClass('active');
			$('.off-body-tab').parent().removeClass('active');
			$('.on-body-tab').parent().addClass('active');
		}
		else {
			$('.content_1').removeClass('active');
			$('.content_2').addClass('active');
			$('.on-body-tab').parent().removeClass('active');
			$('.off-body-tab').parent().addClass('active');
		}
	}
	function removeAllClickedItems() {
		$('.clickable-section-circle').removeClass('active');
		$('.icon-container').removeClass('active');
	}
	function enableSlideControls(slide) {
		if(slide != 0)
			$('.on-body-controls').removeClass('inactive');
		else {
			$('.on-body-controls').addClass('inactive');
			removeAllClickedItems();
		}	
	}
	function removeAllChildNodes(parent) {
		console.log('called')
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
	}
});