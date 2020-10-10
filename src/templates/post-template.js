import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SubscribeWidget from "../components/subscribeWidget"
import { Row, Container } from "react-bootstrap"

const shortcodes = { Link } // Provide list of components that should be made available to MDX files here

const PostTemplate = props => {
  console.log("Blog Post Template props: ", props)
  return (
    <Layout>
      <Container>
        <h1 className="my-5">{props.data.mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        </MDXProvider>
        <div className="my-5" >
          <hr />
          <p>Subscribe to our newsletter to make sure you don't miss anything</p>
          <SubscribeWidget />
        </div>
      </Container>


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
