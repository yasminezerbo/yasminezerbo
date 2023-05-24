import React from "react";
import { Link } from "react-router-dom";

const Navlink = ({ to, text }) => {
  return (
    <>
      <Link
        to={to}
        className="navlink text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
      >
        {text}
      </Link>
    </>
  );
};

export default Navlink;
