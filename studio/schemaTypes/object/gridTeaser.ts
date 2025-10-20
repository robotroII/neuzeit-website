import { defineType, defineField, defineArrayMember } from 'sanity'

export const gridTeaser = defineType({
  name: 'gridTeaser',
  title: 'Grid Teaser',
  type: 'object',
  fields: [
    defineField({
      title: 'Internal Link',
      name: 'internalLink',
      description: 'Select teaser reference',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'post' }, { type: 'case' }], 
    }),
    defineField({
      type: 'textBlock',
      name: 'text',
      title: 'Text',
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Teaser block items',
      of: [
        defineArrayMember({
          type: 'picture',
        }),
        defineArrayMember({
          type: 'image',
        }),
        // defineArrayMember({
        //   type: 'linkList',
        // }),
      ]
    }),

    defineField({
      type: "boolean",
      name: "reverse",
      title: "Reverse order",
      description: "Reverse the order of text and image",
      initialValue: false,
    }),
    defineField({
      type: "string",
      name: "align",
      title: "Alignment",
      description: "Vertical alignment",
      options: {
        list: [
          { title: 'Centered', value: 'center' },
          { title: 'Top', value: 'start' },
          { title: 'Bottom', value: 'end' },
        ],
      },
      initialValue: 'center',
    }),
    defineField({
      type: 'string',
      name: 'class',
      title: 'Css class',
    }),

    defineField({
      type: 'theme',
      name: 'sectionTheme',
      title: 'Theme',
    }),
  ],
  preview: {
    select: {
      title: 'text.headline',
      // media: 'items.0',
      // author: 'author.name',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
});

