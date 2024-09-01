import { client, urlFor } from 'client';
import Breadcrumb from 'components/Breadcrumb';
import VideoCard from 'components/cards/VideoCard';
import Loader from 'components/Loader';
import PlayList from 'components/PlayList';
import YoutubePlayer from 'components/YoutubePlayer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
const VideoPage = () => {
	const [loading, setLoading] = useState(true);
	const [topic, setTopic] = useState(null);
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [relatedTopics, setRelatedTopics] = useState([]);
	const router = useRouter();
	const id = router.query.id;

	useEffect(() => {
		if (id) {
			if (id) {
				const query = `{
					"currentTopic": *[_type == "topic" && _id == $id]{
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
					}[0],
					"relatedTopics": *[_type == "topic" && _id != $id] | order(_createdAt desc)[0...5]{
						_id,
						title,
						image
					}
				}`;
			}
			client.fetch(query, { id }).then((data) => {
				setTopic(data.currentTopic);
				setSelectedVideo(data.currentTopic?.videos[0]) || {};
				setRelatedTopics(data.relatedTopics || []);
				setLoading(false);
			});
		}
	}, [id]);

	if (loading) {
		return <Loader />;
	}

	if (!topic || !selectedVideo) {
		return <h1>Video not found</h1>;
	}
	return (
		<div className='page__container'>
			<Breadcrumb
				title={topic.title}
				subTitle='Videos'
				path={`/videos/${topic.id}`}
			/>
			<section className='course-details-area pt-70 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70'>
				<div className='container'>
					<div className='row mb-50'>
						<div className='col-xxl-8 col-xl-7 '>
							<div className='courses-details-wrapper mb-30'>
								<h2 className='courses-title mb-30'>{selectedVideo.title}</h2>

								{/* <div className='video-wrapper'>
										<a href={selectedVideo.url} className='popup-video'>
											<i className='fas fa-play' />
										</a>
									</div> */}
								<YoutubePlayer url={selectedVideo.url} />
							</div>
						</div>
						<PlayList
							data={topic.videos}
							current={selectedVideo}
							setSelectedVideo={setSelectedVideo}
						/>
					</div>
					<div className='row'>
						<div className='col-xl-6 col-lg-7'>
							<div className='project-details mb-20'>
								<p>{topic.description}</p>
							</div>
							<div className='project-details '>
								<p>{selectedVideo.text}</p>
							</div>
						</div>
						{/* <VideoDetails /> */}
					</div>
				</div>
			</section>
			<section className='feature-course pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80'>
				<div className='container'>
					<h2 className='courses-title mb-35'>Related Topics</h2>
					<div className='row'>
						{relatedTopics
							?.filter((item) => item.id !== Number(id))
							.map((item, index) => (
								<VideoCard
									key={index}
									id={item._id}
									title={item.title}
									image={urlFor(item.image)}
								/>
							))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default VideoPage;
