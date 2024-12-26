import { ResumeProps, ResumeHeading } from "./ResumeHeading"
import { EducationDetail } from "../../Data/EducationDetails";

export const EducationComponent = (props: { details: Array<EducationDetail> }) => {
  return (
    <div className="resume-screen-container" key="education">
      {
        props.details.map((eduDetails, index) => (
          <ResumeHeading
            key={index}
            heading={eduDetails.title}
            subHeading={eduDetails.subHeading}
            fromDate={eduDetails.duration.fromDate}
            toDate={eduDetails.duration.toDate}
            link={eduDetails.urls}
          />
        ))
      }
    </div>
  )
}