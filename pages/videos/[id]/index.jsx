import Breadcrumb from 'components/Breadcrumb';
import VideoCard from 'components/cards/VideoCard';
import Loader from 'components/Loader';
import PlayList from 'components/PlayList';
import YoutubePlayer from 'components/YoutubePlayer';
import { VIDEOS_DATA } from 'data/videos';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
const VideoPage = () => {
	const [loading, setLoading] = useState(true);
	const [video, setVideo] = useState(null);
	const [selectedVideo, setSelectedVideo] = useState(null);
	const router = useRouter();
	const id = router.query.id;

	useEffect(() => {
		if (id) {
			const v = VIDEOS_DATA.find((item) => item.id === Number(id));
			if (v) {
				setVideo(v);
				setSelectedVideo(v.videos[0]);
				setLoading(false);
			}
		}
	}, [id]);

	console.log('selectedVideo: ', selectedVideo);

	if (loading) {
		return <Loader />;
	}

	if (!video || !selectedVideo) {
		return <h1>Video not found</h1>;
	}
	return (
		<div className='page__container'>
			<Breadcrumb
				title={video.title}
				subTitle='Videos'
				path={`/videos/${video.id}`}
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
							data={video.videos}
							current={selectedVideo}
							setSelectedVideo={setSelectedVideo}
						/>
					</div>
					<div className='row'>
						<div className='col-xl-6 col-lg-7'>
							<div className='project-details mb-20'>
								<p>{video.description}</p>
							</div>
							<div className='project-details '>
								<p>{selectedVideo.text}</p>
							</div>
						</div>
						{/* <VideoDetails /> */}
					</div>
				</div>
			</section>
			{/*course-details-area end*/}
			{/* feature-course start */}
			<section className='feature-course pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80'>
				<div className='container'>
					<h2 className='courses-title mb-35'>Related Topics</h2>
					<div className='row'>
						{VIDEOS_DATA?.filter((item) => item.id !== Number(id))
							.slice(0, 3)
							.map((item, index) => (
								<VideoCard
									key={index}
									id={item.id}
									title={item.title}
									image={item.image}
								/>
							))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default VideoPage;
