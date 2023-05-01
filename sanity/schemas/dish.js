export default {
    name: 'dish',
    title: 'Dish',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of dish',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'short_description',
            type: 'string',
            title: 'Description of dish',
            validation: (Rule) => Rule.max(200),
        },
        {
            name: 'price',
            type: 'number',
            title: 'price of the dish',
        },
        {
            name: 'image',
            type: 'image',
            title: 'image of the dish',
        }
    ]
}