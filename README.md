# PythonOrC Portfolio Website

Personal website for Hongyi (Ethan) Hu, including projects, publications, research, teaching, and resume pages.

**Live site:** [pythonorc.github.io](https://pythonorc.github.io/)

## Tech Stack

- Vanilla HTML, CSS, JavaScript
- Markdown-driven section content
- Static assets in `docs/assets/`
- GitHub Pages deployment via GitHub Actions

## Development

```bash
# Serve locally from the docs folder
python -m http.server 8000 -d docs/
```

Then open `http://localhost:8000`.

## Repository Structure

- `docs/index.html` - Main landing page shell
- `docs/*.md` - Main section content (`about`, `publications`, `projects`, `research`, `teaching`, `resume`)
- `docs/projects/` - Individual project detail pages
- `docs/publications/` - Individual publication detail pages
- `docs/styles.css` - Global styles
- `docs/script.js` - Main page behavior and markdown loading
- `docs/subpage.js` - Subpage behavior (theme, interactions)
- `.github/workflows/deploy-pages.yml` - GitHub Pages deployment workflow

## Deployment

This site deploys automatically on push to `master` using GitHub Actions and publishes the `docs/` directory to GitHub Pages.

## Template Credit

Template adapted from [jrosseruk/jrosseruk.github.io](https://github.com/jrosseruk/jrosseruk.github.io).
