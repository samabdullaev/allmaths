const BookCard = ({ title, image, url }) => {
	return (
		<div className='col-lg-4 col-md-6 grid-item cat2 cat3'>
			<div className='z-gallery mb-30'>
				<div className='z-gallery__thumb mb-20'>
					<img
						style={{
							height: '250px',
							objectFit: 'cover',
						}}
						className='img-fluid'
						src={image}
						alt=''
					/>
				</div>
				<div className='z-gallery__content pt-3'>
					<h4
						className='sub-title text-center'
						style={{
							height: '80px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<a target={'_blank'} rel='noopener noreferrer' href={url}>
							{title}
						</a>
					</h4>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
