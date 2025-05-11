export const filesData = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "assets",
          isFolder: true,
          items: [{ name: "vite.svg", isFolder: false }],
        },
        {
          name: "index.html",
          isFolder: false,
        },
        {
          name: "styles.css",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      items: [
        { name: "components", isFolder: true, items: [] },
        {
          name: "App.tsx",
          isFolder: false,
        },
        {
          name: "index.css",
          isFolder: false,
        },
      ],
    },
  ],
};
