import { ChevronRightIcon } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      date: "2021 - Present",
      title: "Quadparser Tech At Construction Monitor",
      description: (
        <ul className="text-primary text-left">
          <li className="mb-5">
            <div className="flex">
              <div>
                <ChevronRightIcon className="text-white" size={20} />{" "}
              </div>
              <div className="text-primary">
                Head of the Quad Parser team at AITA.
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex">
              <div>
                <ChevronRightIcon className="text-white" size={20} />{" "}
              </div>
              <div className="text-primary"> Help train new members.</div>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex">
              <div>
                <ChevronRightIcon className="text-white" size={20} />{" "}
              </div>
              <div className="text-primary">
                Use OCR technology to extract and analysis data into meaningful
                information for the Data Entry Team.
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex items-start">
              <div>
                <ChevronRightIcon className="text-white" size={20} />{" "}
              </div>
              <div className="text-primary">
                Handled Communication with Clients.
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex items-start">
              <div>
                <ChevronRightIcon className="text-white" size={20} />{" "}
              </div>
              <div className="text-primary">
                Learnt how to use agile methodology to work with a team, used
                technologies such trello, slack, jira and confluence.
              </div>
            </div>
          </li>
        </ul>
      ),
    },
    {
      date: "August, 2022 - 2023",
      title: " ALX Software Engineering Program.",
      description: (
        <ul className="text-primary text-left">
          <li className="mb-5">
            <div className="flex">
              <div>
                <ChevronRightIcon className="text-white" size={20} />{" "}
              </div>
              <div className="text-primary">
                A one year intensive Software Engineering Program
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex">
              <div>
                <ChevronRightIcon className="text-white" size={20} />{" "}
              </div>
              <div className="text-primary">
                Learnt low level programming, web development and API with
                languages like C, Python, Javascript, React, NodeJs and Flask
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex">
              <div>
                <ChevronRightIcon className="text-white" size={20} />{" "}
              </div>
              <div className="text-primary">
                Did projects and worked with teams to build and ship using
                technologies such git, github, amazon web servers running
                ubuntu, ngnix and HAproxy for the load balancer.
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex items-start">
              <div>
                <ChevronRightIcon className="text-white" size={20} />{" "}
              </div>
              <div className="text-primary">
                Learnt about database management and how to create replica and
                backup of database.
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="flex items-start">
              <div>
                <ChevronRightIcon className="text-white" size={20} />{" "}
              </div>
              <div className="text-primary">
                Learnt how to use agile methodology to work with a team, used
                technologies such trello, slack, jira and confluence.
              </div>
            </div>
          </li>
        </ul>
      ),
    },
    {
      date: `April, 2021 - August, 2021`,
      title: `Data Entry Specialist At Construstion Monitor.`,
      description: "Entered USA permit data into a database for data analysis.",
    },
  ];

  return (
    <div className="relative overflow-hidden h-full container  mx-auto">
      <div className="absolute h-full border-2 border-dark lg:left-1/2 lg:transform lg:-translate-x-1/2"></div>
      {events.map((event, index) => {
        return (
          <div key={index} className={`mb-8 flex justify-between items-center`}>
            <div
              className={`${
                index % 2 === 0 ? "order-2" : "order-1"
              } lg:block lg:w-5/12`}
            ></div>
            <div
              className={`${
                index % 2 === 0 ? "order-1" : "order-2"
              } lg:w-5/12 px-1 py-4 lg:text-${
                index % 2 === 0 ? "left" : "right"
              } ml-5 lg:ml-0 w-full`}
            >
              <div className="bg-dark p-4 rounded-md shadow-md">
                <h3 className=" font-bold text-lg text-accent">
                  {event.title}
                </h3>
                <div className="text-primary">
                  <p className="text-sm mb-10">{event.date}</p>
                  <div className="text-sm">{event.description}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
