import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_REACT_APP_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_REACT_APP_SANITY_DATASET,
	token: process.env.NEXT_PUBLIC_REACT_APP_SANITY_PROJECT_TOKEN,
	useCdn: true,
	apiVersion: '2022-03-07',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
