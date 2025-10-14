import { defineType, defineField, defineArrayMember } from 'sanity'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      title: 'Internal Link',
      name: 'internalLink',
      description: 'Select pages for navigation',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'post' }, { type: 'case' }] 
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      description:"Use fully qualified URLS for external link",
      type: 'url',
    }),
    defineField({
      type: "string",
      name: "hash",
    }),
    defineField({
      type: "string",
      name: "target",
    }),
    defineField({
      type: "string",
      name: "icon",
    }),
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "string",
      name: "description",
    }),
  ]
});