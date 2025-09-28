import React from "react";
import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";

const Footer = () => {

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <footer className="text-white py-8px-[4vw] md:px-[2vw] lg:px-[8vw]">
            <div className="container mx-auto text-center">
                <h2 className="text-xl font-semibold text-purple-500">
                    Shreeshail Miragi
                </h2>

                <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
                    {[
                        { name: "About", id: "about" },
                        { name: "Skills", id: "skills" },
                        { name: "Education", id: "education" },
                        { name: "Projects", id: "projects" },
                    ].map((item, index) => (
                        <button
                            key={index}
                            onClick={()=> handleScroll(item.id)}
                            className="hover:text-purple-500 text-sm sm:text-base my-1">
                            {item.name}
                        </button>
                    ))}
                </nav>

                <div className="flex flex-wrap justify-center space-x-4 mt-6">
                    {[
                        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shreeshail-miragi-8b73452a2" },
                        { icon: <FaGithub />, link: "https://github.com/shreeshailmiragi18" },
                        { icon: <FaInstagram />, link: "https://www.instagram.com/shreeshail_miragi18/?next=%2F" },
                    ].map((item, index) => (
                        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110">
                            {item.icon}
                        </a>
                    ))}
                </div>
                <p className="text-gray-400 text-sm sm:text-base mt-6">
                    &copy; {new Date().getFullYear()} Shreeshail Miragi. All rights reserved.
                </p>

            </div>
        </footer>
            
    )
}


export default Footer;