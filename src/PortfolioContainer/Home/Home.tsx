import React from "react";
import Header from "./Header/Header";
import HeaderNavbar from "./Header/HeaderNavbar";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";
import { ScreenProps } from "../../Utilities/CommonUtils";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
// import { Nav } from "react-bootstrap";

export default function Home(props: ScreenProps) {

  let screenHeadingProps = {
    "id": 1,
    "title": "",
    "subHeading": ""
  }

  return (
    <div className="home-container screen-container fade-in" id={props.screen_name || ""}>
      <div className="home-container"
      // id={id}
      >
        <HeaderNavbar />
        <ScreenHeading props={screenHeadingProps} />
        <Header />
        <Profile />
        <Footer />
      </div>
    </div>
  );
}