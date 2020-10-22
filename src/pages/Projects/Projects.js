import React from "react";
import { Badge } from "reactstrap";
import { Divider } from "semantic-ui-react";
import Project from "./Project/Project";

export const Projects = () => {
  const react = {
    name: "React",
    color: "#61dafb",
    icon: "react",
    iconID: "fab",
  };

  const javascript = {
    name: "JavaScript",
    color: "#e0bb53",
    icon: "js",
    iconID: "fab",
  };

  const graphql = {
    name: "GraphQL",
    color: "#e00097",
    icon: "project-diagram",
    iconID: "fas",
  };

  const aws = {
    name: "AWS",
    color: "#ec912d",
    icon: "aws",
    iconID: "fab",
  };

  const bootstrap = {
    name: "Bootstrap",
    color: "#563d7c",
    icon: "bootstrap",
    iconID: "fab",
  };

  return (
    <div className="compcard">
      <div className="mt-4">
        <Divider className="m-auto w-75" horizontal>
          <Badge color="info">
            <p className="h2">Projects</p>
          </Badge>
        </Divider>
      </div>
      <Project
        name="SpaceX GraphQL Project"
        date={"Aug 21, 2019"}
        description="This is a project where I used GraphQL, React, Heroku, and Javascript to create a User Interface for the SpaceX launch database."
        link="https://mighty-journey-87862.herokuapp.com/"
        gitlink="https://github.com/Lor3nzoMartinez/SpaceX-Flights-Apollo-GraphQL-React"
        CharmOne={react}
        CharmTwo={javascript}
        CharmThree={graphql}
      />
      <Project
        name="EyeDeeKay"
        date={"Aug 21, 2019"}
        description="Eye Dee Kay is a web app that use your zip code to find you a new and intresting place to eat or something to do when you are bored or indecisve."
        link="https://www.eyedeekay.com/"
        gitlink="https://github.com/Lor3nzoMartinez/EyeDeeKay"
        CharmOne={react}
        CharmTwo={aws}
        CharmThree={bootstrap}
      />
      <Project
        name="Pollen Tracker"
        date={"Aug 21, 2019"}
        description="Pollen tracker is a progressive web app that will alert you of the pollen the count and weather in your area."
        link="https://www.pollentracker.info/"
        gitlink="https://github.com/Lor3nzoMartinez/pollentracker"
        CharmOne={aws}
        CharmTwo={bootstrap}
        CharmThree={javascript}
      />
      <Project
        name="Teamin.gg"
        date={"Aug 21, 2019"}
        description="Teamin.gg is a progressive web app that will act as a social media network for all gamers. This is not a public social media network it will only let the best of the best gamers register."
        link="https://teamin.gg/"
        gitlink="https://github.com/Lor3nzoMartinez"
        CharmOne={aws}
        CharmTwo={react}
        CharmThree={graphql}
      />
    </div>
  );
};

export default Projects;
