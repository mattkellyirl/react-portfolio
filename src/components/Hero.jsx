import React from "react";

function Hero() {
  return (
    // Main Container
    <div className="container flex mx-auto h-auto md:h-screen">
      {/* Section Container */}
      <div className="flex w-full max-w-screen-lg items-center mx-auto py-16 px-6">
        {/* Content Container */}
        <div className="flex flex-col md:flex-row w-full items-center justify-between gap-8">
          <div className="max-w-screen-lg justify-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-950">
              Hi! I'm Matt Kelly.
            </h2>
            <p className="mb-4 text-md font-light text-gray-950">
              I'm a Full Stack Developer, having recently completed my
              certificate from The University of Adelaide. My technical
              expertise includes skills in modern web technologies such as
              Express.js, Node.js, React.js, Tailwind CSS, MySQL/NoSQL and
              MongoDB. Additionally, I have extensive graphic design experience,
              and am proficient in Adobe Creative Suite programs such as After
              Effects, Premiere Pro, Illustrator, InDesign and Photoshop.
            </p>
            <p className="mb-4 text-md font-light text-gray-950">
              Outside of tech, I'm a qualified light vehicle mechanic, having
              completed my 4 year apprenticeship at a performance vehicle
              dealership in the Adelaide Hills. Motorsport is my passion, and
              I've experienced working as a motorsport mechanic at a
              professional level. I'm fortunate enough to compete as a racing
              driver myself and as a result, I'm highly competitive in
              everything that I do.
            </p>
            <p className="text-md font-medium text-gray-950">
              From reading this, you have probably realised that I love making
              things, building things and understanding why and how they work.
              If you did, I'd love to work with you!
            </p>
          </div>

          {/* Profile Card */}
          <div className="flex-none w-72 h-72 flex flex-col items-center rounded-lg border border-gray-200 bg-neutral-100 p-10">
            <img
              className="mb-3 h-24 w-24 rounded-full shadow-lg"
              src="/headshot.jpeg"
              alt="Matt Kelly"
            />
            <h5 className="mb-1 text-xl font-medium text-neutral-950">
              Matt Kelly
            </h5>
            <span className="text-sm text-gray-400">Full Stack Developer</span>
            <div className="mt-4 flex md:mt-6">
              <a
                href="/matt-kelly.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-indigo-800"
              >
                <svg
                  className="mr-2 w-3 h-3 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
