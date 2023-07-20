import React from "react";
import {motion} from 'framer-motion'
import gsap from "gsap";
import { GoPrimitiveDot } from "react-icons/go";
import { FcApproval } from "react-icons/fc";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";





const Myskills = () => {
  const { theme } = useTheme();

  return (

    
    <div className="w-full md:w-5/5 m-auto py-50 flex flex-col md:flex-row justify-between items-center p-5">
      <div className="w-full md:w-1/3 p-5 space-y-50 mx-10">
        <h1 className="text-5xl md:text-6xl font-bold mr-10">My Development Skills</h1>
        <p className=" text-gray-500">
        I value simple content structure, clean design patterns, and thoughtful interactions.
        I like to code things from scratch, and enjoy bringing ideas to life in the browser.
        I genuinely care about people, and love helping fellow designers work on their craft.
        </p>
      </div>


      <div className="w-full  grid grid-cols-2 gap-7 bg-neutral-200 dark:bg-gray-600	">
        <motion.div
        whileHover={{scale:[null,1.2,1.1]}}
        transition={{duration:0.3}}
         className="flex flex-col items-center bg-gray rounded p-2 space-y-2 drop-shadow-x1">
            <div className="bg-gray-700 p-2 rounded-full">
            </div>
            <p className=	"section-heading ">Web2 Skill
            </p>
            
<ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
<li class="flex items-center space-x-3">
     <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
     </svg>
    <span className="text-bold text-gray-900 dark:text-white">React.js</span>
</li>
<li class="flex items-center space-x-3">
    <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
     </svg>
    <span className="text-bold text-gray-900 dark:text-white">Next.js</span>
</li>
<li class="flex items-center space-x-3">
    <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 ">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
     </svg>
    <span><span class="font-semibold text-gray-900 dark:text-white">Node.js</span></span>
</li>
<li class="flex items-center space-x-3">
    <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
     </svg>
    <span> <span class="font-semibold text-gray-900 dark:text-white">Firebase</span></span>
</li>
<li class="flex items-center space-x-3">
    <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
     </svg>
    <span><span class="font-semibold text-gray-900 dark:text-white">Tailwind Css</span></span>
</li>
</ul>

            
        </motion.div>
        <motion.div
        whileHover={{scale:[null,1.2,1.1]}}
        transition={{duration:0.3}}
        className="flex flex-col items-center bg-gray-800 rounded p-2 space-y-2 drop-shadow-xl">
            <div className="bg-gray-800 p-2 rounded-full">
            </div>
            <p className=	"section-heading ">Web 3 Skill
            </p>
            <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
<li class="flex items-center space-x-3">
     <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
     </svg>
    <span className="text-bold text-gray-900 dark:text-white">Ethereum</span>
</li>
<li class="flex items-center space-x-3">
    <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
     </svg>
    <span className="text-bold text-gray-900 dark:text-white">Solidity</span>
</li>
<li class="flex items-center space-x-3">
    <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 ">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
     </svg>
    <span><span class="font-semibold text-gray-900 dark:text-white">Hardhat</span></span>
</li>
<li class="flex items-center space-x-3">
    <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
     </svg>
    <span> <span class="font-semibold text-gray-900 dark:text-white">NFT</span></span>
</li>
<li class="flex items-center space-x-3">
    <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
     </svg>
    <span><span class="font-semibold text-gray-900 dark:text-white">Foundry</span></span>
</li>
</ul>
            
            </motion.div>
       
      </div>
    </div>
  );
};

export default Myskills;