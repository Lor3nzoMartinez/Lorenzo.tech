import React from "react";
import { Divider } from "semantic-ui-react";
import { Badge } from "reactstrap";

const About = () => {
  return (
    <div className="compcard">
      <div className="mt-4">
        <Divider className="m-auto w-75" horizontal>
          <Badge color="info">
            <p className="h2">About Developer</p>
          </Badge>
        </Divider>
      </div>
      <div className="p-4">
        <p className="lead">
          Well-rounded technologist with years of experience in everything from
          client-side operations to back-end data manipulation. Well-versed in
          scripting and programming languages including C++, Bash, Python,
          JavaScript, and Java. Proficient communication, leadership, and
          project management abilities.
        </p>
      </div>
    </div>
  );
};

export default About;
