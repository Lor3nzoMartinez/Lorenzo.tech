import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { Card, CardTitle, CardBody, Col, Row } from "reactstrap";
import logo from "../../media/L_Logo_LowRes_White_crop.png";
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
          className="navit-char mr-3"
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
        <Row className="d-flex justify-content-center">
          <div className="d-flex">
            {/* <img className="logo" src={logo} alt="pic.jpg" /> */}
            <p className="display-3">Lorenzo Martinez</p>
          </div>
        </Row>
      </CardTitle>

      <CardBody>
        <Col>
          <Row>
            <Div>
              <Icon fitted size="large" name={"envelope"} />
              <h4 className="lead">E-Mail</h4>
              <h3 className="lead">
                <a
                  className="text-decoration-none"
                  href="mailto: contact@lorenzo.tech"
                >
                  contact@lorenzo.tech
                </a>
              </h3>
            </Div>
            <Div>
              <Icon fitted size="large" name={"phone"} />
              <h4 className="lead">Phone Number</h4>
              <h3 className="lead">
                <a className="text-decoration-none" href="tel:+17606689927">
                  +1 (760) 668-9927
                </a>
              </h3>
            </Div>
            <Div>
              <Icon fitted size="large" name={"map marker alternate"} />
              <h4 className="lead">Location</h4>
              <h3 className="lead">
                <a
                  className="text-decoration-none"
                  href="https://goo.gl/maps/WAasSV5NsxVAG8AAA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Seattle, WA
                </a>
              </h3>
            </Div>
            <div className="d-flex align-items-end ml-auto">
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
          </Row>
        </Col>
      </CardBody>
    </Card>
  );
}

export default Header;
