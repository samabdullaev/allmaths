import { urlFor } from 'client';
import BookCard from 'components/cards/BookCard';
import { BOOKS_DATA } from 'data/books';

const FeaturedCourses = ({ stages }) => {
	return (
		<section className='feature-course pt-50 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80'>
			<div className='container'>
				<div className='row'>
					<div className='col-xl-12'></div>
				</div>
				{stages?.map((stage, index) => (
					<div key={index} className='section-title text-center mb-50'>
						<h2 className='text-danger'>{stage.title}</h2>
						{stage.years?.map((year, index) => (
							<div key={index}>
								<div className='row justify-content-center'>
									<h3 className='mt-40 mb-40 text-success'>
										<b>{year.title}</b>
									</h3>
								</div>
								<div className='grid row'>
									{year?.books?.map((book, index) => (
										<BookCard
											key={index}
											title={book.title}
											image={urlFor(book.image)}
											url={book.url}
										/>
									))}
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	);
};

export default FeaturedCourses;
