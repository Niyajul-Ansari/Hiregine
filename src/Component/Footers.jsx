import React from 'react'
const services = [
    "Recruitment Process Outsourcing",
    "Talent Advisory",
    "GCC as a Service",
    "Employer Branding",
    "Permanent Hiring",
    "HR Outsourcing",
    "Staff Augmentation",
    "Executive Search",
    "Diversity & Inclusion",
  ];
  
  const jobs = [
    { id: 1, title: "Senior Detection Developer", location: "Bangalore (Hybrid)", type: "IT", status: "Full Time", link: "/job-details/1" },
    { id: 2, title: "Advertising Sales Manager", location: "Chennai", type: "Sales", status: "Full Time", link: "/job-details/2" },
    { id: 3, title: "Server-Side Software Architect", location: "Bangalore", type: "IT", status: "Full Time", link: "/job-details/3" },
  ];
function Footers() {
    return (
        
          <>
            <div className="bg-gray-100">

{/* Newsletter Section */}
<div className="bg-black text-white py-10 px-6 md:px-16 flex justify-between items-center">
  <div>
    <h2 className="text-2xl md:text-3xl font-bold">JOIN OUR NEWSLETTER</h2>
    <p className="text-gray-400 mt-2">GET REGULAR UPDATES FROM US</p>
  </div>
  <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition">
    SUBSCRIBE
  </button>
</div>

{/* Footer Section */}
<div className="px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 bg-gray-50">
  
  {/* Logo + Contact Info */}
  <div>
    <div className="flex items-center space-x-2">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
        <span className="text-white text-xl font-bold">Z</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800">Zyoin Group</h3>
    </div>
    <p className="text-gray-500 mt-4">
      UrbanVault 1781, 3rd floor, 19th Main Rd, Vanganahalli, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102
    </p>
    <div className="mt-6 bg-white shadow-md rounded-lg flex items-center px-4 py-3 border border-gray-200">
      <div className="text-black font-semibold">
        Talk To Our Team <br />
        <span className="text-blue-500">+91 81022 24444</span>
      </div>
      <div className="ml-auto">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
          📞
        </div>
      </div>
    </div>
  </div>

  {/* Services */}
  <div>
    <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-500 inline-block">
      SERVICES
    </h3>
    <ul className="space-y-2">
      {services.map((service, index) => (
        <li key={index}>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition flex items-center">
            ➢ {service}
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Recent Jobs */}
  <div>
    <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-500 inline-block">
      RECENT JOBS
    </h3>
    <ul className="space-y-3">
      {jobs.map((job) => (
        <li key={job.id}>
          <a href={job.link} className="block hover:text-blue-500 transition">
            <span className="font-semibold">{job.title}</span>
            <br />
            <span className="text-gray-500 text-sm">
              {job.location} • {job.type} • 
              <span className="text-green-500"> {job.status}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Newsletter + Social */}
  <div>
    <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-500 inline-block">
      NEWSLETTER
    </h3>
    <p className="text-gray-500 mb-4">Sign up today for hints, tips and the latest news</p>
    <div className="flex items-center space-x-2">
      <input 
        type="email" 
        placeholder="Your email address" 
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
      />
      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        🚀
      </button>
    </div>

    <h3 className="text-lg font-bold mt-6 border-b-2 border-blue-500 inline-block">
      FOLLOW US ON
    </h3>
    <div className="flex space-x-4 mt-4">
      <button className="w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-100 flex items-center justify-center">
        🔳
      </button>
      <button className="w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-100 flex items-center justify-center">
        ❎
      </button>
      <button className="w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-100 flex items-center justify-center">
        🔗
      </button>
      <button className="w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-100 flex items-center justify-center">
        📸
      </button>
    </div>
  </div>
</div>
</div>
</>
    )
}

export default Footers
