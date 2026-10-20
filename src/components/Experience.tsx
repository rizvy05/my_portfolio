'use client';

import { GraduationCap, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center space-y-2 mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold">Education & Timeline</h2>
        <p className="text-slate-600 dark:text-slate-400">My academic background and technical journey</p>
      </div>

      <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-10">
        {PORTFOLIO_DATA.education.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-10 group">
            {/* Dot indicator */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/25 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-4 h-4" />
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  {item.period}
                </span>
              </div>
              <h3 className="text-xl font-bold">{item.degree}</h3>
              <p className="text-sm font-medium text-indigo-500">{item.institution}</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}