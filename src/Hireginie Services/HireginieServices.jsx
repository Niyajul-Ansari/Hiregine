import { useNavigate } from 'react-router-dom';
import { FaSearch, FaUserTie, FaTasks, FaUserCheck } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Talent Sourcing',
    description:
      'Our precision sourcing strategy lead by the domain experts and the crowd hunting advantage is an absolute unique value proposition for unbeatable TAT and Unmatchable Talent. Hireginie accelerator hiring strategy is a package in itself.',
    icon: <FaSearch size={30} />,
    link: '/talent-sourcing',
  },
  {
    id: 2,
    title: 'Interviewer On Demand',
    description:
      'We have a large network of domain experts as freelance interviewers to identify the perfect fit for the position and your company through precision and accurate evaluation.',
    icon: <FaUserTie size={30} />,
    link: '/interviewer-on-demand',
  },
  {
    id: 3,
    title: 'Recruitment Process Outsourcing',
    description:
      "Our unique recruitment process outsourcing proposition is the first of its kind in the industry. Get dedicated seasoned recruiters on demand for your scale-up strategy without additional cost.",
    icon: <FaTasks size={30} />,
    link: '/recruitment-process-outsourcing',
  },
  {
    id: 4,
    title: 'Outplacement Services',
    description:
      "Don't lay off, just see off, the employees who once were building blocks, with a nice farewell gift. Layoffs are emotionally draining and mostly unavoidable.",
    icon: <FaUserCheck size={30} />,
    link: '/outplacement-services',
  },
];

const HireginieServices = () => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    
    <div className="py-16 bg-gray-50">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
        Hireginie Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleClick(service.link)}
            className="p-8 border rounded-lg shadow-sm transition-all duration-300 cursor-pointer 
                      hover:bg-red-600 hover:text-white group"
          >
            <div className="flex items-center mb-4">
              <span className="mr-4 text-gray-600 group-hover:text-white">
                {service.icon}
              </span>
              <h3 className="text-xl font-semibold group-hover:text-white">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600 group-hover:text-white">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HireginieServices;
