import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
        <div className="container h-[9vh] bg-white flex items-center justify-between rounded-2xl px-5">
            <div className="">
                <NavLink to={"/"} className="text-xl max-md:text-sm font-bold">{
                  `<`}<span className="text-blue-500">Web dev</span>{`/>`}
                </NavLink>
            </div>
            <ul className="flex items-center gap-8 max-md:gap-3">
                <li className="text-md max-md:text-[12px] font-medium hover:text-amber-500 transition-all duration-300 focus-within:text-amber-500">
                    <NavLink to="/">
                      Home
                    </NavLink>
                </li>
                <li className="text-md max-md:text-[12px] font-medium hover:text-amber-500 transition-all duration-300 focus-within:text-amber-500">
                    <NavLink to="/technologies">
                      Technologies
                    </NavLink>
                </li>
                <li className="text-md max-md:text-[12px] font-medium hover:text-amber-500 transition-all duration-300 focus-within:text-amber-500">
                    <NavLink to="/experience">
                      Experience
                    </NavLink>
                </li>
                <li className="text-md max-md:text-[12px] font-medium hover:text-amber-500 transition-all duration-300 focus-within:text-amber-500">
                    <NavLink to="/project">
                      Projects
                    </NavLink>
                </li>
            </ul>
        </div>
    </motion.nav>
  )
}

export default Navbar;