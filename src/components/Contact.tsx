
'use client';

import { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong.'
      );
    }
  };

  const contactItems = [
    {
      label: 'Email Address',
      value: PORTFOLIO_DATA.contact.email,
      href: `mailto:${PORTFOLIO_DATA.contact.email}`,
      icon: Mail,
    },
    {
      label: 'Phone Number',
      value: PORTFOLIO_DATA.contact.phone,
      href: `tel:${PORTFOLIO_DATA.contact.phone}`,
      icon: Phone,
    },
  ];

  const inputClasses =
    'w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:border-indigo-400 dark:focus:bg-slate-950';

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Contact Me
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Let&apos;s Build Something{' '}
            <span className="text-indigo-600 dark:text-indigo-400">
              Great
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
            Have an idea, a project, or an opportunity? I&apos;d love to
            hear from you. Let&apos;s connect and turn your ideas into
            reality.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-5">
          {/* Contact information */}
          <aside className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:col-span-2 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <div className="mb-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/25">
                  <Mail className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Contact Details
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  The best way to reach me is through email. I&apos;m
                  always open to discussing development projects and
                  new opportunities.
                </p>
              </div>

              <div className="space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex min-w-0 items-center gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/5 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-indigo-400/40"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:text-indigo-400">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {item.label}
                        </p>
                        <p className="mt-1 truncate text-sm font-semibold text-slate-800 transition-colors group-hover:text-indigo-600 dark:text-slate-200 dark:group-hover:text-indigo-400">
                          {item.value}
                        </p>
                      </div>

                      <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-500" />
                    </a>
                  );
                })}

                <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Location
                    </p>
                    <p className="mt-1 break-words text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {PORTFOLIO_DATA.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-9 border-t border-slate-200 pt-7 dark:border-slate-800">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Find Me Online
              </p>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PORTFOLIO_DATA.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  className="group flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-sky-600 hover:bg-sky-600 hover:text-white dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-sky-600 dark:hover:bg-sky-600 dark:hover:text-white"
                >
                  <FaLinkedinIn className="h-4 w-4" />
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <a
                  href={PORTFOLIO_DATA.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  className="group flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </aside>

          {/* Contact form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:col-span-3 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Send Me a Message
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Fill out the form below and I&apos;ll get back to you as
                soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className={inputClasses}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  maxLength={5000}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className={`${inputClasses} resize-y`}
                />
                <p className="text-right text-xs text-slate-400">
                  {formData.message.length}/5000
                </p>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-600/25 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {status === 'loading' ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-700 dark:text-emerald-400"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <p>
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border border-rose-500/20 bg-rose-500/10 p-4 text-sm text-rose-700 dark:text-rose-400"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-500">
          Thank you for visiting my portfolio. I look forward to connecting
          with you.
        </p>
      </div>
    </section>
  );
}
