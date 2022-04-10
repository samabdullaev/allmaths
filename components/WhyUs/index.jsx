import Link from 'next/link';

const WhyUs = () => {
	return (
		<div className='why-chose-section-wrapper gradient-bg mr-100 ml-100'>
			{/* why-chose-us start */}
			<section className='why-chose-us'>
				<div className='why-chose-us-bg pt-150 pb-175 pt-md-95 pb-md-90 pt-xs-95 pb-xs-90'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-xl-7 col-lg-7'>
								<div className='chose-img-wrapper mb-50 pos-rel'>
									<div
										className='feature'
										style={{
											top: '360px',
											left: '-30px',
										}}
									>
										<span>
											<i className='fal fa-play' />
										</span>{' '}
										200+ Educational Videos
									</div>
									<div className='feature tag_01'>
										<span>
											{/* <img src='assets/img/icon/shield-check.svg' alt='' /> */}
											<i className='fal fa-gamepad' />
										</span>
										450+ Interesting Games
									</div>
									<div className='feature tag_02'>
										<span>
											<img src='assets/img/icon/catalog.svg' alt='' />
										</span>
										120+ Worksheets
									</div>
									<div className='feature tag_03'>
										<span>
											<i className='fal fa-check' />
										</span>{' '}
										Quality Education
									</div>
									<div className='video-wrapper'>
										<a
											href='https://www.youtube.com/watch?v=7omGYwdcS04'
											className='popup-video'
										>
											<i className='fas fa-play' />
										</a>
									</div>
									<div className='img-bg pos-rel'>
										<img
											className='chose_05 pl-70 pl-lg-0 pl-md-0 pl-xs-0'
											src='assets/img/chose/05.png'
											alt='Chose-img'
										/>
									</div>
									<img
										className='chose chose_06'
										src='assets/img/shape/dot-box3.svg'
										alt='Chose-img'
									/>
								</div>
							</div>
							<div className='col-xl-5 col-lg-5'>
								<div className='chose-wrapper pl-25 pl-lg-0 pl-md-0 pl-xs-0'>
									<div
										className='section-title mb-30 wow fadeInUp2 animated'
										data-wow-delay='.1s'
									>
										<h5 className='bottom-line mb-25'>Explore AllMaths</h5>
										<h2 className='mb-25'>Help Your Child</h2>
										<p>
											You do not need to be an expert to support your child with
											maths! Here are simple but effective ways to help your
											child develop their understanding of mathematics:
										</p>
									</div>
									<ul
										className='text-list mb-40 wow fadeInUp2 animated'
										data-wow-delay='.2s'
									>
										<li>Use real objects to develop early understanding</li>
										<li>
											Ask your child to explain each stage of their solution
										</li>
										<li>Practice mathematics playing our games</li>
									</ul>
									<Link href='/about'>
										<a
											className='theme_btn wow fadeInUp2 animated'
											data-wow-delay='.3s'
										>
											More Details
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default WhyUs;
