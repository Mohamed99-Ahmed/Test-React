import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  let [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function nav() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <nav className="fixed z-[999] top-0 left-0 right-0 bg-mcolor text-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="" className="flex gap-4">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Mohamed Ahmed
            </span>
          </NavLink>
          <button
            onClick={nav}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-mcolor dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {isOpen ? (
            <div className=" w-full  md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 gap-4 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink
                    to=""
                    className={`nav-link${location.pathname === 'home' ? Style.active : ''} md:p-2 block py-2 px-3 text-white hover:bg-blue-700 md:hover:bg-transparent md:hover:opacity-70 rounded md:bg-transparent   dark:text-white md:dark:text-blue-500`}
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="about"
                   className =  {`nav-link${location.pathname === 'about' ? 'active' : ''}  md:p-2 block py-2 px-3 text-white hover:bg-blue-700 md:hover:bg-transparent md:hover:opacity-70 rounded md:bg-transparent   dark:text-white md:dark:text-blue-500`}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="portfolio"
                    className =  {`nav-link${location.pathname === 'portfolio' ? 'active' : ''} md:p-2 block py-2 px-3 text-white hover:bg-blue-700 md:hover:bg-transparent md:hover:opacity-70 rounded md:bg-transparent   dark:text-white md:dark:text-blue-500`}
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="contact"
                    className =  {`nav-link${location.pathname === 'contact' ? 'active' : ''} md:p-2 block py-2 px-3 text-white hover:bg-blue-700 md:hover:bg-transparent md:hover:opacity-70 rounded md:bg-transparent   dark:text-white md:dark:text-blue-500`}
                  >
                    contact
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
}
