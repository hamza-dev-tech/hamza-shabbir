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

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  view,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              style={{ marginRight: "5px" }}
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(view, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={link}
                alt="View"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
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

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Welcome to my collection of{" "}
          <span className="text-white font-bold">
            Web, Mobile Apps, Blockchain, AI, and Graphic Design
          </span>{" "}
          projects, where innovation meets creativity. Each project is crafted
          to solve real-world problems using modern frameworks, intuitive UI/UX,
          and cutting-edge technologies.
          <br />
          <br />
          🚀{" "}
          <span className="text-white font-semibold">
            Experience Live Demos:
          </span>{" "}
          Interact with fully functional applications and designs. 🛠️{" "}
          <span className="text-white font-semibold">
            Contribute & Collaborate:
          </span>{" "}
          Check out the source code, suggest improvements, or fork the repo to
          build something even greater! 🎨{" "}
          <span className="text-white font-semibold">
            Explore Graphic & UI/UX Designs:
          </span>{" "}
          See my work in branding, UI/UX, and digital illustrations. 🤖{" "}
          <span className="text-white font-semibold">
            Discover AI-Powered Solutions:
          </span>{" "}
          From automation to chatbots, dive into AI-driven projects.
          <br />
          <br />
          Click on any project to **view live demos**, **explore the source
          code**, and **be part of the journey**. Let's create something
          extraordinary together! ⚡
        </motion.p>
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
