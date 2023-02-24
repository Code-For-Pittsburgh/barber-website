export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
        },
        {
            name: 'bigText',
            title: 'bigText',
            type: 'string',
        },
        {
            name: 'smalltext',
            title: 'SmallText',
            type: 'string',
        },
        {
            name: 'saleDuration',
            type: 'date',
            title: 'Sale Duration'
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },

    ],
};