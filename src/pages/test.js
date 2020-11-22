import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
// import Image from "../components/image"

const TestPage = (props) => (
  <Layout>
    <h1>Test Page</h1>
    {/* <Image /> */}
    <Img fluid={props.data.file.childImageSharp.fluid} />
  </Layout>
)

export const pageQuery = graphql`
  query TestQuery {
    file(relativePath: {eq: "Mountains.jpg"}) {
      extension
      name
      childImageSharp {
        fluid(maxWidth: 300) {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          originalImg
          originalName
        }
      }
    }
  }
`

export default TestPage
