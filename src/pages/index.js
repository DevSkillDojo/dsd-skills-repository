import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" />
    <Container>
      <h1>Welcome to DevSkillDojo</h1>
    </Container>
  </Layout>
)

export default IndexPage
