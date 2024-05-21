import React from "react";

function Hero() {
  return (
    // Main Container
    <div class="container flex mx-auto h-screen">
      {/* Section Container */}
      <div class="flex w-full max-w-screen-xl items-center mx-auto p-6 bg-blue-100">
        {/* Content Container */}
        <div class="flex flex-col md:flex-row mx-auto items-center gap-8 bg-green-100">
          <div class="max-w-screen-md justify-center bg-yellow-100">
            <h2 class="mb-4 text-4xl font-bold tracking-tight text-gray-950">
              Hi! I'm Matt Kelly.
            </h2>
            <p class="mb-4 font-light">
              I'm a Full Stack Developer, having recently completed my
              certificate from The University of Adelaide. My technical
              expertise includes skills in modern web technologies such as
              Express.js, Node.js, React.js, Tailwind CSS, MySQL/NoSQL and
              MongoDB. Additionally, I have extensive graphic design experience,
              and am proficient in Adobe Creative Suite programs such as After
              Effects, Premiere Pro, Illustrator, InDesign and Photoshop.
            </p>
            <p class="mb-4 font-light">
              Outside of tech, I'm a qualified light vehicle mechanic, having
              completed my 4 year apprenticeship at a performance vehicle
              dealership in the Adelaide Hills. Motorsport is my passion, and
              I've experienced working as a motorsport mechanic at a
              professional level. I'm fortunate enough to compete as a racing
              driver myself and as a result, I'm highly competitive in
              everything that I do.
            </p>
            <p class="font-medium">
              From reading this, you have probably realised that I love making
              things, building things and understanding why and how they work.
              If you did, I'd love to work with you!
            </p>
          </div>

          {/* Profile Card */}
          <div class="flex-none w-72 h-72 flex flex-col items-center rounded-lg border border-gray-200 bg-neutral-100 p-10">
            <img
              class="mb-3 h-24 w-24 rounded-full shadow-lg"
              src="/headshot.jpeg"
              alt="Matt Kelly"
            />
            <h5 class="mb-1 text-xl font-medium text-neutral-950">
              Matt Kelly
            </h5>
            <span class="text-sm text-gray-400">Full Stack Developer</span>
            <div class="mt-4 flex md:mt-6">
              <a
                href="#"
                class="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-indigo-800"
              >
                <svg
                  class="mr-2 w-3 h-3 fill-current"
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
