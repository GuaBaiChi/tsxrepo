export type ProjectDetail = {
  title: string,
  subHeading: string,
  description: string,
  used: string,
  urls?: Array<string>,
  duration: { fromDate: Date, toDate: Date },
}

export const projectsDetails = [
  {
    title: "Personal Portfolio Website",
    subHeading: "Leon's Portfolio",
    description: "A personal portfolio website to show I can follow instructions. Refactored from ReactJS to TypeScript. I have successfully hosted this site on: Heroku(when it was free!), Azure, and Github Pages. Though originally made in the years stated, I still update the website and tweak it as my experience and years continue. Thank you for reading!",
    used: "Used: TypeScript, React JS, Bootstrap, CSS, HTML",
    urls: ["https://github.com/GuaBaiChi/tsxrepo", "https://blue-stone-01a8ed00f.4.azurestaticapps.net/"],
    duration: { fromDate: new Date("03/01/2022"), toDate: new Date("08/12/2023") },
  },
  {
    title: "Personal Azure Cloud Developer & Experimenter",
    subHeading: "Building, deploying, and testing in the cloud",
    description: "Developing and deploying applications using Azure services, including experimenting with cloud functions and GitHub Actions",
    duration: { fromDate: new Date("2025"), toDate: new Date("2026") },
  },
  {
    title: "Open Source Discord bot for leetcode questions",
    subHeading: "Discord leetcode bot",
    description: "Using OOP Python code to interact with Leetcode APIs, store user statistics and metadata in a NoSQL tinydb database, generate weekly challenges using custom algorithms, and managing releases through Asana's project management software.",
    urls: ["https://github.com/jacobmillsfl/trainingwheels-bot"],
    duration: { fromDate: new Date("2023"), toDate: new Date("2023") },
  },
  {
    title: "Music media website for a band",
    subHeading: "The Ambient Experience",
    description: "Contributed to an open source full-stack web application using TypeScript, NodeJS, and ReactJS for the frontend, Python Flask API for the backend, MySQL database, Docker for cross-platform support, and an Ubuntu Linux server hosting the service through nginx.",
    urls: ["https://tafers.net/"],
    duration: { fromDate: new Date("2022"), toDate: new Date() },
  },
  {
    title: "Personal gaming linux laptop and SteamDeck",
    subHeading: "I like gaming",
    description: "Working with Linux on the Steamdeck to manage programs and files to play games. Formatting drives, reinstalling OS, and troubleshooting compatibility with software",
    used: "Used: Linux, terminal, github",
    duration: { fromDate: new Date("2022"), toDate: new Date() },
  },
];