import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(graphql`
  query BlogPostsListQuery {
    allMdx(filter: {fields: {source: {eq: "blog-posts"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          excerpt(pruneLength: 100)
        }
      }
      totalCount
    }
  }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <p>Welcome to the DevSkillDojo blog</p>
      <ul>
        {data.allMdx.edges.map( (edge, index) => {
          return (
            <Link to={`/${edge.node.fields.slug}`} key={index}>
              <li >
                <p>{edge.node.frontmatter.title}</p>
                <p>{edge.node.frontmatter.date}</p>
                <p>{edge.node.excerpt}</p>
              </li>
            </Link>
          )
        })}
      </ul>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Blog
