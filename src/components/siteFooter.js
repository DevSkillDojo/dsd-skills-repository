import React from "react"
import { Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import logoWhite from '../images/LogoWhite.png';

const SiteFooter = props => {
  return (
    // <Row noGutters>
    //   <Col className="footer-col">
    //     <footer className="bg-dark">
    //       <span>
    //         © {new Date().getFullYear()}, Built with
    //         {` `}
    //         <a href="https://www.gatsbyjs.org">Gatsby</a>
    //       </span>
    //     </footer>
    //   </Col>
    // </Row>
    <footer>
    <div className="footer-content-area">
      <div className="container footer-menu-container">
        <Row>
          <Col sm={4}>
            <div className="footer-menu">
            <h4 className="footer-menu-subtitle">Our Company</h4>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/credits">Credits</Link>
                </li>                      
              </ul>
            </div>
          </Col>
          <Col sm={4}>
            <div className="footer-menu">
              <h4 className="footer-menu-subtitle">The Product</h4>
              <ul>
                <li>
                  <Link to="/how-it-works">How It Works</Link>
                </li>
                <li>
                  <Link to="/plans-and-pricing">Plans &amp; Pricing</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
                </li>                      
              </ul>
            </div>
          </Col>
          <Col sm={4}>
            <div className="footer-menu">
              <h4 className="footer-menu-subtitle">Help Support</h4>
              <ul>
                <li>
                  <Link to="/support-forum">Support Forum</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div> {/* End footer-content-area */}
      
    <div className="mini-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="copyright-text">
              <p>&copy; 2020<Link to="/">DevSkillDojo</Link>. All rights reserved. </p>
              <img src={logoWhite} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default SiteFooter
