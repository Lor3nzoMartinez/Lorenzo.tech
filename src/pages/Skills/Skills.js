import React from "react";
import { Badge, Card, Row, CardTitle } from "reactstrap";
import { Divider } from "semantic-ui-react";
import SkillCard from "./SkillCard/SkillCard";

/*    TODO
 * [] Add Collapse all and vise versa.
 * [] Better expand spacing.
 *
 *
 */

function Skills() {
  return (
    <div className="my-3">
      <Card>
        <CardTitle className="mt-4">
          <Divider className="m-auto w-75" horizontal>
            <Badge color="info">
              <p className="h2">Skills</p>
            </Badge>
          </Divider>
        </CardTitle>

        <Row className="d-flex justify-content-around mx-3">
          <SkillCard
            name="JavaScript"
            yexp="2"
            pro="Adept"
            proj="4"
            overall="64"
            color="#e0bb53"
          />
          <SkillCard
            name="Bootstrap"
            yexp="2"
            pro="Adept"
            proj="4"
            overall="64"
            color="#563d7c"
          />
          <SkillCard
            name="GraphQL"
            yexp="2"
            pro="Adept"
            proj="4"
            overall="64"
            color="#e00097"
          />
          <SkillCard
            name="React"
            yexp="2"
            pro="Adept"
            proj="4"
            overall="64"
            color="#61dafb"
          />
          <SkillCard
            name="Java"
            yexp="2"
            pro="Adept"
            proj="4"
            overall="64"
            color="#d00000"
          />
        </Row>
        <Row className="d-flex justify-content-around mx-3">
          <SkillCard
            name="Python"
            yexp="2"
            pro="Adept"
            proj="4"
            overall="64"
            color="#396f9e"
            colr="#fed74b"
          />
          <SkillCard
            name="Bash"
            yexp="2"
            pro="Adept"
            proj="4"
            overall="64"
            color="#4daa25"
          />
          <SkillCard
            name="HTML"
            yexp="2"
            pro="Adept"
            proj="4"
            overall="64"
            color="#e44d26"
          />
          <SkillCard
            name="CSS"
            yexp="2"
            pro="Adept"
            proj="4"
            overall="64"
            color="#264de4"
          />

          <SkillCard
            name="C++"
            yexp="2"
            pro="Adept"
            proj="4"
            overall="64"
            color="#00589d"
          />
          <SkillCard
            name="AWS"
            yexp="2"
            pro="Adept"
            proj="4"
            overall="64"
            color="#ec912d"
          />
        </Row>
      </Card>
    </div>
  );
}

export default Skills;
