import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="mailto:leon.antonio.rodriguez.sanpere@gmail.com">
                <i className="fa fa-envelope"> </i>
              </a>
              <a href="https://github.com/GuaBaiChi">
                <i className="fa fa-github-square"> </i>
              </a>
              <a href="https://www.linkedin.com/in/leon-r-60a370214/">
                <i className="fa fa-linkedin-square"> </i>
              </a>
              {/* <a href="weixin://dl/chat?{leonrodriguez}">
                <i className="fa fa-weixin"> </i>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=%2B1800000000&text=Hello+Leon">
                <i className="fa fa-whatsapp"> </i>
              </a> */}
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              <em> Hello, I am </em>
              <span className="highlighted-text">Leon</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
              </h1>
              <span className="profile-role-tagline">
                Aspiring programmer in Java, Python and ReactJS
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn highlighted-btn"
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="resume.jpg" download="This is a resume.jpg">
              <button className="btn highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"> </div>
        </div>
      </div>
    </div >
  );
}