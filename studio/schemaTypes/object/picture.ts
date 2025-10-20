import { defineArrayMember, defineField, defineType } from 'sanity'

export const picture = defineType({
  name: 'picture',
  title: 'Responsive picture',
  type: 'image',
  options: {
    hotspot: true,
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
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        // isRequired: true, // <-- make this field required
      },
      // validation: (Rule) => Rule.required().error('Caption is required'),
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      options: {
        // isRequired: true, // <-- make this field required
      },
      // validation: (Rule) => Rule.required().error('Alt text is required'),
    }]
});

