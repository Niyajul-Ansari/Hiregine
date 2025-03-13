import React from 'react'
import logo from '../images/hire.png'
const services = [
    {
      id: 1,
      title: "GCC | CAPTIVES",
      description:
        "GCCs have become instrumental in innovation and growth. Crafting a high-performing captive team is the need of the hour.",
      image: "/images/gcc-captives.jpg", // Replace with actual image path
    },
    {
      id: 2,
      title: "STARTUP",
      description:
        "We understand the unique challenges and opportunities that startups face, and help them build a high-performing team.",
      image: "/images/startup.jpg", // Replace with actual image path
    },
    {
      id: 3,
      title: "TECHFIRST COMPANIES",
      description:
        "We specialize in finding exceptional tech talents that possess the skills and experience to drive your product forward.",
      image: "/images/techfirst.jpg", // Replace with actual image path
    },
    {
      id: 4,
      title: "IT | OFFSHORING",
      description:
        "Whether changing market conditions or evolving tech landscape, elevate your business with our tailored IT talent solutions.",
      image: "/images/it-offshoring.jpg", // Replace with actual image path
    },
  ];
  
function Employe() {
    return (
        <>
        <div className="bg-[#f0f4f8] py-16">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 uppercase">
            Empowering Business
          </h2>
          <p className="text-xl font-semibold text-gray-800">
            With Exceptional Talents
          </p>
        </div>
  
        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={logo}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                  <img
                    src={logo}
                    alt="Icon"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold flex items-center hover:underline"
                >
                  More Details
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
  
        {/* Footer */}
        <div className="text-center mt-12 text-gray-600">
          Know more about our services.{" "}
          <a href="#" className="text-blue-600 underline">
            Talk To Our Talent Advisor!
          </a>
        </div>
      </div>
      </>
    )
}

export default Employe
