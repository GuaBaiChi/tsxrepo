export type ResumeProps = {
  heading?: string,
  fromDate?: Date,
  toDate?: Date,
  subHeading?: string,
  description?: string,
  used?: string,
  link?: Array<string>,
  rating?: number
}

export const ResumeHeading = (props: ResumeProps) => {
  return (
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet"></div>
        <span>{props.heading ? props.heading : ""}</span>
        {props.fromDate && props.toDate ? (
          <div className="heading-date">
            {props.fromDate.getUTCFullYear() + " - " + props.toDate.getUTCFullYear()}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="resume-sub-heading">
        <span>{props.subHeading ? props.subHeading : ""}</span>
        <span>{props.link && props.link.map((href) => (
          <a href={href} target="_blank" rel="noreferrer">{href}</a>
        ))}</span>
      </div>

      <div className="resume-heading-description">
        <span>{props.description ? props.description : ""}</span>
      </div>
      {/* <div className="resume-heading-description">
        <span>{props.used ? props.used : ""}</span>
      </div> */}
    </div>
  );
}
