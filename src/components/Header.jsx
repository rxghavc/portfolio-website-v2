import React from 'react';
import { FiSun, FiMenu } from 'react-icons/fi';
import { BsMoonStars } from 'react-icons/bs';
import logoLight from '../assets/images/rclogov2.png';
import logoDark from '../assets/images/rclogov2-dark.png';
import Sidebar from './Sidebar';
import { useTheme } from './ThemeContext';

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const navLinks = [
    { href: '/#about-projects-divider', label: 'About' },
    { href: '/#about-projects-divider', label: 'Projects' },
    { href: '/#experiences-divider', label: 'Experiences' },
    { href: '/#contact-divider', label: 'Contact Me'}
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 px-4 py-2 bg-background text-text flex items-center justify-between shadow-lg border-b md:px-12 md:py-6"
        style={{ borderColor: 'var(--accent)', backgroundColor: 'var(--background)', color: 'var(--text)' }}
      >
        {/* Menu icon for mobile */}
        <button
          className="no-style flex md:hidden p-3 rounded-full text-background hover:text-accent transition-colors text-3xl bg-transparent border-0 shadow-none focus:outline-none mr-2"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu />
        </button>
        {/* Logo centered on mobile, left on desktop */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src={isDark ? logoDark : logoLight}
            alt="RC Logo"
            className="h-16 w-auto transition-all duration-300 max-w-[200px] min-w-0"
            draggable="false"
          />
        </div>
        {/* Nav links for desktop */}
        <nav className="hidden md:flex gap-8 text-lg font-semibold absolute left-1/2 -translate-x-1/2">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link relative py-2 transition-colors"
              onClick={e => {
                const id = link.href.replace('/#', '');
                const section = document.getElementById(id);
                const header = document.querySelector('header');
                if (section && header) {
                  e.preventDefault();
                  const headerHeight = header.offsetHeight;
                  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({
                    top: sectionTop - headerHeight,
                    behavior: 'smooth',
                  });
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* Theme toggle button */}
        <button
          className="no-style p-4 rounded-full text-background hover:text-accent transition-colors transition-shadow duration-300 font-semibold bg-transparent border-0 shadow-none focus:outline-none hover:shadow-[0_0_0_6px_var(--accent)] text-4xl ml-2"
          onClick={toggleTheme}
          aria-pressed={isDark}
        >
          {isDark ? <FiSun className="text-2xl" /> : <BsMoonStars className="text-2xl" />}
        </button>
      </header>
      {/* Sidebar overlay - ensure it is below the sidebar */}
      <div
        className={`fixed inset-0 z-60 duration-300 transition-colors ${sidebarOpen ? 'bg-black/60 pointer-events-auto' : 'bg-transparent pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      />
      {/* Sidebar - z-70 to be above overlay, add shadow-xl for more depth */}
      <Sidebar
        isDark={isDark}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navLinks={navLinks}
        className="z-70 shadow-xl"
      />
    </>
  );
}
