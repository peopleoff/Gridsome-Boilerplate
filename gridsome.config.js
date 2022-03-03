/* eslint-disable import/no-extraneous-dependencies */
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
    siteName: 'Gridsome',
    siteUrl: 'https://www.gridsome.org',
    plugins: [{
        use: "@gridsome/source-contentful",
        options: {
            space: process.env.CTF_SPACE_ID,
            accessToken: process.env.CTF_ACCESS_TOKEN,
            host: "cdn.contentful.com",
            environment: process.env.CTF_ENVIRONMENT,
            typeName: "Contentful",
        },
    }, {
        use: '@gridsome/plugin-google-analytics',
        options: {
            id: 'UA-XXXXXXXXX-X'
        }
    }, {
        use: '@gridsome/plugin-sitemap',
        options: {
            cacheTime: 600000,
        },
    }],
    templates: {
        // file is created in tempaltes/Contenful${ContentType}.vue
        // Example: ContentfulBlogPost.vue: '/blog/:slug'
        ContentfulBlogPost: `/blog/:title`,
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    tailwindcss,
                    autoprefixer
                ]
            }
        }
    }
}