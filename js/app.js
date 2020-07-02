$(document).ready(function() {
	const carouselCards = [
		{
			holster: 'chest',
			class: 'active',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.'
		},
		{
			holster: 'shoulder',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.'
		},
		{
			holster: 'belly',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.'
		},
		{
			holster: 'appendix',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.'
		},
		{
			holster: 'pocket',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.'
		},
		{
			holster: 'ankle',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.'
		},
		{
			holster: 'owb',
			text: 'OWB',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.'
		},
		{
			holster: 'iwb',
			text: 'IWB',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.'
		},
		{
			holster: 'drop-leg',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them easy to conceal. The typical user will place the holster somewhere between the point of the hip and the small of the back depending on the preference of the wearer.'
		}
	];

	let width;
	let currentLayout;
	let contentParent = document.querySelector('#content');

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
			if(elTargetClass.includes('nav-link on-body')) {
				toggleActiveTab(1);
			}
			else if(elTargetClass.includes('nav-link off-body')) {
				toggleActiveTab(0);
			}

			onSectionClick(elTargetClass);

			if(elTargetClass.includes('change-holster'))
				$('.carousel').carousel(0);
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
												<a class="nav-link on-body" href="#">On-Body Carry</a>
											</li>
											<li class="nav-item">
												<a class="nav-link off-body" href="#">Off-Body Carry</a>
											</li>
										</ul>
										<div class="mobile-content">
												<div class="content content_1 active mobile">
												<div id="onBodyCarousel" class="carousel slide" data-interval="false">
													<div class="carousel-inner">
														<div class="carousel-item active">
															<div class="content-body">
																<img src="img/on-body.png" alt="">
																${addClickableAreas()}
															</div>
														</div>
														${addHolsterCards()}
													</div>
													<div class="on-body-controls inactive">
														<a class="carousel-control-prev" href="#onBodyCarousel" role="button" data-slide="prev">
															<span class="carousel-control-prev-icon" aria-hidden="true"></span>
															<span class="sr-only">Previous</span>
														</a>
														<a class="carousel-control-next" href="#onBodyCarousel" role="button" data-slide="next">
															<span class="carousel-control-next-icon" aria-hidden="true"></span>
															<span class="sr-only">Next</span>
														</a>
													</div>
												</div>
											</div>
											<div class="content content_2">
												<h1>Content 2</h1>
												<img src="https://www.highreshdwallpapers.com/wp-content/uploads/2014/03/Tranquil-Open-Paradise.jpg" alt="New york" style="width:100%;">
											</div>
										</div>`;
		}
		else if(currentLayout == 'desktop') {
			pageContent = `<div class="content content_1 active">
											<div class="content-body">
												<ul class="nav nav-tabs">
													<li class="nav-item">
														<a class="nav-link on-body" href="#">On-Body Carry</a>
													</li>
													<li class="nav-item">
														<a class="nav-link off-body" href="#">Off-Body Carry</a>
													</li>
												</ul>
												<img src="img/on-body.png" alt="">
												<div class="clickable-area">
													${addClickableAreas()}
												</div>
											</div>
											<div id="onBodyCarousel" class="carousel slide" data-interval="false">
												<div class="carousel-inner">
													${addHolsterCards()}
												</div>
												<div class="on-body-controls">
													<a class="carousel-control-prev" href="#onBodyCarousel" role="button" data-slide="prev">
														<span class="carousel-control-prev-icon" aria-hidden="true"></span>
														<span class="sr-only">Previous</span>
													</a>
													<a class="carousel-control-next" href="#onBodyCarousel" role="button" data-slide="next">
														<span class="carousel-control-next-icon" aria-hidden="true"></span>
														<span class="sr-only">Next</span>
													</a>
												</div>
											</div>
										</div>
										<div class="content content_2">
											<h1>Content 2</h1>
											<img src="https://www.highreshdwallpapers.com/wp-content/uploads/2014/03/Tranquil-Open-Paradise.jpg" alt="New york" style="width:100%;">
										</div>`;
		}
		append(pageContent);
	}
	function addClickableAreas() {
		let holsters = '';
		for(let i = 0; i < carouselCards.length; i ++) {
			 holsters += `<div class="clickable-section-circle ${carouselCards[i].holster}">${carouselCards[i].text ? carouselCards[i].text : ''}</div>`
		}
		return holsters;
	}
	function addHolsterCards() {
		let cards = '';
		for(let i = 0; i < carouselCards.length; i ++) {
			cards += `<div class="carousel-item ${carouselCards[i].class && width >= 767 ? carouselCards[i].class : ''}">
				<div class="card">
					<img src="img/card-img.png" class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">${carouselCards[i].holster}</h5>
						<p class="card-text">${carouselCards[i].infoText}</p>
						<a href="#" class="btn btn-primary change-holster">Change Holster</a>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>`
		}
		return cards;
	}
	function append(pageContent) {
		$(contentParent).append(pageContent);
		$('.nav-tabs .nav-item').eq(0).addClass('active');
		
		if(currentLayout == 'desktop') {
			$('.iwb').addClass('active');
			updateClickedSection('.clickable-section-circle.iwb', 7);
			$('#content').addClass('container');

		}	
		else {
			removeAllClickedItems();
			$('.carousel-item').eq(1).removeClass('active');
			$('.carousel').carousel(0);
			$('#content').removeClass('container');
		}
	}
	function onSectionClick(elTargetClass) {
		switch(elTargetClass) {
			case 'clickable-section-circle chest':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.chest', 0);
				else
					updateClickedSection('.clickable-section-circle.chest', 1);
				break;
			case 'clickable-section-circle shoulder':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.shoulder', 1);
				else
					updateClickedSection('.clickable-section-circle.shoulder', 2);
				break;
			case 'clickable-section-circle belly':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.belly', 2);
				else
					updateClickedSection('.clickable-section-circle.belly', 3);
				break;
			case 'clickable-section-circle appendix':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.appendix', 3);
				else
					updateClickedSection('.clickable-section-circle.appendix', 4);
				break;
			case 'clickable-section-circle pocket':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.pocket', 4);
				else
					updateClickedSection('.clickable-section-circle.pocket', 5);
				break;
			case 'clickable-section-circle ankle':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.ankle', 5);
				else
					updateClickedSection('.clickable-section-circle.ankle', 6);
				break;
			case 'clickable-section-circle owb':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.owb', 6);
				else
					updateClickedSection('.clickable-section-circle.owb', 7);
				break;
			case 'clickable-section-circle iwb':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.iwb', 7);
				else
					updateClickedSection('.clickable-section-circle.iwb', 8);
				break;
			case 'clickable-section-circle drop-leg':
				if(currentLayout != 'mobile')
					updateClickedSection('.clickable-section-circle.drop-leg', 8);
				else
					updateClickedSection('.clickable-section-circle.drop-leg', 9);
				break;
		}
	}
	function updateClickedSection(section, slide) {
		removeAllClickedItems();
		$(section).addClass('active');
		$('.carousel').carousel(slide);
	}
	function toggleActiveTab(tab) {
		if(tab == 1) {
			$('.content_2').removeClass('active');
			$('.content_1').addClass('active');
			$('.nav-item').eq(1).removeClass('active');
			$('.nav-item').eq(0).addClass('active');
		}
		else {
			$('.content_1').removeClass('active');
			$('.content_2').addClass('active');
			$('.nav-item').eq(0).removeClass('active');
			$('.nav-item').eq(1).addClass('active');
		}
	}
	function removeAllClickedItems() {
		$('.clickable-section-circle').removeClass('active');
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