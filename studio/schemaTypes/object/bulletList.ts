import { defineType, defineField, defineArrayMember } from 'sanity'

export const bulletList = defineType({
  name: 'bulletList',
  title: 'Bullet List',
  type: 'object',
  fields: [
    defineField({
      type: "image",
      name: "bullet",
      title: "Bullet icon",
    }),
    defineField({
      type: "array",
      name: "items",
      of: [
        defineArrayMember({
          type: "textBlock",
        }),
      ],
    }),
  ],
  // preview: {
  //   select: {
  //     // title: 'title',
  //     // media: 'items.0',
  //     // author: 'author.name',
  //   },
  //   // prepare(selection) {
  //   //   const {author} = selection
  //   //   return {...selection, subtitle: author && `by ${author}`}
  //   // },
  // },
});

