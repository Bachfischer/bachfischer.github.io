# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic website / blog of Matthias Bachfischer (https://bachfischer.me), built with Jekyll on the [academicpages](https://academicpages.github.io/) template (a fork of the Minimal Mistakes theme). Deployed via GitHub Pages from the `master` branch; the `CNAME` file maps the custom domain.

## Commands

```bash
bundle install                  # install Ruby dependencies (delete Gemfile.lock if it errors)
bundle exec jekyll serve        # build and serve at localhost:4000
bundle exec jekyll liveserve    # serve with live-reload (hawkins gem)
bundle exec jekyll serve --config _config.dev.yml   # serve using the dev config
```

There are no tests or linters. `npm run build:js` (uglify) only needs to run if files under `assets/js/` change — the result is the committed `assets/js/main.min.js`.

## Architecture

Standard Jekyll collection-based site — content is Markdown/HTML with YAML front matter, rendered through Liquid templates:

- `_config.yml` — site-wide settings (author info, navigation defaults, collection definitions). `_config.dev.yml` is the local-dev variant. Jekyll does NOT reload this file on change; restart the server.
- `_pages/` — standalone pages (about, cv, publications, reading_list, life, languages, talks). Each page's URL comes from its `permalink` front matter.
- `_posts/` — blog posts, named `YYYY-MM-DD-title.md` (some are pre-rendered `.html` exports from notebooks).
- `_publications/` — publications collection, rendered on the publications page.
- `_data/navigation.yml` — top navigation bar entries.
- `_layouts/`, `_includes/`, `_sass/` — theme templates and styling (from Minimal Mistakes; rarely need changes).
- `files/` — static downloads served at `/files/<name>` (CV PDF, papers, map JS assets).
- `images/` — images, including the profile picture referenced from `_config.yml`.
- `_site/` — generated output; never edit by hand.
- `markdown_generator/` — Jupyter/Python helpers to generate publication/talk markdown from TSV files (optional tooling from the template).

Typical content edits (new post, reading-list entry, CV update) only touch `_pages/`, `_posts/`, or `files/` — recent git history shows this is the dominant workflow.
