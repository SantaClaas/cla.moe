# cla.moe

Personal site built with [Astro](https://astro.build), with content edited through [Pages CMS](https://pagescms.org).

## Structure

- `.pages.yml` — Pages CMS configuration (the only piece of the CMS integration that lives in this repo)
- `src/content.config.ts` — schema for the blog collection, matching the `posts` fields in `.pages.yml`
- `src/content/blog/` — blog posts (Markdown)
- `src/pages/about.md` — about page, editable in Pages CMS
- `public/` — static files and uploaded media

## Development

Open the repository in a dev container (VS Code Dev Containers or GitHub Codespaces) to get Node.js and the pinned pnpm version with dependencies installed. Run `pnpm dev` and the forwarded port 4321 opens a preview.

## Commands

| Command        | Action                                   |
| :------------- | :--------------------------------------- |
| `pnpm install` | Install dependencies                     |
| `pnpm dev`     | Start the dev server at `localhost:4321` |
| `pnpm build`   | Build the production site to `./dist/`   |
| `pnpm preview` | Preview the build locally                |

Draft posts (`draft: true`) are shown in `pnpm dev` and left out of production builds.
