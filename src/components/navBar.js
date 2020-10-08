import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const CustomNavbar = (props) => {
  const { pageInfo, siteTitle } = props;
  console.log(props)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">{siteTitle}</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/repository" className="link-no-style">
              <Nav.Link as="span" eventKey="repository">
                Repository
              </Nav.Link>
            </Link>
          </Nav>
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/blog" className="link-no-style">
              <Nav.Link as="span" eventKey="blog">
                Blog
              </Nav.Link>
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <Form inline onSubmit={e => e.preventDefault()}>
              <Form.Group>
                <FormControl
                  type="text"
                  placeholder="Fake Search"
                  className="mr-2"
                />
              </Form.Group>
              <Button>Fake Button</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar