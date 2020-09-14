import React, { useState, useEffect } from "react";
import { Grid, Container } from "semantic-ui-react";
import About from "./pages/About/About";
import Header from "./pages/Header/Header";
import MobHeader from "./pages/MobHeader/MobHeader";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import "./App.scss";

function App() {
  const [scrnWidth, setScrnWidth] = useState(window.innerWidth);

  useEffect(async () => {
    while (scrnWidth != window.innerWidth) {
      setScrnWidth(window.innerWidth);
    }
    console.log(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <Container>
      {scrnWidth < 992 ? (
        <Grid centered columns="equal">
          <Grid.Row centered>
            <Grid.Column>
              <MobHeader />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <About />
              <Experience />
              <Skills />
              <Projects />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ) : (
        <Grid centered columns="equal">
          <Grid.Row centered>
            <Grid.Column>
              <Header />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <About />
              <Experience />
            </Grid.Column>
            <Grid.Column>
              <Skills />
              <Projects />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
    </Container>

    // <Container fluid>
    //   <Row className="mx-5">
    //     <Col>
    //       <Header />
    //     </Col>
    //   </Row>

    //   <Row className="mx-5">
    //     <Col>
    //       <Skills />
    //       <Experience />
    //     </Col>
    //   </Row>

    //   <Row className="mx-5">
    //     <Col>
    //       <Projects />
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default App;
