---
author: Malik
pubDatetime: 2025-03-15T00:00:00.000Z
modDatetime: null
title: Moving from Github Pages to Astro
slug: moving-from-github-pages-to-astro
featured: false
draft: false
tags:
  - others
  - tech
description: "Why I moved my blog from Github Pages to Astro and how Copilot made the whole migration surprisingly easy."
---

If you've read my earlier post on [moving from Wordpress to Github Pages](/posts/moving-from-wordpress-to-github-pages), you already know I have a habit of migrating my blog every few years. Blogger to Wordpress. Wordpress to Github Pages. And now, Github Pages to Astro. At this point, I think I spend more time migrating than actually writing 😀.

## Why move again?

Github Pages was serving me well enough. It was free, tied to my Github account, and did the job. But honestly, I was getting that same itch I got when I moved away from Wordpress - I wanted to try something new and learn something in the process.

Around this time, I kept hearing about [Astro](https://astro.build/) from different corners of the dev community. People were raving about it, and the more I read about it, the more it seemed like a great fit for a blog.

## What got me excited about Astro

A few things stood out to me when I was looking into Astro.

First, it follows a file-based routing approach which felt familiar if you've worked with Next.js. But unlike Next.js, Astro felt a lot lighter and simpler to get started with. There's less boilerplate, fewer opinions forced on you, and the learning curve is way more forgiving.

Second, Astro ships zero JavaScript by default. For a content-heavy site like a blog, this is a big deal. Your pages load fast because there's no unnecessary JS bundle being sent to the browser. You can opt into client-side JavaScript when you need it, but it doesn't force it on you.

Third, Astro has this concept called "content collections" which makes managing blog posts really clean. You just drop markdown files into a folder, define a schema for your frontmatter, and Astro handles the rest. No messing around with custom parsers or config files.

And finally, the ecosystem around Astro is solid. There are great themes and templates available, the documentation is well written, and the community is active and helpful.

## The migration

Here's the part that surprised me the most - the actual migration was pretty painless. I used GitHub Copilot to help with most of the heavy lifting. Things like converting my existing posts, setting up the new project structure, and configuring the deployment to Netlify.

If you had told me a few years ago that I'd migrate an entire blog with the help of an AI coding assistant, I probably wouldn't have believed you. But that's where we are now, and honestly, it made the whole process feel like a weekend project rather than a month-long effort.

## Was it worth it?

Short answer - yes. The blog feels snappier, the developer experience is nicer, and I learnt a new framework in the process. I also ended up using the [AstroPaper](https://github.com/satnaing/astro-paper) theme which gave me a clean, minimal look out of the box without having to design everything from scratch.

If you're running a blog on Github Pages or any other static setup and you're curious about Astro, I'd say give it a go. The migration isn't as painful as you might think, especially with the tooling available today.

Now I just need to focus on the actual writing part and stop migrating 😅.
