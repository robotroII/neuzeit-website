import { defineType, defineField, defineArrayMember } from 'sanity'

export const caseTeaser = defineType({
  name: 'caseTeaser',
  title: 'Case teaser',
  type: 'object',
  fields: [
    defineField({
      title: 'Internal Link',
      name: 'internalLink',
      description: 'Select teaser reference',
      type: 'reference',
      to: [{ type: 'case' }],
    }),
    defineField({
      type: 'string',
      name: 'headline',
      title: 'Headline',
    }),
    defineField({
      type: 'string',
      name: 'subheadline',
      title: 'Subheadline',
    }),
    defineField({
      type: 'string',
      name: 'icon',
      title: 'Icon',
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'picture',
    }),
    defineField({
      name: 'article',
      title: 'Article',
      type: 'article',
    }),
    // defineField({
    //   name: 'backgroundColor',
    //   title: 'Background color',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'corners',
    //   title: 'Corners',
    //   type: 'shapeCorners',
    // }),
  ]
});