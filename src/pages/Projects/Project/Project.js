import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import "./Project.scss";

const Project = ({ name, url, description, link, gitlink, date }) => {
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
  `;

  return (
    <div className="p-4">
      <div className="titl">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p className="h3">
            <strong>
              <u>{name}</u>
            </strong>
          </p>
        </a>
      </div>
      <div className="date">
        <p>
          <em>{date}</em>
        </p>
      </div>
      <div className="desc">
        <p className="h6">{description}</p>
      </div>

      <div className="buttons">
        <Button
          outline
          color="info"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name} Site
        </Button>{" "}
        <Button
          outline
          color="info"
          href={gitlink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </Button>
      </div>
    </div>
  );
};

export default Project;
