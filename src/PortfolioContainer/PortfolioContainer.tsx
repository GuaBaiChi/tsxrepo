import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Home from "./Home/Home"
import Header from "./Home/Header/Header";
import Footer from "./Home/Footer/Footer";
import Resume from "./Resume/Resume"
import Testimonial from "./Testimonial/Testimonial"
import { TOTAL_SCREENS } from "../Utilities/CommonUtils";

export default function PortfolioContainer() {
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) =>
      screen.component ? (
        <screen.component
          {...screen.props}
          key={screen.props.screen_name}
        />
      ) : (
        <div key={screen.props.screen_name}></div>
      )
    );
  };

  return <div className="portfolio-container">{mapAllScreens()}</div>;
}