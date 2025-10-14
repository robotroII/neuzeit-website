import { defineType, defineField, defineArrayMember } from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),

    // defineField({
    //   type: 'themeSettings',
    //   name: 'theme',
    //   title: 'Theme settings',
    // }),

    // defineField({
    //   // should match 'languageField' plugin configuration setting, if customized
    //   name: 'language',
    //   type: 'string',
    //   readOnly: true,
    //   hidden: true,
    // })
  ],
  preview: {
    select: {
      title: 'title',
      // media: 'mainImage',
      // author: 'author.name',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
});

