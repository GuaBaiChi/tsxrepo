export type EducationDetail = {
  title: string,
  subHeading: string,
  duration: { fromDate: Date, toDate: Date },
  urls?: Array<string>
}

export const educationDetails = new Array<EducationDetail>(
  {
    title: "University of the People",
    subHeading: "Bachelor of Science in Computer Science",
    duration: { fromDate: new Date("2023"), toDate: new Date("2024") },
    urls: ["https://www.uopeople.edu/programs/online-bachelors/computer-science/"],
  },
  {
    title: "University of Helsinki",
    subHeading: "Java Programming 1, Python Programming 1",
    duration: { fromDate: new Date("2022"), toDate: new Date("2024") },
    urls: ["https://java-programming.mooc.fi/", "https://programming-23.mooc.fi/"],
  },
  {
    title: "Shenzhen University",
    subHeading: "Chinese Studies",
    duration: { fromDate: new Date("2017"), toDate: new Date("2017") },
    urls: ["https://en.szu.edu.cn/Admission/Language_Program.htm"],
  },
  {
    title: "South West University of Nationalities",
    subHeading: "Chinese Studies",
    duration: { fromDate: new Date("2016"), toDate: new Date("2016") },
    urls: ["https://english.swun.edu.cn/Oversea_Students_Services/Programs.htm"],
  },
  {
    title: "Florida State University",
    subHeading: "Bachelor of Science in Political Science & History",
    duration: { fromDate: new Date("2008"), toDate: new Date("2012") },
    urls: ["https://coss.fsu.edu/polisci/"],
  },
  {
    title: "Certificates",
    subHeading: "CELTA, Google IT Support Professional, Google Data Analytics, Google UX Design, Credly badges for proof",
    duration: { fromDate: new Date("2020"), toDate: new Date("2023") },
    urls: [
      "https://www.cambridgeenglish.org/teaching-english/teaching-qualifications/celta/",
      "https://www.coursera.org/professional-certificates/google-data-analytics",
      "https://www.coursera.org/professional-certificates/google-ux-design",
      "https://www.coursera.org/professional-certificates/google-it-support",
      "https://www.credly.com/users/leon-rodriguez/badges",
    ],
  },
);