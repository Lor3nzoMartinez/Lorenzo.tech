import React from "react";
import { Badge } from "reactstrap";
import { Divider } from "semantic-ui-react";
import "./Experience.scss";

export default function Experience() {
  return (
    <div className="compcard">
      <div className="mt-4">
        <Divider className="m-auto w-75" horizontal>
          <Badge color="info">
            <p className="h2">Experience</p>
          </Badge>
        </Divider>
      </div>
      <div className="p-4">
        <p className="h3">
          <u>
            <strong>Pallet.Click (Start-up)</strong>
          </u>
        </p>
        <ul className="list-unstyled">
          <li>
            <p className="h5">
              Full-Stack Web Developer (Shareholder) | May 2019–Current
            </p>
            <ul>
              <li>Responsible for developing front end website architecture</li>
              <li>
                Build the next marketplace for construction with React, GraphQL,
                and AWS Amplify.
              </li>
              <li>
                Design, build and deploy new features that helps users find
                better opportunities in the commercial sector.
              </li>
              <li>
                Collaborate with team members to improve application features,
                performance and usability for the end-user.
              </li>
            </ul>
          </li>
        </ul>
        <p className="h3">
          <u>
            <strong>United States Army</strong>
          </u>
        </p>
        <ul className="list-unstyled">
          <li>
            <p className="h5">
              [25B] Information Technology Specialist | October 2013–April 2020
            </p>
            <ul>
              <li>
                Successfully implemented various IT methodologies which include
                project management, development, service management and system
                architecture.
              </li>
              <li>
                Developed effective work relationships within departments and
                functional lines with business users and other sections to
                ensure ease of information flow.
              </li>
              <li>
                Maintained integrity of all internal processes (incident
                management, major incident management, problem management,
                change management, etc.)
              </li>
              <li>
                Provided user assistance with network connectivity, administered
                local networks, managed DNS and DHCP for departmental networks.
              </li>
            </ul>
          </li>
        </ul>
        <ul className="list-unstyled">
          <li>
            <p className="h5">Key Achievement:</p>
            <ul>
              <li>
                Army Commendation Medal for deploying to Kandahar, Afghanistan
                and running an entire section as a lower enlisted.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
