import { FaYoutube } from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container h-[9vh] bg-white flex items-center justify-between rounded-2xl px-5">
        <div className="">
          <p className="text-md max-md:text-sm font-medium">
            © {year} All rights reserved
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+998900302423">
            <FaPhoneVolume className="text-lg max-md:text-lg text-green-500" />
          </a>
          <a href="https://t.me/Ulfatjon19" target="_blank">
            <SiTelegram className="text-lg max-md:text-lg text-blue-500" />
          </a>
          <a href="https://github.com/XamrokulovDev" target="_blank">
            <ImGithub className="text-lg max-md:text-lg text-black" />
          </a>
          <a href="https://www.youtube.com/@xamrokulov_blogs" target="_blank">
            <FaYoutube className="text-xl max-md:text-xl text-red-500" />
          </a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer