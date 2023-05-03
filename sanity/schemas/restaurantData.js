export default {
  name: 'restaurant',
  type: 'document',
  title: 'Restaurant',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Restaurant description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Restaurant Image',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Restaurant latitude',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Restaurant longitude',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Restaurant rating',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('please enter a value between 1 and 5'),
    },
    {
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
}
