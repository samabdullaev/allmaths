'use client';
import { client } from 'client';
import Breadcrumb from 'components/Breadcrumb';
import FeaturedCourses from 'components/FeaturedCourses';
import Loader from 'components/Loader';
import { useEffect, useState } from 'react';

const BooksPage = () => {
	const [stages, setStages] = useState([]);

	useEffect(() => {
		const query = `*[_type == "stage"] {
  _id,
  title,
  years[]->{
    _id,
    title,
    books[]->{
      _id,
      title,
			image,
			url
    }
  }
}`;

		client.fetch(query).then((data) => {
			const sorted = data.sort((a, b) => a.title.localeCompare(b.title));
			setStages(sorted);
		});
	}, []);

	if (!stages.length) {
		return <Loader />;
	}
	return (
		<div className='page__container'>
			<Breadcrumb title={'Books'} />
			<FeaturedCourses stages={stages} />
		</div>
	);
};

export default BooksPage;
