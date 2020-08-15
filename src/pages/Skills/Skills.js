import React, { useState } from "react";
import { Badge, Card, Row, CardTitle, Collapse } from "reactstrap";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";
import SkillCard from "./SkillCard/SkillCard";

/*    TODO
 * [] Add notes to skill card
 *
 *
 *
 */

function Skills() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [currentSkill, setCurrentSkill] = useState({
    name: "",
    pro: "",
    yexp: "",
    proj: "",
    overall: "",
    color: "",
    colr: "",
    ocom: "",
  });

  console.log(currentSkill);

  function StyledButton({ name, pro, yexp, proj, overall, color, colr, ocom }) {
    const Div = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #000000;
      padding: 0.25rem;
      margin: 0.75rem;
      cursor: pointer;

      & h3 {
        margin-top: 0.5rem;
      }

      &:hover {
        ${colr ? `border: 2px solid ${colr};` : `border: 2px solid ${color};`}
        
        -webkit-box-shadow: 9px 8px 0px 1px ${color};
        -moz-box-shadow: 9px 8px 0px 1px ${color};
        box-shadow: 9px 8px 0px 1px ${color};

        h3 {
          color: ${color};
        }
      }
    `;

    function updateCard() {
      setCurrentSkill({
        name: { name },
        pro: { pro },
        yexp: { yexp },
        proj: { proj },
        overall: { overall },
        color: { color },
        colr: { colr },
        ocom: { ocom },
      });
      toggle();
    }

    return (
      <Div onClick={() => updateCard()} className="d-flex px-3">
        <h3>{name}</h3>
        <br />
      </Div>
    );
  }

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

        <Row className="d-flex justify-content-around m-3">
          <StyledButton
            name="JavaScript"
            yexp="4"
            pro="Experienced"
            proj="8"
            overall="64"
            color="#e0bb53"
            ocom="High"
          />
          <StyledButton
            name="Bootstrap"
            yexp="3"
            pro="Experienced"
            proj="6"
            overall="64"
            color="#563d7c"
            ocom="High"
          />
          <StyledButton
            name="GraphQL"
            yexp="1"
            pro="Experienced"
            proj="4"
            overall="64"
            color="#e00097"
            ocom="Low Moderate"
          />
          <StyledButton
            name="React"
            yexp="4"
            pro="Experienced"
            proj="4"
            overall="64"
            color="#61dafb"
            ocom="High"
          />
          <StyledButton
            name="Java"
            yexp="3"
            pro="Novice"
            proj="4"
            overall="64"
            color="#d00000"
            ocom="Moderate"
          />
          <StyledButton
            name="Python"
            yexp="3"
            pro="Adept"
            proj="4"
            overall="64"
            color="#396f9e"
            colr="#fed74b"
            ocom="Moderate"
          />
          <StyledButton
            name="Bash"
            yexp="4"
            pro="Adept"
            proj="All of them"
            overall="64"
            color="#4daa25"
            ocom="Low to Moderate"
          />
          <StyledButton
            name="HTML"
            yexp="4"
            pro="Experienced"
            proj="4"
            overall="64"
            color="#e44d26"
            ocom="High"
          />
          <StyledButton
            name="CSS"
            yexp="4"
            pro="Experienced"
            proj="4"
            overall="64"
            color="#264de4"
            ocom="High"
          />
          <StyledButton
            name="C++"
            yexp="1"
            pro="Novice"
            proj="4"
            overall="64"
            color="#00589d"
            ocom="Moderate"
          />
          <StyledButton
            name="AWS"
            yexp="2"
            pro="Novice"
            proj="4"
            overall="64"
            color="#ec912d"
            ocom="High Moderate"
          />
        </Row>
        <Collapse className="mb-2 px-4" isOpen={isOpen}>
          <SkillCard details={currentSkill} />
        </Collapse>
      </Card>
    </div>
  );
}

export default Skills;
