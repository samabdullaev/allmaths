const Worksheets = () => {
	return (
		<div
			style={{
				margin: 0,
				padding: 0,
				// minHeight: '100vh',
				height: '100vh',
				overflow: 'hidden',
				backgroundColor: 'white !important',
			}}
		>
			<iframe
				id='frame'
				src='http://mathsanswers.org.uk/gcse/'
				width='100%'
				style={{
					// paddingTop: '120px',
					background: 'white !important',
					border: 'none',
					width: '100%',
					height: '100vh',
					// height: 'calc(100)',
					position: 'absolute',
				}}
				// srcDoc='<footer><h1>Hello</h1></footer>'
				// sandbox='allow-scripts allow-modal'
				loading='eager'
			></iframe>
		</div>
	);
};

export default Worksheets;
