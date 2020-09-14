import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import "./Header.scss";

function Header() {
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 2rem;
    margin-right: 2rem;

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

    a {
      color: darkgrey;
    }

    a:hover {
      color: black;
    }

    :hover {
    }
  `;

  function Charm({ link, icon }) {
    return (
      <>
        <a
          className="navit-char mr-3 text-decoration-none"
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
      <div className="d-flex justify-content-between align-items-center ">
        <p className="display-4">Lorenzo Martinez</p>
        <p className="display-4">Software Developer</p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Div>
            <div className="d-flex align-items-center">
              <Icon fitted size="large" name={"envelope"} />
              <h4 className="ml-3">E-Mail</h4>
            </div>
            <h4
              className="text-truncate bd-highlight"
              style={{ width: "8rem" }}
            >
              <a
                className="text-decoration-none"
                href="mailto: contact@lorenzo.tech"
              >
                contact@lorenzo.tech
              </a>
            </h4>
          </Div>
          <Div>
            <div className="d-flex align-items-center">
              <Icon fitted size="large" name={"phone"} />
              <h4 className="ml-3">Phone Number</h4>
            </div>
            <h4>
              <a className="text-decoration-none" href="tel:+17606689927">
                +1 (760) 668-9927 <br />
              </a>
            </h4>
          </Div>
          <Div>
            <div className="d-flex align-items-center">
              <Icon fitted size="large" name={"map marker alternate"} />
              <h4 className="ml-3">Location</h4>
            </div>
            <h4>
              <a
                className="text-decoration-none"
                href="https://goo.gl/maps/WAasSV5NsxVAG8AAA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seattle, WA
              </a>
            </h4>
          </Div>
        </div>
        <div className="d-flex align-items-end justify-content-center">
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
    </div>
  );
}

export default Header;
