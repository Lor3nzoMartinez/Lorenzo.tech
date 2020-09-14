import React from "react";
import { Badge } from "reactstrap";
import { Divider } from "semantic-ui-react";
import Project from "./Project/Project";

export const Projects = () => {
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
      />
      <Project
        name="SpaceX GraphQL Project"
        date={"Aug 21, 2019"}
        description="This is a project where I used GraphQL, React, Heroku, and Javascript to create a User Interface for the SpaceX launch database."
        link="https://mighty-journey-87862.herokuapp.com/"
        gitlink="https://github.com/Lor3nzoMartinez/SpaceX-Flights-Apollo-GraphQL-React"
      />
      <Project
        name="SpaceX GraphQL Project"
        date={"Aug 21, 2019"}
        description="This is a project where I used GraphQL, React, Heroku, and Javascript to create a User Interface for the SpaceX launch database."
        link="https://mighty-journey-87862.herokuapp.com/"
        gitlink="https://github.com/Lor3nzoMartinez/SpaceX-Flights-Apollo-GraphQL-React"
      />
    </div>
  );
};

export default Projects;
