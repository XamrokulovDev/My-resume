import { motion } from 'framer-motion';

const Technologies = () => {
  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container h-[72vh] bg-white rounded-2xl overflow-y-scroll p-5"
    >
      <div className="">
        <h1 className='text-2xl font-bold text-center'>Technologies I use</h1>
      </div>
    </motion.div>
  )
}

export default Technologies;