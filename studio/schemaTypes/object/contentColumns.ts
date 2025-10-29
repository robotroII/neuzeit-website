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
              name: 'items',
              type: 'array',
              title: 'Column items',
              of: [
                defineArrayMember({
                  type: 'contentColumns',
                }),
                defineArrayMember({
                  type: 'image',
                }),
                defineArrayMember({
                  type: 'picture',
                }),
                defineArrayMember({
                  type: 'textBlock',
                }),
                defineArrayMember({
                  type: 'definitionList',
                }),
                defineArrayMember({
                  type: 'bulletList',
                }),
                defineArrayMember({
                  type: 'gridTeaser',
                }),
              ]
            }),
            defineField({
              type: 'string',
              name: 'class',
              title: 'Css class',
            }),
          ]
        }),
      ],
    }),
    defineField({
      type: "boolean",
      name: "reverse",
      title: "Reverse order",
      description: "Reverse the order of columns",
      initialValue: false,
    }),
    defineField({
      type: 'string',
      name: 'class',
      title: 'Css class',
    }),
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

