import Breadcrumb from 'components/Breadcrumb';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { client } from 'client';
import Loader from 'components/Loader';
const FaqPage = () => {
	const [faq, setFaq] = useState([]);

	useEffect(() => {
		const query = `*[_type == "faq"]`;

		client.fetch(query).then((data) => {
			setFaq(data);
		});
	}, []);

	console.log('faq: ', faq);

	if (!faq.length) {
		return <Loader />;
	}

	return (
		<div style={{ paddingTop: '130px' }}>
			<Breadcrumb title='FAQ' path='/faq' />

			<section className='faq-area pt-150 pb-120 pt-xs-95 pb-xs-90'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-12'>
							<div className='faq-que-list mb-30'>
								<div className='section-title text-center mb-45'>
									<h2 className='mb-25'>Frequently Asked Question</h2>
								</div>
								<div className='accordion accordion-two' id='accoedion-ex-two'>
									{faq.map((item, index) => (
										<div key={item._id} className='accordion-item mb-30'>
											<h2
												className='accordion-header'
												id={`heading-${item._id}`}
											>
												<button
													className={`accordion-button ${
														index > 0 && 'collapsed'
													}`}
													type='button'
													data-bs-toggle='collapse'
													data-bs-target={`#item_${item._id}`}
													aria-expanded='false'
													aria-controls={`item_${item._id}`}
												>
													{item.question}
												</button>
											</h2>
											<div
												id={`item_${item._id}`}
												className={`accordion-collapse collapse ${
													index === 0 && 'show'
												}`}
												aria-labelledby={`heading-${item._id}`}
												data-bs-parent='#accoedion-ex-two'
											>
												<div className='accordion-body'>
													<p>{item.answer}</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className='faq-btn text-center mt-50'>
							<Link href='/contact'>
								<a className='theme_btn faq_btn'>Ask Your Questions</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
			{/* faq-area end */}
		</div>
	);
};

export default FaqPage;
