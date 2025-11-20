"use client"; // Needed because we use client-side animations

import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Link
          href="/project"
          className="px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-sky-500/30 transition-all duration-300 font-semibold inline-flex items-center justify-center"
        >
          View Our Portfolio
        </Link>

        <p className="mt-4 text-gray-600 text-lg">
          Explore our Ultraquad projects and see how we build innovation.
        </p>
      </div>

      <style jsx>{`
        /* Gradient animation */
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }

        /* Subtle up-down bounce */
        @keyframes subtle-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-subtle-bounce {
          animation: subtle-bounce 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
