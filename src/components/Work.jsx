import React from "react";

function Work() {
  return (
    // Main Container
    <div class="container flex mx-auto max-w-full h-auto md:h-screen bg-gray-100">
      {/* Section Container */}
      <div class="flex flex-col w-full max-w-screen-lg justify-center mx-auto p-6 bg-blue-100">
        {/* Content Container */}
        <div class="flex flex-col w-full justify-center text-center bg-red-100">
          <h2 class="mb-4 text-4xl font-bold tracking-tight text-gray-950">
            Recent Work
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex h-48 w-48 md:h-64 md:w-64 bg-green-100"></div>
            <div className="flex h-48 w-48 md:h-64 md:w-64 bg-green-100"></div>
            <div className="flex h-48 w-48 md:h-64 md:w-64 bg-green-100"></div>
            <div className="flex h-48 w-48 md:h-64 md:w-64 bg-green-100"></div>
            <div className="flex h-48 w-48 md:h-64 md:w-64 bg-green-100"></div>
            <div className="flex h-48 w-48 md:h-64 md:w-64 bg-green-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
