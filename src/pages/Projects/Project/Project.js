import React from "react";
import { Button } from "reactstrap";
import Charm from "./Charm/Charm";
import "./Project.scss";

const Project = ({ name, description, link, gitlink, date }) => {
  return (
    <div className="compcard p-4 mt-3 mx-3">
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

      <div className="d-flex mt-3">
        <Charm color={"#61dafb"} icon={"react"} iconID={"fab"} />
        <Charm color={"#e0bb53"} icon={"js"} iconID={"fab"} />
        <Charm color={"#e00097"} icon={"project-diagram"} iconID={"fas"} />
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
          Live Site
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
