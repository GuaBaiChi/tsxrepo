import React from "react";
import "./ScreenHeading.css";

export type ScreenHeadingProps = {
  id: number,
  title: string,
  subHeading: string
}

export default function ScreenHeading({ props }: { props: ScreenHeadingProps }) {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <span>{props.title}</span>
      </div>
      {props.subHeading ? (
        <div className="screen-sub-heading">
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className="heading-seperator">
        <div className="seperator-line"></div>
        <div className="seperator-blob">
          <div></div>
        </div>
      </div>
    </div>
  );
}