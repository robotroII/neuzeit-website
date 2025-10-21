import { defineType, defineField, defineArrayMember } from 'sanity'
import React, { ReactNode } from 'react';

export const accordionItem = defineType({
  name: 'accordionItem',
  title: 'Accordion item',
  type: 'object',
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "article",
      name: "article",
    }),
  ],
  preview: {
    select: {
      title: 'title',
      // media: 'items.0',
      // author: 'author.name',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
});

