import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { Card, CardTitle, CardBody, Row } from "reactstrap";
import "./Header.scss";

/*    TODO
 * [ ] charm hover and text deco
 * []
 *
 *
 */

function Header() {
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;
    margin: 0.75rem;

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
    <Card className="my-3">
      <CardTitle className="pl-3 mt-3">
        <Row className="d-flex justify-content-center text-center">
          <div>
            <p className="display-3">Lorenzo Martinez</p>
            <h2 className="py-4">Software Engineer | Web Developer</h2>
            <p className="lead text-center" style={{ width: "700px" }}>
              Well-rounded technologist with years of experience in everything
              from client-side operations to back-end data manipulation.
              Well-versed in scripting and programming languages including C++,
              Bash, Python, JavaScript, and Java. Proficient communication,
              leadership, and project management abilities.
            </p>
          </div>
        </Row>
      </CardTitle>

      <CardBody>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <Div>
            <Icon fitted size="large" name={"envelope"} />
            <h4>E-Mail</h4>
            <h4
              className="text-truncate bd-highlight"
              style={{ width: "8rem" }}
            >
              <a
                className="text-decoration-none"
                href="mailto: contact@lorenzo.tech"
                style={{ width: "150px" }}
              >
                contact@lorenzo.tech
              </a>
            </h4>
          </Div>
          <Div>
            <Icon fitted size="large" name={"phone"} />
            <h4>Phone Number</h4>
            <h4>
              <a className="text-decoration-none" href="tel:+17606689927">
                +1 (760) 668-9927 <br />
              </a>
            </h4>
          </Div>
          <Div>
            <Icon fitted size="large" name={"map marker alternate"} />
            <h4>Location</h4>
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
      </CardBody>
    </Card>
  );
}

export default Header;
