import React from "react";

function Contact() {
  return (
    // Main Container
    <div class="container flex mx-auto h-screen">
      {/* Section Container */}
      <div class="flex w-full max-w-screen-lg items-center mx-auto p-6 bg-blue-100">
        {/* Content Container */}
        <div class="flex flex-col md:flex-row w-full items-center justify-between gap-8 bg-yellow-100">
          <div class="max-w-screen-lg justify-center">
            <h2 class="mb-4 text-4xl font-bold tracking-tight text-gray-950">
              Contact Me
            </h2>
            <p class="mb-4 font-light">
              PO BOX 530,<br></br>Hahndorf 5245,<br></br>South Australia
            </p>
            <p class="mb-4 font-light">mattkellyvisual@gmail.com</p>
            <p class="mb-4 font-light">0419 836 646</p>
          </div>
          {/* Content */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
