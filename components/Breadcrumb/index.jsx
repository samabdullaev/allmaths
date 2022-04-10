import Link from 'next/link';

const Breadcrumb = ({ title, path, subTitle }) => {
	return (
		<section
			className='page-title-area d-flex align-items-end'
			style={{ backgroundImage: 'url(/assets/img/page-title-bg/01.jpg)' }}
		>
			<div className='container'>
				<div className='row align-items-end'>
					<div className='col-lg-12'>
						<div className='page-title-wrapper mb-50'>
							<h1 className='page-title mb-25'>{title}</h1>
							<div className='breadcrumb-list'>
								<ul className='breadcrumb'>
									<li>
										<Link href='/'>
											<a style={{ paddingRight: '5px' }}>Home /</a>
										</Link>
									</li>
									{subTitle && (
										<li>
											<Link href={`${path}`}>
												<a style={{ paddingRight: '5px' }}> {subTitle} / </a>
											</Link>
										</li>
									)}
									<li>
										<Link href={`${path}`}>
											<a> {title}</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Breadcrumb;
