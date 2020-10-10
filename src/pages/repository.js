import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Repository = () => (
  <Layout pageInfo={{ pageName: "repository" }}>
    <SEO title="Repository" />
    <div className="hero-wrapper py-5 bg-dark">
        <div className="hero">
          <h1 className="hero-header display-2 mb-5">Skills Repository</h1>
          <p>The DevSkillDojo skills repository helps everyone build a better understanding of the skills involved in software development.</p>
          <p>The focus is primarily on understanding relationships between skills</p>
        </div>
      </div>
      <Container>
        <Row className="pt-5 my-3">
          <Col className="col-12 col-md-8">
          </Col>
        </Row>
      </Container>
  </Layout>
)

export default Repository
