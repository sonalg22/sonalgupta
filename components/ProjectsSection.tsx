"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub } from "react-icons/bs"

const projects = [
  {
    name: "CodeFlow",
    description: "A platform for all your tech questions.",
    image: "/swe.png",
    github: "https://github.com/sonalg22/updatedStackOverflow",
    skills: ["React", "Typescript", "MongoDB", "AI", "MongoDB",],
  },
  {
    name: "Knight Runner",
    description: "Collect coins as a knight in shining armour!",
    image: "/game1.png",
    github: "https://github.com/sonalg22/knightCoinGame",
    skills: ["GDScript", "Godot", "Game Dev",],
  },
  {
    name: "Apple Catcher",
    description: "Catch every apple! Beware of the bombs...",
    image: "/apple.png",
    github: "https://github.com/sonalg22/apple-game",
    skills: ["Python", "Pygame", "Game Dev",],
  },
  {
    name: "Bujo Bullet Journal App",
    description: "Stay organized and inspired—one bullet at a time.",
    image: "/bujo.png",
    github: "https://github.com/sonalg22/bulletJournal",
    skills: ["Java", "Scenebuilder FMXL", "Gradle", "Github"],
  },
  {
    name: "Course Registration App",
    description: "A user-friendly application to register for classes.",
    image: "/cs3200.png",
    github: "https://github.com/qghop/cs3200AppSmith",
    skills: ["Database Design", "Mockaroo", "Appsmith", "SQL"],
  },
  {
    name: "Boston Outings",
    description: "A site with fun Boston attractions for college students.",
    image: "/bostonOutings.png",
    github: "https://github.com/sonalg22/bostonOutings",
    skills: ["Javascript", "HTML/CSS", "Design"],
  },
  {
    name: "Stock Prediction Model",
    description: "An algorithmic analysis to predict the best stock to buy.",
    image: "/stocks.png",
    github: "https://github.com/sonalg22/ds4200wesite.github.io",
    skills: ["Python", "AI", "Jupyter", "HTML/CSS"],
  },
  {
    name: "Texas Employment Map",
    description: "An interactive map by county that shows Texas unemployment rates.",
    image: "/texas.png",
    github: "https://github.com/sonalg22/texas-map",
    skills: ["Python", "Jupyter", "HTML/CSS"],
  },
]

const allSkills = [...new Set(projects.flatMap((project) => project.skills))]

const ProjectsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const filteredProjects =
    selectedSkill && selectedSkill !== "All"
      ? projects.filter((p) => p.skills.includes(selectedSkill))
      : projects

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      {/* Filter Dropdown */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Link
            key={`${project.name}-${selectedSkill}`}
            href={project.github}
            target="_blank"
            className="
              flex flex-col justify-between items-center text-center 
              bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md animate-slideUpFade cursor-pointer
              transform transition-all duration-300 ease-in-out
              hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(20,184,166,0.4)]
            "
          >
            <div className="w-full aspect-video relative rounded-xl shadow-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mt-4">{project.name}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">
              {project.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {project.skills.map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* GitHub Icon pinned at bottom */}
            <div className="mt-6">
              <BsGithub
                size={28}
                className="hover:-translate-y-1 transition-transform"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
