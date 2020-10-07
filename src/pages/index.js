import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to DevSkillDojo</h1>
    <Link to="/repository/">Repository</Link> <br />
    <Link to="/blog/">Blog</Link> <br />
  </Layout>
)

export default IndexPage
