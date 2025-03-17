import { motion } from "framer-motion";
import { project } from "../../../data";

const Project = () => {
  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container h-[72vh] bg-white rounded-2xl overflow-y-scroll p-5"
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-center">My Projects</h1>
        <div className="flex flex-wrap gap-8">
          {
            project.map((item) => (
              <div 
                onClick={() => window.location.href = item.link} 
                key={item.id} 
                className="w-[300px] h-[380px] flex flex-col gap-2 rounded-xl overflow-hidden shadow cursor-pointer hover:shadow-lg hover:translate-y-[-8px] transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img 
                    src={item.image} 
                    alt="Project" 
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="px-3 pb-3">
                  <h1 className="text-lg font-semibold">{item.title}</h1>
                  <p className="text-md">{item.description.slice(0,120)}...</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </motion.div>
  )
}

export default Project;