import React from "react";
import { API_KEY } from "../../data.js";
import { toast } from "react-toastify";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData();
    formData.append("access_key", API_KEY);
    formData.append("name", event.target.name.value);
    formData.append("email", event.target.email.value);
    formData.append("message", event.target.message.value);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully ✅");
        event.target.reset();
        setResult("");
      } else {
        toast.error(data.message || "Something went wrong ❌");
        setResult("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Network error. Try again!");
      setResult("");
    }
  };

  return (
    <div id="contact" className="min-h-screen px-6 py-20" >

    
      <div className="text-center mb-16">
        <p className="text-2xl font-semibold">Get in touch</p>
        <p className="text-sm font-bold text-gray-400 dark:text-white">
          Contact Me
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4 dark:text-white">
            Let’s build something together
          </h3>

          <p className="dark:text-gray-400 leading-relaxed">
            I am a passionate web developer who enjoys building clean and
            user-friendly web applications. If you have a project idea, want to
            collaborate, or simply want to say hello, feel free to send me a
            message. I will be happy to connect with you.
          </p>

          <div className="mt-6 flex items-center gap-3 dark:text-gray-300">
            <i className="fa-regular fa-envelope"></i>
            <span>Let’s talk via email</span>
          </div>
        </div>

      
        <div className="dark:bg-black rounded-2xl p-6">

          
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>

            <div>
              <label className="text-sm dark:text-gray-400">
                Your Name
              </label>
              <input
                type="text"
                name="name"    
                required
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-black text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>

            <div>
              <label className="text-sm dark:text-gray-400">
                Your Email
              </label>
              <input
                type="email"
                name="email"    // ✅ must
                required
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-black text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>

            <div>
              <label className="text-sm dark:text-gray-400">
                Message
              </label>
              <textarea
                rows="4"
                name="message"   
                required
                placeholder="Write your message..."
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-black text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>

            <button
              type="submit"
              className="flex items-center w-[150px] justify-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
            >
              {result ? result : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
