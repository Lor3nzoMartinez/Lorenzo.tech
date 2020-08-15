import React from "react";
import { Badge, Card, CardTitle } from "reactstrap";
import { Divider } from "semantic-ui-react";
import Project from "./Project/Project";

/*    TODO
 * [] Add images to project tile
 * [] Add paralax style to project card
 *
 *
 */

export const Projects = () => {
  return (
    <div className="my-3">
      <Card className="mb-3">
        <CardTitle className="my-4">
          <Divider className="m-auto w-75" horizontal>
            <Badge color="info">
              <p className="h2">Projects</p>
            </Badge>
          </Divider>
        </CardTitle>
      </Card>
      <Project
        name="SpaceX GraphQL Project"
        description="This is a project where I used GraphQL, React, Heroku, and Javascript to create a User Interface for the SpaceX launch database."
        link="https://mighty-journey-87862.herokuapp.com/"
        gitlink="https://github.com/Lor3nzoMartinez/SpaceX-Flights-Apollo-GraphQL-React"
      />
    </div>
  );
};

export default Projects;
