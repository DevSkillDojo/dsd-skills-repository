import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"

const CreditsPage = () => (
  <Layout pageInfo={{ pageName: "credits" }}>
  <SEO title="Credits" />
  <div className="hero-wrapper py-5 bg-dark">
    <div className="hero">
      <h1 className="hero-header display-2 mb-5">Credits</h1>
      <p>Let's appreciate the great photographers who graciously share their work</p>
    </div>
  </div>
  <Container>
    <Row className="pt-5 my-3">
      <Col className="col-12">
        <p className="mb-4">As amateur photographers ourselves, we would like to normalise the process of giving credit to the creators of the amazing photographs
        we use throughout our site.</p>
      </Col>
    </Row>
  </Container>
</Layout>
)

export default CreditsPage
