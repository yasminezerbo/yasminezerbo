import React from "react";
import { Link } from "react-router-dom";

const MobileNavlink = ({ text, to, toggleNavbar }) => {
  return (
    <>
      <Link
        to={to}
        className="text-white hover:text-gray-300 block px-3 py-2 border-b-2 rounded-md text-base uppercase font-serif font-medium"
        onClick={toggleNavbar}
      >
        {text}
      </Link>
    </>
  );
};

export default MobileNavlink;
