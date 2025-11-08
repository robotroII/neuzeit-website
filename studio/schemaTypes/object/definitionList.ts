import { defineType, defineField, defineArrayMember } from 'sanity'

export const definitionList = defineType({
  name: 'definitionList',
  title: 'Definition List',
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
          ],
        }),
      ],
    }),
    defineField({
      type: 'string',
      name: 'class',
      title: 'Css Class',
    }),
  ],
  preview: {
    select: {
      title: 'items.0.title',
      // media: 'items.0', 
    }
  } 
});