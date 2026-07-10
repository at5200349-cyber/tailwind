import React from 'react'

export default function Campanis() {
    const companies=[
        "Google","Microsoft","Amazon","Netflix","Meta","OpenAI"
    ];

  return (
    <>
  
     <section className="py-20  bg-gradient-to-r from-blue-300 to-purple-300">
      <div className="max-w-7xl mx-auto px-6">

        
        <h2 className="text-center text-black-500 uppercase tracking-widest font-semibold mb-12">
          Trusted by 10,000+ Developers Worldwide
        </h2>

      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">

          {companies.map((company, index) => (
            <div
              key={index}
              className="text-3xl font-bold text-blue-500 hover:text-purple-600 hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              {company}
            </div>
          ))}

        </div>
      </div>
    </section>
    
    </>
  )
}
