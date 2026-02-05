import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-20" id="Contact">

      {/* heading */}
      <div className="text-center mb-16">
        <p className="text-2xl  font-semibold">Get in touch</p>
        <p className="text-sm font-bold text-gray-400 dark:text-white">
          Contact Me
        </p>
      </div>

      {/* content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4 dark:text-white">
            Let’s build something together
          </h3>

          <p className=" dark:text-gray-400 leading-relaxed">
            I am a passionate web developer who enjoys building clean and
            user-friendly web applications. If you have a project idea, want to
            collaborate, or simply want to say hello, feel free to send me a
            message. I will be happy to connect with you.
          </p>

          <div className="mt-6 flex items-center gap-3  dark:text-gray-300">
            <i className="fa-regular fa-envelope"></i>
            <span>Let’s talk via email</span>
          </div>
        </div>

        {/* RIGHT – Email form */}
        <div className=" dark:bg-black  rounded-2xl p-6">

          <form className="flex flex-col gap-4">

            <div>
              <label className="text-sm  dark:text-gray-400">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-black text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700  dark:bg-black text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-black text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>

             <button className="flex items-center w-[150px] gap-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
