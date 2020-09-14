import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import "../../pages/Header/Header.scss";

function Header() {
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3,
    h4 {
      position: relative;
      overflow: hidden;
      font-weight: 400;
      margin: 0;
      padding: 2px 5px;
      font-size: 20px;
    }

    h4 {
      font-weight: 600;
      margin: 5px 0;
      font-style: 30px;
    }

    .fa {
      margin-bottom: 0.75rem;
    }

    :hover {
    }
  `;

  function Charm({ link, icon }) {
    return (
      <>
        <a
          className="navit-char mx-5 text-decoration-none"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon fitted size="large" name={icon} />
        </a>
      </>
    );
  }

  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="h2">Lorenzo Martinez</p>
        <p className="h2">Software Developer</p>
      </div>
      <div className="d-flex justify-content-between">
        <Div>
          <div className="d-flex align-items-center">
            <Icon fitted size="large" name={"envelope"} />
            <p className="h4 ml-3">E-Mail</p>
          </div>
          <h4 className="text-truncate " style={{ width: "8rem" }}>
            <a
              className="h4 text-decoration-none"
              href="mailto: contact@lorenzo.tech"
              style={{ width: "150px" }}
            >
              contact@lorenzo.tech
            </a>
          </h4>
        </Div>

        <Div>
          <div className="d-flex align-items-center">
            <Icon fitted size="large" name={"phone"} />
            <p className="h4 ml-3">Phone Number</p>
          </div>
          <h4>
            <a className="h4 text-decoration-none" href="tel:+17606689927">
              +1 (760) 668-9927 <br />
            </a>
          </h4>
        </Div>

        <Div>
          <div className="d-flex align-items-center">
            <Icon fitted size="large" name={"map marker alternate"} />
            <p className="h4 ml-3">Location</p>
          </div>
          <h4>
            <a
              className="h4 "
              href="https://goo.gl/maps/WAasSV5NsxVAG8AAA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Seattle, WA
            </a>
          </h4>
        </Div>
      </div>
      <div className="d-flex align-items-end justify-content-center mt-3">
        <Charm icon="github" link="https://github.com/Lor3nzoMartinez" />
        <Charm icon="gitlab" link="https://gitlab.com/Lorenzo.Martinez" />
        <Charm
          icon="linkedin"
          link="https://www.linkedin.com/in/lorenzo-martinez/"
        />
        <Charm
          icon="instagram"
          link="https://www.instagram.com/lorenzo.tech/"
        />
      </div>
    </div>
  );
}

export default Header;
