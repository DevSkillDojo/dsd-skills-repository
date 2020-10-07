# Design Decisions

## Use Gatsby for Website
The intention is to use Markdown files to contain the content for all skills. This will allow us to use GitHub pull requests to enable anybody to contribute content to the repository. Although Jekyll (and many other tools) provides the ability to generate HTML from markdown, Gatsby seems to be the most powerful and full featured.

### Gatsby Detailed Decisions

- Plugins
  - gatsby-transformer-remark for transforming markdown to HTML
  - gatsby-remark-source-name so that we can filter by the source of a markdown file (To distinguish between blog and skill pages)