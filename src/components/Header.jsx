import React, { useEffect, useState } from 'react';
import { FiSun, FiMenu } from 'react-icons/fi';
import { BsMoonStars } from 'react-icons/bs';
import logoLight from '../assets/images/rclogov2.png';
import logoDark from '../assets/images/rclogov2-dark.png';
import Sidebar from './Sidebar';

export default function Header() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    setIsDark(html.classList.contains('dark'));
  };

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Sidebar overlay */}
      <div
        className={`fixed inset-0 z-40 duration-300 bg-background ${sidebarOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      />
      {/* Sidebar */}
      <Sidebar
        isDark={isDark}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navLinks={navLinks}
      />
      <header className="w-full px-4 py-2 bg-background text-text flex items-center justify-between shadow-lg border-b border-accent md:px-12 md:py-6 relative">
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
          <a href="/" aria-label="Home">
            <img
              src={isDark ? logoDark : logoLight}
              alt="RC Logo"
              className="h-16 w-auto transition-all duration-300 max-w-[200px] min-w-0"
              draggable="false"
            />
          </a>
        </div>
        {/* Nav links for desktop */}
        <nav className="hidden md:flex gap-8 text-lg font-semibold absolute left-1/2 -translate-x-1/2">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link relative py-2 transition-colors"
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
    </>
  );
}
