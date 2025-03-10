import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { link } from "../assets";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Artifacts from "./Artifacts";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useEffect, useState } from "react";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, view }) => {
  return (
    <div key={index} >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl w-full max-w-sm mx-auto sm:mx-0"
      >
        {/* Image Container */}
        <div className="relative w-full h-[200px] sm:h-[230px] rounded-2xl overflow-hidden">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover"
          />
          {/* Hover Icons */}
          <div className="absolute inset-0 flex justify-end m-3 space-x-2 card-img_hover opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(view, "_blank")}
              className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200"
            >
              <img
                src={link}
                alt="View"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="mt-4">
          <h3 className="text-white font-bold text-lg sm:text-xl">{name}</h3>
          <p className="mt-2 text-secondary text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tags Container */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-xs sm:text-sm font-medium ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const ScrollIndicator = ({ scrollRef }) => {
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-tertiary to-transparent pointer-events-none z-10 hidden group-hover:block" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-tertiary to-transparent pointer-events-none z-10 hidden group-hover:block" />
      <div
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hidden group-hover:block z-20 cursor-pointer"
      >
        <HiChevronLeft className="w-6 h-6 text-white" />
      </div>
      <div
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hidden group-hover:block z-20 cursor-pointer"
      >
        <HiChevronRight className="w-6 h-6 text-white" />
      </div>
    </>
  );
};

const Works = () => {
  const webScrollRef = useRef(null);
  const appScrollRef = useRef(null);
  const blockchainScrollRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);


  // Filter projects into different categories
  const webProjects = projects.filter((project) =>
    project.tags.some((tag) => tag.name === "react" || tag.name === "nextjs")
  );
  const appProjects = projects.filter((project) =>
    project.tags.some((tag) => tag.name === "reactnative")
  );
  const blockchainProjects = projects.filter((project) =>
    project.tags.some((tag) => tag.name === "solidity" || tag.name === "web3")
  );

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Tailwind's `sm` breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);


  return (
    <>
      {/* Conditionally render motion on larger screens */}
      {!isSmallScreen ? (
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>
      ) : (
        <div>
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </div>
      )}


<div className="w-full flex">
        {!isSmallScreen ? (
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome to <strong>Malik Hamza's</strong> collection of{" "}
        <strong className="text-white">
          Web, Mobile Apps, Blockchain, AI, and Graphic Design
        </strong>{" "}
        projects, where innovation meets creativity. Each project is crafted to solve
        real-world problems using modern frameworks, intuitive UI/UX, and
        cutting-edge technologies.
        <br />
        <br />
        🚀{" "}
        <strong className="text-white">Experience Live Demos:</strong> Interact with
        fully functional applications and designs. 🛠️{" "}
        <strong className="text-white">Contribute & Collaborate:</strong> Check out
        the source code, suggest improvements, or fork the repo to build something
        even greater! 🎨{" "}
        <strong className="text-white">Explore Graphic & UI/UX Designs:</strong> See
        my work in branding, UI/UX, and digital illustrations. 🤖{" "}
        <strong className="text-white">Discover AI-Powered Solutions:</strong> From
        automation to chatbots, dive into AI-driven projects.
        <br />
        <br />
        Click on any project to <strong>view live demos</strong>,{" "}
        <strong>explore the source code</strong>, and{" "}
        <strong>be part of the journey</strong>. Let's create something extraordinary
        together! ⚡
      </motion.p>
      
        ) : (
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
             Welcome to <strong>Malik Hamza's</strong> collection of{" "}
        <strong className="text-white">
          Web, Mobile Apps, Blockchain, AI, and Graphic Design
        </strong>{" "}
        projects, where innovation meets creativity. Each project is crafted to solve
        real-world problems using modern frameworks, intuitive UI/UX, and
        cutting-edge technologies.
        <br />
        <br />
        🚀{" "}
        <strong className="text-white">Experience Live Demos:</strong> Interact with
        fully functional applications and designs. 🛠️{" "}
        <strong className="text-white">Contribute & Collaborate:</strong> Check out
        the source code, suggest improvements, or fork the repo to build something
        even greater! 🎨{" "}
        <strong className="text-white">Explore Graphic & UI/UX Designs:</strong> See
        my work in branding, UI/UX, and digital illustrations. 🤖{" "}
        <strong className="text-white">Discover AI-Powered Solutions:</strong> From
        automation to chatbots, dive into AI-driven projects.
        <br />
        <br />
        Click on any project to <strong>view live demos</strong>,{" "}
        <strong>explore the source code</strong>, and{" "}
        <strong>be part of the journey</strong>. Let's create something extraordinary
        together! ⚡
          </p>
        )}
      </div>

      {/* Web Development Section */}
      <div className="mt-20">
        <h3 className={`${styles.sectionHeadText}`}>Web Development</h3>
        <div className="mt-10 relative group">
          <div
            ref={webScrollRef}
            className="overflow-x-auto scrollbar-hide"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="flex gap-7 min-w-max">
              {webProjects.map((project, index) => (
                <div className="min-w-[280px] sm:min-w-[360px]" key={`web-${index}`}>
                  <ProjectCard index={index} {...project} />
                </div>
              ))}
            </div>
          </div>
          <ScrollIndicator scrollRef={webScrollRef} />
        </div>
      </div>

      {/* App Development Section */}
      <div className="mt-20">
        <h3 className={`${styles.sectionHeadText}`}>App Development</h3>
        <div className="mt-10 relative group">
          <div
            ref={appScrollRef}
            className="overflow-x-auto scrollbar-hide"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="flex gap-7 min-w-max">
              {appProjects.map((project, index) => (
                <div className="min-w-[280px] sm:min-w-[360px]" key={`app-${index}`}>
                  <ProjectCard index={index} {...project} />
                </div>
              ))}
            </div>
          </div>
          <ScrollIndicator scrollRef={appScrollRef} />
        </div>
      </div>

      {/* Blockchain Development Section */}
      <div className="mt-20">
        <h3 className={`${styles.sectionHeadText}`}>Blockchain Development</h3>
        <div className="mt-10 relative group">
          <div
            ref={blockchainScrollRef}
            className="overflow-x-auto scrollbar-hide"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="flex gap-7 min-w-max">
              {blockchainProjects.map((project, index) => (
                <div className="min-w-[280px] sm:min-w-[360px]" key={`blockchain-${index}`}>
                  <ProjectCard index={index} {...project} />
                </div>
              ))}
            </div>
          </div>
          <ScrollIndicator scrollRef={blockchainScrollRef} />
        </div>
      </div>
      <Artifacts />
    </>
  );
};

export default SectionWrapper(Works, "");
