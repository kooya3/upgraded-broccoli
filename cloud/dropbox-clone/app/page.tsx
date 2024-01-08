import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center  bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 font-sans flex flex-col bg-[#1E1919] dark:bg-slate-800 text-[#FFFFFF] space-y-5 space-x-4">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox. <br />
            <br />
            Storing everything for you and your business needs. All in one place
          </h1>
          <br />

          <p className="pb-20 space-y-3">
            Enhance your personal storage with Dropbox, offering a simple and
            efficient way to upload, organize, and access files from anywhere.
            Securely store important documents and media, and experience the
            convenience of easy file management and sharing in one centralized
            solution.
          </p>
          <br />

          <Link
            href="/dashboard"
            className="text-xl rounded-lg flex cursor-pointer bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300focus p-4 w-1/6 h-fit mx-3"
          >
            Try it for free!
            <ArrowRight className="animate-ping inline-flex place-self-center rounded-full bg-sky-400 opacity-75 ml-10" />
          </Link>
        </div>
         <br />

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This Project is made for informational and educational purposes only. 
      </p>
    </main>
  );
}
