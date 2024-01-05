'use client'

import Image from "next/image";
import barkLogo from "../../../public/barklogo.png";
import { MdArrowDropDownCircle } from "react-icons/md";
import { BiSolidUpArrow } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";
import { FaSearch } from "react-icons/fa";

const Navbar = ({isHovered}) => {
  const [clicked, setClicked] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main
      className="justify-between flex flex-row items-center border-b p-8 w-full fixed  top-0 z-10 bg-white"
    
    >
      <div className="flex flex-row items-center gap-5">
        <Image src={barkLogo} width={100} height={40} />
        <div className="flex flex-row items-center gap-2">
          <button className="font-bold hover:underline" onClick={() => setClicked(!clicked)}>
            Explorer
          </button>
          <div ref={dropdownRef}>
            {clicked ? (
              <BiSolidUpArrow onClick={() => setClicked(!clicked)} size="20px" />
            ) : (
              <MdArrowDropDownCircle onClick={() => setClicked(!clicked)} size="20px" />
            )}
            {clicked && <DropDown />}
          </div>
        </div>
      </div>

      <div className="flex flex-row sm:gap-8 gap-4 lg:gap-4 items-center">
        <div className={` flex flex-row lg:border lg:border-solid lg:border-gray-400 sm:border-none sm:p-0 lg:p-1 rounded-md  items-center ${isHovered ? "block" : "hidden"}`}>
          <input type="text" className="border-0 outline-none sm:hidden hidden lg:block focus:outline-none" />
          <FaSearch />
        </div>
        <span className="font-semibold">Login</span>
        <div className="bg-sky-400 p-1 border-1 hidden  sm:hidden lg:block border-solid rounded-xl">
          <span>Join as a profession</span>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
