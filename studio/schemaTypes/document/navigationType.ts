import { defineType, defineField } from 'sanity'

export const navigationType = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Navigation Title'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Navigation Slug'
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
      title: 'slug.current',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
});

