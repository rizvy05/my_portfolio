'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Project } from '@/data/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 space-y-6 overflow-y-auto">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Overview</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  {project.longDescription}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Key Features & Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-end gap-3 bg-slate-50/50 dark:bg-slate-950/50">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 font-medium text-sm transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Source Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm shadow-md shadow-indigo-500/20 transition-all hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" /> Live Preview
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
// import { Project } from '@/data/portfolio';

// interface ProjectModalProps {
//   project: Project | null;
//   onClose: () => void;
// }

// export default function ProjectModal({ project, onClose }: ProjectModalProps) {
//   return (
//     <AnimatePresence>
//       {project && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           {/* Backdrop overlay */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
//           />

//           {/* Modal Container */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             transition={{ duration: 0.2 }}
//             className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
//           >
//             {/* Header */}
//             <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
//               <div>
//                 <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
//                   {project.category}
//                 </span>
//                 <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
//                 aria-label="Close modal"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Scrollable Content */}
//             <div className="p-6 space-y-6 overflow-y-auto">
//               {/* Long Description */}
//               <div className="space-y-2">
//                 <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Overview</h4>
//                 <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
//                   {project.longDescription}
//                 </p>
//               </div>

//               {/* Key Highlights */}
//               <div className="space-y-3">
//                 <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Key Features & Highlights</h4>
//                 <ul className="space-y-2">
//                   {project.highlights.map((highlight, index) => (
//                     <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm">
//                       <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
//                       <span>{highlight}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Tech Stack Tags */}
//               <div className="space-y-2">
//                 <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Technologies Used</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Footer Actions */}
//             <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-end gap-3 bg-slate-50/50 dark:bg-slate-950/50">
//               {project.githubUrl && (
//                 <a
//                   href={project.githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 font-medium text-sm transition-colors"
//                 >
//                   <Github className="w-4 h-4" /> Source Code
//                 </a>
//               )}
//               {project.liveUrl && (
//                 <a
//                   href={project.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm shadow-md shadow-indigo-500/20 transition-all hover:scale-105"
//                 >
//                   <ExternalLink className="w-4 h-4" /> Live Preview
//                 </a>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }