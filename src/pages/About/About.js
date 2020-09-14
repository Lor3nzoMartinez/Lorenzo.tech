import React from "react";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";
import { Badge, Card, CardTitle, CardBody, Row } from "reactstrap";

/*    TODO
 * [ ] charm hover and text deco
 * []
 *
 *
 */

function About() {
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;
    margin: 0.75rem;

    h3,
    h4 {
      position: relative;
      overflow: hidden;
      font-weight: 400;
      margin: 0;
      padding: 2px 5px;
      font-size: 20px;
    }

    h4 {
      font-weight: 600;
      margin: 5px 0;
      font-style: 30px;
    }

    .fa {
      margin-bottom: 0.75rem;
    }

    :hover {
    }
  `;

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
          client-side operations to back-end data manipulation.
          <br />
          Well-versed in scripting and programming languages including C++,
          Bash, Python, JavaScript, and Java.
          <br /> Proficient communication, leadership, and project management
          abilities.
        </p>
      </div>
    </div>
  );
}

export default About;
