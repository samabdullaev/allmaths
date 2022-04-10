const GreatDealsCard = ({ item }) => {
	return (
		<div className='single-item'>
			<div className='single-box mb-30'>
				<div className='single-box__icon mb-25'>
					<img src={item.icon} alt='' />
				</div>
				<h5
					className='sub-title mb-10'
					style={{
						fontSize: '18px',
					}}
				>
					{item.title}
				</h5>
				<p
					style={{
						height: '53px',
					}}
				>
					{item.text}
				</p>
			</div>
		</div>
	);
};

export default GreatDealsCard;
