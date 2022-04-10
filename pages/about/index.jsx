import Breadcrumb from 'components/Breadcrumb';
import InfoCard from 'components/cards/InfoCard';
import LookingForCard from 'components/cards/LookingForCard';
import GreatDeals from 'components/GreatDeals';
import REPORT_DATA from 'data/report';
import $ from 'jquery';
import { useEffect } from 'react';
const AboutPage = () => {
	useEffect(() => {
		(function ($) {
			//counter
			$('.counter').counterUp({
				delay: 10,
				time: 3000,
			});
		})(jQuery);
	});
	return (
		<div style={{ paddingTop: '130px' }}>
			<Breadcrumb title='About' path='/about' />
			<GreatDeals />
			<section className='about-us-area pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70'>
				<div className='container'>
					<div className='row align-items-center mb-120'>
						<div className='col-lg-7'>
							<div className='about__img__box mb-60'>
								<img
									className='about-main-thumb pl-110'
									src='assets/img/slider/01.png'
									alt='about-img'
								/>
								<img
									className='about-img about_01'
									src='assets/img/about/01.png'
									alt='about-img'
								/>
								<img
									className='about-img about_02'
									src='assets/img/about/02.png'
									alt='about-img'
								/>
								<img
									className='about-img about_03'
									src='assets/img/slider/earth-bg.svg'
									alt='about-img'
								/>
							</div>
						</div>
						<div className='col-lg-5'>
							<div className='about-wrapper'>
								<div className='section-title section-title-4 mb-60'>
									<h5 className='bottom-line mb-25'>About Us</h5>
									<h2 className='mb-20'>
										Our mission is to provide students with resources that make
										even the most difficult topics easy to learn.{' '}
									</h2>
									<p className='mb-20'>
										Across the globe, 617 million children are missing basic
										math and reading skills. We are doing our best to deliver
										the education they need.
									</p>
									<h5>Our goal is to:</h5>
									<ul style={{ paddingLeft: '10px', marginTop: '5px' }}>
										<li>- support school and home educators</li>
										<li>- provide purpose-driven education</li>
										<li>- captivate maths learners</li>
										<li>- create moments that inspire learning</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='row pl-75 pr-75 pr-lg-0 pr-md-0 pr-xs-0 pl-lg-0 pl-md-0 pl-xs-0'>
						{REPORT_DATA?.map((item, index) => (
							<InfoCard item={item} key={index} />
						))}
					</div>
				</div>
			</section>
			{/*about-us-area end*/}
			{/*about-section-wrapper start*/}
			<div className='about-section-wrapper pos-rel gradient-bg'>
				<div className='what-blur-shape-one' />
				<div className='what-blur-shape-two' />
				{/*what-loking-for start*/}
				<section className='what-looking-for pt-145 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-8'>
								<div className='section-title text-center mb-55'>
									<h5 className='bottom-line mb-25'>Teachers &amp; Students</h5>
									<h2>What you Looking For?</h2>
								</div>
							</div>
						</div>
						<div className='row'>
							<LookingForCard
								icon='assets/img/icon/phone-operator.svg'
								title='Do you want to teach here?'
								text='Millions of students lack opportunity to acquire basic math skills. Together, we can give it to them.'
								buttonText='Register Now'
								buttonStyle=''
								link='/contact'
							/>
							<LookingForCard
								icon='assets/img/icon/graduate.svg'
								title='Do you want to learn here?'
								text='Our clear, precise lessons give you the self-belief to conquer your next quiz or test with confidence.'
								buttonText='Start Learning '
								buttonStyle='active'
								link='/'
							/>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AboutPage;
