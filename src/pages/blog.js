import React, { useState, useEffect } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
//import { generateCustomPlaceholderURL } from "react-placeholder-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SubscribeWidget from "../components/subscribeWidget"
import { Row, Col, Container, Alert } from "react-bootstrap"

const Blog = () => {

  const [showSubscribeSuccess, setShowSubscribeSuccess] = useState(false);
  const handleSubscriptionResult = (result) => {
    console.log("Setting subscription result to: "+result);
    setShowSubscribeSuccess(result);
  }

  const data = useStaticQuery(graphql`
    query BlogPostsListQuery {
      allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: { fields: { source: { eq: "blog" } } }) {
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

  // Extract all categories from data
  let categoriesArray = [];
  data.allMdx.edges.forEach( post => {
    if (!categoriesArray.includes(post.node.frontmatter.category)) {
      categoriesArray.push(post.node.frontmatter.category);
    }
  })
  console.log("Categories array: ",categoriesArray);

  //const placeholderImageURL = generateCustomPlaceholderURL(100, 100)

  return (
    <Layout pageInfo={{ pageName: "blog" }}>
      <SEO title="Blog" description="Exploring the skills needed for successful solution development"  />
      <div className="hero-wrapper py-5 bg-dark">
        <div className="hero">
          <h1 className="hero-header display-2 mb-5">DevSkillDojo Blog</h1>
          <p>Exploring the skills needed for successful solution development</p>
          {/* <p>Subscribe to our newsletter to make sure you don't miss anything</p> */}
        </div>
      </div>
      <Container>
        <Row className="pt-5 my-3">
          <Col className="col-12 col-md-8">
            <h2 className="mb-4">All Posts</h2>
            {data.allMdx.edges.map((edge, index) => {
              return (
                <div key={index}>
                  <h3 className="text-dark">
                    <Link className="link-no-style" to={`/${edge.node.fields.slug}`}>
                    {edge.node.frontmatter.title}
                    </Link>
                  </h3>
                  <p>{edge.node.excerpt}</p>
                  <div>
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
                    <hr />
                  </div>
                </div>
              )
            })}
            {!showSubscribeSuccess && <div>
                <p>Subscribe to our newsletter to make sure you don't miss anything</p>
                <SubscribeWidget resultCallback={handleSubscriptionResult}/>
              </div>
            }
            {showSubscribeSuccess && <div>
                <Alert variant="primary">
                  <Alert.Heading>Thank you!</Alert.Heading>
                  You have successfully subscribed to our newsletter. Please keep an eye on your inbox for the welcome message.
                </Alert>
              </div>
            }
          </Col>
          <Col className="col-12 col-md-4">
            {!showSubscribeSuccess && <div>
                <h3>Newsletter</h3>
                <p>Subscribe to our newsletter to make sure you don't miss anything</p>
                <SubscribeWidget resultCallback={handleSubscriptionResult}/>
              </div>
            }
            {showSubscribeSuccess && <div>
                <Alert variant="primary">
                  <Alert.Heading>Thank you!</Alert.Heading>
                  You have successfully subscribed to our newsletter. Please keep an eye on your inbox for the welcome message.
                </Alert>
              </div>
            }
            <hr />
            <h3>Categories</h3>
            {categoriesArray.map( (cat, index) => {
              return(
              <p key={index}>{cat}</p>
              )
            })}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Blog
