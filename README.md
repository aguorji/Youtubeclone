# YouTube Clone

A responsive recreation of the YouTube homepage, built from scratch with HTML, CSS and JavaScript.

**Live demo:** https://aguorji.github.io/youtubeclone/

## Features

- Header with search, voice-search and notification icons, sidebar navigation and category chips
- Video grid, a Shorts shelf and playable videos with preview images
- **Search** that filters videos by title and channel as you type
- **Menu button** collapses the sidebar on desktop and opens it as an overlay on phones
- Only one video plays at a time
- Videos load only when played (`preload="none"` + poster images), so the page opens fast
- Responsive layouts for phones, tablets, laptops and large screens

## Built with

- HTML5 and CSS3 (Flexbox, Grid, media queries), split into `header`, `sidebar`, `main` and `media-query` stylesheets
- Vanilla JavaScript for search, sidebar and video behaviour (`js/main.js`)

## Project structure

```
index.html
css/        styles per page area, plus enhancements.css for interactive states
js/         main.js
videos/     demo videos        posters/  preview frame for each video
icons/  images/  thumbnails/
```

## Run locally

Open `index.html` in a browser.

> This is a learning project and is not affiliated with YouTube.

---

Built by [Kevin O. Agu · AguTech Labs](https://agutechlabs.com)
