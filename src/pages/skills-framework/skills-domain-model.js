import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Container } from "react-bootstrap"

const SkillsDomainModel = () => (
  <Layout>
    <SEO title="Skills Domain Model" />
    <Container className="px-5"> 
      <h1 className="mt-5 mb-1">Skills Domain Model</h1>
      <p>Release Date: 2020-04-10</p>
      <p>Version: 0.0.5</p>
      <p>The skills domain model serves as a structural definition of all the concepts related to the skills domain. 
        It helps us to define each concept as well as how each concept is related to others. 
        Effectively, it is the underpinning data model of the DSD skills framework.</p>

      <p>The UML diagram below provides a visual depiction of the domain model:</p>

      <p>TODO - IMAGE</p>
    </Container>
  </Layout>
)

export default SkillsDomainModel
