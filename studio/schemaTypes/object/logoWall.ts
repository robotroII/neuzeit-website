import { defineType, defineField, defineArrayMember } from 'sanity'

export const logoWall = defineType({
  name: 'logoWall',
  title: 'Logo Wall',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Logos',
      of: [
        defineArrayMember({
          type: 'image',
        }),
      ]
    }),
  ],
  preview: {
    select: {
      // name: 'name',
      // media: 'mainImage',
      // author: 'author.name',
    },
    prepare(selection) {
      return { title: 'Logo wall' }
    },
  },
});

