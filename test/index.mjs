import { generateApi } from 'swagger-typescript-api';
import path from 'path';
import root from '../index.js';
const {initAngularTemplates} = root;

await generateApi({
    name: 'archeion-api',
    output: path.resolve(process.cwd(), './test/types/__generated__'),
    templates: './templates/angular',
    input: path.resolve(process.cwd(), './test/swagger.json'),
    modular: true,
    addReadonly: true,
    angular: {
        generateIndex: true,
    },
    hooks: {
        onInit: initAngularTemplates
    }
});