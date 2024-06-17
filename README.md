[!DOCTYPE Adventures]

by Vladimir Jankovic

Blog and news content management system written in Next.js 14 (App router) powered with Typescript and Tailwind. It uses Wordpress API for content delivery, Netlify for hosting and automatic deployment and Git and Github for version control and as repository container. !DOCTYPE Adventures blog CMS is free to use (under MIT license) and feature:

- Mobile first & fluid design, adapts to all devices and screen sizes
- Full SEO optimization
- Dark and light theme hot-switching
- Searchable content
- Lighting fast pagination
- Complete support for categories and tags
- Dedicated loading layouts and animations
- Error and Not-found pages
- Support for many different text types in posts

You can check it out live at https://doctypeadventures.vercel.app/

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Netlify build settings for Next.js app

Out of the box builds of Next.js app on Netlify will fail because of the build settings.

You can go to General settings -> Build & Deploy -> Continuous deployment -> Build settings and change variables to:

```bash
Runtime: Next.js
Base directory: /
Package directory: Not set
Build command: next build
Publish directory: .next
Functions directory: netlify/functions
Deploy log visibility: Logs are public
Build status: Active
```

## Prevent Node version error

If your build is failing due to the Node version error (error containing text: `The engine “node” is incompatible with this module. Expected version “>=....`), just update your Netlify environment variables with:

NODE_VERSION = 20.9.0

## Prevent 404 error on serverless hosting

If you are on serverless hosting, you must add \_redirects file in public folder with content:

/\* /index.html 200

to prevent 404 error

## Environment variables

There is only one environment variable:

`.env.local`

DOMAIN=http://localhost:3000/ (for development, or domain on host server)

Please note: in Next.js 14 it is not enough to put this value in .env.local. You need to update next.config.js with:

`env: {
    DOMAIN: process.env.DOMAIN,
},`

## Dealing with the CORS error

Sometimes (depending on your server) the WordPress REST API fetch will result in `CORS` error when you're trying to reach it from `localhost:3000`. For development purposes, you can overcome this issue by running the Chrome browser without security (It is most secure if you do it from the sandbox, even if you only go to `localhost:3000`):

- Press `Windows key` + `R`
- Type: `chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security`

## Wordpress API

This app gets it's blog content from [Wordpress API](https://developer.wordpress.org/rest-api/) which means that you must host Wordpress installation somewhere. The free plan on Wordpress.com website will NOT do the trick because of (in the time of writing) the obsolete api version used.

## Wordpress API caveats

Sometimes, altough installed properly and working, reaching the WordPress API on adress `https://yourwpdomain/wp-json/wp/v2` will result in 404 error. Here is what you can do:

- You can insert `index.php` into WordPress REST API endpoint and it will fix 404 error: `https://vl4di11ir.pw/doctypeadventures/index.php/wp-json/wp/v2`.
- Or you can just go to WordPress SETTINGS, click on PERMALINKS, then choose 'Plain' (and click on save changes), then return to your real permalink choice (mine was 'Day and name'), click on save changes, and error 404 will dissapear and your WordPress REST API endpoint will work as it is, without `index.php` insertion.

## Backing up the Wordpress database manually

- First you need to go to PHP MyAdmin, run it, click on the WordPress database, and click on EXPORT. Choose SQL format. It should result in creating the `some-name.sql` file.
- Copy whole WordPress installation folder from your server (prefferably in a ZIP file). What you need the most is the folder: `wp-content\uploads`.

## Restoring the WordPress database

- On your server create new blank database table with username and password.
- Enter your new database, click IMPORT. Choose your backup stored in the `some-name.sql` file.
- Install new clean version of WordPress, pointing it (during the installation with credentials) to the new database where you restored your backup.
- Finish installation proces, start the WordPress. All posts should be there except images.
- Copy your backed up `wp-content\uploads` folder to you WordPress instalaltion `wp-content\uploads` folder.
- Now the pictures also should be here and restoration of previous WordPress installation is complete.

## Copyright Information

MIT License

Copyright (c) 2023 Vladimir Jankovic

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
