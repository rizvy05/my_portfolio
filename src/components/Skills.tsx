'use client';

import { PORTFOLIO_DATA } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-100/50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold">Skills & Technologies</h2>
          <p className="text-slate-600 dark:text-slate-400">Technical competencies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
            >
              <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 border-b border-slate-100 dark:border-slate-800 pb-3">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span>{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}