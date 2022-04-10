import LookingForCard from 'components/cards/LookingForCard';
import SubjectCard from 'components/cards/SubjectCard';
import Link from 'next/link';

const LookingFor = () => {
	return (
		<section className='what-looking-for pos-rel'>
			<div className='what-blur-shape-one' />
			<div className='what-blur-shape-two' />
			<div className='what-look-bg gradient-bg pt-145 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8'>
							<div className='section-title text-center mb-55'>
								<h5 className='bottom-line mb-25'>Teachers &amp; Students</h5>
								<h2>What you Looking For?</h2>
							</div>
						</div>
					</div>
					<div className='row mb-85'>
						<div className='row'>
							<LookingForCard
								icon='assets/img/icon/phone-operator.svg'
								title='Do you want to teach here?'
								text='Millions of students lack opportunity to acquire basic math skills. Together, we can give it to them.'
								buttonText='Register Now'
								buttonStyle=''
								link='/contact'
							/>
							<LookingForCard
								icon='assets/img/icon/graduate.svg'
								title='Do you want to learn here?'
								text='Our clear, precise lessons give you the self-belief to conquer your next quiz or test with confidence.'
								buttonText='Start Learning '
								buttonStyle='active'
								link='/'
							/>
						</div>
					</div>
					<div className='categoris-container'>
						<div className='col-xl-12'>
							<div className='section-title text-center mb-55'>
								<h5 className='bottom-line mb-25'>Browse Categories</h5>
								<h2>Explore our Online Materials</h2>
							</div>
						</div>
						<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5'>
							<SubjectCard
								icon='assets/img/category-icon/videos.png'
								title='Videos'
								link='/videos'
							/>
							<SubjectCard
								icon='assets/img/category-icon/worksheets.png'
								title='Worksheets'
								link='/worksheets'
							/>
							<SubjectCard
								icon='assets/img/category-icon/curiculum.png'
								title='Curiculum'
								link='/curiculum'
							/>
							<SubjectCard
								icon='assets/img/category-icon/books.png'
								title='Books'
								link='/books'
							/>
							<SubjectCard
								icon='assets/img/category-icon/games.png'
								title='Games'
								link='/games'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LookingFor;
