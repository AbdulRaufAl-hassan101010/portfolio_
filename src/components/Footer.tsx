import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { GithubIcon, Linkedin, MailIcon, PhoneIcon } from "lucide-react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-dark text-white py-5 px-3" id="footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between mb-10 gap-y-20">
        <h2 className="text-xl font-bold text-accent">Portfolio</h2>
        <ul>
          <h2 className="text-xl font-bold text-accent mb-3">Contact Me</h2>
          <li className="mb-5">
            <address className="not-italic flex  gap-x-1 items-center">
              <span className="flex flex-row items-center gap-x-">
                <MailIcon className="inline-block" size={30} fill="#ccc" />
                E-mail:{" "}
              </span>
              <Link
                href={"mailto:abdulraufalhassan101010@gmail.com"}
                className="hover:underline decoration-dashed"
              >
                abdulraufalhassan101010@gmail.com
              </Link>
            </address>
          </li>
          <li className="mb-5">
            <address className="not-italic flex gap-x-1 items-center">
              <span className="flex flex-row items-center gap-x-1">
                <PhoneIcon className="inline-block" size={30} fill="#ccc" />
                Phone 1:{" "}
              </span>
              <Link
                href={"tel:+233202511342"}
                className="hover:underline decoration-dashed"
              >
                +233202511342
              </Link>
            </address>
          </li>
          <li className="mb-5">
            <address className="not-italic flex gap-x-1 items-center">
              <span className="flex flex-row items-center gap-x-1">
                <PhoneIcon className="inline-block" size={30} fill="#ccc" />
                Phone 2:{" "}
              </span>
              <Link
                href={"tel:+233256578084"}
                className="hover:underline decoration-dashed"
              >
                +233256578084
              </Link>
            </address>
          </li>
        </ul>
        <ul>
          <h2 className="text-xl font-bold text-accent mb-5">Socials</h2>
          <div className="flex gap-x-3">
            <li>
              <Button
                href="https://www.linkedin.com/in/abdul-rauf-alhassan-b1b4a2225/"
                target="_blank"
                className="!p-3 !rounded-full"
              >
                <Linkedin className="inline-block" size={18} />
              </Button>
            </li>
            <li>
              <Button
                href="https://github.com/AbdulRaufAl-hassan101010"
                target="_blank"
                className="!p-3 !rounded-full"
              >
                <GithubIcon className="inline-block" size={18} />
              </Button>
            </li>
          </div>
        </ul>
      </div>

      <div className="text-center">
        <small className="text-center">
          &copy; 2024 Abdul-Rauf Alhassan, All rigts reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
