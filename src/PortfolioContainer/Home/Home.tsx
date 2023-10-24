import React from "react";
import Header from './Header/Header';
import Profile from "./profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";
import { ScreenProps } from "../../Utilities/CommonUtils";

export default function Home(props: ScreenProps) {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}