import React from "react";
import { Grid, Progress } from "semantic-ui-react";
import styled from "styled-components";
import "./SkillCard.scss";

function SkillCard({ details, toggle }) {
  const { name } = details.name;
  const { yexp } = details.yexp;
  const { overall } = details.overall;
  const { color } = details.color;
  const { colr } = details.colr;

  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #000000;
    padding: 0.25rem;
    margin: 0.75rem;
    cursor: pointer;

    ${colr ? `border: 2px solid ${colr};` : `border: 2px solid ${color};`}

    -webkit-box-shadow: 9px 8px 0px 1px ${color};
    -moz-box-shadow: 9px 8px 0px 1px ${color};
    box-shadow: 9px 8px 0px 1px ${color};

    h3 {
      color: ${color};
    }

    & h3 {
      margin-top: 0.5rem;
    }
  `;

  return (
    <div onClick={toggle}>
      <Div>
        <Grid centered>
          <Grid.Column>
            <h3 className="text-center">
              <u>{name}</u>
            </h3>
            <Grid.Row className="d-flex align-items-center py-3">
              <p className="h4">Years of Experience:</p>
              <p className="h4 ml-4">{yexp}</p>
            </Grid.Row>
            <Grid.Row className="d-flex align-items-center">
              <div className="text-center h4">Overall Comfort:</div>
            </Grid.Row>
            <Progress success percent={overall} />
          </Grid.Column>
        </Grid>
      </Div>
    </div>
  );
}

export default SkillCard;
