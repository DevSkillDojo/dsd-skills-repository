import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

const shortcodes = { Link } // Provide common components here

const PostTemplate = props => {
  console.log("Blog Post Template props: ", props)
  return (
    <Layout>
      {/* <h1>Blog Post - {props.data.mdx.frontmatter.title}</h1> */}
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default PostTemplate
