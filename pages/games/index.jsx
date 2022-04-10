import { useEffect } from 'react';
import $ from 'jquery';
const ExternalPages = () => {
	return (
		<div
			style={{
				margin: 0,
				padding: 0,
				minHeight: '100vh',
				overflow: 'hidden',
				overFloY: 'hidden',
			}}
		>
			<iframe
				id='frame'
				src='https://www.education.com/games/math/'
				width='100%'
				style={{
					marginTop: '-100px',
					border: 'none',
					width: '100%',
					height: 'calc(100% + 100px)',
					position: 'absolute',
				}}
				// srcDoc='<footer><h1>Hello</h1></footer>'
				// sandbox='allow-scripts allow-modal'
				loading='eager'
			></iframe>
		</div>
	);
};

export default ExternalPages;
