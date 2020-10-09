import React from "react"
import { Row, Col } from "react-bootstrap"

const SiteFooter = props => {
  return (
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
  )
}

export default SiteFooter
