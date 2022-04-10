import Breadcrumb from 'components/Breadcrumb';
import FeaturedCourses from 'components/FeaturedCourses';

const BooksPage = () => {
	return (
		<div className='page__container'>
			<Breadcrumb title={'Books'} />
			<FeaturedCourses />
		</div>
	);
};

export default BooksPage;
