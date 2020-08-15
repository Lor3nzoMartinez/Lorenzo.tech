import React from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./pages/Header/Header";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import "./App.scss";

function App() {
  return (
    <Container fluid>
      <Row className="mx-5">
        <Col>
          <Header />
        </Col>
      </Row>

      <Row className="mx-5">
        <Col xs="6">
          <About />
          <Skills />
        </Col>
        <Col xs="6">
          <Experience />
        </Col>
      </Row>

      <Row className="mx-5">
        <Col>
          <Projects />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
