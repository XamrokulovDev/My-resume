import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container min-h-[70vh] bg-white rounded-2xl p-10 max-lg:p-5"
    >
      Contact
    </motion.div>
  )
}

export default Contact;