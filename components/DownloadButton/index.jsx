import Link from 'next/link';

const DownloadButton = ({ title, url }) => {
	return (
		<div
			style={{
				marginTop: '30px',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<b style={{ marginRight: '20px' }}>{title}</b>

			<a
				href={url}
				rel='noopener noreferrer'
				className='btn btn-success'
				target={'_blank'}
			>
				<i className='fa fa-download'></i> Download
			</a>
		</div>
	);
};

export default DownloadButton;
