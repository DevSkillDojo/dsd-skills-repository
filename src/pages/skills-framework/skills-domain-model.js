import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Container } from "react-bootstrap"
import DomainModelImage from "../../images/DevSkillDojo_Domain_Model.png"

const SkillsDomainModel = () => (
  <Layout>
    <SEO title="Skills Domain Model" description="A domain model for structuring data about skills" />
    <Container className="px-5 mb-5"> 
      <h1 className="mt-5 mb-1">Skills Domain Model</h1>
      <p>Release Date: 2020-04-10</p>
      <p>Version: 0.0.5</p>
      <p>The skills domain model serves as a structural definition of all the concepts related to the skills domain. 
        It helps us to define each concept as well as how each concept is related to others. 
        Effectively, it is the underpinning data model of the DSD skills framework.</p>

      <p>The UML diagram below provides a visual depiction of the domain model:</p>

      <img src={DomainModelImage} alt="Skills Domain Model" />
    </Container>
  </Layout>
)

export default SkillsDomainModel
