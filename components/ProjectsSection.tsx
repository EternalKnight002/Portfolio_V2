// /components/ProjectsSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const PROJECTS = [
  {
    id: 'repo-mind',
    title: 'Repo Mind',
    desc: 'A modern project hub showcasing repositories, previews, and tools all in one place.',
    img: '/images/repo-mind.png',
    github: 'https://github.com/EternalKnight002/repo-mind',
    live: '',
  },
  {
    id: 'student-productivity',
    title: 'Student Productivity App',
    desc: 'A mobile productivity suite for students: notes, planner, expenses & analytics. Built using Expo + React Native.',
    img: '/images/Student_productivity.jpg',
    github: 'https://github.com/EternalKnight002/student-productivity-app',
    live: 'https://student-productivity-app-landing-pa.vercel.app/',
  },
  {
    id: 'skillmatchai',
    title: 'SkillMatchAI',
    desc: 'An AI-powered resume screening system that ranks candidates based on job description matching.',
    img: '/images/ai_resume_screening.png',
    github: 'https://github.com/EternalKnight002/SkillMatchAI',
    live: '',
  },
  {
    id: 'extension-market',
    title: 'Extension Marketplace',
    desc: 'A curated marketplace showcasing browser & VS Code extensions with clean animations.',
    img: '/images/extension.png',
    github: 'https://github.com/EternalKnight002/extension-marketplace',
    live: 'https://extension-marketplace-pink.vercel.app/',
  },
  {
    id: 'terminal-history',
    title: 'Terminal History - VS Code Extension',
    desc: 'A VS Code extension that automatically logs terminal output for quick copying & debugging.',
    img: '/images/terminal_history.png',
    github: 'https://github.com/EternalKnight002/terminalHistory',
    live: '',
  },
  {
    id: 'music-sync',
    title: 'Music Sync',
    desc: 'A synchronized audio playback app using WebRTC + a signaling server for multi-device sync.',
    img: '/images/music-sync.png',
    github: 'https://github.com/EternalKnight002/music-sync',
    live: 'https://music-sync-web.vercel.app/',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 container">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <p className="mt-2 text-gray-400 max-w-2xl">
        A quick look at my favourite builds.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <motion.article
            key={p.id}
            className="rounded-lg bg-panel p-4 project-card overflow-hidden"
            whileHover={{ translateY: -8 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          >
            <div className="rounded-md overflow-hidden">
              <div className="w-full h-44 relative">
                <Image src={p.img} alt={p.title} fill className="object-cover" />
              </div>
            </div>

            <h3 className="mt-4 font-semibold text-lg text-white">{p.title}</h3>

            <p className="mt-2 text-gray-300 text-sm leading-relaxed line-clamp-3">
              {p.desc}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <a
                href={p.live || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition ${
                  p.live ? 'bg-accent text-black hover:brightness-95' : 'bg-white/5 text-gray-300 cursor-not-allowed opacity-60'
                }`}
                onClick={(e) => !p.live && e.preventDefault()}
              >
                <FiExternalLink className="w-4 h-4" />
                <span>{p.live ? 'Live' : 'Coming Soon'}</span>
              </a>

              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-black/10 hover:bg-black/20 transition text-gray-100"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
