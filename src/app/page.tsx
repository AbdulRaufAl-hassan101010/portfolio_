"use client";

import Button from "@/components/Button";
import Timeline from "@/components/Timeline";
import { ChevronRight, Download, FileIcon } from "lucide-react";
import Typewriter from "typewriter-effect";

import Projects from "@/components/Projects";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex items-center pb-36" id="hero">
        <div className="container mx-auto px-3">
          <div className="flex justify-between">
            <div className="md:w-10/12">
              <h1 className="mb-8">
                <div className="text-secondary text-sm font-bold mb-2">
                  Hi, my name is
                </div>
                <div className="text-4xl md:text-5xl  font-extrabold -ml-1 mb-5">
                  Abdul-Rauf Alhassan.
                </div>
                <div className="wrap text-5xl md:text-7xl font-extrabold text-gray-500 gap-x-2 h-[110px] md:h-full">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .deleteAll()
                        .typeString(
                          `<span>I Am <span class='text-accent'>Software Engineer</span>...</span>`
                        )
                        .pauseFor(2500)
                        .deleteChars(20)
                        .typeString(
                          `<span><span class='text-accent'> Fullstack Developer</span>...</span>`
                        )
                        .pauseFor(2500)
                        .deleteChars(23)
                        .typeString(
                          `<span><span class='text-accent'> Computer Hobbiest</span>.</span>`
                        )
                        .start();
                    }}
                  />
                </div>
              </h1>
              <p className="mb-10 font-medium">
                I have passion for building scalable and maintainable software
                solutions. I am always looking for new challenges and
                opportunities to learn and grow.
              </p>

              <Button className="mb-10 -ml-1" href="https://docs.google.com/document/d/1lSSSNTr8XN2LgVUMShEh_Z9M3ORYcl7m/edit?usp=sharing&ouid=113697770773310080233&rtpof=true&sd=true">
                <span>RESUME / CV</span>{" "}
                <Download className="inline-block ml-2" />
              </Button>
            </div>
            {/* <div className="hidden md:block flex-1"></div> */}
          </div>
        </div>
      </header>
      <main className="bg-primary px-3 py-28 font-medium">
        <div className="container mx-auto ">
          {/* about */}
          <section id="about" className="mb-20">
            <div className="flex w-full lg:w-2/4 justify-between">
              <div>
                <h2 className="text-secondary text-lg mb-5">
                  <span className="text-accent">1.</span> About Me
                </h2>
                <div>
                  <p className="mb-5">
                    Hello am Abdul-Rauf, I enjoy building and creating things
                    with techonlogy, I like building APIs and user interfaces to
                    produce easy and best user expirience. My interest in
                    technology started in 2019 when i built a wordpress website
                    with my phone and started doing my reserach into web
                    developemnt. I began learning HTML, CSS and Javascript. I
                    have been learning and building ever since.
                  </p>

                  <p className="mb-5">
                    Currently am an{" "}
                    <Link href="https://drive.google.com/file/d/19VtCTtKdTSzbrCbOPSoul62ezc-jaTVZ/view?usp=sharing" className="text-accent underline cursor-pointer">
                      ALX Alumni, Software Engineering. I graduated from the ALX
                      program in 2023.
                    </Link>{" "}
                    I have been building projects and learning new technologies.
                    My goal is to solve problems and make the world a better
                    place with tech.
                  </p>

                  <div className="">
                    <p className="mb-5">
                      Here are a few technologies I have been working with;
                    </p>

                    <div className="md:flex md:justify-between ">
                      <ul className="md:-ml-2">
                        <li className="mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          Javascript (ES6+)
                        </li>
                        <li className="mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          React JS (ES6+)
                        </li>
                        <li className="mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          Node JS
                        </li>
                        <li className="mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          Python
                        </li>
                        <li className="mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          Flask
                        </li>
                        <li className="mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          Typescript
                        </li>
                        <li className="mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          NextJs
                        </li>
                      </ul>

                      <ul>
                        <li className="mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          SQL (MYSQL)
                        </li>
                        <li className="mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          Linux (Ubuntu) CLI & Windows
                        </li>
                        <li className="mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          MongoDB (mongoose library)
                        </li>
                        <li className="mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          Git & Github
                        </li>
                        <li className="mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          HTML and CSS
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <FileIcon size={30} />
              </div>
            </div>
          </section>

          {/* timeline */}
          <section id="timeline" className="flex mb-20">
            <div className="flex w-full gap-x-5 justify-center">
              <div className="w-full">
                <h2 className="text-secondary text-lg mb-5">
                  <span className="text-accent">2.</span> My Timeline
                </h2>

                <Timeline />
              </div>
            </div>
          </section>

          {/* projects */}
          <Projects />
        </div>
      </main>
    </>
  );
}
