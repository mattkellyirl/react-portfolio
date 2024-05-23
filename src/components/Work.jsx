import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Work() {
  return (
    // Main Container
    <div className="container flex mx-auto max-w-full h-auto lg:h-screen bg-gray-100">
      {/* Section Container */}
      <div className="flex flex-col w-full max-w-screen-lg justify-center mx-auto py-16 px-6">
        {/* Content Container */}
        <div className="flex flex-col w-full justify-center text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-950">
            Recent Work
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Work Container */}
            <div className="flex flex-col w-72 h-72 border border-gray-200 rounded-lg bg-white p-4 transform transition-transform duration-300 hover:scale-105">
              <a href="https://tech-tldr-4dab3ca834cf.herokuapp.com/">
                <img
                  className="rounded-lg"
                  src="/tech-tldr.png"
                  alt="portfolio image"
                />
              </a>
              <div className="flex flex-col flex-grow mt-4">
                <a href="https://tech-tldr-4dab3ca834cf.herokuapp.com/">
                  <h5 className="text-start text-md font-bold tracking-tight text-gray-950">
                    Tech TL;DR
                  </h5>
                </a>
                <p className="text-start text-sm">
                  TL;DR style blog built with Express.js, Handlebars.js,
                  Sequelize and MySQL.
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <a
                    href="https://github.com/mattkellyirl/tech-tldr"
                    className="text-2xl text-gray-950 hover:text-indigo-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://tech-tldr-4dab3ca834cf.herokuapp.com/"
                    className="text-xl text-gray-950 hover:text-indigo-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            {/* Work Container */}
            <div className="flex flex-col w-72 h-72 border border-gray-200 rounded-lg bg-white p-4 transform transition-transform duration-300 hover:scale-105">
              <a href="https://goalgetter-857e87a8345e.herokuapp.com/">
                <img
                  className="rounded-lg"
                  src="/goalgetter.png"
                  alt="portfolio image"
                />
              </a>
              <div className="flex flex-col flex-grow mt-4">
                <a href="https://goalgetter-857e87a8345e.herokuapp.com/">
                  <h5 className="text-start text-md font-bold tracking-tight text-gray-950">
                    Goal Getter
                  </h5>
                </a>
                <p className="text-start text-sm">
                  A goal setting application built with Express.js, Tailwind CSS
                  and MySQL.
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <a
                    href="https://github.com/mattkellyirl/GoalGetter"
                    className="text-2xl text-gray-950 hover:text-indigo-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://goalgetter-857e87a8345e.herokuapp.com/"
                    className="text-xl text-gray-950 hover:text-indigo-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            {/* Work Container */}
            <div className="flex flex-col w-72 h-72 border border-gray-200 rounded-lg bg-white p-4 transform transition-transform duration-300 hover:scale-105">
              <a href="https://mattkellyirl.github.io/weather-dashboard/">
                <img
                  className="rounded-lg"
                  src="/weather-dashboard.png"
                  alt="portfolio image"
                />
              </a>
              <div className="flex flex-col flex-grow mt-4">
                <a href="https://mattkellyirl.github.io/weather-dashboard/">
                  <h5 className="text-start text-md font-bold tracking-tight text-gray-950">
                    Weather Dashboard
                  </h5>
                </a>
                <p className="text-start text-sm">
                  Weather forecast application, powered by the Open Weather Map
                  API.
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <a
                    href="https://github.com/mattkellyirl/weather-dashboard"
                    className="text-2xl text-gray-950 hover:text-indigo-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://mattkellyirl.github.io/weather-dashboard/"
                    className="text-xl text-gray-950 hover:text-indigo-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            {/* Work Container */}
            <div className="flex flex-col w-72 h-72 border border-gray-200 rounded-lg bg-white p-4 transform transition-transform duration-300 hover:scale-105">
              <a href="https://www.youtube.com/watch?v=79Zb8IPB3Po">
                <img
                  className="rounded-lg"
                  src="/social-network-api.png"
                  alt="portfolio image"
                />
              </a>
              <div className="flex flex-col flex-grow mt-4">
                <a href="https://www.youtube.com/watch?v=79Zb8IPB3Po">
                  <h5 className="text-start text-md font-bold tracking-tight text-gray-950">
                    Social Network API
                  </h5>
                </a>
                <p className="text-start text-sm">
                  Social media back end built with Express.js, MongoDB and
                  NoSQL.
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <a
                    href="https://github.com/mattkellyirl/social-network-api"
                    className="text-2xl text-gray-950 hover:text-indigo-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.youtube.com/watch?v=79Zb8IPB3Po"
                    className="text-xl text-gray-950 hover:text-indigo-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            {/* Work Container */}
            <div className="flex flex-col w-72 h-72 border border-gray-200 rounded-lg bg-white p-4 transform transition-transform duration-300 hover:scale-105">
              <a href="https://www.youtube.com/watch?v=kaXNVYw36Us">
                <img
                  className="rounded-lg"
                  src="/ecommerce-back-end.png"
                  alt="portfolio image"
                />
              </a>
              <div className="flex flex-col flex-grow mt-4">
                <a href="https://www.youtube.com/watch?v=kaXNVYw36Us">
                  <h5 className="text-start text-md font-bold tracking-tight text-gray-950">
                    E-Commerce Back End
                  </h5>
                </a>
                <p className="text-start text-sm">
                  E-Commerce back end built with Express.js, Sequelize and
                  MySQL.
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <a
                    href="https://github.com/mattkellyirl/ecom-back-end"
                    className="text-2xl text-gray-950 hover:text-indigo-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.youtube.com/watch?v=kaXNVYw36Us"
                    className="text-xl text-gray-950 hover:text-indigo-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            {/* Work Container */}
            <div className="flex flex-col w-72 h-72 border border-gray-200 rounded-lg bg-white p-4 transform transition-transform duration-300 hover:scale-105">
              <a href="https://www.youtube.com/watch?v=Bd22ggWiFQI">
                <img
                  className="rounded-lg"
                  src="/employee-tracker.png"
                  alt="portfolio image"
                />
              </a>
              <div className="flex flex-col flex-grow mt-4">
                <a href="https://www.youtube.com/watch?v=Bd22ggWiFQI">
                  <h5 className="text-start text-md font-bold tracking-tight text-gray-950">
                    Employee Tracker
                  </h5>
                </a>
                <p className="text-start text-sm">
                  An employee content management system built with Inquirer and
                  MySQL.
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <a
                    href="https://github.com/mattkellyirl/employee-tracker"
                    className="text-2xl text-gray-950 hover:text-indigo-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.youtube.com/watch?v=Bd22ggWiFQI"
                    className="text-xl text-gray-950 hover:text-indigo-800 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
