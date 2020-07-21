$(document).ready(function() {
	const carouselCardsOnBody = [
		{
			img: './img/card/chest.jpg',
			alt: '',
			imgY: '90%',
			imgYAll: '84%',
			holster: 'Chest Carry',
			holsterClass: 'chest',
			class: 'active',
			infoText: 'Chest holsters keep the firearm holstered on the body but off the waist, which is ideal for certain situations such as when hiking or backcountry hunting. A quality example will feature a hard shell to protect the firearm but also soft backing against the body which is important given that it will be snug up against you while walking around. Adjustable straps are also a must, as is an advantageous draw angle.',
			benefit: ['Breathable CoolVent neoprene backing layer for comfort', 'Adjustable, custom-molded retention shell', 'Padded straps with adjustable pivot points for dynamic movement'],
			btnLabel: 'Shop Chest Holsters',
			btnLink: 'https://aliengearholsters.com/chest-holsters.html',
			isOnBody: true
		},
		{
			img: './img/card/shoulder.jpg',
			alt: '',
			imgY: '80%',
			imgYAll: '70%',
			holster: 'Shoulder Carry',
			holsterClass: 'shoulder',
			infoText: 'Shoulder holsters use a harness to suspend the firearm over the shoulder, keeping it placed under the arm. They can be carried open or concealed, depending on if the holster has a low enough profile against the body. Adjustability and comfort are critical, but having proper retention against the firearm is the most important. As a result, soft, “one-size-fits-all” holster shells should ultimately be avoided.',
			btnLabel: 'Shop Shoulder Holsters',
			benefit: ['Adjustable leather straps padded with CoolVent Neoprene to ensure all day comfort', 'Custom-molded retention shell', 'Can be ordered with magazine carriers or dual firearm'],
			btnLink: 'https://aliengearholsters.com/shoulder-holsters.html',
			isOnBody: true
		},
		{
			img: './img/card/belly.jpg',
			alt: '',
			imgY: 0,
			imgYAll: '54%',
			holster: 'Belly Band Carry',
			holsterClass: 'belly',
			imgClass: 'belly-img',
			infoText: 'Belly band holsters wrap around the waist or lower abdomen, allowing for easy concealment with almost any clothing without requiring a belt. While certainly convenient, care must be taken to select a belly band that securely holds the firearm. Lesser quality designs use flimsy cloth pockets with elastic retention straps, which are barely sufficient for anything less than a micro pistol and often need replacement every few months. Quality belly bands, however, last for years and are comfortable and secure enough to be a viable carry method.',
			benefit: ['Durable nylon band holds securely, and neoprene padding keeps you comfortable', 'Mounting loops allow use with any Alien Gear Holsters IWB for secure carry', 'Sized for proper fit to firearm instead of "one-size-fits-all" design'],
			btnLabel: 'Shop Belly Holsters',
			btnLink: 'https://aliengearholsters.com/belly-band-holsters.html',
			isOnBody: true
		},
		{
			img: './img/card/appendix.jpg',
			alt: '',
			imgY: '55%',
			imgYAll: '55%',
			holster: 'Appendix Carry',
			holsterClass: 'appendix',
			infoText: 'Appendix holsters are a type of IWB (inside the waistband) holster, but are optimized for being carried in front of the body. Appendix carry has gained a lot of popularity in recent years, and for good reasons. Access is fast, and with the right holster and gun for the right person, appendix carry is very comfortable. Some people find it doesn\'t work for them based on body type and their typical sitting position, but those that do tend to prefer appendix carry to any other method of concealed carry.',
			benefit: ['Maximum comfort provided by our CoolVent Neoprene backer', 'Single holster clip for secure connection and minimal footprint', 'Secure retention with custom-molded holster shell'],
			btnLabel: 'Shop Appendix Holsters',
			btnLink: 'https://aliengearholsters.com/alien-gear-shapeshift-appendix-carry-holster.html',
			isOnBody: true
		},
		{
			img: './img/card/pocket.jpg',
			alt: '',
			imgY: '45%',
			imgYAll: '45%',
			holster: 'Pocket Carry',
			holsterClass: 'pocket',
			infoText: 'Pocket holsters are an absolute necessity if you want to carry a pistol in your pocket. The trigger guard must be protected to ensure safety while carrying, as pocket carry without a holster can lead to an accidental discharge. Therefore, make sure to choose a pocket holster with a rigid material covering the trigger guard. A good pocket holster will also have a “pocket catch”, which snags in the pocket and lets the gun pull free from the holster on the draw.',
			benefit: ['Custom-molded retention shell', 'Full trigger guard coverage', 'Pocket catch wing ensures a clean draw'],
			btnLabel: 'Shop Pocket Holsters',
			btnLink: 'https://aliengearholsters.com/pocket-holsters.html',
			isOnBody: true
		},
		{
			img: './img/card/ankle.jpg',
			alt: '',
			imgY: '24%',
			imgYAll: '24%',
			holster: 'Ankle Carry',
			holsterClass: 'ankle',
			infoText: 'Ankle holsters wrap around the lower leg and/or the foot so you can cover the gun and holster with your pants. Ankle carry has most commonly been known for its use with law enforcement by providing a space for a backup gun, but it has since gained popularity with civilian carriers for everyday use. Holster selection is crucial, as it needs to be comfortable enough to wear with your normal footwear, secure enough to keep the pistol holstered while walking, but also practical enough to easily access the weapon when necessary.',
			benefit: ['Two-piece neoprene strap for comfort and stability', 'Custom-molded adjustable retention shell for secure carry', 'Adjustable ride height to work with almost any footwear'],
			btnLabel: 'Shop Ankle Holsters',
			btnLink: 'https://aliengearholsters.com/ankle-gun-holsters.html',
			isOnBody: true
		},
		{
			img: './img/card/owb.jpg',
			alt: '',
			imgY: '52%',
			imgYAll: '52%',
			holster: 'OWB Carry',
			holsterClass: 'owb',
			text: 'OWB',
			infoText: 'OWB (outside the waistband) holsters are worn on the belt but unlike IWB holsters, they are not tucked into the user’s pants or shorts which may be a better fit for users with larger firearms. They are typically the best choice for open carry and range use, but can be used for concealed carry as well.',
			benefit: ['Custom molded retention shell and adjustable passive retention', 'Designs optimized for open or concealed carry', 'Select models have customizable belt attachments'],
			btnLabel: 'Shop OWB Holsters',
			btnLink: 'https://aliengearholsters.com/owb-holsters.html',
			isOnBody: true
		},
		{
			img: './img/card/iwb.jpg',
			alt: '',
			imgY: '55%',
			imgYAll: '55%',
			holster: 'IWB Carry',
			holsterClass: 'iwb',
			text: 'IWB',
			pulse: 'pulse',
			infoText: 'Inside the waistband or IWB holsters tuck into the waistband and get covered up with a shirt and any other cover garments, making them the best option for concealed carry. The typical user will place the holster on the back side of their hip allowing for optimum accessibility and concealment. This is proudly our best-selling holster type and we encourage any and everyone to give it a try.',
			benefit: ['Custom-molded retention shell securely holds the firearm', 'Holster base includes CoolVent Neoprene for all day comfort', 'Adjustable retention, cant, and ride height'],
			btnLabel: 'Shop IWB Holsters',
			btnLink: 'https://aliengearholsters.com/iwb-holsters.html',
			isOnBody: true
		},
		{
			img: './img/card/leg.jpg',
			alt: '',
			imgY: '62%',
			imgYAll: '84%',
			holster: 'Drop-Leg Carry',
			holsterClass: 'drop-leg',
			infoText: 'Drop leg holsters locate the firearm on the upper thigh, giving the user fast access if needed but freeing up the belt.  By providing the user ability for more dynamic movements, it\'s the perfect open carry solution for range days, hiking, tactical training and more. Firearm safety during these kinds of activities is extremely important so users should avoid holsters with soft shells and one-size-fits-all designs.',
			benefit: ['Custom-molded retention shell retains firearm securely and draws smoothly', 'Elastic leg straps with high-traction lining for comfortable, secure fit', 'Gun and mag carrier compatible'],
			btnLabel: 'Shop Drop-Leg Holsters',
			btnLink: 'https://aliengearholsters.com/drop-leg-holsters.html',
			isOnBody: true
		}
	];

	const carouselCardsOffBody = [
		{
			img: './img/card/home-defense.jpg',
			alt: '',
			imgY: '75%',
			imgYAll: '72%',
			holster: 'Holster Mounts',
			infoText: 'A holster mount is used to attach a holster to a desired surface. There are a number of different methods, including the use hook and loop fabric, hard mounts that are drilled into a surface, and less invasive systems that use straps. In all cases, make sure to use a holster that offers adequate trigger guard protection and sufficient retention so the firearm is securely held in the holster.',
			benefit: ['Multiple mounting systems for choice of attachment to chosen surface', 'Custom-molded retention shells for secure retention', 'Non-hardware options available'],
			btnLabel: 'Shop Holster Mounts',
			btnLink: 'https://aliengearholsters.com/car-holsters.html'
		},
		{
			img: './img/card/backpack.jpg',
			alt: '',
			imgY: '50%',
			imgYAll: '50%',
			holster: 'Backpack Carry',
			infoText: 'Backpack holsters are made to be used while wearing a backpack, such as if out hiking, backcountry hunting or any other instance when you might be wearing a backpack and can\'t get to a gun on the waist. Being able to place the holster on the backpack, with a secure mount and a secure holster, keeps the pistol safely holstered and still accessible in an emergency. ',
			benefit: ['Comfortable', 'Low-Profile'],
			btnLabel: 'Shop Backpack Holsters',
			btnLink: 'https://aliengearholsters.com/backpack-gun-holsters.html'
		},
		{
			img: './img/card/molle.jpg',
			alt: '',
			imgY: '45%',
			imgYAll: '50%',
			holster: 'MOLLE Carry',
			infoText: 'MOLLE holsters connect to the common material type found in tactical and military gear which feature rows of heavy-duty webbing stitched on to bags, vests, and belts. These holsters weave through the webbing and allow the user to add a holster to their existing gear. Most holsters in this class are made of stiff cloth with little retention or security which is less than ideal in the settings in which they are used.',
			benefit: ['Two-prong rigid adapter instead of fabric loops with locking cap for secure attachment', 'Custom-molded holster shell carries more securely than cloth holsters', 'Adjustable retention and cant'],
			btnLabel: 'Shop MOLLE Holsters',
			btnLink: 'https://aliengearholsters.com/molle-holsters.html'
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
			else if(elTargetClass.includes('nav-link all-tab')) {
				toggleActiveTab(2);
			}

			if(elTargetClass.includes('clickable-section-circle') || elTargetClass.includes('icon-container'))
				onSectionClick(elTargetClass);

			if(elTargetClass.includes('change-holster')) {
				el.preventDefault();
				$('#onBodyCarousel').carousel(0);
				$('#offBodyCarousel').carousel(0);
				removeAllClickedItems();
			}

			if(elTargetClass.includes('read-more'))
				toggleReadMore(elTarget, false);
			
			if(elTargetClass.includes('btn btn-link')) {
				let currentChevron = elTarget.firstChild.nextSibling;
				updateChevron(currentChevron);
			}
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
					toggleReadMore(null, true);
				});
				$('#offBodyCarousel').on('slide.bs.carousel', function (e) {
					toggleReadMore(null, true);
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
												<li class="nav-item">
													<a class="nav-link all-tab" href="#">All Carry</a>
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
													</div>
												</div>
												<div class="content content_2">
													<div id="offBodyCarousel" class="carousel slide" data-touch="false"  data-interval="false">
														<div class="carousel-inner">
															<div class="carousel-item active">
																<div class="off-body-container">
																	<div class="icon-container home-carry">
																		<img class="home-icon-main" src="./img/icons/home-carry.png" alt="">
																		<img class="home-icon-hover" src="./img/icons/home-carry-hover.png" alt="">
																		<p>Holster Mounts</p>
																	</div>
																	<div class="icon-container backpack-carry">
																		<img class="backpack-icon-main" src="./img/icons/backpack-carry.png" alt="">
																		<img class="backpack-icon-hover" src="./img/icons/backpack-carry-hover.png" alt="">
																		<p>Backpack Carry</p>
																	</div>
																	<div class="icon-container accessories">
																		<img class="molle-icon-main" src="./img/icons/molle-carry.png" alt="">
																		<img class="molle-icon-hover" src="./img/icons/molle-carry-hover.png" alt="">
																		<p>MOLLE Carry</p>
																	</div>
																</div>
															</div>
															${addHolsterCards(carouselCardsOffBody)}
														</div>
													</div>
												</div>
												<div class="content content_3">
													<div class="accordion" id="accordionOnBody">
														${addHolsterCardsAll(carouselCardsOnBody, 'accordionOnBody')}
													</div>
													<div class="accordion" id="accordionOffBody">
														${addHolsterCardsAll(carouselCardsOffBody, 'accordionOffBody')}
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
													<li class="nav-item">
														<a class="nav-link all-tab" href="#">All Carry</a>
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
														<li class="nav-item">
														<a class="nav-link all-tab" href="#">All Carry</a>
													</li>
												</ul>
												<div class="icon-container home-carry">
													<img class="home-icon-main" src="./img/icons/home-carry.png" alt="">
													<img class="home-icon-hover" src="./img/icons/home-carry-hover.png" alt="">
													<p>Holster Mounts</p>
												</div>
												<div class="icon-container backpack-carry">
													<img class="backpack-icon-main" src="./img/icons/backpack-carry.png" alt="">
													<img class="backpack-icon-hover" src="./img/icons/backpack-carry-hover.png" alt="">
													<p>Backpack Carry</p>
												</div>
												<div class="icon-container accessories">
													<img class="molle-icon-main" src="./img/icons/molle-carry.png" alt="">
													<img class="molle-icon-hover" src="./img/icons/molle-carry-hover.png" alt="">
													<p>MOLLE Carry</p>
												</div>
											</div>
											<div id="offBodyCarousel" class="carousel slide" data-touch="false"  data-interval="false">
												<div class="carousel-inner">
													${addHolsterCards(carouselCardsOffBody)}
												</div>
											</div>
										</div>
										<div class="content content_3">
											<ul class="nav nav-tabs">
												<li class="nav-item">
													<a class="nav-link on-body-tab" href="#">On-Body Carry</a>
												</li>
												<li class="nav-item">
													<a class="nav-link off-body-tab" href="#">Off-Body Carry</a>
												</li>
												<li class="nav-item">
													<a class="nav-link all-tab" href="#">All Carry</a>
												</li>
											</ul>
											<div class="accordion" id="accordionOnBody">
												${addHolsterCardsAll(carouselCardsOnBody, 'accordionOnBody')}
											</div>
											<div class="accordion" id="accordionOffBody">
												${addHolsterCardsAll(carouselCardsOffBody, 'accordionOffBody')}
											</div>
										</div>`;
		}
		append(pageContent);
	}
	function addClickableAreas(carouselCards) {
		let holsters = '';
		for(let i = 0; i < carouselCards.length; i ++) {
			 holsters += `<div class="clickable-section-circle ${carouselCards[i].holsterClass} "><div class="${carouselCards[i].pulse ? carouselCards[i].pulse : ''}"></div></div>`
		}
		return holsters;
	}
	function addHolsterCards(carouselCards) {
		let cards = '';
		let width = $(window).width();

		for(let i = 0; i < carouselCards.length; i ++) {
			cards += `<div class="carousel-item ${carouselCards[i].class && width >= 767 ? carouselCards[i].class : ''}">
									${currentLayout == 'mobile' ? 
										`<div class="change-holster">
											<p><i class="fa fa-chevron-left" aria-hidden="true"></i>  Find Your Carry</p>
										</div>` : ''
									}
									<div class="card">
										<div class="img-container ${carouselCards[i].imgClass ? carouselCards[i].imgClass : ''}" style="background-image: url('${carouselCards[i].img}');background-position: 0 ${carouselCards[i].imgY};"></div>
										<div class="card-body">
											<h5 class="card-title">${carouselCards[i].holster}</h5>
											<div class="card-body-inner">
												<div class="card-body-left">
													<h5 class="text-title">Key features by Alien Gear Holsters:</h5>
													<ul class="benefits-list">
														${addHolsterBenefits(carouselCards[i].benefit)}
													</ul>
												</div>
												<div class="card-body-right">
													<div class="carry-info">
														<p class="card-text">${carouselCards[i].infoText}</p>
													</div>
												</div>
											</div>
										</div>
										<div class="fixed-container">
												<span class="read-more">Read More</span>
											<div class="btn-container">
												<a href="${carouselCards[i].btnLink}" class="btn btn-primary">${carouselCards[i].btnLabel}</a>
											</div>
										</div>
									</div>
								</div>`;
		}
		return cards;
	}
	function addHolsterCardsAll(carouselCards, sectionName) {
		let cards = '';

		for(let i = 0; i < carouselCards.length; i ++) {
			cards += `<div class="card">
									<div class="card-header" id="heading${sectionName + i}">
										<h2 class="mb-0">
											<button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${sectionName + i}" aria-expanded="true" aria-controls="collapse${sectionName + i}">
												<i class="fa fa-chevron-right mr-2" aria-hidden="true"></i><span>${carouselCards[i].holster}</span>
											</button>
										</h2>
									</div>

									<div id="collapse${sectionName + i}" class="collapse card-inner-all" aria-labelledby="heading${sectionName + i}" data-parent="#${sectionName}">
										<div class="img-container ${carouselCards[i].imgClass ? carouselCards[i].imgClass : ''}" style="background-image: url('${carouselCards[i].img}');background-position: 0 ${carouselCards[i].imgYAll};"></div>
										<div class="card-body">
											<h5 class="card-title">${carouselCards[i].holster}</h5>
											<div class="card-body-inner">
												<div class="card-body-left">
													<h5 class="text-title">Key features by Alien Gear Holsters:</h5>
													<ul class="benefits-list">
														${addHolsterBenefits(carouselCards[i].benefit)}
													</ul>
												</div>
												<div class="card-body-right">
													<div class="carry-info">
														<p class="card-text">${carouselCards[i].infoText}</p>
													</div>
												</div>
											</div>
										</div>
										<div class="fixed-container">
											<div class="btn-container">
												<a href="${carouselCards[i].btnLink}" class="btn btn-primary">${carouselCards[i].btnLabel}</a>
											</div>
										</div>
									</div>
                </div>`;
		}
		return cards;
	}
	function addHolsterBenefits(carouselCardsBenefits) {
		let benefits = '';
		for(let i = 0; i < carouselCardsBenefits.length; i ++) {
			benefits +=	`<li>${carouselCardsBenefits[i]}</li>`;
		}
		return benefits;
	}
	function append(pageContent) {
		$(contentParent).append(pageContent);
		$('.nav-tabs li').eq(0).addClass('active');
		$('#offBodyCarousel .carousel-item').eq(0).addClass('active');

		if(currentLayout == 'desktop') {
			$('.clickable-section-circle.iwb').addClass('active');
			updateClickedSection('.iwb', '#onBodyCarousel', 7);
			updateClickedSection('.icon-container.home-carry', '#offBodyCarousel', 0);
			$('#content').addClass('container');
			$('.clickable-section-circle.iwb').addClass('active');
		}	
		else {
			removeAllClickedItems();
			$('#onBodyCarousel .carousel-item').eq(1).removeClass('active');
			$('#onBodyCarousel').carousel(0);
			$('#content').removeClass('container');
			updateClickedSection('.icon-container.home-carry','#offBodyCarousel', 0);
			$('.icon-container.home-carry').removeClass('active');
		}
	}
	function onSectionClick(elTargetClass) {
		
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
				if(currentLayout != 'mobile')
					updateClickedSection('.icon-container.home-carry', '#offBodyCarousel', 0);
				else
					updateClickedSection('.icon-container.home-carry', '#offBodyCarousel', 1);
				break;
			// case 'icon-container vehicle-carry':
			// 	if(currentLayout != 'mobile')
			// 		updateClickedSection('.icon-container.vehicle-carry', '#offBodyCarousel', 1);
			// 	else
			// 		updateClickedSection('.icon-container.vehicle-carry', '#offBodyCarousel', 2);
			// 	break;
			case 'icon-container backpack-carry':
				if(currentLayout != 'mobile')
					updateClickedSection('.icon-container.backpack-carry', '#offBodyCarousel', 1);
				else
					updateClickedSection('.icon-container.backpack-carry', '#offBodyCarousel', 2);
				break;
			case 'icon-container accessories':
				if(currentLayout != 'mobile')
					updateClickedSection('.icon-container.accessories', '#offBodyCarousel', 2);
				else
					updateClickedSection('.icon-container.accessories', '#offBodyCarousel', 3);
				break;
		}
	}
	function updateClickedSection(section, carousel, slide) {
		removeAllClickedItems();
		$(section).addClass('active');
		$(carousel).carousel(slide);
	}
	function toggleActiveTab(tab) {
		let tabs = document.querySelectorAll('.nav-tabs .nav-item');
		let contentContainers = document.querySelectorAll('.content');

		for(let i = 0;i < tabs.length;i ++) {
			tabs[i].classList.remove('active');
		}
		for(let i = 0;i < contentContainers.length;i ++) {
			contentContainers[i].classList.remove('active');
		}

		if(tab == 0) {
			$('.content_1').addClass('active');
			$('.on-body-tab').parent().addClass('active');
		}
		else if(tab == 1) {
			$('.content_2').addClass('active');
			$('.off-body-tab').parent().addClass('active');
		}
		else if(tab == 2) {
			$('.content_3').addClass('active');
			$('.all-tab').parent().addClass('active');
		}
	}
	function toggleReadMore(readMoreTarget, closeAll) {
		let container = $(readMoreTarget).parent();
		let currentCard = $(readMoreTarget).parent().parent();

		if(closeAll)
			$('.card').removeClass('more-active');
		
		if(readMoreTarget != null) {
			$(currentCard).toggleClass('more-active');

			if($(currentCard).hasClass('more-active')) {
				$(readMoreTarget).text('Read Less');
				stickyBtnContainer(readMoreTarget)
			}
			else {
				$(readMoreTarget).text('Read More');
				container.removeClass('fixed');
			}
		}
	}
	function stickyBtnContainer(readMoreTarget) {
		let container = readMoreTarget.parentElement;
		let card = readMoreTarget.parentElement.parentElement;
		
		container.classList.toggle('fixed');
		
		$(window).scroll(function() {
			const lg = 823;
			const md = 667;
			const sm = 568;
			let y = window.scrollY;
			let h = window.innerHeight;

			if(y >= 0 && !card.classList.contains('more-active'))
				container.classList.remove('fixed');
			else if(y >= 350 && h == lg) 
				container.classList.remove('fixed');
			else if(y >= 450 && h == md)
				container.classList.remove('fixed');
			else if(y >= 510 && h == sm)
				container.classList.remove('fixed');
			else
				container.classList.add('fixed');

		});	
	}
	function removeAllClickedItems() {
		$('.clickable-section-circle').removeClass('active');
		$('.icon-container').removeClass('active');
	}
	function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
	}
	function updateChevron(currentChevron) {
		let allChevrons = document.querySelectorAll('.card .card-header button i');

		if(currentChevron.classList.contains('fa-chevron-down')) {
			for(let i = 0;i < allChevrons.length;i ++) {
				allChevrons[i].classList.remove('fa-chevron-down');
			}
		}
		else {
			for(let i = 0;i < allChevrons.length;i ++) {
				allChevrons[i].classList.remove('fa-chevron-down');
			}
			currentChevron.classList.add('fa-chevron-down');
		}
	}
	function enableSlideControls(slide, currentLayout) {
		if(slide == 0 && currentLayout == 'mobile') {
			$('.on-body-controls').addClass('inactive');
			$('.off-body-controls').addClass('inactive');
		}
		else {
			$('.on-body-controls').removeClass('inactive');
			$('.off-body-controls').removeClass('inactive');
			removeAllClickedItems();
		}	
	}
});