import Breadcrumb from 'components/Breadcrumb';
import ContactForm from 'components/ContactForm';

const ContactPage = () => {
	return (
		<div
			style={{
				paddingTop: '130px',
			}}
		>
			<Breadcrumb title='Contact' path='/contact' />

			<section className='contact-us-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-xl-6 col-lg-6'>
							<div className='contact-img mb-30'>
								<img
									className='img-fluid'
									src='assets/img/contact/01.jpg'
									alt=''
								/>
							</div>
						</div>
						<div className='col-xl-6 col-lg-6'>
							<div className='contact-wrapper pl-75 mb-30'>
								<div className='section-title mb-30'>
									<h2>Get In Touch With Us</h2>
								</div>
								<div className='single-contact-box mb-30'>
									<div className='contact__iocn'>
										<img
											src='assets/img/icon/material-location-on.svg'
											alt=''
										/>
									</div>
									<div className='contact__text' style={{ width: '400px' }}>
										<h5>Roberts Way, Hatfield, Hertfordshire, AL10 9UX, UK</h5>
									</div>
								</div>
								<div className='single-contact-box cb-2 mb-30'>
									<div className='contact__iocn'>
										<img src='assets/img/icon/phone-alt.svg' alt='' />
									</div>
									<div className='contact__text'>
										<h5>+44 7729 598105</h5>
										<h5>+44 7802 274613</h5>
									</div>
								</div>
								<div className='single-contact-box cb-3 mb-30'>
									<div className='contact__iocn'>
										<img src='assets/img/icon/feather-mail.svg' alt='' />
									</div>
									<div className='contact__text' style={{ width: '450px' }}>
										<h5>abdullaevsamandar2004@gmail.com</h5>
										<h5>maryam4had@gmail.com</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*contact-us-area end*/}
			{/*contact-map-area start*/}
			<section className='contact-map-area'>
				<div className='container-fluid px-0'>
					<div className='row gx-0'>
						<div className='col-lg-12'>
							<div className='conatct-map'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10019.512355675912!2d90.3779420697561!3d23.95217349394493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1625130888507!5m2!1sen!2sbd'
									style={{ border: 0 }}
									allowFullScreen
									loading='lazy'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*contact-map-area end*/}
			{/*contact-form-area start*/}
			<section className='contact-form-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-6'>
							<ContactForm />
						</div>
						<div className='col-lg-6'>
							<div className='contact-img contact-img-02 mb-30'>
								<img
									className='img-fluid'
									src='assets/img/contact/02.jpg'
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*contact-form-area end*/}
		</div>
	);
};

export default ContactPage;
