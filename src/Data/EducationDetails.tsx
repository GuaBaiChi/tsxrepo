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
    links: ["https://coss.fsu.edu/polisci/"],
  },
  {
    title: "South West University of Nationalities",
    subHeading: "Chinese Studies",
    duration: { fromDate: new Date("2015"), toDate: new Date("2015") },
    links: ["https://english.swun.edu.cn/Oversea_Students_Services/Programs.htm"],
  },
  {
    title: "Shenzhen University",
    subHeading: "Chinese Studies",
    duration: { fromDate: new Date("2016"), toDate: new Date("2016") },
    links: ["https://en.szu.edu.cn/Admission/Language_Program.htm"],
  },
  {
    title: "University of Helsinki",
    subHeading: "Java Programming 1",
    duration: { fromDate: new Date("2021"), toDate: new Date("2023") },
    links: ["https://java-programming.mooc.fi/", "https://programming-23.mooc.fi/"],
  },
  {
    title: "University of the People",
    subHeading: "Bachelor of Science in Computer Science",
    duration: { fromDate: new Date("2022"), toDate: new Date("2023") },
    links: ["https://www.uopeople.edu/programs/online-bachelors/computer-science/"],
  },
  {
    title: "Certificates",
    subHeading: "CELTA, Google IT Support Professional, Google Data Analytics, Google UX Design",
    duration: { fromDate: new Date("2019"), toDate: new Date("2022") },
    links: ["https://www.cambridgeenglish.org/teaching-english/teaching-qualifications/celta/", "https://www.coursera.org/professional-certificates/google-data-analytics", "https://www.coursera.org/professional-certificates/google-ux-design", "https://www.coursera.org/professional-certificates/google-it-support", "https://www.credly.com/users/leon-rodriguez/badges"],
  }
);