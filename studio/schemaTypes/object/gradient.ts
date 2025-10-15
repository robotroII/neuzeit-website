import { defineType, defineField, defineArrayMember } from 'sanity'

export const gradient = defineType({
  type: "object",
  name: "gradient",
  options: {
    collapsible: true,
    collapsed: true,
    // columns: 2,
    // modal: {type: 'popover'}
  },
  fields: [
    defineField({
      type: "string",
      name: "angle",
      title: "Angle",
      // initialValue: "30",
    }),
    defineField({
      type: "array",
      name: "colors",
      title: "Colors",
      // initialValue: ["#9747FF", "#00F0F8"],
      of: [
        defineArrayMember({
          type: "string",
          title: "Gradient color",
        }),
      ]
    }),
  ],
});

