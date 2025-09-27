import React from "react";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 md:px-[7vw] lg:px-[20vw] font sans mt-16 md:mt-24 lg:mt-32"
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
                      Hi, I’m a university student passionate about web development and problem-solving. I enjoy learning new technologies and applying them in real projects. My focus is on building user-friendly, creative, and efficient applications as I grow my skills and prepare for future opportunities.
                  </p>
        </div>
      </div>
    </section>
  );
};

export default About;
