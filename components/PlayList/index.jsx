const PlayList = ({ data, current, setSelectedVideo }) => {
	return (
		<div className='col-xxl-4 col-xl-5'>
			<div className='learn-area mb-30'>
				<div className='learn-box'>
					<h5>5 Lessons</h5>
					<ul className='learn-list'>
						{data?.map((item, index) => (
							<li
								key={index}
								onClick={() => setSelectedVideo(item)}
								style={{
									cursor: 'pointer',
								}}
							>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
									}}
								>
									{item.title === current.title ? (
										<span className='play-video'>
											<img
												src='/assets/img/icon/video-player.svg'
												alt='course-list'
											/>
										</span>
									) : (
										<span className='play-video'>
											<i className='fal fa-lock-alt' />
										</span>
									)}
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
											marginLeft: '15px',
											color: item.title === current.title ? 'red' : '',
											fontSize: item.title === current.title ? '18px' : '',
										}}
									>
										{' '}
										<div
											style={{
												marginRight: '10px',
											}}
										>
											0{index + 1}.
										</div>
										<div> {item.title}</div>
									</div>
									{/* <span className='time float-end'>2:03</span> */}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PlayList;
