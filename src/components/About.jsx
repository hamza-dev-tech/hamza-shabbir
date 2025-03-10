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
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1.05}
    transitionSpeed={450}
    className="w-full xs:w-[220px]"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-6 sm:px-12 min-h-[200px] sm:min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt={`${title} service icon`}
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
          loading="lazy"
        />
        <h3 className="text-white text-[16px] sm:text-[20px] font-bold text-center">
          {title}
        </h3>
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
    <section id="about" className="py-16 px-4 sm:px-8 lg:px-16">
      {/* Flex container for text and image */}
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Text Content */}
        <div className="lg:flex-[0.75] w-full">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h1 className={styles.sectionHeadText}>Who Am I? 🚀</h1>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I’m <strong>Malik Hamza Shabbir</strong>, a <strong>Full-Stack Developer</strong> and <strong>AI Tutor</strong> based in <strong>Abbottabad, Pakistan</strong>. With expertise in <strong>Next.js, React Native, Blockchain, and AI</strong>, I transform ideas into scalable digital solutions. Whether it’s building <strong>web and mobile apps</strong>, creating <strong>AI-powered chatbots</strong>, or mentoring students in <strong>Computer Science</strong>, I bring a blend of creativity and technical precision to every project.
          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            My work includes projects like the <strong>Smart Bus System</strong> (used by 1,200+ daily commuters) and the <strong>Rescue App</strong> (reducing emergency response times by 50%). I’m also the founder of <strong>Sarte Solution</strong>, where we deliver cutting-edge tech solutions for clients worldwide.
          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            If you’re looking for a <strong>Full-Stack Developer</strong> who combines <strong>innovation</strong> with <strong>execution</strong>, let’s connect and build something amazing together!
          </motion.p>

          {/* Contact Button and Social Links */}
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-6 relative inline-block"
          >
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

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className={`absolute left-1/2 transform -translate-x-1/2 mt-4 flex gap-4 bg-tertiary px-4 py-3 rounded-lg shadow-lg transition-all duration-500 ${
                isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="https://www.linkedin.com/in/hamza-dev-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-white text-3xl hover:text-blue-500 transition-transform transform hover:scale-125" />
              </a>
              <a
                href="https://github.com/hamza-dev-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-white text-3xl hover:text-gray-400 transition-transform transform hover:scale-125" />
              </a>
              <a href="mailto:hamzadevtech01@gmail.com" aria-label="Email">
                <FaEnvelope className="text-white text-3xl hover:text-red-500 transition-transform transform hover:scale-125" />
              </a>
              <a
                href="https://wa.me/923168809943"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-white text-3xl hover:text-green-500 transition-transform transform hover:scale-125" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Profile Picture */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 1)}
          className="lg:flex-[0.25] w-full flex justify-center items-center mt-10 lg:mt-0"
        >
          <Tilt
            tiltMaxAngleX={45}
            tiltMaxAngleY={45}
            scale={1.05}
            transitionSpeed={450}
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px]"
          >
            <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
              <div className="bg-tertiary rounded-[20px] overflow-hidden">
                <img
                  src={profileImage}
                  alt="Malik Hamza Shabbir - Full-Stack Developer and AI Tutor"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="mt-20 hidden sm:flex flex-wrap gap-6 justify-center">

        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");