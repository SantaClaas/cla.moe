# cla.moe

Personal site built with [Astro](https://astro.build), with content edited through [Pages CMS](https://pagescms.org).

## Structure

- `.pages.yml` — Pages CMS configuration (the only piece of the CMS integration that lives in this repo)
- `src/content.config.ts` — schema for the blog collection, matching the `posts` fields in `.pages.yml`
- `src/content/blog/` — blog posts (Markdown)
- `src/pages/about.md` — about page, editable in Pages CMS
- `public/` — static files and uploaded media

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the build locally                   |

Draft posts (`draft: true`) are shown in `npm run dev` and left out of production builds.
