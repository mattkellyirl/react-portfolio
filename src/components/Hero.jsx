import React from "react";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex flex-col lg:flex-row lg:items-center lg:space-x-8">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-950">
            Hi! I'm Matt Kelly.
          </h2>
          <p className="mb-4 font-light">
            I'm a Full Stack Developer, having recently completed my certificate
            from The University of Adelaide. My technical expertise includes
            skills in modern web technologies such as Express.js, Node.js,
            React.js, Tailwind CSS, MySQL/NoSQL and MongoDB. Additionally, I
            have extensive graphic design experience, and am proficient in Adobe
            Creative Suite programs such as After Effects, Premiere Pro,
            Illustrator, InDesign and Photoshop.
          </p>
          <p className="mb-4 font-light">
            Outside of tech, I'm a qualified light vehicle mechanic, having
            completed my 4 year apprenticeship at a performance vehicle
            dealership in the Adelaide Hills. Motorsport is my passion, and I've
            experienced working as a motorsport mechanic at a professional
            level. I'm fortunate enough to compete as a racing driver myself and
            as a result, I'm highly competitive in everything that I do.
          </p>
          <p className="font-medium">
            From reading this, you have probably realised that I love making
            things, building things and understanding why and how they work. If
            you did, I'd love to work with you!
          </p>
        </div>

        <div className="w-full max-w-xs bg-neutral-100 border border-gray-200 rounded-lg mt-8 lg:mt-0">
          <div className="flex flex-col items-center p-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="/headshot.jpeg"
              alt="Matt Kelly"
            />
            <h5 className="mb-1 text-xl font-medium text-neutral-950">
              Matt Kelly
            </h5>
            <span className="text-sm text-gray-400">Full Stack Developer</span>
            <div className="flex mt-4 md:mt-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-800 transition-colors duration-300"
              >
                <svg
                  className="fill-current w-3 h-3 mr-2"
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

      {/* <section className="w-full py-8">
        <h3 className="text-center mb-0 text-4xl tracking-tight font-bold text-gray-950">
          I Specialise In:
        </h3>

        <div className="max-w-screen-xl px-4 mx-auto text-center lg:py-16 lg:px-6">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-2xl md:text-4xl font-extrabold">
                DESIGN
              </dt>
              <dd className="font-light text-gray-950">developers</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-2xl md:text-4xl font-extrabold">
                FRONT-END
              </dt>
              <dd className="font-light text-gray-950">contributors</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-2xl md:text-4xl font-extrabold">
                BACK-END
              </dt>
              <dd className="font-light text-gray-950">organizations</dd>
            </div>
          </dl>
        </div>
      </section> */}
    </div>
  );
}

export default Hero;
