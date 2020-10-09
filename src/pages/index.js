import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" />
    <h1>Welcome to DevSkillDojo</h1>
  </Layout>
)

export default IndexPage
