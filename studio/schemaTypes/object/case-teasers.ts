import { defineType, defineField, defineArrayMember } from 'sanity'

export const caseTeasers = defineType({
  name: 'caseTeasers',
  title: 'Case teasers',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      type: 'array',
      title: 'Teaser list items',
      of: [
        defineArrayMember({
          type: 'caseTeaser',
        }),
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'items.0.headline',
      // author: 'author.name',
    },
    prepare(selection) {
      return {...selection, subtitle: `Case teasers`}
    },
  },
});

