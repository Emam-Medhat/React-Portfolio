import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

// ─── Tech data with real brand colors & SVG icons ──────────────
const techs = [
  {
    name: "PHP",
    color: "#777BB4",
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="h-7 w-7">
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm-4.5 97.5H48.4l3.5-17.9H40.1l-3.5 17.9H25.5L37 30.5h11.1l-3.2 16.5h11.8l3.2-16.5H71L59.5 97.5zm55.9-40.3c-1.9 9.8-8.7 14.8-20.3 14.8h-7.5l-3 15.5H69.5l11.5-57h19.1c9.5 0 14.5 5 13.3 11.5l-3 15.2zm-18.2-6.3l-3 15.2h6.4c4.5 0 7-2 7.8-6.2l1.8-9.3c.7-3.7-1-5.9-5.3-5.9h-7.7v6.2z" />
      </svg>
    ),
  },
  {
    name: "Laravel",
    color: "#FF2D20",
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="h-7 w-7">
        <path d="M106.6 15.9c.1.5.1 1 .1 1.6V56c0 1.8-1 3.5-2.5 4.4l-32 18.5v36.7c0 1.8-1 3.5-2.5 4.4l-33.4 19.3c-.4.2-.8.4-1.2.5-.2.1-.4.1-.6.1-.4 0-.8-.1-1.2-.3L.8 120.3C.3 120 0 119.5 0 118.9V43.7c0-.6.1-1.1.4-1.6L33.7 1c.3-.5.8-.9 1.4-1H35.3c.6 0 1.1.2 1.5.5l34 19.5c1.5.9 2.5 2.6 2.5 4.4v36.7l27.8-16V7.5c0-1.8 1-3.5 2.5-4.4l.2-.1c.2-.1.4-.2.6-.3.1 0 .3-.1.4-.1.2 0 .4 0 .6.1.4.1.8.3 1.2.5l32.6 18.8c1.4.8 2.3 2.3 2.4 4zM101 20.5L73.2 36.1 101 51.7l27.8-15.6L101 20.5zM38 11.5L10.2 27.1 38 42.7l27.8-15.6L38 11.5zm-3.5 98.9l28-16.2V58.1l-28 16.2v36.1zm-28-16.2l28 16.2V74.3l-28-16.2v36.1zm63.5 0l28-16.2V58.1l-28 16.2v36.1z"/>
      </svg>
    ),
  },
  {
    name: "Vue.js",
    color: "#42b883",
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="h-7 w-7">
        <path d="M78.8 0L64 25.4 49.2 0H0l64 110.4L128 0z" opacity=".9"/>
        <path d="M78.8 0L64 25.4 49.2 0H25.6L64 66.7 102.4 0z" fill="#fff" opacity=".5"/>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="h-7 w-7">
        <path fill="#F7DF1E" d="M0 0h128v128H0z"/>
        <path d="M116.1 98.4c-1.1-6.6-5.4-12.1-18.4-17.3-4.5-2.1-9.5-3.6-11-7-.6-3.4.2-5 2-6.6 5-4.3 14.6-2 19.4-1 .5.1.9.2 1.2.2V57c-3.8-.5-7.7-.7-11.5-.7-11 0-18.7 5.8-18.7 15.8 0 8.2 4.6 12.5 15.8 17.2 8.3 3.5 10 5.8 10 10 0 7.5-7.5 9.5-14.3 8.8-5-.4-9.8-1.9-14.5-4.1v11.5c4.4 1.7 9.1 2.7 13.8 3 14.5 1 23.8-5.5 23.8-17.2zm-55.3 1.9c-1.1-5.9-4.5-10.9-17-16.2-3.7-1.7-8.9-3.4-10.4-6.5-.7-3.5.3-5.2 2.1-6.8 5-4.3 14.5-2 19.3-1 .5.1.8.2 1.1.2v-9.8c-3.7-.5-7.5-.7-11.3-.7-11 0-18.8 5.8-18.8 15.8 0 8.2 4.5 12.6 15.5 17.3 8.2 3.5 10 5.9 10 10.2 0 7.4-7.5 9.4-14.3 8.7-4.8-.4-9.5-1.9-13.9-4V118c4.3 1.7 8.9 2.7 13.6 3 14.5 1 23.6-5.6 24.1-17.4-.1-.9-.1-1.6 0-1.3z"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="h-7 w-7">
        <path fill="#3178C6" d="M0 0h128v128H0z"/>
        <path fill="#fff" d="M22.7 62.2H0v-9.5h61.5v9.5H38.8v65.8H22.7V62.2zm86.8-9.5v9.3c-6.4-3-13.6-4.4-21-4.3-12.8.3-20.3 7.4-20.3 16.5 0 8.3 5 13.5 16.5 18.2l6.8 2.9c15.3 6.4 23.8 14.5 23.8 27.8 0 14.5-12 24-30.8 24-10.5 0-20.7-2.9-28.8-8.3V129c8 5.5 17.3 8.3 27.3 8.6 14 .4 23.4-6.7 23.4-17.5 0-8.8-5.1-14.5-18.8-20.3l-6.8-2.8c-11.3-4.8-20.5-11.7-20.5-24 0-13 10.3-22.5 27.3-22.5 9 0 17.3 2.2 22.9 4.2z"/>
      </svg>
    ),
  },
  {
    name: "MySQL",
    color: "#00758F",
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="h-7 w-7">
        <path fill="#00758F" d="M116.1 61.4c-8.4-.2-14.9 .5-20.4 2.9-1.6.7-4.1.7-4.3 2.7.8.9 .9 2.2 1.6 3.3 1.2 2 3.3 4.7 5.1 6.1 2 1.5 4 3.1 6.1 4.5 3.8 2.3 8 3.6 11.6 5.9 2.1 1.3 4.2 3 6.3 4.4 1 .7 1.7 1.9 3 2.4v-.3c-.7-.9-.9-2.1-1.5-3.1-1-1-2-1.9-2.9-2.9-2.9-3.8-6.4-7.2-10.2-9.9-3.1-2.2-10-5.3-11.3-8.9l-.2-.2c2.2-.2 4.8-.9 6.9-1.5 3.5-.9 6.6-.7 10.2-1.6.8-.2 1.6-.5 2.4-.8v-1.4c-.9-.9-1.5-2.2-2.4-3-2.5-2.2-5.3-4.4-8.1-6.2-1.6-1-3.4-1.7-5.1-2.5-.6-.3-1.5-.4-1.8-1-1.4-1.8-2.2-4-3.3-6.1-2.3-4.4-4.5-9.2-6.5-13.8-1.4-3.1-2.3-6.2-4-9.1-8.2-13.4-17-21.4-30.6-29.3-2.9-1.7-6.4-2.4-10.1-3.3-2-.1-4-.2-5.9-.3-1.2-.5-2.5-2.2-3.7-2.9-4.5-2.9-16.3-9.2-19.7-1-2.1 5.3 3.1 10.4 4.9 13.1 1.3 1.9 2.9 4 3.8 6.1.6 1.4.7 2.9 1.3 4.4 1.4 3.7 2.6 7.8 4.4 11.3 .9 1.8 1.9 3.6 3 5.2.7 1 1.9 1.4 2.1 3-.5.7-1.3 1.7-1.5 3.1-3.5 10.4-.6 21.2 2.8 28.4 1.8 3.7 6.4 12.2 12.5 9.1 5.4-2.7 4.2-12.2 5.7-17.1.4-1.3.1-2.1.6-3.1.3-.1 0 0 .3.2 0 0 2.1 4 4.7 8l5.9 9.8c3.5 4.7 8.9 10.2 12.3 13 1.8 1.5 3.7 4.1 6 5h.1zM27.2 19c1 .2 1.8.1 2.7.4.1.8-.4 1.3-.6 2-.5 1.3-1 2.8-1.5 4.1-1.1-1.5-2.8-2.8-3.3-4.7-.3-.7.3-1.3.6-1.8h2.1z"/>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="h-7 w-7">
        <path fill="#336791" d="M93.8 24.6c-4.1-3.5-9.7-5.1-15.1-5.4l-.5-.1c-3.5-.1-7.1.5-10.4 1.9-2.1-1.6-4.6-2.5-7.1-2.5-6.7 0-12.2 5.4-12.4 12.1-.3 1.2-.5 4.5-.5 6.5v31.3c0 2.9 1.4 5.5 3.7 7.1.9.6 1.8 1.1 2.8 1.5v10.5c0 1.3 1.1 2.3 2.4 2.3h3.6c1.3 0 2.4-1 2.4-2.3v-9.3c.8.1 1.7.1 2.5.1 1.3 0 2.6-.1 3.8-.2v9.4c0 1.3 1.1 2.3 2.4 2.3h3.6c1.3 0 2.4-1 2.4-2.3V77.5c1.5-.5 3-1.3 4.3-2.4 3.1-2.5 4.9-6.2 4.9-10.1V43.5c0-4.2-1.8-8.1-4.9-10.5 3.7 0 7.3 1 10.3 3.1 2.5 1.7 4.3 4.1 5.1 6.9.4 1.3 1.7 2.1 3 1.8 1.4-.3 2.3-1.7 1.9-3.1-1.2-4.6-4-8.5-7.7-11.1zm-28.1 47c-7.3 0-13.8-6.1-13.8-13.6V43.5c0-1.8.1-4 .3-5.4.3-4 3.6-7 7.5-7 4.1 0 7.5 3.3 7.5 7.5V68c0 4.2-3.4 7.5-7.5 7.5 2.1 0 4.2-.4 6.1-1.1v.7c0 1.5.2 3 .6 4.4-2.2 1.2-4.6 1.9-7.2 2.1h-.4c-2.1 0-4-.3-5.8-.9v-2.6c1 .2 2 .3 3.1.3 6.6 0 12.8-4.4 14.9-10.5v-30c0-1.3-.1-2.5-.4-3.7 3.2 1.8 5.3 5.2 5.3 9V65c0 7.5-6.5 13.5-13.8 13.5"/>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    color: "#47A248",
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="h-7 w-7">
        <path fill="#10aa50" d="M109.7 55.6c-3.8-16.8-13.8-31.8-28-41.5-3.4-2.3-5.7-3-5.7-3l.2 1.1c-1.9 2.1-3.5 4.5-4.7 7.2-4.2 9.7-5.8 21.2-4.3 31.7 1.3 9.3 4.6 18.7 9.5 27.1 3.8 6.4 8.5 12.4 13.9 17.6 1.3-1 2.5-2.1 3.7-3.2 8.1-7.7 14-17.7 15.4-37zm-45.9 62.1c-.2-.4-.3-.9-.5-1.3-1.2-3.2-3.1-6.1-5.5-8.5-1.9-1.9-4-3.6-6.5-4.6l-.5 1.5c-1.2 3.5-1.8 7.2-1.8 10.9 0 2.5.3 5 .8 7.4.2.9.7 1.8.9 2.7.8-.8 1.8-1.5 2.7-2.2 3-2.2 6.5-3.9 9.8-5.4l.6-.5zm29.5-6.9c-1.8-1.5-3.6-3-5.7-4.2-8.8-5.2-19.5-7.2-29.7-6-1.3.2-2.6.4-3.9.7-.2.1-.4.1-.6.2-1.5.4-3 .9-4.5 1.4l.3.1c3.5 1.3 6.6 3.4 9.2 6.1 2.8 2.9 4.9 6.4 6.2 10.2.3.9.5 1.7.7 2.6l19.1-4.2c3.1-.7 6.1-1.6 9-2.7l.3-1.2c-.1-.9-.2-1.9-.4-3z"/>
        <path fill="#b8c4c2" d="M92.9 117.3c-.8-10.1-4.8-19.5-11.2-27-5.4-6.3-12.5-11.1-20.4-13.6-4.6-1.5-9.5-2.2-14.4-2.2-1.7 0-3.3.1-5 .3-7.3.8-14.4 3.4-20.4 7.6-6.1 4.2-11.2 9.8-14.6 16.5-1.5 3-2.7 6.1-3.4 9.4l.5.3c3.4 1.9 6.9 3.5 10.6 4.8 7.7 2.6 15.8 3.9 23.9 3.9h1c7.9 0 15.8-1.2 23.4-3.6 7-2.2 13.5-5.7 19.4-10.1l.3-1.5 10.3 15.2z"/>
      </svg>
    ),
  },
  {
    name: "Redis",
    color: "#DC382D",
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="h-7 w-7">
        <path fill="#DC382D" d="M116.5 88.1l-32 14.3-32-14.3 32-14.2 32 14.2zm-32 19.9L52.4 93.6l-32 14.3 64 28.5 64-28.5-32-14.3-32 14.4zm0-82.9L48.1 39.7l36.4 16.2 36.4-16.2L84.5 25.1zm0-25.1L84.5 0 20.5 28.6l64 28.5v-.6L52.4 42.2l32-17.3 36.4 19.7v.7l-36.4 16.2-36.4-16.2V45l36.4-19.7-36.4-19.6z"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    color: "#2496ED",
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="h-7 w-7">
        <path fill="#2496ED" d="M124.8 52.1c-2-1.4-6.6-1.9-10.1-1.2-.4-3.7-2.5-6.9-6.1-9.8l-2.1-1.4-1.4 2.1c-2.7 4.1-3.4 10.9-1.3 15.5-1 .6-3 1.5-5.6 1.4H3.9c-.8 5-.5 13.3 4 20.6 3.4 5.4 8.5 9.4 15.1 11.9 7.3 2.8 15.2 3.1 21.8 1 3 1.9 6.3 3.1 9.8 3.7 4.3.8 8.7.6 12.8-.4 3.5-.9 6.4-2.5 9-4.5 7.3.3 13-2.8 16.7-8.6 2.5-3.8 3.8-8.8 4-13.5h2.4c7.1 0 11.5-2.8 13.8-5.3l.9-1-.5-1.4c-2-3-5.1-4.2-9-4.8zM24.5 51H15v9.5h9.5V51zm11.4 0h-9.5v9.5h9.5V51zm11.4 0H38v9.5h9.3V51zm11.2 0h-9.5v9.5h9.5V51zm-33.5-11h-9.5v9.5h9.5V40zm11.5 0h-9.5v9.5h9.5V40zm11.3 0H38v9.5h9.3V40zm22.6 11h-9.5v9.5h9.5V51zm-11.3 0h-9.5v9.5h9.5V51zm0-11h-9.5v9.5h9.5V40z"/>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "#38BDF8",
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="h-7 w-7">
        <path fill="#38BDF8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.745-12.207-8.66C55.128 71.371 47.868 64 32.004 64z"/>
      </svg>
    ),
  },
  {
    name: "Bootstrap",
    color: "#7952B3",
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="h-7 w-7">
        <path fill="#7952B3" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm13.5 94.7c-2.9 5.3-8.7 7.3-16 7.3H40V26h21.4c12.6 0 20.1 6.8 20.1 18.2 0 6.3-2.9 11.7-8 14.6 6.8 2.5 11 8 11 15.4 0 8-.3 14.2-7 20.5zm-7.8-49.6c0-5.4-3.6-8.9-9.6-8.9h-8.6v18.6h8.3c6.3 0 9.9-3.7 9.9-9.7zm2.2 29.2c0-6-4.1-10.5-11.2-10.5h-9.2v21h9.2c7.5 0 11.2-4.4 11.2-10.5z"/>
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="h-7 w-7">
        <path fill="#F05032" d="M124.74 57.26L70.76 3.27a11.14 11.14 0 00-15.75 0L43.35 14.92l14.98 14.98a13.23 13.23 0 0116.75 16.84l14.43 14.43a13.23 13.23 0 110 5.93L76.07 53.65v33.83a13.23 13.23 0 11-5.93 0V53.02L56.12 39.01a13.23 13.23 0 01-16.8-16.75L25.1 9.53 3.26 31.38a11.14 11.14 0 000 15.75L57.24 101.1a11.14 11.14 0 0015.75 0L124.74 49.26a11.14 11.14 0 000-15.75l-.01 23.75z"/>
      </svg>
    ),
  },
  {
    name: "Vite",
    color: "#646CFF",
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="h-7 w-7">
        <path fill="#646CFF" d="M124.77 26.09L67.55 118.06a3.94 3.94 0 01-6.87.05L3.23 26.13a3.93 3.93 0 01.87-5.07l57.21-41.87c1.42-1.04 3.37-1.04 4.79 0l57.21 41.87a3.92 3.92 0 01.46 5.03z"/>
        <path fill="#fff" d="M80.67 26.1L64 114.46 47.33 26.1l16.67-4.67z" opacity=".3"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "#339933",
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="h-7 w-7">
        <path fill="#339933" d="M112.77 33.33L67.78 7.4a7.55 7.55 0 00-7.55 0L15.23 33.33A7.55 7.55 0 0011.46 40v51.87a7.55 7.55 0 003.77 6.53l45 25.93a7.55 7.55 0 007.55 0l45-25.93a7.55 7.55 0 003.77-6.53V40a7.55 7.55 0 00-3.78-6.67zm-49.7 70.19c-16.23 0-26-7.7-26-19.1h12.83c.65 6 5.4 9.53 13.42 9.53 7.54 0 12-3.35 12-8.43 0-4.24-2.9-6.7-11.07-8.64l-6.7-1.62c-12.47-3-18.41-9.32-18.41-19.26 0-12.1 9-20.42 23.67-20.42 14.4 0 23.6 7.93 24.5 19.37H74.44c-.94-5.4-5.05-8.73-12.26-8.73-6.87 0-11.07 3.46-11.07 8.3 0 4 2.78 6.37 10.63 8.2l6.7 1.62c12.88 3 18.56 9.06 18.56 19.5.05 13.03-9.82 21.68-23.93 21.68z"/>
      </svg>
    ),
  },
];

// ─── Static Grid Row ─────────────────────────────────────
function StaticGridRow({ items }: {
  items: typeof techs;
}) {
  return (
    <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-8">
      {items.map((tech, i) => (
        <TechCard key={i} tech={tech} index={i} />
      ))}
    </div>
  );
}

// ─── Individual Tech Card ─────────────────────────────────────
function TechCard({ tech, index }: { tech: typeof techs[0]; index: number }) {
  return (
    <motion.div
      className="group relative flex shrink-0 cursor-default flex-col items-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-6 py-5 backdrop-blur-sm transition-all"
      whileHover={{
        scale: 1.08,
        borderColor: `${tech.color}60`,
        backgroundColor: `${tech.color}12`,
        boxShadow: `0 0 24px ${tech.color}30`,
        y: -4,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Glow blob behind icon */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30"
        style={{ background: tech.color }}
      />
      {/* Icon */}
      <div
        className="relative transition-transform duration-300 group-hover:scale-110"
        style={{ color: tech.color }}
      >
        {tech.icon}
      </div>
      {/* Name */}
      <span className="relative text-xs font-semibold tracking-wide text-muted-foreground transition-colors duration-200 group-hover:text-foreground whitespace-nowrap">
        {tech.name}
      </span>
      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full opacity-0 group-hover:opacity-100"
        style={{ background: tech.color, width: "40%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────
const row1 = techs.slice(0, 8);
const row2 = techs.slice(8);

export default function TechStackSection() {
  const { t, language, isRtl } = useLanguage();

  return (
    <section className="relative overflow-hidden px-0 py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{ background: "oklch(0.68 0.22 280 / 6%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase">
            ⚡ {t("skills.title")}
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
            {language === 'en' ? (
              <>Technologies I <span className="gradient-text">Use</span></>
            ) : (
              <>تقنيات <span className="gradient-text">أستخدمها</span></>
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            {language === 'en' 
              ? "A curated set of modern tools and frameworks I rely on to build scalable, production-ready applications."
              : "مجموعة مختارة من الأدوات والأطر الحديثة التي أعتمد عليها لبناء تطبيقات قابلة للتطوير وجاهزة للإنتاج."
            }
          </p>
        </motion.div>
      </div>

      {/* Static grid rows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <StaticGridRow items={row1} />
        <StaticGridRow items={row2} />
      </motion.div>

      {/* Count badge */}
      <motion.div
        className={`mx-auto mt-12 mb-20 flex max-w-2xl items-center justify-center gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-5 flex-wrap md:flex-nowrap ${isRtl ? 'flex-row-reverse' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-center min-w-[100px]">
          <p className="text-3xl font-black text-primary">20+</p>
          <p className="text-xs text-muted-foreground mt-1">{language === 'en' ? 'Technologies' : 'تقنية'}</p>
        </div>
        <div className="hidden md:block h-10 w-px bg-border" />
        <div className="text-center min-w-[100px]">
          <p className="text-3xl font-black text-primary">3+</p>
          <p className="text-xs text-muted-foreground mt-1">{language === 'en' ? 'Years Experience' : 'سنوات خبرة'}</p>
        </div>
        <div className="hidden md:block h-10 w-px bg-border" />
        <div className="text-center min-w-[100px]">
          <p className="text-3xl font-black text-primary">10+</p>
          <p className="text-xs text-muted-foreground mt-1">{language === 'en' ? 'Projects Built' : 'مشروع مكتمل'}</p>
        </div>
        <div className="hidden md:block h-10 w-px bg-border" />
        <div className="text-center min-w-[100px]">
          <p className="text-3xl font-black text-primary">15+</p>
          <p className="text-xs text-muted-foreground mt-1">{language === 'en' ? 'Happy Clients' : 'عميل سعيد'}</p>
        </div>
      </motion.div>
    </section>
  );
}
