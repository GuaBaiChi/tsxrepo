import React, { useState, useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService, { ScreenFadeInSubject } from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Resume.css";
import { ScreenProps } from "../../Utilities/CommonUtils";

import { educationDetails } from "../../Data/EducationDetails";
import { workExperience } from "../../Data/WorkExperience";
import { programmingSkillsDetails } from "../../Data/ProgrammingSkillsDetails";
import { projectsDetails } from "../../Data/ProjectsDetails";
import { interests } from "../../Data/Interests";

import { ResumeHeading } from "./ResumeHeading";
import { EducationComponent } from "./EducationComponent";

type Style = {
  transform: string
}
type carousalOffset = {
  style: Style
}

const Resume = (props: ScreenProps) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({ style: { transform: "" } })

  let fadeInScreenHandler = (screen: ScreenFadeInSubject) => {
    if (screen.fadeInScreen !== props.screen_name) return;

    Animations.animations.fadeInScreen(props.screen_name);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // REUSABLE MINOR COMPONENTS

  // STATIC RESUME DATA FOR THE LABELS
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];



  const handleCarousal = (index: number) => {
    let offsetHeight = 350;
    // figure out the height of each window and scroll that amount, or force each window to fit 360

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        <EducationComponent details={educationDetails} />
        <div className="resume-screen-container" key="experience">
          {
            workExperience.map((workExperience, index) => (
              <ResumeHeading
                key={index}
                heading={workExperience.title}
                description={workExperience.description}
                subHeading={workExperience.subHeading}
                fromDate={workExperience.duration.fromDate}
                toDate={workExperience.duration.toDate}
              />
            ))
          }
        </div>
        < div className="resume-screen-container" key="experience" >
          {
            programmingSkillsDetails.map((skill, index) => (
              <div className="skill-parent" key={index}>
                <div className="heading-bullet"></div>
                <span>{skill.skill}</span>
                <div className="skill-percentage">
                  <div
                    style={{ width: skill.ratingPercentage + "%" }}
                    className="active-percentage-bar"
                  ></div>
                </div>
              </div>
            ))
          }
        </div >
        <div className="resume-screen-container" key="projects">
          {
            projectsDetails.map((projectsDetails, index) => (
              <ResumeHeading
                key={index}
                heading={projectsDetails.title}
                description={projectsDetails.description}
                used={projectsDetails.used}
                subHeading={projectsDetails.subHeading}
                fromDate={projectsDetails.duration.fromDate}
                toDate={projectsDetails.duration.toDate}
                link={projectsDetails.link}
              />
            ))
          }
        </div>
        <div className="resume-screen-container" key="interests">
          {
            interests.map((interests, index) => (
              <ResumeHeading
                key={index}
                heading={interests.title}
                description={interests.description}
              />
            ))
          }
        </div>

      </div>
    );
  };

  useEffect(() => {
    return () => {
      // UNSUBSCRIBE THE SUBSCRIPTIONS
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  let screenHeadingProps = {
    "id": 2,
    "title": "Resume",
    "subHeading": "My details"
  }

  return (
    <div className="resume-container screen-container fade-in" id={props.screen_name || ""}>
      <div className="resume-content">
        <ScreenHeading props={screenHeadingProps} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div >
  );
};

export default Resume;
