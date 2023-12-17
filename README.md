# Repository Maintenence Notes

### Article asset uploads

- assets -> articles -> term-202x -> covers, in-text (must number images)

### Deployment update process

```
npm run generate
npx serve .output/public
move to docs

```

## Updating new articles

#### places to update:

<b>Uploads</b>

- public/articles/term-20XX/covers/\*.png
- public/articles/term-20XX/in-text/\*.png

  <b>Pages</b>

- create a page under pages/articles/term-20XX/article-title.vue
- add respective dictionary of info under business strategy / technology pages

---

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev


## Resources

- https://nuxt.com/docs/getting-started/seo-meta
```
