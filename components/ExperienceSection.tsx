import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { BsBriefcaseFill } from "react-icons/bs"
import SlideUp from "./SlideUp"

const experiences = [
  {
    company: "John Hancock",
    role: "SWE Intern Cloud Platforms Engineer",
    dates: "May 2025 – Present",
    location: "Boston, MA",
    skills: ["Azure", "Cloud Platforms",],
  },
  {
    company: "Purple Carrot",
    role: "Data Engineering and Architecture Co-op",
    dates: "Jan. 2025 – May 2025",
    location: "Needham, MA",
    skills: ["Python", "Appscript", "AWS", "ML", "Pipelines"],
  },
  {
    company: "Khoury College of Comp. Sci",
    role: "OOD Java Teaching Assistant",
    dates: "Aug. 2024 – Dec. 2024",
    location: "Boston, MA",
    skills: ["Java", "OOD Principals", "Grading",],
  },
  {
    company: "Wayfair",
    role: "Data Engineering and Analytics Co-op",
    dates: "Jan. 2024 – June 2024",
    location: "Boston, MA",
    skills: ["Typescript", "SQL/GBQ", "Looker Studio", "Databases"],
  },
  // Add up to 5 experiences here
]

const miscellaneous = [
  {
    name: "Generate | Product Development at NU",
    involvement: "Project Lead, Lead Data Analyst",
  },
  {
    name: "NU Malhar Premier Classical Dance Team",
    involvement: "Founder, , Captain, Choreographer",
  },
  {
    name: "Oasis",
    involvement: "Web Developer - member",
  },
  {
    name: "NU Robotics",
    involvement: "Python Developer (OpenCV) - member",
  },
  {
    name: "NU Aaroh",
    involvement: "Musician, Vocalist, Pianist, Bassist",
  },
  // Add more clubs here if needed
]

const ExperienceSection = () => {
    return (
      <section id="experience">
        <div className="mb-60 max-w-6xl mx-auto px-4">
          <h1 className="my-10 text-center font-bold text-4xl">
            Experience
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
          </h1>
  
          <div className="flex flex-col space-y-16">
            {experiences.map((exp, idx) => (
              <SlideUp key={idx} offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-2 flex items-center space-x-2">
                      <BsBriefcaseFill className="text-teal-500" />
                      <span>{exp.company}</span>
                    </h2>
                    <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                      {exp.role}
                    </p>
                    <p className="text-md text-neutral-500 dark:text-neutral-400">
                      {exp.dates}
                    </p>
                    <p className="flex items-center text-sm text-neutral-400 dark:text-neutral-500 mt-1">
                      <FaMapMarkerAlt className="mr-1" />
                      {exp.location}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:w-1/2">
                    <h3 className="text-md font-medium text-neutral-600 dark:text-neutral-400 mb-2">Top Skills:</h3>
                    <div className="flex flex-wrap flex-row justify-start z-10">
                      {exp.skills.map((skill, skillIdx) => (
                        <p
                          key={skillIdx}
                          className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                        >
                          {skill}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </SlideUp>
            ))}
  
            {/* Miscellaneous / Clubs Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Miscellaneous</h2>
              <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                {miscellaneous.map((item, idx) => (
                  <li key={idx}>
                    <span className="font-semibold">{item.name}</span>: {item.involvement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default ExperienceSection