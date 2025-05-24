import React from 'react';

export default function Sidebar({ isDark, sidebarOpen, setSidebarOpen, navLinks }) {
  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-full w-64 bg-background text-text shadow-lg transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      style={{ backgroundColor: isDark ? '#071005' : '#f1faef' }}
      aria-hidden={!sidebarOpen}
    >
      <div className="flex flex-col h-full p-8 gap-8">
        <button
          className="self-end mb-8 no-style text-3xl hover:text-accent transition-colors"
          style={isDark ? { color: '#000' } : { color: 'var(--text)' }}
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
            onClick={() => setSidebarOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
