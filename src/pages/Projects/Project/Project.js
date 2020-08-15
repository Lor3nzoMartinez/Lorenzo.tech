import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import "./Project.scss";

const Project = ({ name, url, description, link, gitlink }) => {
  const Div = styled.div`
    background-image: url(${url});
    background-position: center;
    background-repeat: no-repeat;
    transition: 2s;
    transition-timing-function: linear;

    :hover {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${url});
      background-position: center;
      background-repeat: no-repeat;
    }
  `;
  return (
    <Div className="proj">
      <div className="titl">
        <p className="h3">{name}</p>
      </div>
      <div className="desc">
        <p className="h4">
          <u>Description</u>
        </p>
        <p className="h6">{description}</p>
      </div>
      {/* Skill bar here */}
      <div className="buttons">
        <Button
          outline
          color="secondary"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name} Site
        </Button>{" "}
        <Button
          outline
          color="secondary"
          href={gitlink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </Button>
      </div>
    </Div>
  );
};

export default Project;
