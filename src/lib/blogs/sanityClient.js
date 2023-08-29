import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'wto9a8r0',
	dataset: 'production',
	apiVersion: '2023-08-29',
	useCdn: false // development
});

export default client;