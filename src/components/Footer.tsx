// import { PORTFOLIO_DATA } from '@/data/portfolio';

// export default function Footer() {
//   return (
//     <footer className="py-10 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
//       <div className="max-w-6xl mx-auto px-6 space-y-2">
//         <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name} ({PORTFOLIO_DATA.nickname}). All rights reserved.</p>
//         <p className="text-xs">Built with Next.js, React, TypeScript & Tailwind CSS.</p>
//       </div>
//     </footer>
//   );
// }
import { PORTFOLIO_DATA } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
      <div className="max-w-6xl mx-auto px-6 space-y-2">
        <p>© 2026 {PORTFOLIO_DATA.name} ({PORTFOLIO_DATA.nickname}). All rights reserved.</p>
        <p className="text-xs">Built with Next.js, React, TypeScript & Tailwind CSS.</p>
      </div>
    </footer>
  );
}