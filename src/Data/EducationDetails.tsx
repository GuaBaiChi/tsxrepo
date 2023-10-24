export type EducationDetail = {
  title: string,
  duration: { fromDate: Date, toDate: Date },
  subHeading: string,
  links?: Array<string>
}

export const educationDetails = new Array<EducationDetail>(
  {
    title: "Florida State University",
    duration: { fromDate: new Date("2007"), toDate: new Date("2011") },
    subHeading: "Bachelor of Science in Political Science & History",
    links: []
  },
  {
    title: "South West University of Nationalities",
    duration: { fromDate: new Date("2015"), toDate: new Date("2015") },
    subHeading: "Chinese Studies"
  },
  {
    title: "Shenzhen University",
    duration: { fromDate: new Date("2016"), toDate: new Date("2016") },
    subHeading: "Chinese Studies"
  },
  {
    title: "University of Helsinki",
    duration: { fromDate: new Date("2021"), toDate: new Date("2023") },
    subHeading: "Java Programming 1"
  },
  {
    title: "University of the People",
    duration: { fromDate: new Date("2022"), toDate: new Date("2023") },
    subHeading: "Bachelor of Science in Computer Science"
  },
  {
    title: "Certificates",
    duration: { fromDate: new Date("2019"), toDate: new Date("2022") },
    subHeading: "CELTA, Google IT Support Professional, Google Data Analytics, Google UX Design"
  }
);