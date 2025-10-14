import {defineConfig, defineField} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

import { internationalizedArray } from 'sanity-plugin-internationalized-array'
import { documentInternationalization } from '@sanity/document-internationalization';

export default defineConfig({
  name: 'default',
  title: 'Neuzeit Website',

  projectId: 'dcp0ewf9',
  dataset: 'production',

  plugins: [
    structureTool(), 
    visionTool(),
    internationalizedArray({
      languages: [
        { id: 'de', title: 'German'},
        { id: 'en', title: 'English'},
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['string'],
    }),
    documentInternationalization({
      supportedLanguages: [
        { id: 'de', title: 'German' },
        { id: 'en', title: 'English' }
      ],
      schemaTypes: [ 'page', 'case' ],
      metadataFields: [
        defineField({ name: 'slug', type: 'slug' }),
      ],
    })
  ],

  schema: {
    types: schemaTypes,
  },

})
