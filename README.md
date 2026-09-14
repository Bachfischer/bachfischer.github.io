# bachfischer.me

Source for [Matthias Bachfischer’s personal website and blog](https://bachfischer.me), covering Data & AI projects, research, professional experience, books, languages, and life outside work.

Built with **Jekyll**, Markdown, Liquid templates, and Sass, using the Academic Pages template derived from Minimal Mistakes. The site is deployed through **GitHub Pages** from the `master` branch, with the custom domain configured in [CNAME](CNAME).

## Site content

| Section | Source |
| --- | --- |
| About / homepage | [_pages/about.md](_pages/about.md) |
| Blog | [_posts/](_posts/) · [_pages/year-archive.html](_pages/year-archive.html) |
| Publications | [_publications/](_publications/) · [_pages/publications.md](_pages/publications.md) |
| CV | [_pages/cv.md](_pages/cv.md) · [PDF](files/CV_Matthias_Bachfischer.pdf) |
| Reading list | [_pages/reading_list.md](_pages/reading_list.md) |
| Languages and language map | [_pages/languages.md](_pages/languages.md) · [map data](files/language_map.js) |
| Life, sports, and travel map | [_pages/life.md](_pages/life.md) · [map data](files/travel_map.js) |

The main navigation is defined in [_data/navigation.yml](_data/navigation.yml). Additional archive and template pages are retained in `_pages/`.

## Run locally

Install Git, Ruby, and Bundler. The Ruby dependencies are defined in [Gemfile](Gemfile) and pinned in [Gemfile.lock](Gemfile.lock), which records Bundler **2.2.33**. The repository does not pin a Ruby version; use a Ruby environment compatible with the locked dependencies.

```bash
git clone https://github.com/Bachfischer/bachfischer.github.io.git
cd bachfischer.github.io
bundle install
bundle exec jekyll serve --config _config.dev.yml
```

Open [http://localhost:4000](http://localhost:4000). The development configuration sets the site URL to localhost. It is a separate configuration file, so keep shared settings aligned with `_config.yml` when changing them.

For automatic browser refresh, the Gemfile includes Hawkins:

```bash
bundle exec jekyll liveserve --config _config.dev.yml
```

Restart the server after changing a configuration file. Preserve the lockfile during routine setup; dependency upgrades should be deliberate and reviewed.

## Edit content

### Pages and navigation

Edit Markdown or HTML in `_pages/`. YAML front matter controls each page’s title, layout, and `permalink`. Add or update navigation entries in `_data/navigation.yml` when a page should appear in the menu.

Site-wide metadata, author details, collection settings, and defaults live in [_config.yml](_config.yml).

### Blog posts

Create a file in `_posts/` named `YYYY-MM-DD-title.md`, for example:

```markdown
---
title: "My new post"
date: 2026-09-14
categories:
  - ai
---

Post content goes here.
```

Posts inherit the `single` layout and author profile from the site configuration. The configured URL pattern is `/:categories/:title/`; preserve existing URLs when editing published content. Some existing posts are HTML exports from notebooks.

### Publications and downloads

Add publication entries to `_publications/`, following an existing entry’s front matter, including `title`, `collection: publications`, `permalink`, `date`, `venue`, and `citation`.

Store images in `images/` and downloadable files in `files/`. A file such as `files/example.pdf` is served at `/files/example.pdf`. Optional Python and Jupyter helpers in [markdown_generator/](markdown_generator/) generate publication and talk entries; they are not required for normal site builds.

## Theme and JavaScript

| Path | Purpose |
| --- | --- |
| `_layouts/` | Page layouts |
| `_includes/` | Reusable Liquid and HTML fragments |
| `_sass/` and `assets/css/` | Theme styles |
| `assets/js/_main.js`, `assets/js/plugins/`, `assets/js/vendor/` | Theme JavaScript sources |
| `assets/js/main.min.js` | Committed JavaScript bundle |
| `_site/` | Generated site output; do not edit by hand |

Node.js and npm are only needed when rebuilding the theme JavaScript. After changing the bundled JavaScript sources:

```bash
npm install
npm run build:js
```

Commit the updated source files and `assets/js/main.min.js`. Use `npm run watch:js` while developing. The npm scripts build the theme bundle; they do not build the Jekyll site or bundle the separate map scripts in `files/`.

## Validation and deployment

Before publishing, build the site with the production configuration:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

Preview changes locally and check affected pages, navigation, images, downloads, and mobile layout. The repository currently has no automated test suite, lint configuration, pre-commit hooks, or custom GitHub Actions workflow.

Changes pushed or merged into `master` are published through GitHub Pages. Check the repository’s Pages deployment status after publishing. Keep `CNAME` set to `bachfischer.me`, and retain the production `url` and empty `baseurl` in `_config.yml`. Generated `_site/` output is not the source to edit or commit.

## Credits and license

Based on [Academic Pages](https://github.com/academicpages/academicpages.github.io), adapted by Stuart Geiger from [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) by Michael Rose.

The repository includes the [MIT license](LICENSE), with the original theme copyright notice.
