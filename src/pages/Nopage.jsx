import React from "react";
import { Link } from "react-router-dom";

function Nopage() {
  return (
    <>
      <div className="w-full mt-44 text-center">
        <h1 className="font-bold text-3xl">EROR 404</h1>
        <h6 className="text-base">File not found</h6>
      </div>
      <div className="w-full pt-5 mb-44 text-center">
        <Link to={"/"} className="text-blue-600 hover:underline">
          &larr; Back to homepage
        </Link>
      </div>
    </>
  );
}

export default Nopage;
