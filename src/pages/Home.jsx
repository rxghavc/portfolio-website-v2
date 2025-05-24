import React, { useRef } from 'react';
import { FaFlask, FaRobot, FaCloudSun, FaRegUserCircle, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaLinkedin, FaEnvelope, FaReact, FaFilePdf } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';

export default function Home() {
  const headerRef = useRef(null);

  const subjects = [
    {
      icon: <FaCloudSun className="text-accent text-3xl mb-2" />,
      title: "AeroCast Weather App",
      technologies: ["React", "TailwindCSS", "TypeScript", "OpenWeatherMap API"],
      description:
        "A modern weather application providing real-time weather updates, forecasts, and location-based weather details.",
      repoLink: "https://github.com/rxghavc/AeroCast-Weather-App",
      liveLink: "https://raghavc-weatherproject.vercel.app",
    },
    {
      icon: <FaRobot className="text-accent text-3xl mb-2" />,
      title: "DeepSeek Clone",
      technologies: ["MERN Stack", "TailwindCSS", "Clerk", "DeepSeek API"],
      description:
        "A full-stack MERN (MongoDB, Express, React, Node.js) project that provides a seamless user experience for managing and interacting with AI-powered chat functionalities",
      repoLink: "https://github.com/rxghavc/DeepSeek-Clone",
      liveLink: "https://deep-seek-clone-three.vercel.app/",
    },
    {
      icon: <FaFlask className="text-accent text-3xl mb-2" />,
      title: "The STEM Tutor Network",
      technologies: ["HTML", "CSS", "JavaScript", "sqlite3"],
      description:
        "A web-based platform designed to connect students with certified tutors specializing in delivering GCSE/A-Level content.",
      repoLink: "https://github.com/rxghavc/TheSTEMTutorNetwork",
    },
    {
      icon: <FaRegUserCircle className="text-accent text-3xl mb-2" />,
      title: "Portfolio Website",
      technologies: ["React", "CSS", "JavaScript"],
      description:
        "A personal portfolio website showcasing my projects, skills, and contact information. It's also the website you're currently viewing!",
      repoLink: "https://github.com/rxghavc/portfolio-website",
      liveLink: "https://raghavc-portfolio.vercel.app/",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-10 md:pt-0 pb-[32px] md:pb-[48px] min-h-[60vh]" id="hero">
        <h1 className="text-3xl md:text-4xl font-bold text-center max-w-3xl mx-auto">
          Hi, I'm <span style={{ color: 'var(--primary)', transition: 'color 0.3s' }} className="dark:text-[var(--accent)]">Raghav</span>, an aspiring software engineer.
        </h1>
      </section>
      {/* Divider */}
      <hr className="w-11/12 max-w-6xl mx-auto border-t-2 border-accent/60 my-0" />
      {/* About & Projects Section */}
      <section id="about" className="py-20 bg-background/80">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 px-4 items-start">
          {/* About (left) */}
          <div className="flex-1 flex flex-col items-center md:items-start md:justify-start justify-center min-h-[480px]">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center w-full">About</h2>
            <div className="w-full max-w-xl">
              <p className="text-lg md:text-xl text-justify md:text-left text-text/80 px-2 md:px-0">
                I'm a first-year B.Sc. Computer Science student at the University of Surrey, passionate about full-stack web development and software engineering. I enjoy building scalable, user-centered applications and exploring areas like system design, DevOps, and AI. My focus is on writing clean, maintainable code and creating solutions that are both impactful and accessible.
              </p>
              {/* Tech Stack Section */}
              <div className="mt-8 w-full">
                <h2 className="text-3xl font-semibold mb-4 text-center w-full">Tech Stack</h2>
                <div className="code-language-buttons flex flex-col gap-2">
                  <button className="cl-button relative flex items-center justify-center w-full">
                    <span className="absolute left-4 flex items-center"><FaPython className="text-xl" /></span>
                    <span className="w-full text-center">Python</span>
                  </button>
                  <button className="cl-button relative flex items-center justify-center w-full">
                    <span className="absolute left-4 flex items-center"><FaJsSquare className="text-xl" /></span>
                    <span className="w-full text-center">JavaScript</span>
                  </button>
                  <button className="cl-button relative flex items-center justify-center w-full">
                    <span className="absolute left-4 flex items-center"><FaHtml5 className="text-xl" /></span>
                    <span className="w-full text-center">HTML</span>
                  </button>
                  <button className="cl-button relative flex items-center justify-center w-full">
                    <span className="absolute left-4 flex items-center"><FaCss3Alt className="text-xl" /></span>
                    <span className="w-full text-center">CSS</span>
                  </button>
                  <button className="cl-button relative flex items-center justify-center w-full">
                    <span className="absolute left-4 flex items-center"><FaReact className="text-xl" /></span>
                    <span className="w-full text-center">React</span>
                  </button>
                  <button className="cl-button relative flex items-center justify-center w-full">
                    <span className="absolute left-4 flex items-center"><RiTailwindCssFill className="text-xl" /></span>
                    <span className="w-full text-center">TailwindCSS</span>
                  </button>
                  <button className="cl-button relative flex items-center justify-center w-full">
                    <span className="absolute left-4 flex items-center"><FaDatabase className="text-xl" /></span>
                    <span className="w-full text-center">MySQL</span>
                  </button>
                  <button className="cl-button relative flex items-center justify-center w-full">
                    <span className="absolute left-4 flex items-center"><FaGithub className="text-xl" /></span>
                    <span className="w-full text-center">Version Control</span>
                  </button>
                </div>
              </div>
              {/* Links Section */}
              <div className="mt-8 w-full">
                <h2 className="text-3xl font-semibold mb-4 text-center w-full">Links</h2>
                <div className="profile-links-list flex flex-col gap-2">
                  <a className="profile-link-item relative flex items-center justify-center gap-2" href="https://www.linkedin.com/in/raghavcommandur/" target="_blank" rel="noopener noreferrer">
                    <span className="absolute left-4 flex items-center"><FaLinkedin className="text-xl" /></span>
                    <span className="w-full text-center">LinkedIn</span>
                  </a>
                  <a className="profile-link-item relative flex items-center justify-center gap-2" href="https://github.com/rxghavc" target="_blank" rel="noopener noreferrer">
                    <span className="absolute left-4 flex items-center"><FaGithub className="text-xl" /></span>
                    <span className="w-full text-center">GitHub</span>
                  </a>
                  <a className="profile-link-item relative flex items-center justify-center gap-2" href="mailto:rxghavcdev@gmail.com">
                    <span className="absolute left-4 flex items-center"><FaEnvelope className="text-xl" /></span>
                    <span className="w-full text-center">Email</span>
                  </a>
                  <a className="profile-link-item relative flex items-center justify-center gap-2" href="/src/assets/Sai_Raghavan_Commandur_CV.pdf" download>
                    <span className="absolute left-4 flex items-center"><FaFilePdf className="text-xl" /></span>
                    <span className="w-full text-center">CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Projects (right) */}
          <div className="flex-1 flex flex-col items-center md:items-start md:justify-start justify-center min-h-[480px]" id="projects">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center w-full">Projects</h2>
            <p className="mb-4 text-text/70 text-justify">Constantly learning frameworks & coding languages to build better things!</p>
            <div className="grid gap-6 w-full">
              {subjects.map((subject, index) => (
                <div className="rounded-xl border border-accent/30 bg-background/60 p-6 shadow-md flex flex-col gap-2" key={index}>
                  <div className="flex items-center gap-3 mb-1 w-full justify-center">
                    <span className="flex-shrink-0 flex items-center justify-center mr-2">{subject.icon}</span>
                    <h3 className="text-xl font-bold flex-1 text-center" style={{flex: 'unset'}}>{subject.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-1 justify-center">
                    {subject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded border"
                        style={{
                          borderColor: 'var(--accent)',
                          color: 'var(--text)',
                          background: 'rgba(var(--accent-rgb), 0.08)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-text/80 text-sm mb-2 text-justify">{subject.description}</p>
                  <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                    <a
                      href={subject.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-button underline text-accent font-semibold"
                      style={subject.liveLink ? {} : { margin: '0 auto' }}
                    >
                      View Repository Code
                    </a>
                    {subject.liveLink && (
                      <a href={subject.liveLink} target="_blank" rel="noopener noreferrer" className="live-button underline text-accent/80 font-semibold">Interact with the Live App</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Divider */}
      <hr className="w-11/12 max-w-6xl mx-auto border-t-2 border-accent/60 my-0" />
      {/* Experiences Section */}
      <section id="experiences" className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center w-full">Experiences</h2>
        <ul className="max-w-2xl space-y-4 text-lg md:text-xl text-center text-text/80">
          <li>Software Engineer Intern at ExampleCorp (2024)</li>
          <li>Open Source Contributor - React Ecosystem</li>
          <li>Freelance Web Developer</li>
        </ul>
      </section>
    </main>
  );
}
