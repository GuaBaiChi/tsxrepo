// import React, { useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./AboutMe.css";
import { ScreenFadeInSubject } from "../../Utilities/ScrollService";
import { ScreenProps } from "../../Utilities/CommonUtils";

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
    description: "Here's a description to describe something",
    highlights: {
      bullets: [
        "first bullet point",
        "second bullet point",
        "third bullet point",
        "fourth bullet point",
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
    "subHeading": "Why Choose Me?"
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
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a href="2023.11_Leon_IT_CS.docx" download="LeonResume.docx">
                <button className="btn highlighted-btn"> Get Resume </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}