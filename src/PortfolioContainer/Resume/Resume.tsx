import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import "./Resume.css";

import { educationDetails } from "../../Data/EducationDetails";
import { workExperience } from "../../Data/WorkExperience";
import { programmingSkillsDetails } from "../../Data/ProgrammingSkillsDetails";
import { projectsDetails } from "../../Data/ProjectsDetails";
import { interests } from "../../Data/Interests";
import { ScreenProps } from "../../Utilities/CommonUtils";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";

const Resume = (props: ScreenProps) => {
  const getEducationDetails = () => {
    return (
      <div>
        {educationDetails.map((details) => (
          <div className="resume-heading">
            <div className="resume-main-heading">
              <div className="heading-bullet"></div>
              <span>{details.title}</span>
              <div className="heading-date">
                {details.duration.fromDate.getFullYear()} -{" "}
                {details.duration.toDate.getFullYear()}
              </div>
            </div>
            <div className="resume-sub-heading">
              <span>{details.subHeading}</span>
              <span></span>
            </div>
            <div className="resume-heading-description">
              <span></span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const getWorkDetails = () => {
    return (
      <div>
        {workExperience.map((experience) => (
          <div className="resume-heading">
            <div className="resume-main-heading">
              <div className="heading-bullet"></div>
              <span>Teacher for 10 years in China</span>
              <div className="heading-date">2011 - 2021</div>
            </div>
            <div className="resume-sub-heading">
              <span>Teacher</span>
              <span></span>
            </div>
            <div className="resume-heading-description">
              <span>
                Subjects: English, political science, social science, AP
                literature, AP world history, TEFL/TOEFL
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const getResumeTabs = () => {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column resume-pill-container">
              <Nav.Item>
                <Nav.Link eventKey="first">Education</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Work History</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Projects</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">{getEducationDetails()}</Tab.Pane>
              <Tab.Pane eventKey="second">{getWorkDetails()}</Tab.Pane>
              <Tab.Pane eventKey="third">{ }</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  };

  let screenHeadingProps = {
    id: 2,
    title: "Resume",
    subHeading: "My information",
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.screen_name || ""}
    >
      <div className="resume-content">
        <ScreenHeading props={screenHeadingProps} />
        <div style={ResumeScreenStyle}>{getResumeTabs()}</div>
      </div>
    </div>
  );
};

const ResumeScreenStyle = {
  maxWidth: "1000px",
  width: "800px",
  height: "1000px",
};

export default Resume;