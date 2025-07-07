import React, { useRef } from 'react';
import {
  FaFlask, FaRobot, FaCloudSun, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaLinkedin, FaEnvelope, FaReact, FaFilePdf, FaChalkboardTeacher, FaUsers, FaLaptopCode, FaGamepad, FaLightbulb, FaWhatsapp, FaDiscord, FaUtensils, FaJava, FaGitAlt, FaUnity, FaCogs, FaCodeBranch, FaMobileAlt, FaBug, FaProjectDiagram, FaNode,
  FaPiggyBank, FaLinux
} from 'react-icons/fa';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { SiExpress, SiTailwindcss, SiPostman, SiVercel, SiMongodb } from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import ScrollToTopButton from '../components/ScrollToTopButton';
import ContactSection from './Contact';
import { projects as projectsData } from '../data/projects';
import { techStack as techStackData } from '../data/techStack';
import { links as linksData } from '../data/links';
import { experiences as experiencesData } from '../data/experiences';
import { certifications as certificationsData } from '../data/certifications';

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

  const iconMap = {
    FaFlask, FaRobot, FaCloudSun, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaLinkedin, FaEnvelope, FaReact, FaFilePdf, FaChalkboardTeacher, FaUsers, FaLaptopCode, FaGamepad, FaLightbulb, FaWhatsapp, FaDiscord, FaUtensils, FaJava, FaGitAlt, FaUnity, FaCogs, FaCodeBranch, FaMobileAlt, FaBug, FaProjectDiagram, FaNode, FaPiggyBank, FaLinux,
    SiExpress, SiTailwindcss, SiPostman, SiVercel, SiMongodb, BiLogoVisualStudio
  };

  function parseIcon(iconString) {
    if (!iconString) return null;
    const match = iconString.match(/<([A-Za-z0-9_]+)/);
    const Comp = match ? iconMap[match[1]] : null;
    if (!Comp) return null;
    const classMatch = iconString.match(/className=\"([^\"]*)\"/);
    const styleMatch = iconString.match(/style=\{([^}]*)\}/);
    const className = classMatch ? classMatch[1] : undefined;
    let style = undefined;
    if (styleMatch) {
      try {
        style = eval('(' + styleMatch[1] + ')');
      } catch {}
    }
    return <Comp className={className} style={style} />;
  }

  const projects = projectsData.map(p => ({ ...p, icon: parseIcon(p.icon) }));
  const techStack = Object.fromEntries(
    Object.entries(techStackData).map(([section, arr]) => [section, arr.map(t => ({ ...t, icon: parseIcon(t.icon) }))])
  );
  const links = linksData.map(l => ({ ...l, icon: parseIcon(l.icon) }));
  const experiences = experiencesData.map(e => ({ ...e, icon: parseIcon(e.icon) }));
  const certifications = certificationsData.map(c => ({ ...c, icon: parseIcon(c.icon) }));

  return (
    <main>
      <ScrollToTopButton show={showScrollTop} />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-24 md:pt-28 pb-10 md:pb-8 min-h-[60vh]" id="hero">
        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-center max-w-3xl mx-auto leading-snug md:leading-tight px-2 md:px-0">
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
                                background: 'var(--accent)',
                              }}
                            >
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
      <hr id="certifications-divider" className="w-11/12 max-w-7xl mx-auto border-t-2 my-0" style={{ borderColor: 'var(--accent)' }} />
      {/* Certifications Section as cards */}
      <section id="certifications" className="min-h-[40vh] flex flex-col items-center justify-center px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center w-full">Certifications</h2>
        <div className="flex flex-wrap justify-center gap-10 w-full max-w-6xl mx-auto">
          {certifications.map((cert, idx) => (
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
              {cert.image && (
                <img src={cert.image} alt={cert.title + ' badge'} className="mb-3 w-24 h-24 object-contain" />
              )}
              <div className="mb-3">{cert.icon}</div>
              <h3 className="text-xl font-bold text-center mb-2 flex flex-wrap">{cert.title}</h3>
              <p className="text-text/80 text-sm text-center mb-2">{cert.description}</p>
              {cert.status ? (
                <div className="w-full flex justify-center">
                  <button
                    className="repo-button underline font-semibold mt-2"
                    disabled
                    style={{
                      background: 'var(--secondary-variant)',
                      color: 'var(--text)',
                      cursor: 'not-allowed',
                    }}
                  >
                    {cert.status}
                  </button>
                </div>
              ) : cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-button underline text-accent font-semibold mt-2"
                >
                  View Credential
                </a>
              )}
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
