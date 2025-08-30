"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaPhp,
  FaGithub,
  FaDatabase,
  FaBootstrap,
  FaCode,
  FaCodeBranch,
} from "react-icons/fa";
import { SiAngular, SiMysql, SiLatex } from "react-icons/si";

// Animation variants for fade-in effect
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Theme Toggle */}
      <div className="p-4 flex justify-end">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <main className="space-y-20 p-6">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className="text-center py-12"
        >
          <img
            src="/profile.jpg"
            alt="Profile"
            className="mx-auto rounded-full w-40 h-40 object-cover shadow-lg mb-6 border-4 border-blue-500"
          />
          <h1 className="text-5xl font-bold mb-2">Sakil Parvez</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Cloud-Native Mobile App Developer
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-gray-700 dark:text-gray-400 text-lg">
            Aspiring Full Stack Developer and future Cloud Engineer with a strong foundation in modern web technologies, backend development, and cloud platforms. Skilled in Python, PHP, SQL, Flutter, and frontend frameworks like React and Angular. Passionate about building scalable, responsive, and user-friendly applications, with a growing interest in cloud architecture and automation. Continuously learning emerging technologies to create innovative solutions.
          </p>

          {/* CV download button */}
          <a
            href="/cv (2).pdf"
            download
            className="inline-block mt-6 px-8 py-3 text-lg bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            📄 Download CV
          </a>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-10 text-center">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
            {[
              { name: "Python", icon: <FaPython className="text-6xl text-yellow-500 mx-auto" /> },
              { name: "C", icon: <FaCode className="text-6xl text-blue-600 mx-auto" /> },
              { name: "C++", icon: <FaCodeBranch className="text-6xl text-indigo-600 mx-auto" /> },
              { name: "C#", icon: <FaCode className="text-6xl text-purple-600 mx-auto" /> },
              { name: "JavaScript", icon: <FaJs className="text-6xl text-yellow-400 mx-auto" /> },
              { name: "PHP", icon: <FaPhp className="text-6xl text-indigo-500 mx-auto" /> },
              { name: "SQL", icon: <FaDatabase className="text-6xl text-pink-500 mx-auto" /> },
              { name: "MySQL", icon: <SiMysql className="text-6xl text-blue-500 mx-auto" /> },
              { name: "HTML", icon: <FaHtml5 className="text-6xl text-orange-500 mx-auto" /> },
              { name: "CSS", icon: <FaCss3Alt className="text-6xl text-blue-500 mx-auto" /> },
              { name: "Bootstrap", icon: <FaBootstrap className="text-6xl text-purple-700 mx-auto" /> },
              { name: "Angular", icon: <SiAngular className="text-6xl text-red-600 mx-auto" /> },
              { name: "React", icon: <FaReact className="text-6xl text-sky-400 mx-auto" /> },
              { name: "GitHub", icon: <FaGithub className="text-6xl text-gray-700 dark:text-gray-200 mx-auto" /> },
              { name: "VS Code", icon: <FaCode className="text-6xl text-blue-500 mx-auto" /> },
              { name: "LaTeX", icon: <SiLatex className="text-6xl text-green-700 mx-auto" /> },
            ].map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg"
              >
                {skill.icon}
                <p className="mt-3 font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-12"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700 dark:text-gray-300">
            <h3 className="font-bold text-xl">Software Development Intern - Prodigy InfoTech</h3>
            <p>Duration: 1st August 2025 - 31st August 2025</p>
            <p>
              Gained hands-on experience in software development by contributing to real-world projects involving web and backend systems. Developed clean, efficient code, collaborated with cross-functional teams, and learned industry-standard workflows. Enhanced problem-solving skills while implementing features and debugging applications.
            </p>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
          <ul className="list-disc max-w-3xl mx-auto space-y-6 text-gray-700 dark:text-gray-300">
            {[
              {
                title: "Voice Assistant - Anie",
                desc: "A personal voice assistant built in Python using Tkinter and Speech Recognition. Automates daily tasks like Wikipedia searches, opening apps, and more.",
                stack: ["Python", "Tkinter", "Speech Recognition"],
                code: "https://github.com/sakil62/Anie-Voice-Assistant-",
              },
              {
                title: "E-commerce Website",
                desc: "A full e-commerce platform developed with PHP, MySQL, and XAMPP. Includes authentication, product catalog, order system, and responsive design.",
                stack: ["PHP", "MySQL", "XAMPP", "HTML", "CSS", "JavaScript"],
                code: "https://github.com/sakil62/phone-mart",
              },
              {
                title: "Web Scraper",
                desc: "Python scraper for collecting product data from e-commerce sites. Extracts names, prices, and availability using BeautifulSoup and Requests.",
                stack: ["Python", "Requests", "BeautifulSoup"],
                code: "https://github.com/sakil62/Prodigy-Task-5",
              },
            ].map((proj) => (
              <li key={proj.title} className="space-y-1">
                <p className="font-bold text-lg">{proj.title}</p>
                <p>{proj.desc}</p>
                <p>Stack: {proj.stack.join(", ")}</p>
                <a href={proj.code} target="_blank" className="text-blue-600 hover:underline">
                  🔗 View Code
                </a>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Hobbies Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-12"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Hobbies</h2>
          <ul className="max-w-3xl mx-auto space-y-4 text-gray-700 dark:text-gray-300 list-disc">
            <li>⚽ Football - Keeps me active, builds teamwork, and provides strategic fun.</li>
            <li>📸 Photography - Capturing nature’s beauty and telling stories through images.</li>
            <li>🌍 Traveling - Exploring new cultures and enjoying serene landscapes.</li>
          </ul>
        </motion.section>

        {/* Certificates Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Certificates</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Python Essentials 1",
                year: "2025",
                link: "https://www.credly.com/badges/c1218ecf-310f-4b08-ba8e-939fecf9890a/linked_in_profile",
                img: "/cis.png",
              },
              {
                title: "Generative AI for Beginners",
                year: "2025",
                link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0NzE1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODEzNDc0N184NDkzOTcwMTc0MzY3MjUxMDc2MS5wbmciLCJ1c2VybmFtZSI6IlNBS0lMIFBBUlZFWiJ9&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7721%2FGenerative-AI-for-Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true",
                img: "/gen.jpg",
              },
              {
                title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
                year: "2025",
                link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=04E3EDF0C841DAF69AD3E7497853E2FEE77A8C349026569037169C16B625E0A3",
                img: "/oracle.jpg",
              },
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-6 border rounded-xl bg-gray-100 dark:bg-gray-800 shadow-lg"
              >
                <h3 className="font-bold text-lg">{cert.title}</h3>
                <p className="text-sm mb-2">{cert.year}</p>
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="my-2 w-full max-h-40 object-contain rounded"
                />
                <a href={cert.link} target="_blank" className="text-blue-600 hover:underline font-medium">
                  🔗 Verify Credential
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center py-12"
        >
          <h2 className="text-3xl font-semibold mb-6">Get in touch</h2>
          <div className="flex justify-center space-x-10 text-lg">
            <a href="mailto:parvezsakil259@gmail.com" className="hover:underline">
              📧 Email
            </a>
            <a href="https://github.com/sakil62" className="hover:underline">
              🐙 GitHub
            </a>
            <a href="https://linkedin.com/in/sakil-parvez-24a151345" className="hover:underline">
              💼 LinkedIn
            </a>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t dark:border-gray-700 text-sm">
        © 2025 Sakil Parvez. Built with Next.js.
      </footer>
    </div>
  );
}
