import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-5">
        <div className="container bg-white flex items-center justify-between rounded-2xl p-5">
            <div className="">
                <NavLink to={"/"} className="text-xl font-semibold">Ulfatjon Xamrokulov</NavLink>
            </div>
            <ul className="flex items-center gap-10">
                <li className="text-lg font-medium">
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li className="text-lg font-medium">
                    <NavLink to="/about">About Us</NavLink>
                </li>
                <li className="text-lg font-medium">
                    <NavLink to="/project">Projects</NavLink>
                </li>
                <li className="text-lg font-medium">
                    <NavLink to="/contact">Contact Us</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;