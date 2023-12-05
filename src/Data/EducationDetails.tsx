export type EducationDetail = {
  title: string,
  subHeading: string,
  duration: { fromDate: Date, toDate: Date },
  links?: Array<string>
}

export const educationDetails = new Array<EducationDetail>(
  {
    title: "Florida State University",
    subHeading: "Bachelor of Science in Political Science & History",
    duration: { fromDate: new Date("2007"), toDate: new Date("2011") },
    links: [],
  },
  {
    title: "South West University of Nationalities",
    subHeading: "Chinese Studies",
    duration: { fromDate: new Date("2015"), toDate: new Date("2015") },
  },
  {
    title: "Shenzhen University",
    duration: { fromDate: new Date("2016"), toDate: new Date("2016") },
    subHeading: "Chinese Studies",
  },
  {
    title: "University of Helsinki",
    subHeading: "Java Programming 1",
    duration: { fromDate: new Date("2021"), toDate: new Date("2023") },
  },
  {
    title: "University of the People",
    subHeading: "Bachelor of Science in Computer Science",
    duration: { fromDate: new Date("2022"), toDate: new Date("2023") },
  },
  {
    title: "Certificates",
    subHeading: "CELTA, Google IT Support Professional, Google Data Analytics, Google UX Design",
    duration: { fromDate: new Date("2019"), toDate: new Date("2022") },
  }
);