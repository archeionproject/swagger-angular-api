import { generateApi } from 'swagger-typescript-api';
import path from 'path';

await generateApi({
    name: 'archeion-api',
    output: path.resolve(process.cwd(), './test/types/__generated__'),
    templates: './templates/angular',
    input: path.resolve(process.cwd(), './test/swagger.json'),
    generateClient: true,
    modular: true,
    addReadonly: true,
    extraTemplates: [
        {
            name: 'index.ts', path: './templates/angular/extras/index.ejs' 
        }
    ]
});