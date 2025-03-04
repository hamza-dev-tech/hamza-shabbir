import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiUpwork, SiFiverr, SiOrcid, SiFreelancer } from "react-icons/si";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="mt-10">
          <p className={`${styles.sectionSubText} mb-8 text-center`}>Connect with me</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
            {[
              { icon: SiOrcid, link: "your-orcid-link", color: "hover:text-[#A6CE39]", label: "ORCID" },
              { icon: FaGithub, link: "your-github-link", color: "hover:text-white", label: "GitHub" },
              { icon: FaLinkedin, link: "your-linkedin-link", color: "hover:text-[#0A66C2]", label: "LinkedIn" },
              { icon: FaInstagram, link: "your-instagram-link", color: "hover:text-[#E4405F]", label: "Instagram" },
              { icon: SiUpwork, link: "your-upwork-link", color: "hover:text-[#6FDA44]", label: "Upwork" },
              { icon: SiFiverr, link: "your-fiverr-link", color: "hover:text-[#1DBF73]", label: "Fiverr" },
              { icon: SiFreelancer, link: "your-freelancer-link", color: "hover:text-[#29B2FE]", label: "Freelancer" },
              { icon: FaWhatsapp, link: "your-whatsapp-link", color: "hover:text-[#25D366]", label: "WhatsApp" },
            ].map((social, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center w-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: index * 0.1,
                    duration: 0.5,
                  } 
                }}
              >
                <motion.a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative p-3 rounded-full bg-tertiary/30 backdrop-blur-sm 
                    text-gray-300 text-3xl ${social.color} transition-all duration-300
                    hover:shadow-lg hover:shadow-primary/40 group`}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -10, 10, -10, 0],
                    transition: {
                      rotate: {
                        duration: 0.5,
                        ease: "easeInOut"
                      }
                    }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 min-w-max text-sm 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/90">
                    {social.label}
                  </span>
                  <motion.div
                    className="absolute -inset-1 rounded-full bg-primary/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.2, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-[800px] md:h-[550px] h-[350px] relative w-full'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");