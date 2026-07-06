import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className=" bg-gray-200 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-3xl font-bold text-blue-600 cursor-pointer">
            TailwindLearn
          </h1>
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transitionn duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="bg-blue-600 text-while px-5 py-2 rounded-lg hover:bg-blue-800">Get Started</button>
        </div>
      </nav>
    </>
  );
}
