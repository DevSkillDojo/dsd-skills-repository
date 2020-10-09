import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { generateCustomPlaceholderURL } from "react-placeholder-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SubscribeWidget from "../components/subscribeWidget"
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
              category
            }
            excerpt(pruneLength: 300)
            timeToRead
          }
        }
        totalCount
      }
    }
  `)

  const placeholderImageURL = generateCustomPlaceholderURL(100, 100)

  return (
    <Layout pageInfo={{ pageName: "blog" }}>
      <SEO title="Blog" />
      <div className="hero">
        <h1 className="hero-header">The DevSkillDojo Blog</h1>
        <p>Exploring the skills needed for successful solution development</p>
        <p>Subscribe to our newsletter to make sure you don't miss anything</p>
      </div>
      <Row className="my-3">
        <Col className="col-12 col-md-8">
          <h2>All Posts</h2>
          {data.allMdx.edges.map((edge, index) => {
            return (
                <Card className="blog-card" key={index}>
                  <Link className="link-no-style" to={`/${edge.node.fields.slug}`}>
                    <Card.Body>
                        <Card.Title className="blog-card-title">
                        {edge.node.frontmatter.title}
                        
                        </Card.Title>
                      <Card.Text>{edge.node.excerpt}</Card.Text>
                    </Card.Body>
                  </Link>
                  <Card.Footer>
                    <small className="text-muted">
                      <span className="text-muted float-left">Author: {edge.node.frontmatter.author}</span>
                      <br />
                      <span className="text-muted float-left">
                        Posted On {edge.node.frontmatter.date}
                      </span><br />
                      <span className="text-muted float-left">
                        {edge.node.frontmatter.category}
                      </span><br />
                    </small>
                  </Card.Footer>
                </Card>
            )
          })}
          <p>Subscribe to our newsletter to make sure you don't miss anything</p>
          <SubscribeWidget />
        </Col>
        <Col className="col-12 col-md-4">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to make sure you don't miss anything</p>
          <SubscribeWidget />
          <h3>Popular Posts</h3>
          <p>TODO</p>
          <h3>Categories</h3>
          <p>Category 1</p>
          <p>Category 2</p>
          <p>Category 3</p>
          <p>Category 4</p>
          <p>Category 5</p>
        </Col>
      </Row>
    </Layout>
  )
}

export default Blog
