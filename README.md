# Gridsome boilerplate

This is a JAMstack boilerplate using Gridsome that comes with many features out of the box. It utilizes TailwindCSS that is well known for powerful styling and layout. Ready to be deployed, automagically imports data from contenful.

## Features

This starter project includes some of the latest powerful technologies.

*   **Gridsome -** Vue.js & GraphQL powered framework genrating static files.
*   **[Tailwindcss](https://tailwindcss.com/) -** A utility-first CSS framework for styling.
*   **[Google Analytics](https://gridsome.org/plugins/@gridsome/plugin-google-analytics) -** Just add your tracking ID in the config.
*   **[Sitemap generator](https://gridsome.org/plugins/@gridsome/plugin-sitemap) -** Automatically generates a sitemap.xml file.
*   **[Eslint](https://eslint.org/) -** ESLint statically analyzes your code to quickly find problems. Uses rules from [airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base), [vue2/recommended](https://eslint.vuejs.org/user-guide/), & [prettier](https://github.com/prettier/eslint-plugin-prettier)
*   **[Prettier](https://prettier.io/) -** Building and enforcing a style guide.

## NPM tasks

```
"dev": "gridsome develop",      // Dev server
"build": "gridsome build",      // Build to /dist
"explore": "gridsome explore"   // GraphQL explorer
```

## ENV File
```
CTF_ACCESS_TOKEN=ContentfulToken
CTF_ENVIRONMENT=ContenfulEnvironment
CTF_SPACE_ID=ContenfulSpaceID
```

## Templates
When creating auto generated pages from Contenful

### gridsome.config.js
```javascript
    templates: {
        // file is created in tempaltes/Contenful${ContentType}.vue
        // Example: ContentfulBlogPost.vue: '/blog/:slug'
        ContentfulBlogPost: `/blog/:title`,
    },
```

### Making Pages
Each content type is created as a vue component under the templates directory.
Each file will need to be structored as follows: tempaltes/Contenful${ContentType}.vue
Inside each page you query the data from the contentful API.
```graphQL
<page-query>
    query singleBlog($path: String!){
        blog: contentfulBlogPost(path: $path){
            id
            title
            author {
                name
            }
        }
    }
</page-query>
```