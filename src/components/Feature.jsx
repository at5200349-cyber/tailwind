import React from 'react'

export default function Feature() {
    const feature=[
        {
            icon:"📚",
            title:"Easy Learning",
            description: "Understand React and Tailwind with beginner-friendly explanations and practical projects."
        },
          {
      icon: "⚡",
      title: "Fast Performance",
      description:
        "Optimized layouts and reusable components for a smooth user experience."
    },
    {
      icon: "🌍",
      title: "Learn Anywhere",
      description:
        "Responsive design ensures your website looks great on every device."
    },{
        icon:" 🔒",
        title:"Secure",
        description:"Your data is protected with modern security practices."
    }
    ];
  return (
    <>
        <section  id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800">
                    Why choose Us
                </h2>
                <p className="text-center text-gray-600 mt-4 mb-12">  Everything you need to build beautiful modern websites.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        feature.map((ele,index)=>{
                            return(
                            <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                               
                                <h3 className="text-2xl font-bold">{ele.icon}{ele.title}</h3>
                                <p className="mt-4 text-gray-600 ">{ele.description}</p>
                             </div>);
                        })
                    }
                    </div>           
            </div>
        </section>
      
   </>
  )
}
