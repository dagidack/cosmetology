# Beauty Care Cosmetology

Static website with local image storage. All content is served from the project itself: prices and gallery are kept as local data, and new gallery photos are added manually into the `images/` folder.

```
/
  index.html          Public website
  content/site.json   Local static content data
  images/             Manual photo uploads
```

## Run locally

```bash
npm start
```

Open http://localhost:3000

## How to add new gallery photos

1. Put the photo files in `images/` at the project root.
2. Add them to `content/site.json` in the `gallery` array.
3. Refresh the page in the browser.

Use the same local path format:

```json
{
  "image": "/images/your-photo.jpg",
  "altFi": "Opis",
  "altSv": "Beskrivning",
  "altEn": "Description",
  "altUk": "Опис",
  "altRu": "Описание"
}
```

## Existing photos already added

The project already includes these files in `images/`:

- `arrangement.png`
- `maria-photo.jpg`
- `st.jpg`
- `st-1.jpg`
- `st-2.jpg`

The gallery is wired to these files and will automatically render them from the local folder.
