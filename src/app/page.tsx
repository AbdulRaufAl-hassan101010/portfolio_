import Button from "@/components/Button";
import { Download, File, FileIcon } from "lucide-react";
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
    </>
  );
}
