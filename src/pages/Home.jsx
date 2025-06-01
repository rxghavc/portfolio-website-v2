import React, { useRef } from 'react';
import {
  FaFlask, FaRobot, FaCloudSun, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaLinkedin, FaEnvelope, FaReact, FaFilePdf, FaChalkboardTeacher, FaUsers, FaLaptopCode, FaGamepad, FaLightbulb, FaWhatsapp, FaDiscord, FaUtensils, FaJava, FaGitAlt, FaUnity, FaCogs, FaCodeBranch, FaMobileAlt, FaBug, FaProjectDiagram, FaNode
} from 'react-icons/fa';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { SiExpress, SiTailwindcss, SiPostman, SiVercel, SiMongodb } from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import ScrollToTopButton from '../components/ScrollToTopButton';
import ContactSection from './Contact';

export default function Home() {
  const headerRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [showTechStack, setShowTechStack] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
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
      repoLink: "",
    },
    {
      icon: <FaUtensils className="text-accent text-3xl mb-2" />,
      title: "Iyers - Catering Website",
      technologies: ["React", "TailwindCSS", "JavaScript", "Stripe API"],
      description:
        "A modern, responsive website for a family-run South Indian catering business. Features a menu showcase, contact form, and dynamic gallery to help customers explore authentic cuisine and book catering services.",
      repoLink: "",
      liveLink: "",
    },
  ];

  const techStack = {
    'Programming Languages': [
      { icon: <FaPython className="text-xl" />, label: 'Python', percent: 95 },
      { icon: <FaJsSquare className="text-xl" />, label: 'JavaScript', percent: 85 },
      { icon: <FaJava className="text-xl" />, label: 'Java', percent: 60 },
      { icon: <FaHtml5 className="text-xl" />, label: 'HTML', percent: 90 },
      { icon: <FaCss3Alt className="text-xl" />, label: 'CSS', percent: 85 },
      { icon: <FaDatabase className="text-xl" />, label: 'MySQL', percent: 85 },
    ],
    'Frameworks & Libraries': [
      { icon: <FaReact className="text-xl" />, label: 'React.js', percent: 70 },
      { icon: <FaNode className="text-xl" />, label: 'Node.js', percent: 80 },
      { icon: <SiExpress className="text-xl" />, label: 'Express.js', percent: 40 },
      { icon: <SiTailwindcss className="text-xl" />, label: 'Tailwind CSS', percent: 80 },
    ],
    'Tools & Platforms': [
      { icon: <FaGitAlt className="text-xl" />, label: 'Git', percent: 85 },
      { icon: <FaGithub className="text-xl" />, label: 'GitHub', percent: 85 },
      { icon: <BiLogoVisualStudio className="text-xl" />, label: 'Visual Studio Code', percent: 95 },
      { icon: <FaUnity className="text-xl" />, label: 'Unity', percent: 60 },
      { icon: <SiPostman className="text-xl" />, label: 'Postman', percent: 20 },
      { icon: <SiVercel className="text-xl" />, label: 'Vercel', percent: 75 },
      { icon: <SiMongodb className="text-xl" />, label: 'MongoDB Atlas', percent: 70 },
    ],
    'Technical Skills': [
      { icon: <FaCogs className="text-xl" />, label: 'RESTful API Design', percent: 80 },
      { icon: <FaDatabase className="text-xl" />, label: 'Database Management', percent: 75 },
      { icon: <FaLaptopCode className="text-xl" />, label: 'Full-Stack Web Development', percent: 85 },
      { icon: <FaCodeBranch className="text-xl" />, label: 'Version Control (Git)', percent: 85 },
      { icon: <FaMobileAlt className="text-xl" />, label: 'Responsive Web Design', percent: 90 },
      { icon: <FaBug className="text-xl" />, label: 'Debugging & Troubleshooting', percent: 80 },
      { icon: <FaProjectDiagram className="text-xl" />, label: 'Agile Workflow Familiarity', percent: 60 },
    ],
  };

  const links = [
    {
      href: '/cv',
      label: 'CV',
      icon: <FaFilePdf className="text-xl" />,
      props: {
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    },
    {
      href: 'https://www.linkedin.com/in/raghavcommandur/',
      label: 'LinkedIn',
      icon: <FaLinkedin className="text-xl" />,
      props: { target: '_blank', rel: 'noopener noreferrer' },
    },
    {
      href: 'https://github.com/rxghavc',
      label: 'GitHub',
      icon: <FaGithub className="text-xl" />,
      props: { target: '_blank', rel: 'noopener noreferrer' },
    },
    {
      href: 'mailto:rxghavcdev@gmail.com',
      label: 'Email',
      icon: <FaEnvelope className="text-xl" />,
      props: {},
    },
    {
      href: 'https://wa.me/+447933454109',
      label: 'WhatsApp',
      icon: <FaWhatsapp className="text-xl" />,
      props: { target: '_blank', rel: 'noopener noreferrer' },
    },
    {
      href: 'https://discord.com/users/377138490497826816',
      label: 'Discord',
      icon: <FaDiscord className="text-xl" />,
      props: { target: '_blank', rel: 'noopener noreferrer' },
    }
  ];

  const experiences = [
    {
      icon: <FaLaptopCode style={{ color: 'var(--accent)' }} className="text-4xl mb-2" />,
      title: "Software Engineering Intern @ Fujitsu",
      description: "Led a team to prototype an accessible social media app for elderly users, built AR/VR learning tools with Unity, and implemented AES encryption for data protection."
    },
    {
      icon: <FaLightbulb style={{ color: 'var(--accent)' }} className="text-4xl mb-2" />,
      title: "Young Enterprise Challenge Finalist",
      description: "Designed and pitched a VR smart-glasses prototype focused on enhancing daily life. Ranked 2nd nationally at Google HQ, demonstrating innovation, teamwork, and presentation skills."
    },
    {
      icon: <FaGamepad style={{ color: 'var(--accent)' }} className="text-4xl mb-2" />,
      title: "Code Tutor @ Code Ninjas",
      description: "Taught 50+ students aged 7–14 coding using Scratch, JavaScript, and HTML. Developed game-based modules and led live debugging, pair programming, and hands-on projects."
    },
    {
      icon: <FaChalkboardTeacher style={{ color: 'var(--accent)' }} className="text-4xl mb-2" />,
      title: "Freelance Tutor",
      description: "Delivering tailored 1:1 tutoring in Computer Science and Mathematics for GCSE and A-Level students. Helped boost grades and student confidence through 100+ sessions."
    },
    {
      icon: <FaUsers style={{ color: 'var(--accent)' }} className="text-4xl mb-2" />,
      title: "Student Ambassador",
      description: "Representing the University of Surrey by supporting outreach events, mentoring students, and engaging with prospective applicants to promote inclusivity and access to higher education."
    },
  ];

  return (
    <main>
      <ScrollToTopButton show={showScrollTop} />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-20 md:pt-28 pb-8 md:pb-8 min-h-[60vh]" id="hero">
        <h1 className="text-3xl md:text-4xl font-bold text-center max-w-3xl mx-auto">
          Hi, I'm <span style={{ color: 'var(--primary)', transition: 'color 0.3s' }} className="dark:text-[var(--accent)]">Raghav</span>, an aspiring software engineer.
        </h1>
      </section>
      {/* Divider */}
      <hr className="w-11/12 max-w-7xl mx-auto border-t-2 my-0" style={{ borderColor: 'var(--accent)' }} />
      {/* About & Projects Section */}
      <section id="about-projects-divider" className="py-20 bg-background/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 px-6 items-start">
          {/* About (left) */}
          <div className="flex-1 flex flex-col items-center md:items-start md:justify-start justify-center min-h-[480px]">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center w-full">About</h2>
            <div className="w-full max-w-xl">
              <p className="text-lg md:text-xl text-full text-text/80 px-2 md:px-0">
                I'm a first-year B.Sc. Computer Science student at the University of Surrey, passionate about full-stack web development and software engineering. I enjoy building scalable, user-centered applications and exploring areas like system design, DevOps, and AI. My focus is on writing clean, maintainable code and creating solutions that are both impactful and accessible.
              </p>
              {/* Links Section */}
              <div className="mt-8 w-full">
                <h2 className="text-3xl font-semibold mb-4 text-center w-full">Links</h2>
                <div className="profile-links-list flex flex-col gap-2">
                  {links.map(link => (
                    <a
                      key={link.label}
                      className="profile-link-item relative flex items-center justify-center gap-2"
                      href={link.href}
                      {...link.props}
                    >
                      <span className="absolute left-4 flex items-center">{link.icon}</span>
                      <span className="w-full text-center">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              {/* Tech Stack Section */}
              <div className="mt-8 w-full">
                <h2 className="text-3xl font-semibold mb-4 text-center w-full">Tech Stack</h2>
                <div className="flex flex-col gap-3">
                  {Object.keys(techStack).map((section) => (
                    <div key={section}>
                      <button
                        className="cl-button w-full flex items-center justify-between px-4 py-3 rounded border font-semibold text-lg bg-background text-text focus:outline-none transition-colors"
                        style={{ borderColor: 'var(--accent)', color: 'var(--text)', background: 'var(--background)' }}
                        onClick={() => setShowTechStack(showTechStack === section ? '' : section)}
                        aria-expanded={showTechStack === section}
                        type="button"
                      >
                        <span className="text-left">{section}</span>
                        <span className="ml-auto pl-2 flex-shrink-0">
                          {showTechStack === section ? <RiArrowDropUpLine className="text-2xl" style={{ color: 'var(--text)' }} /> : <RiArrowDropDownLine className="text-2xl" style={{ color: 'var(--text)' }} />}
                        </span>
                      </button>
                      {showTechStack === section && (
                        <div className="code-language-buttons flex flex-wrap gap-2 mt-2 justify-center">
                          {techStack[section].map((tech) => (
                            <button
                              key={tech.label}
                              className="cl-button profile-link-item relative flex items-center justify-center gap-2 w-full overflow-hidden"
                              style={{
                                position: 'relative',
                                background: 'var(--background)', // Set button background to --background
                              }}
                            >
                              {/* Fill bar */}
                              <span
                                className="absolute left-0 top-0 h-full"
                                style={{
                                  width: `${tech.percent}%`,
                                  background: 'var(--accent)',
                                  opacity: 1,
                                  zIndex: 1,
                                  borderRadius: 'inherit',
                                  transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)',
                                }}
                              />
                              <span className="absolute left-4 flex items-center" style={{ color: 'var(--text)', zIndex: 2 }}>{tech.icon}</span>
                              <span className="w-full text-center" style={{ zIndex: 2 }}>{tech.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Projects (right) */}
          <div className="flex-1 flex flex-col items-center md:items-start md:justify-start justify-center min-h-[480px]" id="projects">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center w-full">Projects</h2>
            <p className="mb-4 text-text/70 text-center flex-wrap">Constantly learning frameworks & coding languages to build better things!</p>
            <div className="grid gap-6 w-full">
              {projects.map((project, index) => (
                <div className="rounded-xl border bg-background/60 p-6 shadow-md flex flex-col gap-2" key={index}
                  style={{ borderColor: 'var(--accent)' }}>
                  <div className="flex items-center gap-3 mb-1 w-full justify-center">
                    <span className="flex-shrink-0 flex items-center justify-center mr-2">{project.icon}</span>
                    <h3 className="text-xl font-bold flex-1 text-center" style={{flex: 'unset'}}>{project.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-1 justify-center">
                    {project.technologies.map((tech, i) => (
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
                  <p className="text-text/80 text-sm mb-2 text-justify">{project.description}</p>
                  <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                    {(!project.repoLink && !project.liveLink) ? (
                      <div className="w-full flex justify-center">
                        <button
                          className="repo-button underline font-semibold"
                          style={{ background: 'var(--secondary-variant)', color: 'var(--text)', cursor: 'not-allowed' }}
                          disabled
                        >
                          Development in Progress
                        </button>
                      </div>
                    ) : (
                      <>
                        {project.repoLink && (
                          <a
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="repo-button underline text-accent font-semibold"
                            style={project.liveLink ? {} : { margin: '0 auto' }}
                          >
                            View Repository Code
                          </a>
                        )}
                        {project.liveLink && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-button underline text-accent/80 font-semibold">Interact with the Live App</a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Divider */}
      <hr id="experiences-divider" className="w-11/12 max-w-7xl mx-auto border-t-2 my-0" style={{ borderColor: 'var(--accent)' }} />
      {/* Experiences Section as cards */}
      <section id="experiences" className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center w-full">Experiences</h2>
        <div className="flex flex-wrap justify-center gap-10 w-full max-w-6xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-xl border bg-background/60 p-6 shadow-md flex flex-col items-center max-w-xs w-full card-3d transition-transform duration-200"
              style={{ borderColor: 'var(--accent)', boxShadow: '0 4px 6px var(--primary)' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 12px var(--primary)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px var(--primary)';
              }}
            >
              <div className="mb-3">{exp.icon}</div>
              <h3 className="text-xl font-bold text-center mb-2 flex flex-wrap">{exp.title}</h3>
              <p className="text-text/80 text-sm text-center">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Divider */}
      <hr id="contact-divider" className="w-11/12 max-w-7xl mx-auto border-t-2 my-0" style={{ borderColor: 'var(--accent)' }} />
      {/* Contact Section below Experiences */}
      <ContactSection />
    </main>
  );
}
