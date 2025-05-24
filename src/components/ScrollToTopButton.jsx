import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton({ show }) {
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-6 bottom-8 z-40 bg-accent rounded-full p-4 shadow-lg hover:bg-accent/80 transition-colors duration-200 flex items-center justify-center text-2xl border-2"
      style={{ borderColor: 'var(--accent)', background: 'var(--accent)' }}
      aria-label="Scroll to top"
    >
      <FaArrowUp style={{ color: 'var(--text)' }} />
    </button>
  );
}
