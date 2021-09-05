import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Container } from "react-bootstrap"
import FrameWorkImage from "../../images/DevSkillDojo_Skills_Framework-1.png"

const SkillsFrameworkOverview = () => (
  <Layout>
    <SEO title="Skills Framework Overview" description="Overview of the skills framework used by DevSkillDojo" />
    <Container className="px-5 mb-5"> 
      <h1 className="mt-5 mb-1">Skills Framework</h1>
      <p>Release Date: 2020-03-07</p>
      <p>Version: 0.0.3</p>
      <p>The diagram below provides a high level depiction of the DevSkillDojo Skills Framework. 
        The intention of this framework is to provide a considered method for structuring skills. 
        Additionally, the framework serves as a guideline to prevent one-dimensional thinking w.r.t. skills, 
        i.e. always equating skills with technologies.</p>

      <p>Key Point for understanding the purpose of the framework: 
        Projects and products are delivered by people with capabilities. 
        The dictionary definition of "Capability" is roughly:</p>

      <blockquote>
        <p>The ability to do [something]</p>
      </blockquote>

      <p>But it is important to give more structure to this definition, so we use the following pattern:</p>

      <p>A CAPABILITY is generally:</p>
      <ul>
        <li>The application of one or more HARD SKILLS,</li>
        <li>Guided by pre-existing underlying KNOWLEDGE</li>
        <li>Using one or more TOOLS or TECHNOLOGIES</li>
        <li>By a person with a set of SOFT SKILLS</li>
      </ul>

      <img src={FrameWorkImage} alt="Skills Framework" />

      <h5 className="mt-5">Diagram Notes:</h5>
      <ul>
        <li>Domains are derived from the North American Industry Classification System (NAICS), but with specific adjustments to align with the goals of this frameworkFurther detail of the framework is provided in the domain model and skills ontology (documented separately)</li>
      </ul>

      <p className="mt-5">Further detail of the framework is provided in the domain model and skills ontology (Not published yet)</p>

    </Container>
  </Layout>
)

export default SkillsFrameworkOverview
