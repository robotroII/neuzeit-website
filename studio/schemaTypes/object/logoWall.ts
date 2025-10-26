import { defineType, defineField, defineArrayMember } from 'sanity'

export const logoWall = defineType({
  name: 'logoWall',
  title: 'Logo Wall',
  type: 'object',
  fields: [
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
    defineField({
      type: 'string',
      name: 'class',
      title: 'Css Class',
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

