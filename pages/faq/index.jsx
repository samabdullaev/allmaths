import Breadcrumb from 'components/Breadcrumb';
import Link from 'next/link';

const FaqPage = () => {
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
									<div className='accordion-item mb-30'>
										<h2 className='accordion-header' id='headingOne'>
											<button
												className='accordion-button'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#collapseOne'
												aria-expanded='true'
												aria-controls='collapseOne'
											>
												Should every child be expected to cope with fluency,
												reasoning and problem-solving questions?
											</button>
										</h2>
										<div
											id='collapseOne'
											className='accordion-collapse collapse show'
											aria-labelledby='headingOne'
											data-bs-parent='#accoedion-ex-two'
										>
											<div className='accordion-body'>
												<p>
													The three main aims of the national curriculum are for
													all children to be fluent, to reason and to problem
													solve. It’s therefore vital that all children can
													access all the questions. Some children may require
													more support at times, but we would still expect them
													to be exposed to reasoning and problem-solving
													questions. We’ve varied the level of challenge in our
													reasoning and problem-solving questions so that some
													are accessible to every child while others help
													stretch thinking and deepen understanding.
												</p>
											</div>
										</div>
									</div>
									<div className='accordion-item mb-30'>
										<h2 className='accordion-header' id='headingTwo'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#collapseTwo'
												aria-expanded='false'
												aria-controls='collapseTwo'
											>
												Why is number so heavily weighted?
											</button>
										</h2>
										<div
											id='collapseTwo'
											className='accordion-collapse collapse'
											aria-labelledby='headingTwo'
											data-bs-parent='#accoedion-ex-two'
										>
											<div className='accordion-body'>
												<p>
													We believe that number underpins almost every area of
													mathematics. Without firm foundations in number,
													children are likely to struggle with other aspects of
													mathematics, for example, calculating area in
													geometry. That is why our schemes devote so much time
													to number.
												</p>
											</div>
										</div>
									</div>
									<div className='accordion-item mb-30'>
										<h2 className='accordion-header' id='headingThree'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#collapseThree'
												aria-expanded='false'
												aria-controls='collapseThree'
											>
												What age range is your website materials suitable for?
											</button>
										</h2>
										<div
											id='collapseThree'
											className='accordion-collapse collapse'
											aria-labelledby='headingThree'
											data-bs-parent='#accoedion-ex-two'
										>
											<div className='accordion-body'>
												<p>
													We help children aged 3-15 to achieve their potential.
													If you feel your child would still benefit from our
													tutoring beyond the age of 15, please carry on
													following us.
												</p>
											</div>
										</div>
									</div>
									<div className='accordion-item mb-30'>
										<h2 className='accordion-header' id='headingFour'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#collapseFour'
												aria-expanded='false'
												aria-controls='collapseFour'
											>
												How do I monitor my child’s progress?
											</button>
										</h2>
										<div
											id='collapseFour'
											className='accordion-collapse collapse'
											aria-labelledby='headingFour'
											data-bs-parent='#accoedion-ex-two'
										>
											<div className='accordion-body'>
												<p>
													If your child is keen to learn, regularly asks
													questions and is confident and happy, then they are
													making their own progress. You might notice they are
													asking more complex questions on a day out, or that
													their vocabulary has expanded, or they are pointing
													out greater details when reading with you. If your
													child responds well to a more structured pattern of
													learning, you could try consolidating learning through
													self-assessment tests and assignments.
												</p>
											</div>
										</div>
									</div>
									<div className='accordion-item mb-30'>
										<h2 className='accordion-header' id='headingFive'>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#collapseFive'
												aria-expanded='false'
												aria-controls='collapseFive'
											>
												Does my child need to take SATs or other tests?
											</button>
										</h2>
										<div
											id='collapseFive'
											className='accordion-collapse collapse'
											aria-labelledby='collapseFour'
											data-bs-parent='#accoedion-ex-two'
										>
											<div className='accordion-body'>
												<p>
													No, but they can take these exams as an external
													candidate at exam centres such as colleges – you can
													contact them directly to find out how.
												</p>
											</div>
										</div>
									</div>
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
