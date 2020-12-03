import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"

const AboutPage = () => (
  <Layout pageInfo={{ pageName: "about" }}>
  <SEO title="About Us" />
  <div className="hero-wrapper py-5 bg-dark">
    <div className="hero">
      <h1 className="hero-header display-2 mb-5">About DevSkillDojo</h1>
      <p>We help passionate people build world-class technical teams</p>
    </div>
  </div>
  <Container className="content-page-container">
    <Row className="pt-5 my-3">
      <Col className="col-12">
        <h2 className="mb-4">Our purpose</h2>

        <p>DevSkillDojo was founded by Greg Fullard based on a realization that skills for solution development will remain in short supply
          until we take a hard and honest look at how we treat skills (and skills development) in the tech sector</p>

        <p>A detailed treatise of our purpose is documented in this blog article: <a href="/blog/defining-the-devskilldojo-purpose/">Defining the DevSkillDojo Purpose</a>,
        but here's the TLDR:</p>

        <ul>
          <li>The skills shortage is universal, let's focus on BUILDING skills, instead of putting all our effort into FINDING skills that someone else built</li>
          <li>The web is filled with amazing learning content from talented content creators. Let's put our energy into making existing content easier to find, rather than just producing more</li>
          <li>Skills have complex networks on dependencies. If we understand these better, we are able to assemble better learning roadmaps</li>
          <li>We must stop using "Years of Experience" as a measurement of skill levels</li>
        </ul>

        <h2 className="mb-4 mt-5">Solutions</h2>
        <p>Our suite of products/solutions are carefully assembled to help us reach our purpose. We are building/expanding them using a responsive approach that
          carefully listens to customer feedback and general movements in the learning marketplace. They include:</p>

        <h5>DevSkillDojo Skills Ontology</h5>
        <p>An API-first repository of technology skills that places a heavy emphasis on the interdependencies between skills. This ontology is the basis for all our tools.</p>

        <h5>DevSkillDojo Skills Manager</h5>
        <p>An SaaS solution that allows large and small teams to track and manage the skills they have, while correlating it with the skills they actually need.</p>

        <h5>DevSkillDojo Guided Self Learning</h5>
        <p>A structured platform that leverages existing learning material, carefully curated and assembled into learning paths based on individual requirements.</p>

      </Col>
    </Row>
  </Container>
</Layout>
)

export default AboutPage
