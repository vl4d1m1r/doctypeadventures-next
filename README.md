[!DOCTYPE Adventures]

https://doctypeadventures.vercel.app/

https://doctypeadventures.netlify.com/ (I plan to deprecate Netlify domain for Next.js app)

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

## Wordpress API

This app gets it's blog content from [Wordpress API](https://developer.wordpress.org/rest-api/) which means that you must host Wordpress installation somewhere. The free plan on Wordpress.com website will NOT do the trick because of (in the time of writing) the obsolete api version used.

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
