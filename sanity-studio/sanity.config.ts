import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {markdownSchema} from 'sanity-plugin-markdown'
import {media} from 'sanity-plugin-media'
import {assist} from '@sanity/assist'
import {myStructure} from './deskStructure';

export default defineConfig({
  name: 'default',
  title: 'Nov Release',

  projectId: '2pterscv',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: myStructure,
    }), 
    visionTool(), 
    markdownSchema(),
    media({
      creditLine: {
        enabled: true,
      }
    }),
    assist(),
  ],

  schema: {
    types: schemaTypes,
  },
})
