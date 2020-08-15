import React from "react";
import { Badge, Col, Card, Row, CardBody, CardTitle } from "reactstrap";
import { Divider } from "semantic-ui-react";
import "./About.scss";

/*    TODO
 * [] Add Animation to Icons.
 * []
 *
 *
 */

const About = () => {
  return (
    <div className="my-3">
      <Card>
        <CardTitle className="mt-4">
          <Divider className="m-auto w-75" horizontal>
            <Badge color="info">
              <p className="h2">About Developer</p>
            </Badge>
          </Divider>
        </CardTitle>

        <CardBody>
          <Row>
            <Col className="d-flex align-items-center mx-5">
              <p className="lead">
                Well-rounded technologist with years of experience in everything
                from client-side operations to back-end data manipulation.
                Well-versed in scripting and programming languages including
                C++, Bash, Python, JavaScript, and Java. Proficient
                communication, leadership, and project management abilities.
              </p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
