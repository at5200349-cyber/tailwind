import React from "react";

export default function Hero() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-300">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-center gap-12">
          


          {/* left part */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Build Beautiful
              <span className="text-blue-600 "> Websites </span>
              With Tailwind CSS
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Learn React and Tailwind CSS by building real-world projects step
              by step. Master modern UI design with practical examples.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className=" border border-blue text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600  hover:text-white   transition duration-300">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
                Learn More
              </button>
               <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
                Contact us
              </button>
            </div>
          </div>


          {/* Right part */}
                  <div className="flex-1 flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
            alt="Developer"
            className="rounded-2xl shadow-xl w-full max-w-md"
          />

        </div>
        </div>
      </section>
    </>
  );
}
