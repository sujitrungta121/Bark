'use client'
import { FaLinkedinIn,FaFacebookF,FaTwitter } from "react-icons/fa";
import FooterData from "../data/FooterData";
import { MdArrowDropDownCircle } from "react-icons/md";
import { useState } from "react";
import Modal from "./Modal";

const Footer=()=>{
const [modal,setModal]=useState(false);

const handleClose=()=>{
    setModal(false)
}

    return (
        <main className="flex flex-col gap-8 p-8">
      <div className="flex justify-evenly border-b p-5">
      <div className="flex flex-row gap-8">
    
       {
        FooterData?.map(item=>{
            return(
                <div className="flex flex-col gap-5 ">
<span>{item.title}</span>
<div className="flex flex-col gap-2">
    {
        item.items.map(data=>{
            return(
                <span>{data}</span>
            )
        })
    }
</div>

</div>
            )
        })
       } 
   

      </div>

      <div className="flex flex-col gap-5">
        <span>indian@bark.com</span>
        <span>+91 8907651234</span>
        <span>(Mon-Fri 8am-8pm,sat-sun 9am-6pm)</span> 
        <div className="flex flex-row gap-5">
            <FaLinkedinIn/>
            <FaFacebookF/>
            <FaTwitter/>
        </div>
        <div className=" bg-slate-300 rounded-md flex flex-row p-2 items-center" onClick={()=>{setModal(true)}}>
        <input type="text" className="border-0 outline-none focus:outline-none bg-transparent hover:cursor-pointer "/>
<MdArrowDropDownCircle size="20px"className="hover:cursor-pointer"/>
        </div>
      </div>
      
      </div>
      <div className="flex lg:flex-row sm:flex-col gap-2 items-center lg:justify-between">
      
   
   <div className="flex sm:flex-col lg:flex-row gap-2 sm:items-center">
            
            <span>&copy;  Bark.com Global Limited.</span>
            <div className="flex flex-row gap-2">
            <span >Terms & condition</span>
            <span>/</span>
            <span>cookie policy</span>
            <span>/</span>
            <span>Privacy Policy</span>
            </div>
            </div>
            <div className="lg:flex lg:flex-col  sm:flex sm:flex-col">
    <span>TrustPilot</span>
    <span>Trustscore <span className="font-bold">4.4</span></span>
    <span><span className="font-bold">92,673</span> Reviews</span>
   </div>
      </div>
      <Modal isOpen={modal} onClose={handleClose}/>
        </main>
    )
}
export default Footer;