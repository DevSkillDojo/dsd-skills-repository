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
import SiteNavbar from "./siteNavBar"
import SiteFooter from "./siteFooter"

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
        <header className="site-header">
          <NotificationBanner showNotificationBanner={data.site.siteMetadata.showNotificationBanner} />
          <SiteNavbar pageInfo={pageInfo} siteTitle={data.site.siteMetadata.title} />
        </header>
        <Row noGutters>
          <Col>
            <main>{children}</main>
          </Col>
        </Row>
      </Container>
      <SiteFooter />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
