import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
// import Figure from "../components/figure"
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
      <div className="hero-wrapper py-5 bg-dark">
        <div className="hero">
          <h1 className="hero-header display-2 mb-5">DevSkillDojo Blog</h1>
          <p>Exploring the skills needed for successful solution development</p>
          {/* <p>Subscribe to our newsletter to make sure you don't miss anything</p> */}
        </div>
      </div>
      {/* <Img fluid={props.data.file.childImageSharp.fluid} /> */}
      {/* <Figure url="../images/Mountains.jpg" alt="Torri gate" caption="Testing" /> */}
      <Container className="px-5 blog-container"> 
        <h1 className="mt-5 mb-1">{props.data.mdx.frontmatter.title}</h1>
        <p className="text-muted mb-5">Author: {props.data.mdx.frontmatter.author}, Published: {props.data.mdx.frontmatter.date}</p>
        {/* <Img fluid={props.data.mdx.frontmatter.featuredImage.childImageSharp.fluid} /> */}
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        </MDXProvider>
        {/* <div className="my-5" >
          <hr />
          <p>Subscribe to our newsletter to make sure you don't miss anything</p>
          <SubscribeWidget />
        </div> */}
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
