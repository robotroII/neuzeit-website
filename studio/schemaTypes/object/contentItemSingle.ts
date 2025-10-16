import { defineType, defineField } from 'sanity'

// Alternative: Single content selection wrapper
export const contentItemSingle = defineType({
  name: 'contentItemSingle',
  title: 'Content Item (Single)',
  type: 'object',
  fields: [
    defineField({
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { title: 'Section', value: 'section' },
          { title: 'Article', value: 'article' },
          { title: 'Text Block', value: 'textBlock' },
          { title: 'Content Columns', value: 'contentColumns' },
        ],
        layout: 'dropdown'
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'sectionContent',
      title: 'Section Content',
      type: 'section',
      hidden: ({ parent }) => parent?.contentType !== 'section'
    }),
    defineField({
      name: 'articleContent',
      title: 'Article Content', 
      type: 'article',
      hidden: ({ parent }) => parent?.contentType !== 'article'
    }),
    defineField({
      name: 'textContent',
      title: 'Text Content',
      type: 'textBlock', 
      hidden: ({ parent }) => parent?.contentType !== 'textBlock'
    }),
    defineField({
      name: 'columnsContent',
      title: 'Columns Content',
      type: 'contentColumns',
      hidden: ({ parent }) => parent?.contentType !== 'contentColumns'
    }),
  ],
  preview: {
    select: {
      contentType: 'contentType',
      sectionName: 'sectionContent.name',
      articleTitle: 'articleContent.title',
      textTitle: 'textContent.title',
    },
    prepare(selection) {
      const { contentType, sectionName, articleTitle, textTitle } = selection;
      const title = sectionName || articleTitle || textTitle || 'Untitled';
      
      return {
        title: `${contentType}: ${title}`,
        subtitle: `Content type: ${contentType}`,
      };
    },
  },
});