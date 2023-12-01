import React from "react";
import Header from './Header/Header';
import HeaderTest from './Header/HeaderTest'
import Profile from "./profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";
import { ScreenProps } from "../../Utilities/CommonUtils";

export default function Home(props: ScreenProps) {
  return (
    <div className="home-container">
      <Header />
      {/* <HeaderTest /> */}
      <Profile />
      <Footer />
    </div>
  );
}