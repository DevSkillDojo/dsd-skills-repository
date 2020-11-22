# Design Decisions

## Use Gatsby for Website
The intention is to use Markdown files to contain the content for all skills. This will allow us to use GitHub pull requests to enable anybody to contribute content to the repository. Although Jekyll (and many other tools) provides the ability to generate HTML from markdown, Gatsby seems to be the most powerful and full featured.

### Gatsby Detailed Decisions

- Plugins
  - gatsby-transformer-remark for transforming markdown to HTML
  - gatsby-plugin-mdx (So that we can write in MDX, instead of plain markdown)
  - react-bootstrap for styling
  - bootstrap (Because it provides the CSS for react-bootstrap)
  - gatsby-plugin-sass (So that we can do Sass processing)
  - node-sass (Because it is a dependency for gatsby-plugin-sass)
  - react-icons (For easy access to a variety of icons)
  - gatsby-theme-blog (For handling the blog side of things - This is an official plugin)
  - gatsby-remark-images (For referencing images from within markdown files)
  - gatsby-remark-embed-video (For embedding video from within markdown files)

### Store Images Locally
Although most images on the site are actually pulled from online sources (Mostly unsplash), the image files are stored locally as part of the application. This allows us to use the gatsby-remark-images component for embedding images in markdown files.

### Data structure
Each skill will have a LevelDefinitionType which states whether the definition of proficiency levels is:
 - The DEFAULT
 - CUSTOM for this skill
 - INHERITED from its parent skill