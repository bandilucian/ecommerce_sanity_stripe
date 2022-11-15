import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'x9yi5rdf',
    dataset:'production',
    apiVersion:'2022-11-11',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source)