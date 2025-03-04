import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import profileImage from "../assets/profile.jpg";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1.05} transitionSpeed={450} className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  let hoverTimeout;

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => setIsHovered(false), 2000);
  };

  const handleContactClick = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row gap-10">
        <div className="lg:flex-[0.75]">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Who Am I? 🚀</h2>
          </motion.div>

          <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            I turn ideas into digital masterpieces. Whether it's crafting immersive
            experiences, building seamless interactions, or scaling businesses with
            strategic innovation, I bring a fusion of technology, creativity, and
            impact to everything I do.
          </motion.p>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Every project I take on isn't just about functionality—it's about
            storytelling, engagement, and leaving a lasting impression.
          </motion.p>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            If you're looking for someone who blends vision with execution, who
            understands both the art and science of the digital world, let's connect!
          </motion.p>

          {/* Cool Animated Contact Button */}
          <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-6 relative inline-block">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl border-2 border-white font-semibold tracking-wide uppercase"
              onClick={handleContactClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Get in Touch
            </motion.button>

            {/* Animated Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className={`absolute left-1/2 transform -translate-x-1/2 mt-4 flex gap-4 bg-tertiary px-4 py-3 rounded-lg shadow-lg transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-3xl hover:text-blue-500 transition-transform transform hover:scale-125" />
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white text-3xl hover:text-gray-400 transition-transform transform hover:scale-125" />
              </a>
              <a href="mailto:your@email.com">
                <FaEnvelope className="text-white text-3xl hover:text-red-500 transition-transform transform hover:scale-125" />
              </a>
              <a href="https://wa.me/yourwhatsapp" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-white text-3xl hover:text-green-500 transition-transform transform hover:scale-125" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Profile Picture */}
        <motion.div variants={fadeIn("left", "spring", 0.2, 1)} className="lg:flex-[0.25] flex justify-center items-center">
          <Tilt tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1.05} transitionSpeed={450} className="w-[350px] h-[350px]">
            <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
              <div className="bg-tertiary rounded-[20px] overflow-hidden">
                <img src={profileImage} alt="Malik Hamza Shabbir" className="w-full h-full object-cover" />
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
