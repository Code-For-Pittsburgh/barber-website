import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '1ri0ajhp',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: 'skGVi5TgyNTyQKFXanefxunR5n2eJyR2oCFYIo75xcvCeiteix8zL3BS3joLHneS6t1etrgjH21LxxgCAvcyLOVOdJpJnmIkxwjghPLtzJOYM4jrjMaYNlBhRo5yZfubd3KALdugClTflyXsdG5SM5RHOm9wDM6jgOJINrhHAYKmWx0nPTZW'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);