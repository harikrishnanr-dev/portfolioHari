import { Menu, X } from "lucide-react"
import { navItems } from "../constants";
import { useState } from "react";
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavBar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative texr-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <h1 className="text-2xl tracking-tight text-green-400">Harikrishnan R</h1>
                    </div>
                    <ul className="hidden lg:flex space-x-12 ml-auto">
                        {navItems.map((item, index) => (
                            <li key={index}><a href={item.href}>{item.label}</a></li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center items-center ml-10 space-x-10">
                        <a href="https://github.com/harikrishnanr-dev" target="_blank" className="py-2 px-3 border rounded-md">Github</a>
                        <a href="#" className=" bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md">Resume</a>

                    </div>
                    <div className="lg:hidden md-flex flex-col justify-end">
                        <button onClick={toggleNavBar}>{mobileDrawerOpen ? <X /> : <Menu/> }</button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4"><a href={item.href}>{item.label}</a></li>
                        ))}
                        </ul>
                    </div>
                )}
            </div>
      </nav>
  )
};

export default Navbar;
