import { defineType, defineField } from 'sanity'

export const contact = defineType({
  type: "object",
  name: "contact",
  fields: [
    defineField({
      type: "string",
      name: "headline",
      title: "Headline",
    }),
    defineField({
      type: "string",
      name: "subheadline",
      title: "Subheadline",
    }),
    defineField({
      type: "link",
      name: "link",
      title: "Link",
    }),
    // defineField({
    //   title: 'Author',
    //   name: 'author',
    //   type: 'reference',
    //   to: [{ type: 'author' }]
    // }),
  ],
});

