import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='manifest' href='site.html' />
				<link
					rel='shortcut icon'
					type='image/x-icon'
					href='/assets/img/favicon.png'
				/>
				<link rel='stylesheet' href='/assets/css/bootstrap.min.css' />
				<link rel='stylesheet' href='/assets/css/owl.carousel.min.css' />
				<link rel='stylesheet' href='/assets/css/animate.css' />
				<link rel='stylesheet' href='/assets/css/magnific-popup.css' />
				<link rel='stylesheet' href='/assets/css/all.min.css' />
				<link rel='stylesheet' href='/assets/css/flaticon.css' />
				<link rel='stylesheet' href='/assets/css/font.css' />
				<link rel='stylesheet' href='/assets/css/metisMenu.css' />
				<link rel='stylesheet' href='/assets/css/nice-select.css' />
				<link rel='stylesheet' href='/assets/css/slick.css' />
				<link rel='stylesheet' href='/assets/css/spacing.css' />
				<link rel='stylesheet' href='/assets/css/main.css' />
				<script src='/assets/js/vendor/modernizr-3.5.0.min.js'></script>
				<script src='/assets/js/vendor/jquery-2.2.4.min.js'></script>
				<script src='/assets/js/popper.min.js'></script>
				<script src='/assets/js/bootstrap.min.js'></script>
				<script src='/assets/js/owl.carousel.min.js'></script>
				<script src='/assets/js/isotope.pkgd.min.js'></script>
				<script src='/assets/js/slick.min.js'></script>
				<script src='/assets/js/metisMenu.min.js'></script>
				<script src='/assets/js/jquery.nice-select.js'></script>
				<script src='/assets/js/ajax-form.js'></script>
				<script src='/assets/js/wow.min.js'></script>
				<script src='/assets/js/jquery.counterup.min.js'></script>
				<script src='/assets/js/waypoints.min.js'></script>
				<script src='/assets/js/jquery.scrollUp.min.js'></script>
				<script src='/assets/js/imagesloaded.pkgd.min.js'></script>
				<script src='/assets/js/jquery.magnific-popup.min.js'></script>
				<script src='/assets/js/jquery.easypiechart.js'></script>
				<script src='/assets/js/plugins.js'></script>
				<script
					crossOrigin
					src='https://unpkg.com/react@17/umd/react.development.js'
				></script>
				<script
					crossOrigin
					src='https://unpkg.com/react-dom@17/umd/react-dom.development.js'
				></script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
