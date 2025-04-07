import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes, schemaTypesTwo} from './schemaTypes'
import {markdownSchema} from 'sanity-plugin-markdown'
import {media} from 'sanity-plugin-media'
import {assist} from '@sanity/assist'
import {myStructure, singletonStructure} from './deskStructure';
import {dashboardTool} from '@sanity/dashboard'
import {documentListWidget} from 'sanity-plugin-dashboard-widget-document-list'
import {documentInternationalization} from '@sanity/document-internationalization'

export default defineConfig([
    {
    name: 'workspace-1',
    title: 'Workspace 1',
    basePath: '/workspace-1',
    projectId: '2pterscv',
    dataset: 'production',

    releases: {
      enabled: true,
    },
    scheduledPublishing: {
      enabled: false, 
    },

    plugins: [
      structureTool(), 
      visionTool(), 
      markdownSchema(),
      media({
        creditLine: {
          enabled: true,
        }
      }),
      assist(),
      dashboardTool({
        widgets: [documentListWidget({
          title: 'Amount of Updated Docs',
        })],
      }),
      documentInternationalization({
        // Required configuration
        supportedLanguages: [
          {id: 'es', title: 'Spanish'},
          {id: 'en', title: 'English'}
        ],
        schemaTypes: ['homeType', 'articleType'],
      })
    ],

    schema: {
      types: schemaTypes,
      // templates: (prev) => 
      //   prev.filter((template) => !template.id.includes('-es') && !['articleType'].includes(template.id)),
    },
  },
  {
    name: 'workspace-2',
    title: 'Workspace 2',
    basePath: '/workspace-2',
    projectId: '2pterscv',
    dataset: 'production',

    releases: {
      enabled: false,
    },
    scheduledPublishing: {
      enabled: false, 
    },

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
      dashboardTool({
        widgets: [documentListWidget({
          title: 'Amount of Updated Docs',
        })],
      }),
    ],

    schema: {
      types: schemaTypesTwo,
    },
  }
])


