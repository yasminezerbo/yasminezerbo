import React, { useState } from "react";
import Navlink from "./Navlink";
import MobileNavlink from "./MobileNavlink";
import Logo from "./Logo";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar pt-3 fixed w-screen">
      <div className="max-w-7xl mx-auto px-2 z-50">
        <div className="flex items-center justify-between h-16">
          <div>
            {/* <h1 className="text-white font-bold text-3xl font-serif">
              Yasmine Zerbo
            </h1> */}
            <Logo/>
          </div>
          <div className="hidden md:block ml-auto">
            <div className="flex items-baseline space-x-4">
              <Navlink to={"/"} text={"Accueil"} />
              <Navlink to={"/about"} text={"Qui Je suis"} />
              <Navlink to={"/projets"} text={"Projets"} />
              <Navlink to={"/cv"} text={"Mon CV"} />
              <Navlink to={"/contact"} text={"Contact"} />
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleNavbar}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={`${isOpen ? "hidden" : "block"}`}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18v1H3V5zm0 7h18v-1H3v1zm0 7h18v-1H3v1z"
                />
                <path
                  className={`${isOpen ? "block" : "hidden"}`}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16v1H4V5zm0 7h16v1H4v-1zm0 7h16v1H4v-1z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden transition-all duration-300 ease-in-out mobilenav`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavlink
            to={"/"}
            text={"Accueil"}
            toggleNavbar={toggleNavbar}
          />
          <MobileNavlink
            to={"/about"}
            text={"Qui Je Suis"}
            toggleNavbar={toggleNavbar}
          />
          <MobileNavlink
            to={"/projets"}
            text={"Projets"}
            toggleNavbar={toggleNavbar}
          />
          <MobileNavlink
            to={"/cv"}
            text={"Mon CV"}
            toggleNavbar={toggleNavbar}
          />
          <MobileNavlink
            to={"/contact"}
            text={"Contact"}
            toggleNavbar={toggleNavbar}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
