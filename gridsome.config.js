/* eslint-disable import/no-extraneous-dependencies */
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
    siteName: 'Gridsome',
    plugins: [{
        use: '@gridsome/plugin-google-analytics',
        options: {
            id: 'UA-XXXXXXXXX-X'
        }
    }, {
        use: '@gridsome/plugin-sitemap',
        options: {
            cacheTime: 600000,
        },
    }, ],
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