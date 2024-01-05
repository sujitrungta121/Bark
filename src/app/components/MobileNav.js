import Image from "next/image";
import barkLogo from "../../../public/barklogo.png";
import { FaSearch } from "react-icons/fa";


const MobileNav=()=>{
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
            {/* <div ref={dropdownRef}>
              {clicked ? (
                <BiSolidUpArrow onClick={() => setClicked(!clicked)} size="20px" />
              ) : (
                <MdArrowDropDownCircle onClick={() => setClicked(!clicked)} size="20px" />
              )}
              {clicked && <DropDown />}
            </div> */}
          </div>
        </div>
  
        <div className="flex flex-row gap-2 items-center">
         
            <FaSearch />
          <span>Login</span>
        
        </div>
      </main>
    )
}
export default MobileNav;