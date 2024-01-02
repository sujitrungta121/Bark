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
      className="justify-between flex flex-row items-center border-b p-4  w-full fixed  top-0 z-1 bg-white"
    
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

      <div className="flex flex-row gap-5 items-center">
        <div className={`border-2 flex flex-row border-solid border-gray-400 rounded-md p-2 items-center ${isHovered ? "block" : "hidden"}`}>
          <input type="text" className="border-0 outline-none focus:outline-none" />
          <FaSearch />
        </div>
        <span>Login</span>
        <div className="bg-sky-400 p-2 border-1 border-solid rounded-xl">
          <span>Join as a profession</span>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
