import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_REACT_APP_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_REACT_APP_SANITY_DATASET,
	token: process.env.NEXT_PUBLIC_REACT_APP_SANITY_PROJECT_TOKEN,
	useCdn: true,
	apiVersion: '2022-03-07',
});
export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { fullName, lastName, phoneNumber, address, emailName, message } =
			req.body;

		// Basic validation
		if (!fullName || !lastName || !phoneNumber || !emailName || !message) {
			return res
				.status(400)
				.json({ error: 'Please fill all required fields.' });
		}

		try {
			// Create a new document in Sanity
			const newMessage = await client.create({
				_type: 'contactForm',
				fullName,
				lastName,
				phoneNumber,
				address,
				emailName,
				message,
				read: false, // Mark as unread by default
			});

			res
				.status(201)
				.json({ message: 'Message sent successfully!', data: newMessage });
		} catch (error) {
			console.error('Sanity create error:', error);
			res.status(500).json({ error: 'Failed to send message.' });
		}
	} else {
		// Handle any other HTTP method
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
