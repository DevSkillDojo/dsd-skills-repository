import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container, Row, Col, Image } from "react-bootstrap"

const shortcodes = { Link } // Provide list of components that should be made available to MDX files here

const SkillTemplate = props => {
  console.log("Skill Template props: ", props);

  // TODO: Deriving the levels from the front-matter. 
  // In case of inherited levels, we need to make an API call
  let levelDefs = {
    type: "",
    level1: "",
    level2: "",
    level3: "",
    level4: "",
    level5: ""
  }

  if (props.data.mdx.frontmatter.level_spec_type === "CUSTOM") {
    levelDefs.type = "Custom";
    levelDefs.level1 = props.data.mdx.frontmatter.levels.level1;
    levelDefs.level2 = props.data.mdx.frontmatter.levels.level2;
    levelDefs.level3 = props.data.mdx.frontmatter.levels.level3;
    levelDefs.level4 = props.data.mdx.frontmatter.levels.level4;
    levelDefs.level5 = props.data.mdx.frontmatter.levels.level5;
  } else if (props.data.mdx.frontmatter.level_spec_type === "INHERITED") {
    levelDefs.type = "Inherited";
    // TODO - Make an API call
  }

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
                return (<li key={ref.name}><a href={ref.url} target="_blank">{ref.name}</a></li>)})
              } 
            </ul>
            <h2>Certifications:</h2>
            <ul>
              {props.data.mdx.frontmatter.certifications.map((cert, i) => {
                console.log("Found a certification: "+cert.name);
                return (<li key={cert.name}><a href={cert.url} target="_blank">{cert.name}</a></li>)})
              } 
            </ul>
            <h2>Proficiency Levels ({levelDefs.type}): </h2>
            <ul>
              <li>Level 1: {levelDefs.level1}</li>
              <li>Level 2: {levelDefs.level2}</li>
              <li>Level 3: {levelDefs.level3}</li>
              <li>Level 4: {levelDefs.level4}</li>
              <li>Level 5: {levelDefs.level5}</li>
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
        },
        certifications {
          name,
          url
        },
        level_spec_type,
        levels {
          level1,
          level2,
          level3,
          level4,
          level5
        }
      }
    }
  }
`

export default SkillTemplate
