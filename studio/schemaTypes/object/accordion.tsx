import { defineType, defineField, defineArrayMember } from 'sanity'

export const accordion = defineType({
  name: 'accordion',
  title: 'Accordion',
  type: 'object',
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "array",
      name: "items",
      of: [
        defineArrayMember({
          type: "accordionItem",
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
      title: 'title',
      // media: 'items.0',
      // author: 'author.name',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
});

