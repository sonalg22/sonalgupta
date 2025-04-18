import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "Java" },
  { skill: "SQL" },
  { skill: "TypeScript/Javascript" },
  { skill: "AWS" },
  { skill: "React" },
  { skill: "ML" },
  { skill: "HTML/CSS" },
  { skill: "Node.js" },
  { skill: "Appscript" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Sonal and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer.
            </p>
            <br />
            <p>
              Academically, I am a senior Computer Science and Finance major
              at Northeastern University with interests in data engineering,
              back end development, AI/ML, and fintech.
            </p>
            <br />
            <p>
              I'm very involved in technical product development at Northeastern,
              to help create software products for others, and I'm an active dancer,
              musician, and leader. I'm looking to build my career path in a way
              that combines many of my artistic interests with my technical expertise.
            </p>
            <br />
            <p>
              I'm so excited to use more of my love for'{" "}
              <span className="font-bold text-teal-500">
                computer science
              </span>{" "}
              to aid in creating safe and clean designs that imrpove the 
              world in some way. Please feel free to contact me for my resume,
              or just to chat (all socials below).
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Top Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/code.png"
              alt=""
              width={400}
              height={400}
              className="hidden md:block md:relative md:top-10 md:left-0 md:z-0 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
