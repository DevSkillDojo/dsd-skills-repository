import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"

const CreditsPage = () => (
  <Layout pageInfo={{ pageName: "credits" }}>
  <SEO title="Credits" />
  <div className="hero-wrapper py-5 bg-dark">
    <div className="hero">
      <h1 className="hero-header display-2 mb-5">Credits</h1>
      <p>Let's appreciate people who share their work for the greater good</p>
    </div>
  </div>
  <Container>
    <Row className="pt-5 my-3">
      <Col className="col-12">
        <h2 className="mb-5">Photographers</h2>
        <p className="mb-4">As amateur photographers ourselves, we would like to normalise the process of giving credit to the creators of the amazing photographs
        we use throughout our site.</p>

        <p>As a general rule, all photographs include the relevant credits underneath, but here we simply list them all.</p>

        <ul>
          <li><a href="https://unsplash.com/@pafuxu" className="credit-name">Kouji Tsuru (@pafuxu)</a> :: <a href="https://unsplash.com/photos/RDCPCjxPOyM">Torii gate silhouette</a></li>
          <li><a href="https://unsplash.com/@diesektion" className="credit-name">Robert Anasch (@diesektion)</a> :: <a href="https://unsplash.com/photos/ZFYg5jTvB4A">Red and yellow doors</a></li>
          <li><a href="https://unsplash.com/@sickhews" className="credit-name">Wes Hicks (@sickhews)</a> :: <a href="https://unsplash.com/photos/4-EeTnaC1S4">Man wearing headphones</a></li>
          <li><a href="https://unsplash.com/@rj2747" className="credit-name">Richard Jacobs (@rj2747)</a> :: <a href="https://unsplash.com/photos/8oenpCXktqQ">Elephants drinking</a></li>
          <li><a href="https://unsplash.com/@landb" className="credit-name">Branko Stancevic (@landb)</a> :: <a href="https://unsplash.com/photos/GI1hwOGqGtE">Skills screen</a></li>
          <li><a href="https://unsplash.com/@gum_meee" className="credit-name">Michael Heuser (@gum_meee)</a> :: <a href="https://unsplash.com/photos/tI665XBDiAA">Suspension bridge</a></li>
          <li><a href="https://unsplash.com/@itfeelslikefilm" className="credit-name">Janko Ferlič (@itfeelslikefilm)</a> :: <a href="https://unsplash.com/photos/sfL_QOnmy00">Library lights</a></li>
          <li><a href="https://unsplash.com/@kev01218" className="credit-name">Kevin Olson (@kev01218)</a> :: <a href="https://unsplash.com/photos/l0Ii4WaROS8">Colosseum</a></li>
          <li><a href="https://unsplash.com/@kellysikkema" className="credit-name">Kelly Sikkema (@kellysikkema)</a> :: <a href="https://unsplash.com/photos/M98NRBuzbpc">Tax Forms</a></li>
          <li><a href="https://unsplash.com/@wocintechchat" className="credit-name">Christina @ wocintechchat.com (@wocintechchat)</a> :: <a href="https://unsplash.com/photos/ESClFkgWwH8">Programming Books</a></li>
          <li><a href="https://unsplash.com/@herosordinaires" className="credit-name">Regis F (@herosordinaires)</a> :: <a href="https://unsplash.com/photos/Urd-8c7N_pQ">Lost in the fog</a></li>
          <li><a href="https://unsplash.com/@dinoreichmuth" className="credit-name">Dino Reichmuth (@dinoreichmuth)</a> :: <a href="https://unsplash.com/photos/A5rCN8626Ck">Kombi dream</a></li>
          <li><a href="https://unsplash.com/@rosssneddon" className="credit-name">Ross Sneddon (@rosssneddon)</a> :: <a href="https://unsplash.com/photos/sWlDOWk0Jp8">Puzzle</a></li>
          <li><a href="https://unsplash.com/@biancablah" className="credit-name">Bianca Ackermann (@biancablah)</a> :: <a href="https://unsplash.com/photos/mxsXtGVjiBg">Brooklyn bridge puzzle box</a></li>
          <li><a href="https://unsplash.com/@biancablah" className="credit-name">Bianca Ackermann (@biancablah)</a> :: <a href="https://unsplash.com/photos/ETL4_ZPBH1s">Brooklyn bridge puzzle in progress</a></li>
          <li><a href="https://unsplash.com/@biancablah" className="credit-name">Bianca Ackermann (@biancablah)</a> :: <a href="https://unsplash.com/photos/rIdBKpOw7Bk">Brooklyn bridge puzzle corner</a></li>
          <li><a href="https://unsplash.com/@steve_j" className="credit-name">Steve Johnson (@steve_j)</a> :: <a href="https://unsplash.com/photos/8VO-UxlJ-Lw">Ball of twine</a></li>
          <li><a href="https://unsplash.com/@ilmatar" className="credit-name">Iza Gawrych (@ilmatar)</a> :: <a href="https://unsplash.com/photos/oL3O2PybLoo">Russian dolls</a></li>
          <li><a href="https://unsplash.com/@veeterzy" className="credit-name">veeterzy (@veeterzy)</a> :: <a href="https://unsplash.com/photos/sMQiL_2v4vs">Tree in the forest</a></li>
          <li><a href="https://unsplash.com/@intothefab" className="credit-name">Fabio Comparelli (@intothefab)</a> :: <a href="https://unsplash.com/photos/uq2E2V4LhCY">Running on suspension bridge</a></li>
        </ul>
      </Col>
    </Row>
  </Container>
</Layout>
)

export default CreditsPage
