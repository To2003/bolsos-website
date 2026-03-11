'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {apiVersion, dataset, projectId} from './sanity/env'
// Cambiamos 'schema' por 'schemaTypes' que es lo que realmente exporta el index
import {schemaTypes} from './sanity/schemaTypes' 
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  // Modificamos esta parte para que reciba el array correcto
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})