// import React, { useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./AboutMe.css";
import { ScreenFadeInSubject } from "../../Utilities/ScrollService";
import { ScreenProps } from "../../Utilities/CommonUtils";
import Button from 'react-bootstrap/Button';

export type AboutMeProps = {
  id: string,
}

export default function AboutMe(props: ScreenProps) {
  const id = props.screen_name;
  let fadeInScreenHandler = (screen: ScreenFadeInSubject) => {
    if (screen.fadeInScreen !== id) return;
    Animations.animations.fadeInScreen(id);
  };
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description: "Recent computer science grad with 10 years of teaching experience, eager to apply pedagogical insights to real-world problem-solving. Excited to transition to a hands-on role, contributing innovative solutions and fostering a collaborative team environment.",
    highlights: {
      bullets: [
        "Effective Communication: Honed through a decade of teaching, translating complex concepts into accessible content.",
        "Adaptability: Proven ability to quickly grasp and integrate new technologies, crucial in the ever-evolving field of computer science.",
        "Collaborative Skills: Facilitated teamwork and communication among students, directly applicable to collaborative coding projects.",
        "Problem-Solving Acumen: Developed through addressing diverse challenges in education, providing a strong foundation for tackling complex issues in computer science.",
        "Empathy and Patience: Cultivated essential qualities for effective mentorship and teamwork, vital in computer science projects."
      ],
      heading: "Here's the title of the highlight list:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  let screenHeadingProps = {
    "id": 1,
    "title": "About Me",
    "subHeading": "Here are some details"
  }

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={id}
    >
      <div className="about-me-parent">
        <ScreenHeading props={screenHeadingProps} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div>
              {/* <div className="about-me-options"> */}
              {/* <Button
                variant="secondary"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me
              </Button> */}
              {" "}
              <a href="2023.11_Leon_IT_CS.docx" download="LeonResume.docx">
                <Button
                  variant="primary"
                >
                  Get Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}