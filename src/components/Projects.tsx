import React from "react";
import Image from "next/image";
import RetailImage from "@/assests/images/retail_app.png";
import DigiCollectImage from "@/assests/images/Digicollect.png";
import Link from "next/link";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="projects" id="projects">
      <h3 className="text-secondary mb-5">
        <span className="text-accent text-lg">3.</span> Projects
      </h3>

      <p className="mb-5">This is a showcase of a few projects I built.</p>

      <div className="bg-dark py-5 px-5 md:px-0 md:flex rounded-md gap-x-5 mb-5">
        <div className="md:w-4/12 bg-accent rounded-r-lg py-1.5 pr-1.5 mb-5 md:mb-0">
          <div className="w-full h-full hover:scale-105 transform duration-200 ease-in-out">
            <Link href={"https://aught.vercel.app/shop"} target="_blank">
              <Image
                src={RetailImage}
                alt=""
                className="w-full h-full"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
        <div className="md:w-8/12">
          <h3 className="text-accent text-xl font-bold mb-1">
            Retail Management System.
          </h3>
          <div className="text-white">
            <p className="mb-5">
              {" "}
              This is an online retail management software which help users
              manage there stores easily.
            </p>
            <div className="mb-5">
              <h5 className="text-sm font-extrabold text-accent mb-1">
                Features.
              </h5>
              <p>
                Manage inventories, add multiple branches, add multiple users,
                manage user access and roles, issue receipt and invoices, add
                taxes to checkout, chart to display sales and more.
              </p>
            </div>

            <div className="mb-5">
              <h5 className="text-sm font-extrabold text-accent mb-1">
                Contribution.
              </h5>
              <p>
                Created entire system from scratch, created the system design and
                workflow and implemented code
              </p>
            </div>

            <div className="mb-5">
              <h5 className="text-sm font-extrabold text-accent mb-1">
                Technologies.
              </h5>
              <p>Nextjs, MongoDB(mongoose), github, NextAuth and vercel.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark py-5 px-5 md:px-0 md:flex rounded-md gap-x-5">
        <div className="md:w-4/12 bg-accent rounded-r-lg py-1.5 pr-1.5 mb-5 md:mb-0">
          <div className="w-full h-full hover:scale-105 transform duration-200 ease-in-out">
            <Link href={"https://digicollect.app/"} target="_blank">
              <Image
                src={DigiCollectImage}
                alt=""
                className="w-full h-full"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
        <div className="md:w-8/12 ">
          <h3 className="text-accent text-xl font-bold mb-1">
            Micro-Finance Management System.
          </h3>
          <div className="text-white">
            <p className="mb-5">
              {" "}
              This is an online micro-finance management software use by
              micro-finance organizations to manage their daily business
              activities.
            </p>
            <div className="mb-5">
              <h5 className="text-sm font-extrabold text-accent mb-1">
                Features.
              </h5>
              <p>
                Manage savings & Loans , add new customers, track customers
                transactions, Mobile app for field agents and a secure dashboard
                to over see all activities.
              </p>
            </div>

            <div className="mb-5">
              <h5 className="text-sm font-extrabold text-accent mb-1">
                Contribution.
              </h5>
              <p>
                Created the landing page for the business and helped with ideas
                to add more features and to improve the application.{" "}
              </p>
            </div>

            <div className="mb-5">
              <h5 className="text-sm font-extrabold text-accent mb-1">
                Technologies.
              </h5>
              <p>React JS, Tailwind css & Typescript.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
