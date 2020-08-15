import React, { useState } from "react";
import styled from "styled-components";
import { Collapse, Progress } from "reactstrap";
import "./SkillCard.scss";

function SkillCard({ name, pro, yexp, proj, overall, color, colr }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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

  return (
    <div className="flex-column" onClick={toggle}>
      <Div className="d-flex px-3">
        <h3>{name}</h3>

        <Collapse className="p-3" isOpen={isOpen}>
          Proficientcy: {pro}
          <br />
          Number of Projects: {proj}
          <br />
          Years of Experience: {yexp}
          <br />
          Overall Comfort:
          <br />
          <Progress value={overall} />
        </Collapse>
      </Div>
    </div>
  );
}

export default SkillCard;
