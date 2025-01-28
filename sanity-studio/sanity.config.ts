import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {markdownSchema} from 'sanity-plugin-markdown'
import {media} from 'sanity-plugin-media'
import {assist} from '@sanity/assist'
import {myStructure} from './deskStructure';
import { presentationTool } from 'sanity/presentation'

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
    presentationTool({
      previewUrl: {
        origin: "http://localhost:3000/",
        preview: "/",
        previewMode: {
          enable: 'api/draft-mode/enable',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
