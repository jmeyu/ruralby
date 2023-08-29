import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'tzw45jpf',
	dataset: 'production',
	apiVersion: '2023-08-29',
	useCdn: false // development
});

export default client;