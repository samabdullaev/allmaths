import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='footer-area pt-70 pb-40'>
			<div className='container'>
				<div className='row mb-15'>
					<div
						className='col-xl-3 col-lg-3 col-md-6 wow fadeInUp2 animated'
						data-wow-delay='.1s'
					>
						<div className='footer__widget mb-30'>
							<div className='footer-log mb-20'>
								<Link href='/'>
									<a className='logo'>
										<img src='/assets/img/logo/header_logo_two.png' alt='' />
									</a>
								</Link>
							</div>
							<p>
								Our mission is to provide students with resources that make even
								the most difficult topics easy to learn.
							</p>
							<div className='social-media footer__social mt-30'>
								<a href='#'>
									<i className='fab fa-facebook-f' />
								</a>
								<a href='#'>
									<i className='fab fa-twitter' />
								</a>
								<a href='#'>
									<i className='fab fa-linkedin-in' />
								</a>
								<a href='#'>
									<i className='fab fa-google-plus-g' />
								</a>
							</div>
						</div>
					</div>
					<div
						className='col-xl-3 col-lg-3 col-md-6 wow fadeInUp2 animated'
						data-wow-delay='.3s'
					>
						<div className='footer__widget mb-30 pl-40 pl-md-0 pl-xs-0'>
							<h6 className='widget-title mb-35'>Contact us</h6>
							<ul className='fot-list'>
								<li>
									<a>abdullaevsamandar2004@gmail.com</a>
								</li>
								<li>
									<a>+44 7729 598105</a>
								</li>
								<li>
									<a>Roberts Way, Hatfield, Hertfordshire, AL10 9UX, UK</a>
								</li>
							</ul>
						</div>
					</div>
					<div
						className='col-xl-3 col-lg-4 col-md-6 wow fadeInUp2 animated'
						data-wow-delay='.5s'
					>
						<div className='footer__widget mb-25 pl-90 pl-md-0 pl-xs-0'>
							<h6 className='widget-title mb-35'>Quick Links</h6>
							<ul className='fot-list'>
								<li>
									<Link href='/'>
										<a>Home</a>
									</Link>
								</li>
								<li>
									<Link href='/about'>
										<a>About</a>
									</Link>
								</li>
								<li>
									<Link href='/faq'>
										<a>FAQ</a>
									</Link>
								</li>
								<li>
									<Link href='/contact'>
										<a>Contact</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
