const ExternalPages = () => {
	return (
		<div
			style={{
				margin: 0,
				padding: 0,
				minHeight: '100vh',
				overflow: 'hidden',
				position: 'relative',
			}}
		>
			<iframe
				id='frame'
				src='http://mathsanswers.org.uk/gcse/'
				width='100%'
				style={{
					marginTop: '140px',
					border: 'none',
					width: '100%',
					height: '100vh',
					position: 'absolute',
					top: 0,
					left: 0,
				}}
				loading='eager'
			></iframe>
			{/* Overlay to hide the navbar */}
			<div
				style={{
					position: 'absolute',

					top: 0,
					left: 0,
					width: '100%',
					height: '140px', // Adjust height based on the navbar size
					backgroundColor: '#fff', // Or match the background color of the iframe content
					zIndex: 10,
				}}
			></div>
		</div>
	);
};

export default ExternalPages;
