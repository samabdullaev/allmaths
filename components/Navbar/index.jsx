import Link from 'next/link';
const Navbar = () => {
	return (
		<header>
			<div
				id='theme-menu-one'
				className='main-header-area pl-100 pr-100 pt-20 pb-15'
			>
				<div className='container-fluid'>
					<div className='row align-items-center'>
						<div className='col-xl-2 col-lg-2 col-5'>
							<div className='logo'>
								<Link href='/'>
									<a>
										<img src='/assets/img/logo/header_logo_two.png' alt='' />
									</a>
								</Link>
							</div>
						</div>
						<div className='col-xl-7 col-lg-8 d-none d-lg-block'>
							<nav className='main-menu navbar navbar-expand-lg justify-content-center'>
								<div className='nav-container'>
									<div
										className='collapse navbar-collapse'
										id='navbarSupportedContent'
									>
										<ul className='navbar-nav'>
											<li className='nav-item dropdown mega-menu'>
												<a
													className='nav-link dropdown-toggle'
													href='#'
													id='navbarDropdown'
													role='button'
													data-bs-toggle='dropdown'
													aria-expanded='false'
												>
													All Categories
												</a>
												<ul
													className='dropdown-menu submenu mega-menu__sub-menu-box'
													aria-labelledby='navbarDropdown'
												>
													<li>
														<Link href='/videos'>
															<a>
																<span>
																	<img
																		src='assets/img/icon/icon14.svg'
																		alt=''
																	/>
																</span>
																Videos
															</a>
														</Link>
													</li>
													<li>
														<Link href='/worksheets'>
															<a>
																<span>
																	<img
																		src='assets/img/icon/icon12.svg'
																		alt=''
																	/>
																</span>
																Worksheets
															</a>
														</Link>
													</li>
													<li>
														<Link href='/curiculum'>
															<a>
																<span>
																	<img
																		src='assets/img/icon/icon11.svg'
																		alt=''
																	/>
																</span>
																Curiculum
															</a>
														</Link>
													</li>
													<li>
														<Link href='/books'>
															<a>
																<span>
																	<img
																		src='assets/img/icon/icon13.svg'
																		alt=''
																	/>
																</span>
																Books
															</a>
														</Link>
													</li>
													<li>
														<Link href='/games'>
															<a>
																<span>
																	<img src='assets/img/icon/icon9.svg' alt='' />
																</span>
																Games
															</a>
														</Link>
													</li>
												</ul>
											</li>

											<li className='nav-item'>
												<Link href='/'>
													<a
														className='nav-link'
														role='button'
														aria-expanded='false'
													>
														Home
													</a>
												</Link>
											</li>
											<li className='nav-item'>
												<Link href='/about'>
													<a
														className='nav-link'
														role='button'
														aria-expanded='false'
													>
														About
													</a>
												</Link>
											</li>
											<li className='nav-item'>
												<Link href='/faq'>
													<a
														className='nav-link'
														role='button'
														aria-expanded='false'
													>
														FAQ
													</a>
												</Link>
											</li>
											<li className='nav-item'>
												<Link href='/contact'>
													<a
														className='nav-link'
														role='button'
														aria-expanded='false'
													>
														Contact
													</a>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</nav>
						</div>
						<div className='col-xl-3 col-lg-2 col-7'>
							<div className='right-nav d-flex align-items-center justify-content-end'>
								<div className='right-btn mr-25 mr-xs-15'></div>
								<div className='hamburger-menu d-md-inline-block d-lg-none text-right'>
									<a href='javascript:void(0);'>
										<i className='far fa-bars' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* /.theme-main-menu */}
		</header>
	);
};

export default Navbar;
