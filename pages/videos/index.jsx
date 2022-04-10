import Breadcrumb from 'components/Breadcrumb';
import VideoCard from 'components/cards/VideoCard';
import { VIDEOS_DATA } from 'data/videos';

const VideosPage = () => {
	return (
		<div className='page__container'>
			<Breadcrumb title={'Videos'} />
			<section className='feature-course pt-50 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-12'>
							<div className='row'>
								{VIDEOS_DATA?.map((item, index) => (
									<VideoCard
										key={index}
										id={item.id}
										title={item.title}
										image={item.image}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default VideosPage;
