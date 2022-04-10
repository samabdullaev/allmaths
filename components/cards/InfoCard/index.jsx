const InfoCard = ({ item, key }) => {
	return (
		<div key={key} className='col-lg-3 col-md-6 col-sm-6'>
			<div className={`counters text-center mb-30 ${item.class}`}>
				<h2>
					<span className='counter'>{item.title}</span>+
				</h2>
				<h5 style={{ height: '50px' }}>{item.text}</h5>
			</div>
		</div>
	);
};

export default InfoCard;
