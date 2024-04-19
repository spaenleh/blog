const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // add html base plugin
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // copy base bundle.css file
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("space-grotesk.ttf");

  // copy all images maintaining directory structure
  eleventyConfig.addPassthroughCopy("blog/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("blog/**/*.jpg");
  eleventyConfig.addPassthroughCopy("blog/**/*.png");

  // custom filters for templates
  eleventyConfig.addFilter("displayDate", function (date, locale) {
    return new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(date);
  });
  return {
    pathPrefix: "/blog/",
  };
};
