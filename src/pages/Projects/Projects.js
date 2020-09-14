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
        url="https://lorenzotechdadef5cbc97a45728ca40a57e16f302e182039-dev.s3.us-west-2.amazonaws.com/public/stuff/SpaceXProj.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9h3ttVg6KG%2F9%2F0hsR9%2Fd05g1sj%2Bsh3kPnHOlk8uGuzgIhAKUtM9CK2sC8Z4zh3kPmtENgCB0tQrL3GEUQSF8Fg23hKs0CCLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQAhoMMzc5OTE2NzE1MjI5IgypDWmKNxAML4GxsTkqoQJ0R5haujEMM%2BZmSMVYUDuAfToEcZPqjGSHpcv8PCws1b%2BFmhKeROyra9lNUYXAPiDzHbvM595l4NtzwxkGUifYCHYVUr6fyyUa3kgGNpJwsQbqlp%2BNKetc8EhfvWGa3g%2FtlsaHQ8KiL534%2FzpvjXR2EBrGZIrBbNZM0d2WDS2K%2BfF6m5m%2BFDYlwsPqv5foz9o5Ami5XeoIQLDlaNHOaTsyxHi43%2FCzFuMDrnXAeihD0u4wR8bHmv0cme2L5qxNGwNWvMQ0JJloteHsKrBD9uD1TcHRsef1FDTSedZX%2B1k1rbY1PemHyWQE4l5w9CZKsPL66gqxZ2TvXmiOr63gJzPnNQXzsFsruRnGUow2Cygfa7luJ0E1mxdS2GkN1v2iUlUGMLbX%2BvoFOq8C4DgiCjXqw2JfenzCPw0WCo9yH9hRZGOwMIWjAEe7k2dLFylbAtS5XRrG3kh28ehqtx%2FMGxDJ4AbTXyQpJdaTkWXFwGknZhdxGIwKNqrLEU94Kpx6kf7kxK7nP51AekDlHHAOfPCIMAPj%2FTkcmz26jY%2FWqi4Bji3wCqLlfTD%2Fe9lr1umijYAC0Hts5LL0Y3F7CtJnv9lgf0EIsJ0pyO7jYFOS%2Fzg9vaAxrm4I0sW%2F97DDMWVxpKLsXD1VQsJTB3CA0GwXpwzCgU4nBlK7B5owrBlGbXPPaz3Gv8O%2F18J3mGq5gDHiwDMf0Oa4qD85Sbr4aTQWrcd03NHIHDdGol%2FYyV5PawYnifDDmvZduIb1hi3eGYW5kv5IrMd9yeeUsq0NeAq5mXFR7EgOTVGQ9tqJ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200913T234419Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVQ5GNATO6Q3MNMNZ%2F20200913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=95450047eaf6417dc2acd4aa9d18cdc750ea90d373f1c9a7a6ed8193bda84ffe"
      />
    </div>
  );
};

export default Projects;
