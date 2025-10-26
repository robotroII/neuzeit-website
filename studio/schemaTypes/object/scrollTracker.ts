import { defineType, defineField, defineArrayMember } from 'sanity'

export const scrollTracker = defineType({
  name: 'scrollTracker',
  title: 'Scroll Tracker',
  type: 'object',
  fields: [
    defineField({
      type: 'array',
      name: 'items',
      title: 'Items',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'title',
              title: 'Title',
            }),
            defineField({
              type: 'article',
              name: 'article',
              title: 'Article',
            }),
            defineField({
              type: 'image',
              name: 'image',
              title: 'Image',
            }),
          ],
        }),
      ],
    }),
    defineField({
      type: 'string',
      name: 'class',
      title: 'Css class',
    }),
  ],
  preview: {
    select: {
      title: 'items.0.title',
      // media: 'items.0', 
    }
  } 
});