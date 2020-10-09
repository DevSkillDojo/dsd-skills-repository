/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import NotificationBanner from "./notificationBanner"
import Navbar from "./navBar"

import "./gatsby-default-layout.css"

const Layout = (props) => {

  console.log("Layout Props: ", props);

  const { children, pageInfo } = props;

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          showNotificationBanner
        }
      }
    }
  `)

  return (
    <>
      <Container fluid className="px-0 main">
        <header>
          <Row noGutters className="justify-content-center">
            <Col>
              <NotificationBanner showNotificationBanner={data.site.siteMetadata.showNotificationBanner} />
            </Col>
          </Row>
          <Navbar pageInfo={pageInfo} siteTitle={data.site.siteMetadata.title} />
        </header>
        <Row noGutters>
          <Col>
            <Container className="mt-5">
              <main>{children}</main>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-0">
        <Row noGutters>
          <Col className="footer-col">
            <footer>
              <span>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </span>
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
