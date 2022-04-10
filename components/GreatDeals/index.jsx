import GreatDealsCard from 'components/cards/GreateDeailsCard';
import GREAT_DEALS_DATA from 'data/greateDeals';
import { useEffect } from 'react';

const GreatDeals = () => {
	useEffect(() => {
		$('.deal-active').owlCarousel({
			loop: true,
			margin: 30,
			items: 3,
			autoplay: true,
			autoplaySpeed: 2000,
			navText: [
				'<i class="fal fa-long-arrow-left"></i>',
				'<i class="fal fa-long-arrow-right"></i>',
			],
			nav: true,
			dots: false,
			responsive: {
				0: {
					items: 1,
					margin: 0,
					nav: false,
				},
				500: {
					items: 2,
				},
				980: {
					items: 3,
				},
			},
		});
	});
	return (
		<section className='great-deal-area pt-150 pb-90 pt-md-100 pb-md-40 pt-xs-100 pb-xs-40'>
			<div className='container'>
				<div className='row justify-content-lg-center justify-content-start'>
					<div className='col-xl-3 col-lg-8'>
						<div className='deal-box mb-30 text-center text-xl-start'>
							<h2 className='mb-20'>
								<b>Great</b> Deals For You
							</h2>
							<p>
								We ensure every student has accurate information to build strong
								fundamentals.
							</p>
						</div>
					</div>
					<div className='col-xl-8'>
						<div className='deal-active owl-carousel mb-30'>
							{GREAT_DEALS_DATA?.map((item, index) => (
								<div key={index}>
									<GreatDealsCard item={item} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GreatDeals;
