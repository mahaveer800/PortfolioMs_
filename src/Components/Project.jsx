import React from "react";
import { motion } from "framer-motion";

import RealState from "../assets/realstate1.png";
import Chatbot from "../assets/chatbot.png";
import Youtube from "../assets/youtube.png";
import QuizApp from "../assets/Quiz.png";
import Hospital from "../assets/Hospital.png";
import TextEditer from "../assets/textEditer.png";
import TicTac from "../assets/TicTac.png";

const projects = [
  { title: "Real state App", image: RealState, live: "https://real-estate-two-lake.vercel.app/" },
  { title: "Chatbot App", image: Chatbot, live: "https://chatbot-six-lime.vercel.app/" },
  { title: "Youtube App", image: Youtube, live: "https://youtube-clone-one-rouge.vercel.app/" },
  { title: "Quiz App", image: QuizApp, live: "https://quiz-application-sandy-nine.vercel.app" },
  { title: "Hospital", image: Hospital, live: "https://hospital-management-wine.vercel.app" },
  { title: "TextEditer", image: TextEditer, live: "https://rich-text-editor-mauve.vercel.app" },
  { title: "TicTac", image: TicTac, live: "https://tic-tac-game-gules-tau.vercel.app/" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Project = () => {
  return (
    <div className="min-h-screen px-6 py-10" id="Project">
      <div className="flex items-center justify-center">
       <p className="text-2xl flex items-center gap-2">
  <i className="fa-solid fa-diagram-project"></i>
  My Project
</p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 max-w-4xl mx-auto place-items-center">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden max-w-sm w-full"
          >

            {/* image wrapper */}
            <div className="p-4">
              <div className="h-40 flex items-center justify-center rounded-xl bg-white dark:bg-neutral-800 shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* content */}
            <div className="px-5 pb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                {project.title}
              </h3>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:underline"
              >
                Live Demo <span>→</span>
              </a>
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Project;
