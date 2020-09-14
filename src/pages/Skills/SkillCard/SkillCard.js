import React, { useState } from "react";
import { Col, Progress } from "reactstrap";
import styled from "styled-components";
import "./SkillCard.scss";

function SkillCard({ details }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { name } = details.name;
  const { pro } = details.pro;
  const { yexp } = details.yexp;
  const { proj } = details.proj;
  const { overall } = details.overall;
  const { color } = details.color;
  const { colr } = details.colr;
  const { ocom } = details.ocom;

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
    <div className="flex-column" onClick={toggle}>
      <Div className="d-flex px-3">
        <Col>
          <h3 className="text-center">
            <u>{name}</u>
          </h3>
          <div className="d-flex justify-content-around">
            <h4>Proficientcy: {pro}</h4>
            <h4>Number of Projects: {proj}</h4>
            <h4>Years of Experience: {yexp}</h4>
            <h4>Overall Comfort: {ocom}</h4>
          </div>
          <Progress className="mx-auto m-4 w-75" value={overall} />
        </Col>
      </Div>
    </div>
  );
}

export default SkillCard;
