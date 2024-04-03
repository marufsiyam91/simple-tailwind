import { BsArrowRight } from "react-icons/bs";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { FaHandBackFist } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className=" px-6 py-10 h-[calc(100vh-80px)] bg-gradient-to-br from-purple-50 via-orange-50 to-transparent">
      <div className="md:flex md:flex-col md:items-center md:text-center m-auto max-w-4xl px-6 pb-32">
        <div className="flex items-center gap-2 bg-orange-100 border border-orange-200 cursor-pointer rounded-lg px-3 py-1 w-fit shadow-sm hover:shadow-md hover:-translate-y-1 transition group duration:300">
          <div className="w-2 h-2 rounded-full bg-yellow-400 border-orange-200"></div>
          <p className="font-primary font-semibold text-yellow-600">
            v0.21.1:{" "}
            <span className="text-yellow-800">Find-in-page bug-fixed</span>
          </p>
          <BsArrowRight className="group-hover:translate-x-1 text-yellow-800 transition duration-300" />
        </div>

        <div className="hidden md:flex gap-8 my-6">
          <div className="flex items-center gap-2">
            <BsFillFileEarmarkCodeFill className="text-sm"/>
            <p>code optional</p>
          </div>
          <div className="flex items-center gap-2">
            <FaHandBackFist className="text-sm"/>
            <p>Drag & drop builder</p>
          </div>

          <div className="flex items-center gap-2">
            <FaLaptop className="text-sm"/>
            <p>Windows, Mac, Linux</p>
          </div>
        </div>

        <h1 className="mt-6 text-4xl font-poppins text-slate-700 font-semibold leading-snug sm:text-6xl">
          Web app to desktop in minutes
        </h1>
        <p className="mt-4 text-xl font-primary">
          Take your web app codebase and transform it into a cross platform
          desktop app with native functionality.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-12">
          <button className="px-8 bg-blue-500 text-white font-primary font-semibold rounded-md py-4">
            Download now
          </button>
          <button className="px-8 bg-white font-primary font-semibold border border-slate-200 rounded-md py-4">
            Read Docs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
