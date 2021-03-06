import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"

const CommunitiesPage = () => (
  <Layout pageInfo={{ pageName: "communities" }}>
  <SEO title="Communities" />
  <div className="hero-wrapper py-5 bg-dark">
    <div className="hero">
      <h1 className="hero-header display-2 mb-5">Communities</h1>
      <p>Lorem Ipsum</p>
    </div>
  </div>
  <Container>
    <Row className="pt-5 my-3">
      <Col className="col-12">
        <h2 className="mb-4">TODO</h2>
      </Col>
    </Row>
  </Container>
</Layout>
)

export default CommunitiesPage
