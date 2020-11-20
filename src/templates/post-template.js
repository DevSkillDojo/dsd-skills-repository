import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
// import Img from "gatsby-image"
import SubscribeWidget from "../components/subscribeWidget"
import { Container } from "react-bootstrap"

const shortcodes = { Link } // Provide list of components that should be made available to MDX files here

const PostTemplate = props => {
  console.log("Blog Post Template props: ", props)
  return (
    <Layout>
      <Container className="px-5"> 
        <h1 className="mt-5 mb-1">{props.data.mdx.frontmatter.title}</h1>
        <p className="text-muted mb-5">Author: {props.data.mdx.frontmatter.author}, Published: {props.data.mdx.frontmatter.date}</p>
        {/* <Img fluid={props.data.mdx.frontmatter.featuredImage.childImageSharp.fluid} /> */}
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
        author
        date
      }
    }
  }
`

export default PostTemplate
