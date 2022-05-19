import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

//* connecting sanity backend server to the client
export const client = sanityClient({
  projectId: 'db93kynj', //* so sanity would know which project to use
  dataset: 'production', //*just to know are we in production or development
  apiVersion: '2022-05-19',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

//* this is so we can retrieve images from the sanity database
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
