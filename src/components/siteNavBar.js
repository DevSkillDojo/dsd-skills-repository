import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"

const SiteNavbar = (props) => {
  const { pageInfo, siteTitle } = props;
  //console.log("Navbar props: ",props);
  return (
    <>
      <Navbar sticky="top" variant="dark" expand="lg" className="bg-dark">
        <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">{siteTitle}</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            {/* <Nav.Item>
                <Link to="/repository" className="link-no-style">
                <Nav.Link as="span" eventKey="repository">
                    Repository
                </Nav.Link>
                </Link>
            </Nav.Item> */}
            <Nav.Item>
                <Link to="/blog" className="link-no-style">
                <Nav.Link as="span" eventKey="blog">
                    Blog
                </Nav.Link>
                </Link>
            </Nav.Item>
            <NavDropdown title="Skills Framework" id="skills-framework">
                <NavDropdown.Item eventKey="skills-framework-overview"><Link to="/skills-framework/overview" className="link-no-style">Overview</Link></NavDropdown.Item>
                <NavDropdown.Item eventKey="skills-domain-model"><Link to="/skills-framework/skills-domain-model" className="link-no-style">Skills Domain Model</Link></NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown title="Products" id="products">
                <NavDropdown.Item eventKey="skills-knowledgebase">Skills KnowledgeBase</NavDropdown.Item>
                <NavDropdown.Item eventKey="skills-ontology-api">Skills Ontology API</NavDropdown.Item>
                <NavDropdown.Item eventKey="skills-manager-app">Skills Manager App</NavDropdown.Item>
                <NavDropdown.Item eventKey="skills-management-consulting">Skills Management Consulting</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>

          {/* <Nav className="ml-auto">
            <Form inline onSubmit={e => e.preventDefault()}>
              <Form.Group>
                <FormControl
                  type="text"
                  placeholder="Find Skill Definition"
                  className="mr-2"
                />
              </Form.Group>
              <Button className="bg-secondary border-secondary">Search</Button>
            </Form>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default SiteNavbar