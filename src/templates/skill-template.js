import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container, Row, Col, Image } from "react-bootstrap"

const shortcodes = { Link } // Provide list of components that should be made available to MDX files here

const SkillTemplate = props => {
  console.log("Skill Template props: ", props)
  return (
    <Layout>
      <Container>
        <Row className="skill-page-header my-4">
          <Col className="skill-page-header-left" sm={10}>
            <h1>{props.data.mdx.frontmatter.title}</h1>
            <p>{props.data.mdx.frontmatter.description}</p>
            <p>Fully Qualified Name: {props.data.mdx.frontmatter.fqn}</p>
            <h2>General References:</h2>
            <ul>
              {props.data.mdx.frontmatter.references.map((ref, i) => {
                console.log("Found a reference: "+ref.name);
                return (<li key={ref.name}><a href={ref.url}>{ref.name}</a></li>)})
              } 
            </ul>
           </Col>
          <Col className="skill-page-header-right" sm={2}>
            {props.data.mdx.frontmatter.logo && <Image src={props.data.mdx.frontmatter.logo} alt="logo" fluid/>}
          </Col>
        </Row>
        <Row className="skill-page-body">
          <Col className="skill-page-body-left" sm={10}>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
            </MDXProvider>
          </Col>
          <Col className="skill-page-body-right" sm={2}>
            <h5 className="mb-3">Metadata</h5>
            <p>Perspective: {props.data.mdx.frontmatter.perspective}</p>
            <p>Last Updated: {props.data.mdx.frontmatter.updated}</p>
            <hr />
            <h5 className="mb-3">My Progress</h5>
            <p>Level: TODO</p>
            <p>Currently Learning</p>
          </Col>
        </Row>
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
        title,
        fqn,
        logo,
        description,
        perspective,
        updated,
        references {
          name,
          url
        }
      }
    }
  }
`

export default SkillTemplate
