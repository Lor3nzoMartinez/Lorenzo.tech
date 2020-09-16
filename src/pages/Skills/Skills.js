import React, { useState } from "react";
import { Badge, Collapse } from "reactstrap";
import { Divider, Grid, Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import SkillCard from "./SkillCard/SkillCard";

function Skills({ Media }) {
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

  function StyledButton({
    name,
    pro,
    yexp,
    proj,
    overall,
    color,
    colr,
    ocom,
    icon,
    iconID,
  }) {
    const Div = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #000000;
      padding: 0.25rem;
      margin: 0.75rem;
      cursor: pointer;

      & h3 {
        margin-top: 0.5rem;
      }

      &:hover {
        ${colr ? `border: 1px solid ${colr};` : `border: 1px solid ${color};`}

        -webkit-box-shadow: 9px 8px 0px 1px ${color};
        -moz-box-shadow: 9px 8px 0px 1px ${color};
        box-shadow: 9px 8px 0px 1px ${color};

        p {
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
      <Div
        onClick={() => updateCard()}
        className="d-flex justify-content-between px-3"
      >
        <FontAwesomeIcon
          color={color}
          size="lg"
          icon={[`${iconID}`, `${icon}`]}
        />
        <p className="text-truncate h5">{name}</p>
      </Div>
    );
  }

  return (
    <div className="compcard">
      <div className="mt-4">
        <Divider className="m-auto w-75" horizontal>
          <Badge color="info">
            <p className="h2">Skills</p>
          </Badge>
        </Divider>
      </div>
      <div>
        <Grid centered columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Segment basic as={Media} lessThan="tablet"></Segment>
              <StyledButton
                name="JavaScript"
                iconID="fab"
                icon="js"
                yexp="4"
                pro="Experienced"
                proj="8"
                overall="64"
                color="#e0bb53"
                ocom="High"
              />
              <StyledButton
                name="React"
                iconID="fab"
                icon="react"
                yexp="4"
                pro="Experienced"
                proj="4"
                overall="64"
                color="#61dafb"
                ocom="High"
              />
              <StyledButton
                name="Bash"
                iconID="fas"
                icon="dollar-sign"
                yexp="4"
                pro="Adept"
                proj="All of them"
                overall="64"
                color="#4daa25"
                ocom="Low to Moderate"
              />
              <StyledButton
                name="HTML"
                iconID="fab"
                icon="html5"
                yexp="4"
                pro="Adept"
                proj="4"
                overall="64"
                color="#264de4"
                ocom="High Moderate"
              />
            </Grid.Column>
            <Grid.Column>
              <StyledButton
                name="Bootstrap"
                iconID="fab"
                icon="bootstrap"
                yexp="3"
                pro="Experienced"
                proj="6"
                overall="64"
                color="#563d7c"
                ocom="High"
              />
              <StyledButton
                name="Java"
                iconID="fab"
                icon="java"
                yexp="3"
                pro="Novice"
                proj="4"
                overall="64"
                color="#d00000"
                ocom="Moderate"
              />
              <StyledButton
                name="Python"
                iconID="fab"
                icon="python"
                yexp="3"
                pro="Adept"
                proj="4"
                overall="64"
                color="#396f9e"
                colr="#fed74b"
                ocom="Moderate"
              />
              <StyledButton
                name="CSS"
                iconID="fab"
                icon="css3-alt"
                yexp="4"
                pro="Adept"
                proj="4"
                overall="64"
                color="#e54c21"
                ocom="High Moderate"
              />
            </Grid.Column>
            <Grid.Column>
              <StyledButton
                name="GraphQL"
                iconID="fas"
                icon="project-diagram"
                yexp="1"
                pro="Experienced"
                proj="4"
                overall="64"
                color="#e00097"
                ocom="Low Moderate"
              />
              <StyledButton
                name="C++"
                iconID="fas"
                icon="copyright"
                yexp="1"
                pro="Novice"
                proj="4"
                overall="64"
                color="#00589d"
                ocom="Moderate"
              />
              <StyledButton
                name="AWS"
                iconID="fab"
                icon="aws"
                yexp="2"
                pro="Novice"
                proj="4"
                overall="64"
                color="#ec912d"
                ocom="High Moderate"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <Collapse className="mb-3 pr-2" isOpen={isOpen}>
        <SkillCard details={currentSkill} />
      </Collapse>
    </div>
  );
}

export default Skills;
