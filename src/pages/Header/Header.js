import React from "react";
import { Icon, Reveal, Segment } from "semantic-ui-react";
import "./Header.scss";

function Header({ Media }) {
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
      <Segment basic as={Media} lessThan="tablet">
        <div className="d-flex flex-column justify-content-center align-items-center mb-4">
          <p className="h2">Lorenzo Martinez</p>
          <p className="h3">Software Developer</p>
        </div>

        <div className="info">
          <div className="info-content">
            <Icon fitted size="large" name={"envelope"} />
            <p className="ml-3 h4">E-Mail</p>
          </div>
          <div className="info-sub">
            <p className="h4 text-truncate">
              <a
                className="text-decoration-none"
                href="mailto: contact@lorenzo.tech"
              >
                contact@lorenzo.tech
              </a>
            </p>
          </div>

          <div className="info-content">
            <Icon fitted size="large" name={"phone"} />
            <p className="ml-3 h4">Phone Number</p>
          </div>
          <div className="info-sub">
            <p className="h4">
              <a className="text-decoration-none" href="tel:+17606689927">
                +1 (760) 668-9927 <br />
              </a>
            </p>
          </div>

          <div className="info-content">
            <Icon fitted size="large" name={"map marker alternate"} />
            <p className="ml-3 h4">Location</p>
          </div>
          <div className="info-sub">
            <p className="h4">
              <a
                className="text-decoration-none"
                href="https://goo.gl/maps/WAasSV5NsxVAG8AAA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seattle, WA
              </a>
            </p>
          </div>
        </div>
        <div className="d-flex align-items-end justify-content-around">
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
      </Segment>
      <Segment basic as={Media} at="tablet">
        <div className="d-flex flex-column justify-content-center align-items-center mb-4">
          <p className="display-4">Lorenzo Martinez</p>
          <p className="h1">Software Developer</p>
        </div>

        <div className="info">
          <div className="info-content">
            <Icon fitted size="large" name={"envelope"} />
            <p className="ml-3 h2">E-Mail</p>
          </div>
          <div className="info-sub">
            <p className="h3 text-truncate">
              <a
                className="text-decoration-none"
                href="mailto: contact@lorenzo.tech"
              >
                contact@lorenzo.tech
              </a>
            </p>
          </div>

          <div className="info-content">
            <Icon fitted size="large" name={"phone"} />
            <p className="ml-3 h2">Phone Number</p>
          </div>
          <div className="info-sub">
            <p className="h3">
              <a className="text-decoration-none" href="tel:+17606689927">
                +1 (760) 668-9927 <br />
              </a>
            </p>
          </div>

          <div className="info-content">
            <Icon fitted size="large" name={"map marker alternate"} />
            <p className="ml-3 h2">Location</p>
          </div>
          <div className="info-sub">
            <p className="h3">
              <a
                className="text-decoration-none"
                href="https://goo.gl/maps/WAasSV5NsxVAG8AAA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seattle, WA
              </a>
            </p>
          </div>
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
      </Segment>
      <Segment basic as={Media} greaterThanOrEqual="computer">
        <div className="d-flex justify-content-between align-items-center">
          <p className="display-4">Lorenzo Martinez</p>
          <p className="display-4">Software Developer</p>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex">
            <a href="mailto: contact@lorenzo.tech">
              <Reveal className="revstuff" animated="move up">
                <Reveal.Content visible>
                  <div className="hidder">
                    <Icon fitted size="large" name={"envelope"} />
                    <p className="ml-3 h2">E-Mail</p>
                  </div>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <p className="h3 text-truncate">contact@lorenzo.tech</p>
                </Reveal.Content>
              </Reveal>
            </a>
            <a className="text-decoration-none" href="tel:+17606689927">
              <Reveal className="revstuff" animated="move up">
                <Reveal.Content visible>
                  <div className="hidder">
                    <Icon fitted size="large" name={"phone"} />
                    <p className="ml-3 h2">Phone Number</p>
                  </div>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <p className="h3">
                    +1 (760) 668-9927 <br />
                  </p>
                </Reveal.Content>
              </Reveal>
            </a>
            <a
              className="text-decoration-none"
              href="https://goo.gl/maps/WAasSV5NsxVAG8AAA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Reveal className="revstuff" animated="move up">
                <Reveal.Content visible>
                  <div className="hidder">
                    <Icon fitted size="large" name={"map marker alternate"} />
                    <p className="ml-3 h2">Location</p>
                  </div>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <p className="h3">Seattle, WA</p>
                </Reveal.Content>
              </Reveal>
            </a>
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
      </Segment>
    </div>
  );
}

export default Header;
