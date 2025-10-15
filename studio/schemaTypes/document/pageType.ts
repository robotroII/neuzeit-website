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

    defineField({
      type: 'theme',
      name: 'theme',
      title: 'Theme settings',
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
      slug: 'slug.current',
      language: 'language',
      // media: 'mainImage',
      // author: 'author.name',
    },
    prepare(selection) {
      const {slug, language} = selection;
      return { ...selection, subtitle: `${slug && `(${slug})` || '-'}: ${language && `(${language})`}` }
    },
  },
});

