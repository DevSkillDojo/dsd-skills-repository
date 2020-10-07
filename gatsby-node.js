/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const PostTemplate = path.resolve("./src/templates/post-template.js")
const SkillTemplate = path.resolve("./src/templates/skill-template.js")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // If the node being create is an MDX file, add some additional fields to the node
  if (node.internal.type === "Mdx") {
    console.log("Creating MDX node")
    // Create a slug for the node and store the slug value as a node field
    const slug = createFilePath({ node, getNode, basePath: "blog-posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })

    // Store the source directory name as a node field so that we can use it for filtering later
    // The source directory is the immediate child of "src" where the MDX file was found
    let indexStart = node.fileAbsolutePath.indexOf("/src/")
    const tail = node.fileAbsolutePath.substring(
      indexStart + 5,
      node.fileAbsolutePath.length
    )
    const source = tail.substring(0, tail.indexOf("/"))
    if (source) {
      createNodeField({
        node,
        name: "source",
        value: source,
      })
    }
    // console.log(node);
    // console.log("Tail: "+tail);
    // console.log("Source: "+source);
  }
}

exports.createPages = async ({ graphql, actions }) => {
  console.log("Creating pages")
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              slug
              source
            }
          }
        }
      }
    }
  `)

  console.log(result);

  // Loop over all MDX pages and create blog or skill pages (depending on source)
  result.data.allMdx.edges.forEach((edge, index) => {
    // Create Blog Pages
    if (edge.node.fields.source === "blog-posts") {
      console.log("Creating blog post page: " + edge.node.fields.slug)
      createPage({
        path: `blog-posts${edge.node.fields.slug}`,
        component: PostTemplate,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    }

    // Create Skill Pages
    if (edge.node.fields.source === "skills-repository") {
        console.log("Creating skill page: " + edge.node.fields.slug)
        createPage({
            path: `skills-repository${edge.node.fields.slug}`,
            component: SkillTemplate,
            context: {
              slug: edge.node.fields.slug,
            },
          })
      }
  })
}
