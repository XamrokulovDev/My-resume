import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container min-h-[72vh] bg-white rounded-2xl overflow-y-scroll p-5"
    >  
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl max-md:text-xl font-bold text-center">Ulfatjon Xamrokulov - Full stack developer</h1>
        <p className="text-md max-md:text-sm font-medium">I was born in the Samarkand region and currently reside in Tashkent. I have been studying Front-End development for over a year and am now gaining experience with the MERN stack. I recently completed a Backend course, although I still lack practical experience in this field. My future goal is to work in high-level IT companies and achieve excellence in my field. I am always eager to learn new skills and continue evolving in the ever-changing world of technology.
        </p>
      </div>
    </motion.div>
  )
}

export default Home;