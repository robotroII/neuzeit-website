import { defineType, defineField, defineArrayMember } from 'sanity'

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      name: 'navId',
      type: 'slug',
      title: 'Navigation Id'
    }),
    defineField({
      name: 'headline',
      type: 'string',
      title: 'Headline'
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Navigation items',
      of: [{ type: 'navigationItem' }]
    }),

    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      // author: 'author.name',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
});

