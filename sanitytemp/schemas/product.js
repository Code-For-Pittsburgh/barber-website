export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        },
        {
            name: 'sizelist',
            title: 'Size list',
            type: 'array',
            of:
                [{
                    type: 'number'
                }]
        },
        {
            name: 'Desc',
            title: 'Desc',
            type: 'array',
            of: [{
                type: 'block'
            }]
        },
        {
            type: 'boolean',
            name: 'avaliable',
            title: 'Avaliable',
            initialValue: true
        },
        {
            type: 'date',
            name: 'AvaliableDate',
            title: 'Avaliable Date',
            description: 'Date for when the item is avaliable if avaliable is false'
        },
        {
            name: 'promotion',
            title: 'Promotion Dates',
            type: 'array',
            of: [{ type: 'date' }]
        },
        {
            type: 'number',
            title: 'Price',
            name: 'price'
        }

    ]
}