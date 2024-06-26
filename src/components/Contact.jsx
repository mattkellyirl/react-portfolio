import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    // Main Container
    <div className="container flex mx-auto max-w-full h-screen">
      {/* Section Container */}
      <div className="flex flex-col w-full max-w-screen-lg justify-center mx-auto p-6">
        {/* Content Container */}
        <div className="flex flex-col md:flex-row w-full justify-center text-center">
          <div className="max-w-screen-lg justify-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-950">
              Let's Talk!
            </h2>
            <p className="mb-4 tracking-tight text-md font-medium text-gray-950">
              0419 836 646
            </p>
            <p className="mb-4 tracking-tight text-md font-medium text-gray-950">
              mattkellyvisual@gmail.com
            </p>
            <p className="mb-4 tracking-tight text-md font-medium text-gray-950">
              PO BOX 530,<br></br>Hahndorf 5245,<br></br>South Australia
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/mattkellyirl/"
                className="text-2xl text-gray-950 hover:text-indigo-800 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/mattkellyirl"
                className="text-2xl text-gray-950 hover:text-indigo-800 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/mattkellyirl/"
                className="text-2xl text-gray-950 hover:text-indigo-800 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
