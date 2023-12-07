export type ProjectDetail = {
  title: string,
  subHeading: string,
  description: string,
  used: string,
  links?: Array<string>
  duration: { fromDate: Date, toDate: Date },
}

export const projectsDetails = [
  {
    title: "Personal Portfolio Website",
    description:
      " WIP. A personal portfolio website to show I can follow instructins. Recently refactored from ReactJS to TypeScript.",
    used: "Used: TypeScript/React JS, Bootstrap, CSS, HTML",
    subHeading: "Link: ",
    // link: ["https://github.com/GuaBaiChi/tsxrepo", " ", "https://github.com/GuaBaiChi/newportfolio"],
    link: ["https://github.com/GuaBaiChi/tsxrepo", " "],
    duration: { fromDate: new Date("03/01/2022"), toDate: new Date("03/01/2023") },
  },
  {
    title: "Open Source Discord bot for leetcode questions",
    description: "Using OOP Python code to interact with Leetcode APIs, store user statistics and metadata in a NoSQL tinydb database, generate weekly challenges using custom algorithms, and managing releases through Asana's project management software.",
    SubHeading: "Discord leetcode bot: ",
    link: ["https://github.com/jacobmillsfl/trainingwheels-bot"],
    duration: { fromDate: new Date("2023"), toDate: new Date() },
  },
  {
    title: "Music media website for a band",
    description: "Contributed to an open source full-stack web application using TypeScript, NodeJS, and ReactJS for the frontend, Python Flask API for the backend, MySQL database, Docker for cross-platform support, and an Ubuntu Linux server hosting the service through nginx.",
    subHeading: "The Ambient Experience: ",
    link: ["https://tafers.net/"],
    duration: { fromDate: new Date("2022"), toDate: new Date() },
  },
  {
    title: "Personal gaming linux laptop and SteamDeck",
    description: "Working with Linux on the Steamdeck to manage programs and files to play games. Formatting drives, reinstalling OS, and troubleshooting compatibility with software",
    subHeading: "Used: Linux, terminal, github",
    duration: { fromDate: new Date("2022"), toDate: new Date() },
  },
];