module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style");
  eleventyConfig.addWatchTarget("style/");
  eleventyConfig.addPassthroughCopy("./scripts");
  eleventyConfig.addPassthroughCopy("./assets");

  eleventyConfig.addPassthroughCopy({
    "node_modules/splitting/dist/splitting-cells.css": "./style/splitting.css",
    "node_modules/splitting/dist/splitting.min.js": "scripts/splitting.min.js",
    "node_modules/normalize.css/normalize.css": "./style/normalize.css",
  });

  return {
    dir: {
      layouts: "_layouts",
    },
  };
};
