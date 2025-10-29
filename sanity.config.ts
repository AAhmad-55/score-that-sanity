import { defineConfig } from 'sanity'; 
import { deskTool } from 'sanity/desk';

import schemas from './sanity/schemaTypes';

const config = defineConfig({
    projectId: "fjfyhul2",
    dataset: "production",
    title: "Score That",
    apiVersion: "2025-10-28",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas },
})

export default config;