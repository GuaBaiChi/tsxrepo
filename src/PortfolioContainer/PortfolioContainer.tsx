import React from "react";
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