import React from "react"
import { Row, Col, Container, Form, Button } from "react-bootstrap"
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
        <h2>Search the Skills Repository</h2>
        <Form>
          <Form.Group controlId="formSkillSearch">
            <Form.Control type="text" />
          </Form.Group>
          <Button className="bg-secondary border-secondary" variant="primary" type="submit">
            Search
          </Button>
        </Form>
        </Col>
        <Col className="col-12 col-md-4">
          <h3>Suggested Skills</h3>
          <p>Skill 1</p>
          <p>Skill 2</p>
          <p>Skill 3</p>
          <p>Skill 4</p>
          <p>Skill 5</p>
          <hr />
          <h3>Recently Viewed</h3>
          <p>Skill 1</p>
          <p>Skill 2</p>
          <p>Skill 3</p>
          <p>Skill 4</p>
          <p>Skill 5</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Repository
