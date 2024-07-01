import Button from "@/components/Button";
import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Disc,
  Download,
  File,
  FileIcon,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex items-center pb-28">
        <div className="container mx-auto px-3">
          <div className="flex justify-between">
            <div className="flex-1">
              <h1 className="mb-8">
                <div className="text-secondary text-sm font-bold mb-5">
                  Hi, my name is
                </div>
                <div className="text-4xl md:text-5xl  font-extrabold -ml-1 mb-3">
                  Abdul-Rauf Alhassan.
                </div>
                <div className="text-4xl md:text-5xl font-extrabold -ml-1 text-gray-500">
                  A Software Engineer.
                </div>
              </h1>
              <p className="text-dark  text-sm mb-10">
                I have passion for building scalable and maintainable software
                solutions. I am always looking for new challenges and
                opportunities to learn and grow.
              </p>

              <Button className="mb-10 bg-accent -ml-1">
                <span>DOWNLOAD RESUME</span>{" "}
                <Download className="inline-block ml-2" />
              </Button>
            </div>
            <div className="hidden md:block flex-1"></div>
          </div>
        </div>
      </header>
      <main className="bg-primary px-3 py-28 font-medium">
        <div className="container mx-auto ">
          <section id="about">
            <div className="flex w-full lg:w-2/4 justify-between">
              <div>
                <h2 className="text-secondary text-lg mb-5">
                  <span className="text-accent">1.</span> About Me
                </h2>
                <div>
                  <p className="mb-5">
                    Hello am Abdul-Rauf, I enjoy building and creating things
                    with techonlogy, I like building APIs and user interfaces to
                    produce easy and best user expirience. My intrest in
                    technology started in 2019 when i built a wordpress website
                    with my phone and started doing my reserach into web
                    developemnt. I start learn HTML, CSS and Javascript. I have
                    been learning and building ever since.
                  </p>

                  <p className="mb-5">
                    Currently am an{" "}
                    <span className="text-accent underline cursor-pointer">
                      ALX Alumni, Software Engineering. I graduated from the ALX
                      program in 2023.
                    </span>{" "}
                    I have been building projects and learning new technologies.
                    My goal is to my skills to solve problems and make the world
                    a better place.
                  </p>

                  <div className="">
                    <p className="mb-5">
                      Here are a few technologies I have been working with;
                    </p>

                    <div className="flex justify-between">
                      <ul className="-ml-2">
                        <li className="text-sm mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          Javascript (ES6+)
                        </li>
                        <li className="text-sm mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          React JS (ES6+)
                        </li>
                        <li className="text-sm mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          Node JS
                        </li>
                        <li className="text-sm mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          Python
                        </li>
                        <li className="text-sm mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          Flask
                        </li>
                        <li className="text-sm mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          NextJs
                        </li>
                      </ul>

                      <ul>
                        <li className="text-sm mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          SQL (MYSQL)
                        </li>
                        <li className="text-sm mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          Linux (Ubuntu) CLI & Windows
                        </li>
                        <li className="text-sm mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          MongoDB (mongoose library)
                        </li>
                        <li className="text-sm mb-3">
                          <ChevronRight
                            className="text-accent inline"
                            size={20}
                          />{" "}
                          Git & Github
                        </li>
                        <li className="text-sm mb-3">
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

          <section className="employments"></section>
        </div>
      </main>
    </>
  );
}
