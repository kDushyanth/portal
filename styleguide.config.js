const path = require('path');

module.exports = {
    //components:'src/components/**/[A-Z]*.js',
    getExampleFilename(componentPath) {
         
         componentPath = componentPath.replace(/src/,'src\\doc' );
         componentPath = componentPath.replace(/\.jsx?$/,'.md');
         console.log(componentPath);
         return componentPath;
         //return componentPath;
        
    },
    moduleAliases: {
        'src-alias': path.resolve(__dirname, 'src')
    },
    sections:[
        {
            name: 'Header Components',
            components: './src/components/HeaderComponents/*.js'
            
        },
        {
            name: 'Card Components',
            components: './src/components/CardComponents/*.js'
           
        },
        {
            name: 'Footer Components',
            components: './src/components/FooterComponents/*.js'
            
        }
    ],
    title:'A sample UI Styleguide',
    skipComponentsWithoutExample: true,
    exampleMode: 'expand',//view code
    usageMode:'expand',//props & methods
    tocMode: 'collapse',//sidebar
    theme:{
        fontFamily:{
            base:'sans-serif'
        },
        color:{
            base:'black',//headings
            light: '#888888',//Components visible name
	        lightest: '#ffffff',//components visible name
            link:'orange',
	        linkHover:'red' ,
            baseBackground: '#ffffff',
	        codeBackground: '#ffffff',
            border: 'black',
            name: 'blue',//name of prop
            type: '#673ab7',//type of prop
            error: 'red'
        },
        sidebarWidth : 300
    }
}