import FeaturedCourses from 'components/FeaturedCourses';
import GreatDeals from 'components/GreatDeals';
import Hero from 'components/Hero';
import LookingFor from 'components/LookingFor';
import WhyUs from 'components/WhyUs';

export default function Home() {
	return (
		<>
			<Hero />
			<GreatDeals />
			<LookingFor />
			{/* <FeaturedCourses /> */}
			<WhyUs />
			{/*
			<section className='blog-area mr-100 ml-100'>
				<div className='blog-bg gradient-bg pl-100 pr-100 pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-8'>
								<div className='section-title text-center mb-60'>
									<h5 className='bottom-line mb-25'>Latest News</h5>
									<h2 className='mb-25'>Lots of new Blogs &amp; News</h2>
								</div>
							</div>
						</div>
						<div className='row testimonial-active-01'>
							<div className='col-xl-4'>
								<div className='item'>
									<div className='testimonial-wrapper mb-30'>
										<div className='testimonial-authors overflow-hidden mb-15'>
											<div className='testimonial-authors__avatar'>
												<img
													src='assets/img/testimonial/01.png'
													alt='testi-author'
												/>
											</div>
											<div className='testimonial-authors__content mt-10'>
												<h4 className='sub-title'>Georgia Laila</h4>
												<p>Full Stack Developer</p>
											</div>
										</div>
										<p>
											" Lorem ipsum dolor sit amet, consetetur sadip scing
											elitr, sed di nonumy eirmod tempor invidt utlabore et
											dolore magn aliq erat.
										</p>
										<div className='quote-icon mt-20'>
											<img src='assets/img/icon/quote.svg' alt='quote-icon' />
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-4'>
								<div className='item'>
									<div className='testimonial-wrapper mb-30'>
										<div className='testimonial-authors overflow-hidden mb-15'>
											<div className='testimonial-authors__avatar'>
												<img
													src='assets/img/testimonial/02.png'
													alt='testi-author'
												/>
											</div>
											<div className='testimonial-authors__content mt-10'>
												<h4 className='sub-title'>Emily Gemon</h4>
												<p>User Interface</p>
											</div>
										</div>
										<p>
											" Lorem ipsum dolor sit amet, consetetur sadip scing
											elitr, sed di nonumy eirmod tempor invidt utlabore et
											dolore magn aliq erat.
										</p>
										<div className='quote-icon mt-20'>
											<img src='assets/img/icon/quote.svg' alt='quote-icon' />
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-4'>
								<div className='item'>
									<div className='testimonial-wrapper mb-30'>
										<div className='testimonial-authors overflow-hidden mb-15'>
											<div className='testimonial-authors__avatar'>
												<img
													src='assets/img/testimonial/03.png'
													alt='testi-author'
												/>
											</div>
											<div className='testimonial-authors__content mt-10'>
												<h4 className='sub-title'>Micheal George</h4>
												<p>Content Writer</p>
											</div>
										</div>
										<p>
											" Lorem ipsum dolor sit amet, consetetur sadip scing
											elitr, sed di nonumy eirmod tempor invidt utlabore et
											dolore magn aliq erat.
										</p>
										<div className='quote-icon mt-20'>
											<img src='assets/img/icon/quote.svg' alt='quote-icon' />
										</div>
									</div>
								</div>
							</div>
							<div className='col-xl-4'>
								<div className='item'>
									<div className='testimonial-wrapper mb-30'>
										<div className='testimonial-authors overflow-hidden mb-15'>
											<div className='testimonial-authors__avatar'>
												<img
													src='assets/img/testimonial/01.png'
													alt='testi-author'
												/>
											</div>
											<div className='testimonial-authors__content mt-10'>
												<h4 className='sub-title'>Georgia Laila</h4>
												<p>Full Stack Developer</p>
											</div>
										</div>
										<p>
											" Lorem ipsum dolor sit amet, consetetur sadip scing
											elitr, sed di nonumy eirmod tempor invidt utlabore et
											dolore magn aliq erat.
										</p>
										<div className='quote-icon mt-20'>
											<img src='assets/img/icon/quote.svg' alt='quote-icon' />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='row'>
							<div
								className='col-lg-12 text-center mt-20 mb-30 wow fadeInUp2 animated'
								data-wow-delay='.4s'
							>
								<a href='blog-details.html' className='theme_btn'>
									Read All Reviews
								</a>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</>
	);
}
