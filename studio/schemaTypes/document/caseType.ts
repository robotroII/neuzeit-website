import { defineType, defineField, defineArrayMember } from 'sanity'

export const caseType = defineType({
  name: 'case',
  title: 'Case',
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
      type: 'array',
      name: 'sections',
      title: 'Page sections',
      of: [
        defineArrayMember({
          type: 'caseHero',
        }),
        defineArrayMember({
          type: 'section'
        }),
      ]
    }),


    defineField({
      type: 'theme',
      name: 'theme',
      title: 'Theme settings',
    }),

    defineField({
      // should match 'languageField' plugin configuration setting, if customized
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

