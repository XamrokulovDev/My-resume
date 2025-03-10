import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container h-[72vh] bg-white rounded-2xl overflow-y-scroll p-5"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-center">
          My Experience
        </h1>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-medium">
            Over the past year, I have been actively engaged in frontend and backend development, contributing to various projects that have provided me with valuable experience and knowledge. Below is an overview of my experience categorized into frontend and backend development.
          </h1>
          <h2 className="text-lg font-medium mt-3">
            <span className="font-bold">Frontend Development: </span>
            I have worked on designing and developing user-friendly interfaces to enhance user experiences.
          </h2>
          <ul className="flex flex-col gap-2 pl-5">
            <li className="list">
              <span className="font-bold">USAT University Website: </span>Created an interactive and visually appealing website for "USAT" University, ensuring seamless navigation for students and faculty.
            </li>
            <li className="list">
              <span className="font-bold">Renta Car Website: </span>Developed a responsive and intuitive website for a car rental service, facilitating easy booking and management.
            </li>
            <li className="list">
              <span className="font-bold">Django Academy Management Panel: </span>Designed and implemented a student management system for "Django Academy," streamlining administrative tasks and improving overall efficiency.
            </li>
            <li className="list">
              <span className="font-bold">Hackathon Achievements: </span>Secured first place in a hackathon by developing a robust testing application as a frontend developer.
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-lg font-medium mt-4 mb-2">
            <span className="font-bold">Backend Development:</span>
            I have gained experience in building complex systems, managing data efficiently, and ensuring seamless system integrations.
          </h2>
          <ul className="flex flex-col gap-2 pl-5">
            <li className="list">
              <span className="font-bold">E-Learning Platform: </span>Contributed as a backend developer to an e-learning platform that secured second place in a hackathon, providing an engaging and interactive experience for users.
            </li>
            <li className="list">
              <span className="font-bold">Telegram Bot for Django Academy: </span>Developed a bot to facilitate course enrollment for students, enhancing accessibility and automation.
            </li>
            <li className="list">
              <span className="font-bold">USAT Foods Complaint System: </span>Built a Telegram bot and an accompanying admin panel for "USAT Foods" allowing users to submit complaints about the university cafeteria while providing administrators with tools for effective resolution.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience;