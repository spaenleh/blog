const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  // add html base plugin
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // copy base bundle.css file
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("space-grotesk.ttf");

  // copy all images maintaining directory structure
  eleventyConfig.addPassthroughCopy("{tech,recettes}/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("{tech,recettes}/**/*.jpg");
  eleventyConfig.addPassthroughCopy("{tech,recettes}/**/*.png");

  // custom filters for templates
  eleventyConfig.addFilter("displayDate", function (date, locale) {
    return new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(date);
  });

  // allow to have link in headings
  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#",
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    pathPrefix: "/blog/",
  };
};
