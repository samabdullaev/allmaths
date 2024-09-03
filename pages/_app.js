import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
	useEffect(() => {
		(function ($) {
			'use strict';
			//tooggle - btn
			jQuery(function (dnxte_contenttoggle) {
				dnxte_contenttoggle('.dnxte-toggle-btn .dnxte-input').each(function () {
					var n = dnxte_contenttoggle(this)
							.parents('.dnxte-content-toggle')
							.find('.dnxte-content-toggle-back'),
						e = dnxte_contenttoggle(this)
							.parents('.dnxte-content-toggle')
							.find('.dnxte-content-toggle-front');
					this.checked ? (e.hide(), n.show()) : (n.hide(), e.show()),
						dnxte_contenttoggle(this).on('change', function () {
							this.checked ? (e.hide(), n.show()) : (n.hide(), e.show());
						});
				});
			});

			/*------------------------------------
					Mobile Menu
				--------------------------------------*/

			$('#mobile-menu-active').metisMenu();

			$('#mobile-menu-active .has-dropdown > a').on('click', function (e) {
				e.preventDefault();
			});

			$('.hamburger-menu > a').on('click', function (e) {
				e.preventDefault();
				$('.slide-bar').toggleClass('show');
				$('body').addClass('on-side');
				$('.body-overlay').addClass('active');
				$(this).addClass('active');
			});

			$('.close-mobile-menu > a').on('click', function (e) {
				e.preventDefault();
				$('.slide-bar').removeClass('show');
				$('body').removeClass('on-side');
				$('.body-overlay').removeClass('active');
				$('.hamburger-menu > a').removeClass('active');
			});

			$('.body-overlay').on('click', function () {
				$(this).removeClass('active');
				$('.slide-bar').removeClass('show');
				$('body').removeClass('on-side');
				$('.hamburger-menu > a').removeClass('active');
			});

			//sticky-menu
			$(window).on('scroll', function () {
				var scroll = $(window).scrollTop();
				if (scroll < 200) {
					$('.main-header-area').removeClass('sticky');
				} else {
					$('.main-header-area').addClass('sticky');
				}
			});

			// mainSlider
			function mainSlider() {
				var BasicSlider = $('.slider-active');
				BasicSlider.on('init', function (e, slick) {
					var $firstAnimatingElements = $('.single-slider:first-child').find(
						'[data-animation]'
					);
					doAnimations($firstAnimatingElements);
				});
				BasicSlider.on(
					'beforeChange',
					function (e, slick, currentSlide, nextSlide) {
						var $animatingElements = $(
							'.single-slider[data-slick-index="' + nextSlide + '"]'
						).find('[data-animation]');
						doAnimations($animatingElements);
					}
				);
				BasicSlider.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: false,
					fade: true,
					speed: 1000,
					arrows: false,
					cssEase: 'linear',
					prevArrow:
						'<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
					nextArrow:
						'<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
					responsive: [
						{
							breakpoint: 850,
							settings: { dots: false, arrows: false },
						},
					],
				});

				function doAnimations(elements) {
					var animationEndEvents =
						'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
					elements.each(function () {
						var $this = $(this);
						var $animationDelay = $this.data('delay');
						var $animationType = 'animated ' + $this.data('animation');
						$this.css({
							'animation-delay': $animationDelay,
							'-webkit-animation-delay': $animationDelay,
						});
						$this.addClass($animationType).one(animationEndEvents, function () {
							$this.removeClass($animationType);
						});
					});
				}
			}
			mainSlider();

			// isotop
			$('.grid').imagesLoaded(function () {
				// init Isotope
				var $grid = $('.grid').isotope({
					itemSelector: '.grid-item',
					percentPosition: true,
					masonry: {
						// use outer width of grid-sizer for columnWidth
						columnWidth: 0,
						gutter: 0,
					},
				});
				// filter items on button click
				$('.portfolio-menu').on('click', 'button', function () {
					var filterValue = $(this).attr('data-filter');
					$grid.isotope({ filter: filterValue });
				});
			});

			// window load event

			// scrollToTop

			// wow animation - start
			// --------------------------------------------------
			function wowAnimation() {
				new WOW({
					offset: 100,
					mobile: true,
				}).init();
			}
			wowAnimation();

			//progress-bar
			$('.chart1').easyPieChart({
				barColor: '#FF723A',
				trackColor: '#d0d2d5',
				lineWidth: 15,
				lineCap: 'circle',
				scaleColor: 0,
				scaleLength: 0,
				size: 120,
				animate: {
					duration: 2000,
					enabled: true,
				},
			});

			//nice-select
			$(document).ready(function () {
				$('select').niceSelect();
			});
		})(jQuery);
	});

	const router = useRouter();
	return (
		<div>
			<title>AllMaths | Learn Math with Us</title>

			{<Navbar />}
			<Aside />
			<div className='body-overlay' />
			<main>
				<Component {...pageProps} />
			</main>
			{router.asPath !== '/games' && router.asPath !== '/worksheets' && (
				<Footer />
			)}
			<ToastContainer />
		</div>
	);
}

export default MyApp;
