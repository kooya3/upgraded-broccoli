import { ArrowRight } from "lucide-react";
import Link from "next/link";

function dashboard() {
  return (
    <main className="">
      <div>
    <div className="p-10 flex flex-col bg-[#cccaca] dark:bg-slate-800 text-white space-y-5 font-sans">
      <h1 className="text-5xl font-bold">
        Welcome to DropBox. <br />
        <br />
        Storing everything for you and your business needs. All in one place
      </h1>

      <p className="pb-20">
        Enhance your personal storage. Offering a simple and efficient way to upload, organize, and access files from anywhere. 
      </p>

      <Link href="/dashboard">
      Try it for free!
      <ArrowRight className="" />
      </Link>
    </div>
    </div>


    <p className="text-center font-bold text-xl pt-5">Disclaimer</p> 
    <p className="text-center font-light p-2">
      This project is made for informational and educational purposes only. 
    </p>
    </main>
  );
}

export default dashboard