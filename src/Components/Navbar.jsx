import { useState } from "react";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { FcElectricity } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <nav className="flex items-center justify-between px-10 h-[80px]">
      <div className="text-3xl flex items-center gap-2 text-blue-600">
        <HiOutlineCodeBracket />{" "}
        <span className="text-xl font-primary text-slate-800 font-semibold">
          CodeFull
        </span>
      </div>

      <div>
        <ul className="hidden lg:flex gap-x-10">
          <a
            href="#"
            className="hover:text-base duration-300 hover:translate-y-[-8px] ease-in-out font-primary font-semibold"
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:text-base duration-300 hover:translate-y-[-8px] ease-in-out font-primary font-semibold"
          >
            Docs
          </a>
          <a
            href="#"
            className="hover:text-base duration-300 hover:translate-y-[-8px] ease-in-out font-primary font-semibold"
          >
            Change log
          </a>
          <a
            href="#"
            className="hover:text-base duration-300 hover:translate-y-[-8px] ease-in-out font-primary font-semibold"
          >
            Blogs
          </a>
          <a
            href="#"
            className="hover:text-base duration-300 hover:translate-y-[-8px] ease-in-out font-primary font-semibold"
          >
            Login
          </a>
        </ul>
      </div>

      <button className="font-special font-semibold text-lg lg:flex items-center gap-2 border py-2 px-5 rounded-lg border-slate-300 hidden hover:border-slate-500 duration-300">
        <FcElectricity /> <span>Electron Developers</span> <BsArrowRight />
      </button>

      <button className="lg:hidden" onClick={() => setIsClicked(!isClicked)}>
        {isClicked ? (
          <RiMenu5Fill className="text-gray-600 text-2xl" />
        ) : (
          <IoCloseOutline className="text-gray-600 text-2xl" />
        )}
      </button>

      {!isClicked && (
        <div className="absolute left-0 top-[80px] w-full h-[calc(100vh-80px)] py-10">
          <ul className="flex flex-col lg:hidden gap-y-2 border-b px-8 py-6">
            <a
              href="#"
              className="hover:text-base duration-300 hover:bg-blue-50  px-2 py-4 rounded-lg ease-in-out font-primary font-semibold"
            >
              Pricing
            </a>
            <a
              href="#"
              className="hover:text-base duration-300 hover:bg-blue-50  px-2 py-4 rounded-lg ease-in-out font-primary font-semibold"
            >
              Docs
            </a>
            <a
              href="#"
              className="hover:text-base duration-300 hover:bg-blue-50  px-2 py-4 rounded-lg ease-in-out font-primary font-semibold"
            >
              Change log
            </a>
            <a
              href="#"
              className="hover:text-base duration-300 hover:bg-blue-50  px-2 py-4 rounded-lg ease-in-out font-primary font-semibold"
            >
              Blogs
            </a>
            <a
              href="#"
              className="hover:text-base duration-300 hover:bg-blue-50  px-2 py-4 rounded-lg ease-in-out font-primary font-semibold"
            >
              Login
            </a>
          </ul>
          <div className="px-5 py-6"> 
            <button className="font-special w-full font-semibold text-lg flex items-center gap-2 py-2 px-5 rounded-lg lg:hidden hover:bg-blue-50">
              <FcElectricity /> <span>Electron Developers</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
