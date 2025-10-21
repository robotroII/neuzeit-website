import { defineType, defineField } from 'sanity'

export const textBlock = defineType({
  type: "object",
  name: "textBlock",
  fields: [
    defineField({
      type: "string",
      name: "headline",
    }),
    defineField({
      type: "string",
      name: "subheadline",
    }),
    defineField({
      type: "article",
      name: "article",
    }),
  ],
  preview: {
    select: {
      title: 'headline',
      // media: 'items.0',
      // author: 'author.name',
    },
    prepare(selection) {
      // const {title} = selection
      return { ...selection, title: selection.title || `Text block`, subtitle: selection.title ? `Text block` : '' }
    },
  },
});

