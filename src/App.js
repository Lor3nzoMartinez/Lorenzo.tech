import React from "react";
import { createMedia } from "@artsy/fresnel";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Grid, Container, Segment } from "semantic-ui-react";
import About from "./pages/About/About";
import Header from "./pages/Header/Header";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import "./App.scss";

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920,
  },
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

library.add(fab, fas);

function App() {
  return (
    <Container>
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <Segment basic as={Media} lessThan="computer">
          <Grid centered columns="equal">
            <Grid.Row centered>
              <Grid.Column>
                <Header Media={Media} />
                <About Media={Media} />
                <Experience Media={Media} />
                <Skills Media={Media} />
                <Projects Media={Media} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment basic as={Media} greaterThanOrEqual="computer">
          <Grid centered columns="equal">
            <Grid.Row centered>
              <Grid.Column>
                <Header Media={Media} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <About Media={Media} />
                <Experience Media={Media} />
              </Grid.Column>
              <Grid.Column>
                <Skills Media={Media} />
                <Projects Media={Media} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </MediaContextProvider>
    </Container>
  );
}

export default App;
