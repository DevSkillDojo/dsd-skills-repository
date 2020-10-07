import React from "react"
import Layout from "../components/layout"

const PostTemplate = props => {
  console.log("Blost Post Template props: ", props)
  return (
    <Layout>
      <h1>Blog Post</h1>
    </Layout>
  )
}

export default PostTemplate
