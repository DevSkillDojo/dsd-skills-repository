import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { generateCustomPlaceholderURL } from "react-placeholder-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Card, Col } from "react-bootstrap"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query BlogPostsListQuery {
      allMdx(filter: { fields: { source: { eq: "blog-posts" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
              author
            }
            excerpt(pruneLength: 300)
          }
        }
        totalCount
      }
    }
  `)

  const placeholderImageURL = generateCustomPlaceholderURL(200, 200)

  return (
    <Layout pageInfo={{ pageName: "blog" }}>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <Row className="my-3">
        {data.allMdx.edges.map((edge, index) => {
          return (
            <Col className="col-12 col-sm-12 col-md-6 col-xl-4 my-2" key={index}>
              <Card className="blog-card">
                <Card.Img variant="top" src={placeholderImageURL} />
                <Card.Body>
                  <Card.Title className="blog-card-title">
                    {edge.node.frontmatter.title}
                  </Card.Title>
                  <Card.Text>{edge.node.excerpt}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    <span className="text-muted float-left">Author: {edge.node.frontmatter.author}</span>
                    <br />
                    <span className="text-muted float-left">
                      Posted On {edge.node.frontmatter.date}
                    </span>
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Layout>
  )
}

export default Blog
