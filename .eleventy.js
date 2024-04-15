module.exports = function (eleventyConfig) {
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
};
