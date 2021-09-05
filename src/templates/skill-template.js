import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container } from "react-bootstrap"

const shortcodes = { Link } // Provide list of components that should be made available to MDX files here

const SkillTemplate = props => {
  //console.log("Skill Template props: ", props)
  return (
    <Layout>
      <Container>
        <h1 className="my-5">{props.data.mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SkillPageQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default SkillTemplate
