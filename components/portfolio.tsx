"use client";
import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import myimg from '../assets/myimh.jpg';
import {
  DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiGit
} from "react-icons/di";
import { SiRedux, SiTailwindcss, SiBootstrap, SiWebpack, SiFigma, SiExpress } from "react-icons/si";
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import { motion } from 'framer-motion';
type TechStack = "React" | "Node JS" | "MongoDB" | "Express" | "Bootstrap" | "HTML" | "CSS" | "Tailwind CSS" | "JavaScript";

const projects = [
  {
    id: 1,
    name: "Learning Needs",
    description: "Training and online book and learning AID purchase",
    techstack: ['React', 'Node JS', 'MongoDB', 'Express', 'Bootstrap'],
    image: project1,
    liveLink: "https://learningneeds.in/",
  },
  {
    id: 2,
    name: "Sundarban Bengal Tourism",
    description: "Travel and Online Booking",
    techstack: ['HTML', 'CSS', 'JavaScript'],
    image: project2,
    liveLink: "https://www.sundarbanbengaltourism.com/",
  },
  {
    id: 3,
    name: "Baid Marble & Tiles Pvt. Ltd.",
    description: "Marble, Tiles Online Booking",
    techstack: ['React', 'Node JS', 'MongoDB', 'Express', 'Tailwind CSS'],
    image: project3,
    liveLink: "https://www.baidmarble.com/",
  },
  {
    id: 4,
    name: "Prime India Packers and Movers",
    description: "Packers and Movers Company",
    techstack: ['React', 'Bootstrap'],
    image: project4,
    liveLink: "https://www.primeindiapackers.in/",
  },
  {
    id: 5,
    name: "Himco Service",
    description: "Home Appliances Repair Service",
    techstack: ['React', 'Tailwind CSS'],
    image: project5,
    liveLink: "http://www.himcoservice.co.in/",
  },
  {
    id: 6,
    name: "Imagine Career Solutions",
    description: "Health, Medical, MBBS Education",
    techstack: ['React', 'Node JS', 'MongoDB', 'Express', 'Tailwind CSS'],
    image: project6,
    liveLink: "https://www.imaginecareer.in/",
  },
];

const techIcons: Record<TechStack, TSX.Element> = {
  React: <DiReact size={24} className="text-blue-400" />,
  "Node JS": <DiNodejsSmall size={24} className="text-green-600" />,
  MongoDB: <DiMongodb size={24} className="text-green-500" />,
  Express: <SiExpress size={24} className="text-gray-600" />,
  Bootstrap: <SiBootstrap size={24} className="text-purple-500" />,
  HTML: <DiHtml5 size={32} className="text-orange-600" />,
  CSS: <DiCss3 size={32} className="text-blue-600" />,
  'Tailwind CSS': <SiTailwindcss size={32} className="text-blue-500" />,
  JavaScript: <DiJavascript1 size={32} className="text-yellow-500" />
};

const skills = [
  { name: "HTML", icon: <DiHtml5 size={32} className="text-orange-600" /> },
  { name: "CSS", icon: <DiCss3 size={32} className="text-blue-600" /> },
  { name: "JavaScript", icon: <DiJavascript1 size={32} className="text-yellow-500" /> },
  { name: "React JS", icon: <DiReact size={32} className="text-blue-400" /> },
  { name: "Node JS", icon: <DiNodejsSmall size={32} className="text-green-600" /> },
  { name: "MongoDB", icon: <DiMongodb size={32} className="text-green-500" /> },
  { name: "Redux", icon: <SiRedux size={32} className="text-purple-600" /> },
  { name: "Bootstrap", icon: <SiBootstrap size={32} className="text-purple-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-blue-500" /> },
  { name: "Git", icon: <DiGit size={32} className="text-red-500" /> },
  { name: "Webpack", icon: <SiWebpack size={32} className="text-blue-400" /> },
  { name: "Figma", icon: <SiFigma size={32} className="text-pink-500" /> },
];

export default function Portfolio() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the component only renders on the client side
  }, []);

  if (!isClient) return null; // Return nothing during SSR

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 shadow-sm">
        <nav className="container mx-auto px-40 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-white to-gray-100 relative overflow-hidden">
        {/* Background Floating Animation */}
        <div className="absolute top-0 left-0 w-full h-full bg-white-200 opacity-30 rounded-full animate-floating"></div>

        <div className="container mx-auto px-40 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
          {/* Left Side (Text Content) */}
          <motion.div
            className="text-center md:text-left md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}>
              Hi, I&apos;m Pratip Kayal
            </motion.h1>

            <motion.p
              className="text-xl mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}>
              A Full Stack Web Developer passionate about building modern and user-friendly web applications.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex justify-center md:justify-start space-x-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}>
              <a href="https://github.com/Pratip009" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <Github size={32} aria-label="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/pratip-kayal-91a6041bb/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <Linkedin size={32} aria-label="LinkedIn" />
              </a>
              <a href="mailto:pratipkayal1@gmail.com" className="hover:text-blue-600">
                <Mail size={32} aria-label="Email" />
              </a>
            </motion.div>

            {/* Download Resume Button */}
            <motion.div
              className="flex justify-center md:justify-start space-x-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}>
              <a
                href="/pratip2025.pdf"
                download="PratipCV.pdf"
                className="mt-10 bg-black text-white py-3 px-6 rounded-full font-semibold text-center inline-block transition-all duration-300 hover:bg-gray-800"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side (Image) */}
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}>
            <Image
              src={myimg}
              alt="John Doe"
              width={300}
              height={300}
              className="rounded-full border-4 border-gray-300 shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20" >
        <motion.div className="container mx-auto px-6" initial={{ opacity: 0, y: 20 }} // Initial state
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg max-w-6xl mx-auto text-center mb-6">
            I&apos;m a passionate full stack web developer with experience in creating responsive and user-friendly web applications.
            I love turning complex problems into simple, beautiful, and intuitive designs.
          </p>

        </motion.div>
      </section >



      {/* Skills Section */}
      <section id="skills" className="bg-gray-200 py-20 px-40" >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center space-y-4 hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                {skill.icon}
                <p className="text-lg font-semibold text-gray-800">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Projects Section */}
      <section id="projects" className="py-20 px-40" >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={250}
                  className="w-full h-60 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.techstack &&
                      project.techstack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium transition-colors hover:bg-gray-200"
                        >
                          {techIcons[tech as TechStack] || <span className="text-gray-400">Unknown</span>}
                        </span>
                      ))}
                  </div>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-semibold flex items-center mt-4 transition-colors duration-300"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section >
      <section id="contact" className="bg-white text-black py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="max-w-md mx-auto">
            <p className="text-center mb-8">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:pratipkayal1@gmail.com"
                className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition duration-300"
              >
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/pratip-kayal-91a6041bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Pratip Kayal. All Rights Reserved.</p>
        </div>
      </footer>
    </div >
  );
}
