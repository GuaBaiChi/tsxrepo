import React, { useState } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../Utilities/CommonUtils";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((Screen, i) => (
      <div
        key={Screen.props.screen_name}
        className={getHeaderOptionsClasses(i)}
      >
        <span>{Screen.props.screen_name}</span>
      </div>
    ));
  };

  const getHeaderOptionsClasses = (index: number) => {
    let classes = "header-option ";
    if (index < TOTAL_SCREENS.length - 1) classes += "header-option-seperator ";

    if (selectedScreen === index) classes += "selected-header-option ";

    return classes;
  };

  return (
    <div
      className="header-container"
      onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
      <div className="header-parent">
        <div className="header-logo">
          <span>Welcome to my Portfolio Website</span>
        </div>
      </div>
    </div>
  );
}
