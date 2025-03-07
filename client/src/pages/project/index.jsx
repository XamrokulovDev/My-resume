import { motion } from "framer-motion";
import image from "../../assets/image.jpg"

const Project = () => {
  const data =[
    {
      id: 1,
      title: "E-commerce",
      image: image,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem vel praesentium hic enim dicta, similique odit voluptatibus corrupti recusandae debitis.",
      link: "https://google.com"
    },
    {
      id: 2,
      title: "E-commerce",
      image: image,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem vel praesentium hic enim dicta, similique odit voluptatibus corrupti recusandae debitis.",
      link: "https://google.com"
    },
    {
      id: 3,
      title: "E-commerce",
      image: image,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem vel praesentium hic enim dicta, similique odit voluptatibus corrupti recusandae debitis.",
      link: "https://google.com"
    }
  ]
  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container h-[72vh] bg-white rounded-2xl overflow-y-scroll p-5"
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-center">My Projects</h1>
        <div className="grid grid-cols-4 max-md:grid-cols-1 max- gap-5">
          {
            data.map((item) => (
              <div onClick={() => window.location.href = item.link} key={item.id} className="flex flex-col gap-2 rounded-xl overflow-hidden shadow cursor-pointer hover:shadow-lg hover:translate-y-[-8px] transition-all duration-500">
                <div className="h-[180px] overflow-hidden">
                  <img src={item.image} alt="" className="w-full h-full hover:scale-110 transition-all duration-300"/>
                </div>
                <div className="px-3 pb-3">
                  <h1 className="text-lg font-medium">{item.title}</h1>
                  <p className="text-md">{item.description.slice(0, 110)}...</p>
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