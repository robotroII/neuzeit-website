import { defineType, defineField, defineArrayMember } from 'sanity'

export const section = defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      initialValue: '',
    }),
    defineField({
      type: 'string',
      name: 'class',
      title: 'Css class',
    }),

    defineField({
      name: 'foreground',
      type: 'array',
      title: 'Foreground',
      of: [
        defineArrayMember({
          type: 'contentColumns',
        }),
        defineArrayMember({
          type: 'textBlock',
        }),
        defineArrayMember({
          type: 'gridTeaser',
        }),
        defineArrayMember({
          type: 'picture',
        }),
        defineArrayMember({
          type: 'logoWall',
        }),
        defineArrayMember({
          type: 'contact',
        }),
        defineArrayMember({
          type: 'caseTeasers',
        }),
        defineArrayMember({
          type: 'scrollTracker',
        }),
        defineArrayMember({
          type: 'accordion',
        }),
      ]
    }),

    defineField({
      title: 'Background',
      name: 'background',
      description: 'Section background',
      type: 'image',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'sources',
          type: 'array',
          title: 'Sources',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'source',
              fields: [
                defineField({
                  name: 'srcset',
                  type: 'image',
                  title: 'Media',
                  options: {
                    hotspot: true,
                  },
                }),
                defineField({
                  name: 'mediaQuery',
                  type: 'string',
                  title: 'Media query',
                  description: 'e.g. (min-width: 640px)',
                  initialValue: '(min-width: 640px)',
                }),
                // defineField({
                //   name: 'sizes',
                //   type: 'string',
                //   title: 'Sizes',
                //   description: 'e.g. (max-width: 640 px) 100vw, 50vw',
                // }),
              ]
            })
          ]
        }
      ],
    }),

    defineField({
      type: 'theme',
      name: 'theme',
      title: 'Section theme',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: '_type',
      // media: 'items.0',
      // author: 'author.name',
    },
    // prepare(selection) {
    //   console.log('selection', selection);
    //   return {
    //     ...selection,
    //     // title: selection.title,
    //     subtitle: selection.subtitle,
    //   };
    // },
  },
});

