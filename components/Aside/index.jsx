import Link from 'next/link';

const Aside = () => {
	return (
		<aside className='slide-bar'>
			<div className='close-mobile-menu'>
				<a href='javascript:void(0);'>
					<i className='fas fa-times' />
				</a>
			</div>
			{/* offset-sidebar start */}
			<div className='offset-sidebar'>
				<div className='offset-widget offset-logo mb-30'>
					<a href='index-2.html'>
						<img src='/assets/img/logo/header_logo_two.png' alt='logo' />
					</a>
				</div>
				<div className='offset-widget mb-40'>
					<div className='info-widget'>
						<h4 className='offset-title mb-20'>About Us</h4>
						<p className='mb-30'>
							But I must explain to you how all this mistaken idea of denouncing
							pleasure and praising pain was born and will give you a complete
							account of the system and expound the actual teachings of the
							great explore
						</p>
						<a className='theme_btn theme_btn_bg' href='contact.html'>
							Contact Us
						</a>
					</div>
				</div>
				<div className='offset-widget mb-30 pr-10'>
					<div className='info-widget info-widget2'>
						<h4 className='offset-title mb-20'>Contact Info</h4>
						<p>
							<i className='fal fa-address-book' /> 23/A, Miranda City Likaoli
							Prikano, Dope
						</p>
						<p>
							<i className='fal fa-phone' /> +0989 7876 9865 9
						</p>
						<p>
							<i className='fal fa-envelope-open' /> info@example.com
						</p>
					</div>
				</div>
			</div>
			{/* offset-sidebar end */}
			{/* side-mobile-menu start */}
			<nav className='side-mobile-menu'>
				<ul id='mobile-menu-active'>
					<li>
						<Link href='/'>
							<a>Home</a>
						</Link>
						<Link href='/about'>
							<a>About</a>
						</Link>
						<Link href='/faq'>
							<a>FAQ</a>
						</Link>
						<Link href='/contact'>
							<a>Contact</a>
						</Link>
					</li>
				</ul>
			</nav>
			{/* side-mobile-menu end */}
		</aside>
	);
};

export default Aside;
