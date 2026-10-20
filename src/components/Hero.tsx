'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, Download, Mail, Phone, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 overflow-hidden py-20">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-linear-to-tr from-indigo-500/20 to-sky-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for Frontend & Full-Stack Opportunities
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Hi, Im <span className="bg-linear-to-r from-indigo-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">{PORTFOLIO_DATA.name}</span>
            <span className="text-xl sm:text-2xl text-slate-400 font-mono ml-2">{PORTFOLIO_DATA.nickname}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium">
            {PORTFOLIO_DATA.title}
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
        >
          {PORTFOLIO_DATA.bio}
        </motion.p>

        {/* Action Buttons (Projects + CV Download/View) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-105"
          >
            Explore Projects <ArrowRight className="w-4 h-4" />
          </a>
          
          {/* View CV Button */}
          <a
            href={PORTFOLIO_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 font-medium transition-all duration-200"
          >
            <FileText className="w-4 h-4 text-indigo-500" /> View CV
          </a>

          {/* Download CV Button */}
          <a
            href={PORTFOLIO_DATA.resumeUrl}
            download="Hadiuzzaman Rizvy_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-indigo-500 font-medium transition-all duration-200"
          >
            <Download className="w-4 h-4 text-indigo-500" /> Download CV
          </a>
        </motion.div>

        {/* Contact info snippets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-6 flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
        >
          <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-indigo-500" /> {PORTFOLIO_DATA.contact.email}</span>
          <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-indigo-500" /> {PORTFOLIO_DATA.contact.phone}</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-500" /> {PORTFOLIO_DATA.location}</span>
        </motion.div>
      </div>
    </section>
  );
}
