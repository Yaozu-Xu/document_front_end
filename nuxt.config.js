export default {
  mode: "universal",
  target: "server",
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios"],
  css: ["@/assets/scss/main.scss"],
  eslint: { ignorePath: ".gitignore" },
  srcDir: "./src/",
  buildDir: "nuxt-dist",
  build: {
    babel: {
      plugins() {
        if (process.env.BABEL_ENV === "test") return [["istanbul"]];
        return [];
      },
    },
  },
  serverMiddleware: [
    {
      path: "/tests",
      handler: "@/accessController/disableTestPagesInProduction",
    },
  ],
};
