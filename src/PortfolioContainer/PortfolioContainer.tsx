import React from "react";
import { TOTAL_SCREENS } from "../Utilities/CommonUtils";

export default function PortfolioContainer() {
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) => (
      <screen.component {...screen.props} key={screen.props.screen_name} />
    ));
  };

  return <div className="portfolio-container">{mapAllScreens()}</div>;
}