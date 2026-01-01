
# Ayush GFX Portfolio

Welcome to your portfolio project!

## How to add your own images (The "public" folder)

If you want to use your own files (like `maxresdefault (19) (1).jpg`) instead of internet links, follow these steps:

1.  **Create a folder**: In the main area of your project (where `index.html` and `package.json` are), create a new folder named exactly:
    `public`

2.  **Upload your image**: Drag and drop your image file into this new `public` folder.

3.  **Rename**: It is best to rename your file to something simple, like `minecraft.jpg`.

4.  **Update Code**: Go to `constants.ts` and change the `imageUrl` to:
    ```typescript
    imageUrl: '/minecraft.jpg',
    ```

## Project Structure

*   `public/` - (Create this!) Put your images here.
*   `src/` - (Conceptually) Contains your React code (`App.tsx`, `index.tsx`).
*   `constants.ts` - Change your text, links, and image URLs here.
