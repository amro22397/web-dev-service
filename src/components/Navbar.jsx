"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { navigation } from "../constants/navigation"
import { useContext, useState } from "react";

import RquestWebsite from "./RquestWebsite"
import { AppContext } from "@/context/AppContext";


export const Navbar = () => {

  let { setShowRequestForm,
    showRequestForm } = useContext(AppContext); 


  return (
    <div className="w-full">
      <RquestWebsite showRequestForm={showRequestForm} setShowRequestForm={setShowRequestForm} />
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <Image
                  src="/img/logo.svg"
                  width="32"
                  alt="N"
                  height="32"
                  className="w-8 hidden"
                />
              </span>
            <div className="flex flex-col items-center relative">

            <span
            className="font-semibold tracking-wide"
            style={{fontFamily: "Century Gothic"}}
            >Web Dev Service</span>

<span 
        style={{fontFamily: "Century Gothic"}}
        className="text-sm absolute top-[27.04px] right-[0px]
        font-bold tracking-widest">Oman</span>
        
            </div>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-3 lg:flex ml-auto lg:ml-0 lg:order-2">

          {/* menu lg and above */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item">
                <Link href={menu.href} key={index} className={`w-full px-1 py-2 text-gray-500 rounded-md
                       dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100
                        dark:focus:bg-gray-800 focus:outline-none hover:underline
                        ${menu.isHidden ? "hidden" : ""}`}>
                    {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

            <ThemeChanger />
            <div className="hidden mr-3 lg:flex nav__item">
              <Link href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-3
              text-[16.7px] hover:bg-indigo-700 active:bg-indigo-800"
              style={{fontFamily: "Trebuchet MS"}}
              onClick={() => setShowRequestForm(!showRequestForm)}
              >
                Request Website
              </Link>
            </div>
        </div>
                
        <Disclosure>
          {({ open }) => (
            <div>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <div className="flex flex-wrap w-full my-5 lg:hidden">
                  
                    {navigation.map((item, index) => (
                      <Link href={item.href} key={index} className={`w-full px-4 py-2 -ml-4 text-gray-500 rounded-md
                       dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100
                        dark:focus:bg-gray-800 focus:outline-none hover:underline
                        ${item.isHidden ? "hidden" : ""}`}>
                          {item.name}
                      </Link>
                    ))}
                    <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white
                     bg-indigo-600 rounded-md lg:ml-5 text-[16.7px] hover:bg-indigo-700 active:bg-indigo-800">         
                    Request Website
                    </Link>
                  
                </div>
            </div>
          )}
        </Disclosure>

      </nav>
    </div>
  );
}
