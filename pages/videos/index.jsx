import { client, urlFor } from 'client';
import Breadcrumb from 'components/Breadcrumb';
import VideoCard from 'components/cards/VideoCard';
import Loader from 'components/Loader';
import { useEffect, useState } from 'react';
const VideosPage = () => {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		const query = `*[_type == "topic"]{
  _id,
  title,
  image,
  description,
  "videos": videos[]->{
    _id,
    title,
    url,
    text
  }
}
`;

		client.fetch(query).then((data) => {
			const sorted = data.sort((a, b) => a.title.localeCompare(b.title));
			setTopics(sorted);
		});
	}, []);

	if (!topics.length) {
		return <Loader />;
	}

	return (
		<div className='page__container'>
			<Breadcrumb title={'Videos'} />
			<section className='feature-course pt-50 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-12'>
							<div className='row'>
								{topics?.map((item, index) => (
									<VideoCard
										key={index}
										id={item._id}
										title={item.title}
										image={urlFor(item.image)}
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
