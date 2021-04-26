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
  // The slug
  // The source
  //   - The source directory name as a node field so that we can use it for filtering later
  //   - The source directory is the immediate child of "src" where the MDX file was found
  if (node.internal.type === "Mdx") {
    console.log("Creating MDX node")

    let indexStart = node.fileAbsolutePath.indexOf("/src/content/")
    const tail = node.fileAbsolutePath.substring(
      indexStart + 13,
      node.fileAbsolutePath.length
    )
    const source = tail.substring(0, tail.indexOf("/"))
    if (source) {
      createNodeField({
        node,
        name: "source",
        value: source,
      })

      let prefix = ""
      if (source === "blog") {
        prefix = "blog"
      } else if (source === "skills") {
        prefix = "repository"
      }
      const slugVal = createFilePath({ node, getNode })
      createNodeField({
        node,
        name: "slug",
        value: prefix + slugVal,
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
            id
            fields {
              slug
              source
            }
          }
        }
      }
    }
  `)

  console.log(result)

  // Loop over all MDX pages and create blog or skill pages (depending on source)
  result.data.allMdx.edges.forEach((edge, index) => {
    // Create Blog Pages
    if (edge.node.fields.source === "blog") {
      console.log("Creating blog post page: " + edge.node.fields.slug)
      createPage({
        path: edge.node.fields.slug,
        component: PostTemplate,
        context: {
          id: edge.node.id,
          slug: edge.node.fields.slug,
        },
      })
    }

    // Create Skill Pages
    if (edge.node.fields.source === "skills") {
      console.log("Creating skill page: " + edge.node.fields.slug)
      createPage({
        path: edge.node.fields.slug,
        component: SkillTemplate,
        context: {
          id: edge.node.id,
          slug: edge.node.fields.slug,
        },
      })
    }
  })

<<<<<<< HEAD
  // Create redirects for old URLs
  const {createRedirect} = actions 
  createRedirect({ fromPath: '/exploring-the-skills-problem-tech-lead-perspective', toPath: '/blog/exploring-the-skills-problem-tech-lead-perspective', isPermanent: true });
=======
  const {createRedirect} = actions 
  createRedirect({ fromPath: '/exploring-the-skills-problem-tech-lead-perspective', toPath: '/blog/exploring-the-skills-problem-tech-lead-perspective/', isPermanent: true });
  createRedirect({ fromPath: '/how-to-objectively-assess-your-own-proficiency-level', toPath: '/blog/how-to-objectively-assess-your-own-proficiency-level/', isPermanent: true });
  createRedirect({ fromPath: '/learning-software-development-is-like-building-a-puzzle', toPath: '/blog/learning-software-development-is-like-building-a-puzzle/', isPermanent: true });
  createRedirect({ fromPath: '/is-it-possible-to-define-proficiency-levels-for-technical-skills', toPath: '/blog/is-it-possible-to-define-proficiency-levels-for-technical-skills/', isPermanent: true });
  createRedirect({ fromPath: '/exploring-the-open-standards-for-skills-related-data', toPath: '/blog/exploring-the-open-standards-for-skills-related-data/', isPermanent: true });
  createRedirect({ fromPath: '/a-domain-model-for-skills-development', toPath: '/blog/a-domain-model-for-skills-development/', isPermanent: true });
  createRedirect({ fromPath: '/towards-a-skills-framework-for-solution-development', toPath: '/blog/towards-a-skills-framework-for-solution-development/', isPermanent: true });
  createRedirect({ fromPath: '/defining-the-devskilldojo-purpose', toPath: '/blog/defining-the-devskilldojo-purpose/', isPermanent: true });
  createRedirect({ fromPath: '/how-to-objectively-assess-your-own-proficiency-level', toPath: '/blog/how-to-objectively-assess-your-own-proficiency-level/', isPermanent: true });
  createRedirect({ fromPath: '/lets-begin', toPath: '/blog/lets-begin/', isPermanent: true });

>>>>>>> main
}
