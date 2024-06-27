# @archeion/swagger-angular-api

![npm](https://img.shields.io/npm/v/@archeion/swagger-angular-api)
![License](https://img.shields.io/npm/l/@archeion/swagger-angular-api)

`@archeion/swagger-angular-api` is a collection of templates designed to be used with `swagger-typescript-api`. These templates facilitate the generation of Angular services from an OpenAPI specification, making it easier to integrate APIs into Angular applications.

## Installation

To install the library, you can use npm or yarn:

```bash
npm install @archeion/swagger-angular-api swagger-typescript-api
```

or

```bash
yarn add @archeion/swagger-angular-api swagger-typescript-api
```

## Usage

This library is not intended to be used standalone. Instead, you need to import the templates provided by this library into `swagger-typescript-api` to generate Angular services for your Swagger APIs.

Here's an example of how to use the templates with `swagger-typescript-api`:

```javascript
   const { generateApi } = require('swagger-typescript-api');
   const path = require('path');

   generateApi({
     name: 'MyAPI',
     output: path.resolve(__dirname, './src/app/api'),
     url: 'https://your-api-spec-url.com/swagger.json',
     templates: path.resolve(__dirname, './node_modules/@archeion/swagger-angular-api/templates/angular'),
     // Currently only modular mode is supported.
     modular: true
     // Optionally you can add extras templates to generate index.ts
     extraTemplates: [
        {
            name: 'index.ts', path: path.resolve(__dirname, './node_modules/@archeion/swagger-angular-api/templates/angular/extras/index.ejs') 
        }
    ]
   })
     .then(() => {
       console.log('Angular services generated successfully!');
     })
     .catch((err) => {
       console.error('Error generating Angular services:', err);
     });
```

Or you can head over [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api#swagger-typescript-api) documentation to find instruction for CLI options. 

```bash
$ npx swagger-typescript-api --templates ./node_modules/@archeion/swagger-angular-api/templates/angular --modular <OTHER_OPTIONS_HERE>
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## Acknowledgments

Special thanks to the developers of `swagger-typescript-api` for their foundational work.