[!DOCTYPE Adventures](https://doctypeadventures.netlify.com)

by Vladimir Jankovic

Blog and news content management system written in Next.js 14 (App router) powered with Typescript and Tailwind. It uses Wordpress API for content delivery, Netlify for hosting and automatic deployment and Git and Github for version control and as repository container. !DOCTYPE Adventures blog CMS is free to use (under MIT license) and feature:

- Mobile first & fluid design, adapts to all devices and screen sizes
- Full SEO optimization
- Dark and light theme hot-switching
- Social sharing integration (Facebook and Twitter)
- Facebook comments plugin for individual posts integration
- Searchable content
- Lighting fast pagination
- Complete support for categories and tags
- Pre-loaders and skeletons for everything that loads :)
- Error and Not-found pages
- Support for many different text types in posts

You can check it out live at https://doctypeadventures.netlify.app

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

## Prevent Node version error

If your build is failing due to the Node version error (error containing text: `The engine “node” is incompatible with this module. Expected version “>=....`), just update your Netlify environment variables with:

NODE_VERSION = 20.9.0

## Prevent 404 error on serverless hosting

If you are on serverless hosting, you must add \_redirects file in public folder with content:
/\* /index.html 200
to prevent 404 error

## Wordpress API

This app gets it's blog content from [Wordpress API](https://developer.wordpress.org/rest-api/) which means that you must host Wordpress installation somewhere. The free plan on Wordpress.com website will NOT do the trick because of (in the time of writing) the obsolete api version used.

## Copyright Information

MIT License

Copyright (c) 2021 Vladimir Jankovic

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
