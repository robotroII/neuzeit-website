import { defineType, defineField, defineArrayMember } from 'sanity'

export const keyData = defineType({
  type: "array",
  name: "keyData",
  of: [
    defineArrayMember({
      type: "object",
      options: { columns: 2 },
      fields: [
        defineField({
          type: "string",
          name: "key",
        }),
        defineField({
          type: "array",
          name: "values",
          of: [
            defineArrayMember({
              type: "string",
            }),
          ]
        }),
      ]
    }),
  ],
});

