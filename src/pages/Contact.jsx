import React, { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResult(res.ok ? 'Message sent successfully!' : (data.error || 'Failed to send message.'));
      if (res.ok) setForm({ firstName: '', lastName: '', email: '', message: '' });
    } catch (err) {
      setResult('Something went wrong. Please try again later.');
    }
    setSubmitting(false);
  };

  React.useEffect(() => {
    if (result) {
      const timer = setTimeout(() => setResult(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  return (
    <section id="contact" className="py-20 bg-background/80">
      <div className="w-full max-w-lg mx-auto bg-background/80 rounded-xl shadow-lg border p-8"
        style={{ borderColor: 'var(--accent)', boxShadow: '0 4px 6px var(--primary)' }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: 'var(--text)' }}>Contact Me</h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 rounded border bg-background text-text focus:outline-none transition-colors"
              style={{ background: 'var(--background)', color: 'var(--text)', borderColor: 'var(--accent)' }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 rounded border bg-background text-text focus:outline-none transition-colors"
              style={{ background: 'var(--background)', color: 'var(--text)', borderColor: 'var(--accent)' }}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded border bg-background text-text focus:outline-none transition-colors"
            style={{ background: 'var(--background)', color: 'var(--text)', borderColor: 'var(--accent)' }}
          />
          <textarea
            name="message"
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="px-4 py-3 rounded border focus:outline-none transition-colors resize-none"
            style={{ background: 'var(--background)', color: 'var(--text)', borderColor: 'var(--accent)' }}
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded bg-accent text-background font-semibold text-lg shadow hover:bg-accent/80 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ background: 'var(--accent)', color: 'var(--background)' }}
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {result && (
          <div className="mt-4 text-center text-sm" style={{ color: result.includes('success') ? 'var(--primary)' : 'var(--secondary-variant)' }}>
            {result}
          </div>
        )}
      </div>
    </section>
  );
}
