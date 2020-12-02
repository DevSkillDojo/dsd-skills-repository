import React from "react"
import { Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import logoWhite from '../images/LogoWhite.png';

const SiteFooter = props => {
  return (
    <footer>
    <div className="footer-content-area">
      <div className="container footer-menu-container">
        <Row>
          <Col sm={4}>
            <div className="footer-menu">
            {/* <h4 className="footer-menu-subtitle">Our Company</h4> */}
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>       
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>              
              </ul>
            </div>
          </Col>
          <Col sm={4}>
            <div className="footer-menu">
              {/* <h4 className="footer-menu-subtitle">Products & Services</h4> */}
              <ul>
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
              {/* <h4 className="footer-menu-subtitle">Contact</h4> */}
              <ul>
                <li>
                  <Link to="/contact">Social Media & Communities</Link>
                </li>
                <li>
                  <Link to="/credits">Photo Credits</Link>
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
              <p>&copy; 2020 <Link to="/">DevSkillDojo</Link>. All rights reserved. </p>
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
