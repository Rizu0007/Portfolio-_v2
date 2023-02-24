import React from "react";
import {motion} from 'framer-motion'
import gsap from "gsap";
import { GoPrimitiveDot } from "react-icons/go";
import { FcApproval } from "react-icons/fc";




const Myskills = () => {
  return (
    <div className="w-full md:w-5/5 m-auto py-50 flex flex-col md:flex-row justify-between items-center p-5">
      <div className="w-full md:w-1/3 p-5 space-y-50 mx-10">
        <h1 className="text-5xl md:text-6xl font-bold mr-10">My Development Skills</h1>
        <p className="text-xs text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit maxime
          dolorum nesciunt repellat, ab magnam laudantium fugit quas, laborum
          dolor, totam minima mollitia nisi?
        </p>
      </div>


      <div className="w-full  grid grid-cols-2 gap-7 bg-neutral-200 dark:bg-gray-600	">
        <motion.div
        whileHover={{scale:[null,1.2,1.1]}}
        transition={{duration:0.3}}
         className="flex flex-col items-center bg-gray rounded p-2 space-y-2 drop-shadow-x1">
            <div className="bg-gray-800 p-2 rounded-full">
            </div>
            <p className="font-bold  text-3xl underline underline-offset-4	 text-stone-800	
            ">FRONT_END SKILLS
        
            </p>
            <p className="flex items-center text-amber-200 justify-center font-bold"><FcApproval/>NExt.js
            <p>react</p>
            </p>
        </motion.div>
        <motion.div
        whileHover={{scale:[null,1.2,1.1]}}
        transition={{duration:0.3}}
        className="flex flex-col items-center bg-white rounded p-2 space-y-2 drop-shadow-xl">
            <div className="bg-gray-800 p-2 rounded-full">
                <img src="/icons/curlyBrackets.png" alt="" />
            </div>
            <p className="font-semibold">Backend Dev</p>
        </motion.div>
       
      </div>
    </div>
  );
};

export default Myskills;