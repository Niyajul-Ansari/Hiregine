import React from 'react'
const jobs = [
    {
      id: 1,
      type: "IT",
      location: "Bangalore (Hybrid)",
      title: "Senior Detection Developer",
      date: "Posted 3 months ago",
      badge: "Full Time",
      link: "/job-details/1",
    },
    {
      id: 2,
      type: "Sales",
      location: "Chennai",
      title: "Advertising Sales Manager",
      date: "Posted 3 months ago",
      badge: "Full Time",
      link: "/job-details/2",
    },
    {
      id: 3,
      type: "IT",
      location: "Bangalore",
      title: "Server-Side Software Architect",
      date: "Posted 3 months ago",
      badge: "Full Time",
      link: "/job-details/3",
    },
    {
      id: 4,
      type: "TA",
      location: "Hyderabad",
      title: "Senior Talent Acquisition Specialist",
      date: "Posted 3 months ago",
      badge: "Full Time",
      link: "/job-details/4",
    },
    {
      id: 5,
      type: "IT",
      location: "Bangalore",
      title: "Senior Security Analyst",
      date: "Posted 3 months ago",
      badge: "Full Time",
      link: "/job-details/5",
    },
    {
      id: 6,
      type: "Sales",
      location: "Mumbai",
      title: "Senior Developer – Backend",
      date: "Posted 3 months ago",
      badge: "Full Time",
      link: "/job-details/6",
    },
  ];
function Recantjobs() {
    return (
        <>
        <div className="px-6 py-16 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-blue-500 font-bold text-3xl md:text-4xl">
          RECENT JOBS
        </h2>
        <p className="text-black font-semibold text-lg md:text-xl mt-2">
          TODAYS LATEST POST JOB
        </p>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <a
            key={job.id}
            href={job.link}
            className="group bg-white shadow-md rounded-lg p-6 flex items-center gap-4 border border-gray-200 hover:shadow-lg transition duration-300"
          >
            {/* Logo (Placeholder) */}
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {job.type[0]}
              </span>
            </div>

            {/* Job Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-black font-semibold">{job.type}</span>
                <span className="text-gray-500">{job.location}</span>
              </div>

              {/* Job Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-500 transition duration-300">
                {job.title}
              </h3>

              {/* Date */}
              <p className="text-gray-400 text-sm mt-1">{job.date}</p>
            </div>

            {/* Badge */}
            <div>
              <span className="bg-blue-100 text-blue-500 text-xs font-semibold px-3 py-1 rounded-full">
                {job.badge}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* View More Jobs Button */}
      <div className="text-center mt-10">
        <a
          href="/jobs"
          className="inline-block border border-black text-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition duration-300"
        >
          VIEW MORE JOBS
        </a>
      </div>
    </div>
        </>
    )
}

export default Recantjobs
