# BELA GEM Multi Dub Preamp — Build docs

Static bilingual (FR/EN) documentation site for the DIY audio preamplifier, built with [Astro](https://astro.build/).

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Dev server at `localhost:4321`              |
| `npm run build`   | Production build to `./dist/`               |
| `npm run preview` | Preview the production build locally        |

## URLs

- `/` → redirects to `/fr/`
- `/fr/`, `/en/` — home
- `/fr/versions/`, `/en/versions/` — version list
- `/fr/versions/stereo/`, `/en/versions/mono/`, … — version intro
- `/fr/versions/stereo/components/`, … — tutorial steps

## Content

Edit Markdown under `src/content/`:

- `versions/{stereo|mono}/{fr|en}.md` — version intro
- `tutorials/{stereo|mono}/{components|assembly|wiring|testing}/{fr|en}.md` — steps

UI chrome strings live in `src/i18n/ui.ts`.
