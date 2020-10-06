import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Repository = () => (
  <Layout>
    <SEO title="Repository" />
    <h1>Repository</h1>
    <p>Welcome to the DevSkillDojo skills repository</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Repository
