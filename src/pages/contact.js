import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

const ContactPage = () => (
  <Layout pageInfo={{ pageName: "contact" }}>
  <SEO title="Contact Us" />
  <div className="hero-wrapper py-5 bg-dark">
    <div className="hero">
      <h1 className="hero-header display-2 mb-5">Contact Us</h1>
      <p>Make our day by getting in touch :)</p>
    </div>
  </div>
  <Container>
    <Row className="pt-5 my-3">
      <Col className="col-12">
        <h4><a href="https://twitter.com/devskilldojo" className="social-link"><FaTwitter />  @DevSkillDojo</a></h4>
        <br />
        <p>Eventually we'll add a web form here, but honestly, Twitter is the best option</p>
      </Col>
    </Row>
  </Container>
</Layout>
)

export default ContactPage
