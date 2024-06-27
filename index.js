const { resolve } = require('path');

module.exports = {
    initAngularTemplates(config){
        const generateIndex = config.angular?.generateIndex;
        
        if(generateIndex) {
            config.extraTemplates = [
                {
                    name: 'index.ts', path: resolve(__dirname, "templates/angular/extras/index.ejs")
                }
            ]
        }
    }
}