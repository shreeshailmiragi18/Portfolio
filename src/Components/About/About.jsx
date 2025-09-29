import React from "react";
import Tilt from 'react-parallax-tilt';
import { TypeAnimation } from "react-type-animation";
import ProfileImage from "../../assets/About/profilepicture.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 pb-24 px-[4vw] md:px-[2vw] lg:px-[8vw]  font-sans mt-16 md:mt-24 lg:mt-15"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi,I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Shreeshail M
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a&nbsp;</span>
            <TypeAnimation
              sequence={[
                " learner",
                1000,
                " developer",
                1000,
                "  programmer",
                1000,
                " tech enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "semibold", display: "inline-block" }}
              repeat={Infinity}
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-tight">
            Hi, I’m a university student passionate about web development and
            problem-solving. I enjoy learning new technologies and applying them
            in real projects. My focus is on building user-friendly, creative,
            and efficient applications as I grow my skills and prepare for
            future opportunities.
          </p>

          <a
            href="https://drive.google.com/file/d/1USTPRziLDH5NkArdozwA4aOIQlaW6SwP/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 "
            style={{
              background: "linear-gradient(90deg,#8245ec,#a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            Download Resume
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="w-48 h-48 sm:w-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
          >{/*className="w-48 h-48 sm:w-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"*/}
            <img src={ProfileImage} alt="Shreeshail M" className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"/>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
