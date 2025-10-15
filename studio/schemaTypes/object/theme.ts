import { defineType, defineField } from 'sanity'

export const theme = defineType({
  type: "object",
  name: "theme",
  options: {
    collapsible: true,
    collapsed: true,
    // columns: 2,
    // modal: {type: 'popover'}
  },
  fields: [
    defineField({
      type: "string",
      name: "colorMode",
      title: "Color mode",
      options: {
        list: [
          {title: 'Dark', value: 'dark'},
          {title: 'Light', value: 'light'}
        ]
      }
    }),
    defineField({
      type: "string",
      name: "class",
      title: "Css class",
    }),
    defineField({
      type: "string",
      name: "primaryColor",
      title: "Primary color",
      // initialValue: "#00F0F8",
    }),
    defineField({
      type: "gradient",
      name: "primaryGradient",
      title: "Primary Gradient",
    }),
    defineField({
      type: "string",
      name: "backgroundColor",
      title: "Background color",
    }),
    defineField({
      type: "image",
      name: "backgroundImage",
      title: "Background image",
    }),
  ],
});

