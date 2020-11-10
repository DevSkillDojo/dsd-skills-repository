import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Button, Alert } from "react-bootstrap";
import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import SkillsOntologyDataService from "../api/SkillsOntologyDataService";

const Repository = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [alertHeading, setAlertHeading] = useState('');
  const [alertBody, setAlertBody] = useState('');
  const [searchText, setSearchText] = useState('');
  const [skillsList, setSkillsList] = useState([]);

  const handleChange = event => {
    setSearchText(event.target.value);
  };
 
  const handleSubmit = event => {
    event.preventDefault();

    if (searchText) {
      setShowAlert(false);
      setShowResults(false);
      console.log("Searching for skill with text: "+searchText);
      setIsLoading(true);

      const doSearch = async () => {
        const searchResult = await SkillsOntologyDataService.searchSkills(searchText);
        console.log("Data from ontology search service", searchResult.data);
        if (searchResult.data.total.value === 0) {
          setShowAlert(true);
          setAlertHeading('No matching results found');
          setAlertBody('No skills found that match your provided input');
        } else {
          setShowResults(true);
          setSkillsList(searchResult.data.hits);
        }
      };
      doSearch().catch((e) => {
        console.log("Error while attempting to search ontology: " + e.message);
      });
      
      setIsLoading(false);

    } else {
      setShowAlert(true);
      setAlertHeading('No search text provided');
      setAlertBody('Please provide some text to search on. The skills ontology provides full-text search capability, so you can provide partial text ');
    }

 
  };

  return (
    <Layout pageInfo={{ pageName: "repository" }}>
      <SEO title="Repository" />
      <div className="hero-wrapper py-5 bg-dark">
        <div className="hero">
          <h1 className="hero-header display-2 mb-5">Skills Repository</h1>
          <p>The DevSkillDojo skills repository helps everyone build a better understanding of the skills involved in software development.</p>
          <p>The focus is primarily on understanding relationships between skills</p>
        </div>
      </div>
      <Container>
        <Row className="pt-5 my-3">
          <Col className="col-12 col-md-8">
          <h2>Search the Skills Repository</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formSkillSearch">
              <Form.Control type="text" value={searchText} onChange={handleChange}  />
            </Form.Group>
            <Button className="bg-secondary border-secondary" variant="primary" type="submit" >
              Search
            </Button>
            {showAlert && <div>
                <Alert className="mt-3" variant="warning" onClose={() => setShowAlert(false)} dismissible>
                  <Alert.Heading>{alertHeading}</Alert.Heading>
                  <p>{alertBody}</p>
                </Alert>
              </div>
            }
          </Form>
          <hr />
          {showResults && <div>
            {skillsList.map((skill, index) => {
              console.log("Mapping skill entry: ",skill)
              return (
                <div key={index}>
                  <h4 className="text-dark">
                    <Link className="link-no-style" to={`/repository${skill._source.path.S}`}>
                    {skill._source.name.S}
                    </Link>
                  </h4>
                  <p>{skill._source.description.S}</p>
                  <small className="text-muted">
                    <span>Perspective: {skill._source.perspective.S}</span>
                  </small>
                  <hr />
                </div>
              )
            })}
            </div>
          }
          </Col>
          <Col className="col-12 col-md-4">
            <h3>Suggested Skills</h3>
            <p>Skill 1</p>
            <p>Skill 2</p>
            <p>Skill 3</p>
            <p>Skill 4</p>
            <p>Skill 5</p>
            <hr />
            <h3>Recently Viewed</h3>
            <p>Skill 1</p>
            <p>Skill 2</p>
            <p>Skill 3</p>
            <p>Skill 4</p>
            <p>Skill 5</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Repository
