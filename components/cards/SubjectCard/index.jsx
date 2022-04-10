import Link from 'next/link';

const SubjectCard = ({ icon, title, link }) => {
	return (
		<div className='col'>
			<div
				className='single-category text-center mb-30 wow fadeInUp2 animated'
				data-wow-delay='.1s'
			>
				<img
					style={{
						width: '80px',
						height: '80px',
						objectFit: 'contain',
					}}
					className='mb-30'
					src={icon}
					alt=''
				/>
				<h4 className='sub-title mb-10'>
					<Link href={link}>
						<a>{title}</a>
					</Link>
				</h4>
			</div>
		</div>
	);
};

export default SubjectCard;
