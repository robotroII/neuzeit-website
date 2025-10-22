import { defineType, defineField, defineArrayMember } from 'sanity'

export const caseHero = defineType({
  type: "object",
  name: "caseHero",
  fields: [
    defineField({
      type: "image",
      name: "mainImage",
      options: { hotspot: true },
    }),
    defineField({
      type: 'textBlock',
      name: 'text',
      title: 'Text',
    }),
    defineField({
      type: "keyData",
      name: "keyData",
      title: "Key data",
      // fieldset: "keyfiguresFieldset"
    }),
  ],
  preview: {
    select: {
      title: 'text.headline',
      // media: 'items.0',
      // author: 'author.name',
    },
    prepare(selection) {
      const {title} = selection
      return {...selection, subtitle: `Case hero block`}
    },
  },
});

