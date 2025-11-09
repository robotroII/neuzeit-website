import { defineType, defineField, defineArrayMember } from 'sanity'

export const carousel = defineType({
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      type: 'array',
      title: 'Teaser list items',
      of: [
        defineArrayMember({
          type: 'image',
        }),
        defineArrayMember({
          type: 'textBlock',
        }),
      ]
    }),
    defineField({
      name: 'itemsPerPage',
      type: 'number',
      title: 'Items per page',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'items.0.headline',
      // author: 'author.name',
    },
    prepare(selection) {
      return {...selection, subtitle: `Carousel`}
    },
  },
});

