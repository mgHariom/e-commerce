import sanityClient from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:'8450t0i3',
    dataset:'production',
    apiVersion:'2023-04-16',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source); 