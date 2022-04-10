import Link from 'next/link';

const LookingForCard = ({
	title,
	text,
	icon,
	buttonText,
	link,
	buttonStyle,
}) => {
	return (
		<div className='col-xl-6 col-lg-6 col-md-6'>
			<div className='what-box text-center mb-3'>
				<div className='what-box__icon mb-30'>
					<img src={icon} alt='' />
				</div>
				<h3>{title}</h3>
				<p>{text}</p>
				<Link href={link}>
					<a className={`theme_btn border_btn ${buttonStyle}`}>{buttonText}</a>
				</Link>
			</div>
		</div>
	);
};

export default LookingForCard;
