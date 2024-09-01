import { useState } from 'react';
import { toast } from 'react-toastify';
const ContactForm = () => {
	const [formData, setFormData] = useState({
		fullName: '',
		lastName: '',
		phoneNumber: '',
		address: '',
		emailName: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});

		if (res.ok) {
			toast.success('Message sent successfully!');
			setFormData({
				fullName: '',
				lastName: '',
				phoneNumber: '',
				address: '',
				emailName: '',
				message: '',
			});
		} else {
			toast.error('Failed to send message.');
		}
	};

	return (
		<div className='contact-form-wrapper mb-30'>
			<h2 className='mb-45'>Contact Us</h2>
			<form
				onSubmit={handleSubmit}
				className='row gx-3 comments-form contact-form'
			>
				<div className='col-lg-6 col-md-6 mb-30'>
					<input
						type='text'
						name='fullName'
						placeholder='Full Name'
						value={formData.fullName}
						onChange={handleChange}
					/>
				</div>
				<div className='col-lg-6 col-md-6 mb-30'>
					<input
						type='text'
						name='lastName'
						placeholder='Last Name'
						value={formData.lastName}
						onChange={handleChange}
					/>
				</div>
				<div className='col-lg-6 col-md-6 mb-30'>
					<input
						type='text'
						name='phoneNumber'
						placeholder='Phone Number'
						value={formData.phoneNumber}
						onChange={handleChange}
					/>
				</div>
				<div className='col-lg-6 col-md-6 mb-30'>
					<input
						type='text'
						name='address'
						placeholder='Address'
						value={formData.address}
						onChange={handleChange}
					/>
				</div>
				<div className='col-lg-12 mb-30'>
					<input
						type='text'
						name='emailName'
						placeholder='Email Name'
						value={formData.emailName}
						onChange={handleChange}
					/>
				</div>
				<div className='col-lg-12 mb-30'>
					<textarea
						name='message'
						cols={30}
						rows={10}
						placeholder='Write a Message'
						value={formData.message}
						onChange={handleChange}
					/>
				</div>
				<div className='col-lg-12'>
					<button type='submit' className='theme_btn message_btn mt-20'>
						Send Message
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
