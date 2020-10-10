import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" />
    <Container fluid className="px-0">
    <div className="welcome-header">
      <h1 className="display-4">Welcome to DevSkillDojo</h1>
      <p className="lead mt-4 mb-5">Helping passionate people build world-class technical teams</p>
    </div>
    </Container>
  </Layout>
)

export default IndexPage
