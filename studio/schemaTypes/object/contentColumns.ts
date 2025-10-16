import { defineType, defineField, defineArrayMember } from 'sanity'

export const contentColumns = defineType({
  name: 'contentColumns',
  title: 'Content Columns',
  type: 'object',
  fields: [
    defineField({
      name: 'columns',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'column',
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'class',
              title: 'Css class',
            }),
            defineField({
              name: 'items',
              type: 'array',
              title: 'Column items',
              of: [
                defineArrayMember({
                  type: 'contentItem',
                }),
              ]
            }),
          ]
        }),
      ],

    })
  ]
  // preview: {
  //   select: {
  //     title: '_type',
  //     // media: 'items.0',
  //     // author: 'author.name',
  //   },
  //   // prepare(selection) {
  //   //   console.log('selection', selection);
  //   //   return {
  //   //     ...selection,
  //   //     // title: selection.title,
  //   //     subtitle: selection.subtitle,
  //   //   };
  //   // },
  // },
});

