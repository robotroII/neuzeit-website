import { defineType, defineField, defineArrayMember } from 'sanity'

export const navItem = defineType({
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  icon: () => '🔗',
  fields: [
    {
      name: 'text',
      type: 'internationalizedArrayString',
      title: 'Navigation Text'
    },
    {
      name: 'navigationItemUrl',
      type: 'link',
      title: 'Navigation Item URL'
    },  
    {
      name: 'linkClass',
      type: 'string',
      title: 'Link css class'
    },
  ],
  preview: {
    select: {
      title: 'text[0].value',
      // author: 'author.name',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
});