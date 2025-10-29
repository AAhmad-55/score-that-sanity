import { defineConfig } from 'sanity'; 
import { deskTool } from 'sanity/desk';
import {visionTool} from '@sanity/vision'

import schemas from './sanity/schemaTypes';

const config = defineConfig({
    projectId: "fjfyhul2",
    dataset: "production",
    title: "Score That",
    apiVersion: "2025-10-28",
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    schema: { types: schemas },
})

export default config;