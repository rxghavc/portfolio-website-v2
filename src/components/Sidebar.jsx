import React from 'react';

export default function Sidebar({ isDark, sidebarOpen, setSidebarOpen, navLinks, className = '' }) {
  // Scroll handler matching header logic
  const handleNavClick = (e, link) => {
    let id = link.scrollTo;
    if (link.label === 'Projects' && window.innerWidth < 768) {
      id = 'projects';
    }
    if (id) {
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
        // Update URL without reloading
        window.history.replaceState(null, '', link.href);
      }
    }
    setSidebarOpen(false);
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 text-text transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${className}`}
      style={{ backgroundColor: 'var(--background)' }}
      aria-hidden={!sidebarOpen}
    >
      <div className="flex flex-col h-full p-8 gap-8">
        <button
          className="self-end mb-8 no-style text-3xl hover:text-accent transition-colors"
          style={{ color: 'var(--text)' }}
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link relative py-2 text-xl font-semibold transition-colors"
            onClick={e => handleNavClick(e, link)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
