"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
    DiDatabase,
    DiAndroid,
    DiReact,
    DiStackoverflow,
} from "react-icons/di";
import { BiTerminal, BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import React from "react";

// Import images (ensure public directory is mapped correctly)
import z2 from "../../public/zavod/2.jpg";
import c6 from "../../public/capstone/6.png";
import pythonPNG from "../../public/certificates/python.png";
import cloudPNG from "../../public/certificates/cloud.png";

const SOCIAL_LINKS = [
    { icon: <AiFillLinkedin />, href: "https://www.linkedin.com/in/jose-alfred-magat-188705239", color: "hover:text-brand-blue" },
    { icon: <AiFillGithub />, href: "https://github.com/phase-sys", color: "hover:text-brand-pear" },
    { icon: <DiStackoverflow />, href: "https://stackoverflow.com/users/18588468/isphaseshape", color: "hover:text-brand-coral" },
];

const SERVICES = [
    {
        title: "Mobile Ecosystems",
        desc: "High-performance native Android apps designed for customer engagement and seamless mobile accessibility.",
        icon: <DiAndroid />,
        color: "brand-blue",
        stack: "Kotlin • Jetpack Compose"
    },
    {
        title: "Scalable Web Platforms",
        desc: "Robust web applications and internal portals that automate workflows and manage complex data securely.",
        icon: <DiReact />,
        color: "brand-pear",
        stack: "React • Next.js • Python"
    },
    {
        title: "Enterprise Desktop Tools",
        desc: "Mission-critical Windows applications tailored for industrial and administrative environments.",
        icon: <BiTerminal />,
        color: "brand-emerald",
        stack: "C# • Java • .NET"
    }
];

export default function Home() {
    return (
        <div className="min-h-screen bg-bg-dark text-white selection:bg-brand-pear selection:text-bg-dark font-sans overflow-x-hidden">
            {/* Background Grain/Noise Effect */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>

            <main className="relative z-10 flex flex-col gap-24 px-6 md:px-24 lg:px-48 py-10">
                
                {/* HERO SECTION */}
                <section id="hero" className="min-h-[90vh] flex flex-col relative">
                    <nav className="py-8 flex justify-between items-center relative z-20">
                        <div className="group cursor-default">
                             <h1 className="text-2xl font-black tracking-tighter text-brand-pear flex items-center gap-1">
                                <span className="inline-block w-3 h-3 bg-brand-pear rounded-full animate-pulse"></span>
                                isPhaseShape
                             </h1>
                        </div>
                        <ul className="flex items-center gap-8">
                            <li><a href="#portfolio" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Work</a></li>
                            <li><a href="#services" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Services</a></li>
                            <li>
                                <a
                                    className="text-sm font-bold bg-brand-pear text-bg-dark px-6 py-2.5 rounded-full hover:scale-105 transition-all shadow-lg shadow-brand-pear/20"
                                    href="/resume.pdf"
                                    target="_blank"
                                >
                                    Resumé
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex-1 flex flex-col justify-center max-w-5xl relative">
                        {/* Decorative Background Glows */}
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-pear/10 blur-[120px] rounded-full"></div>
                        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full translate-y-[-50%]"></div>

                        <div className="mb-8 inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand-pear/10 bg-brand-pear/5 text-brand-pear text-[10px] font-black uppercase tracking-[0.2em] leading-none">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pear opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pear"></span>
                            </span>
                            Now Booking for Q2 2026
                        </div>

                        <h2 className="text-6xl md:text-8xl font-black leading-[0.95] mb-8 tracking-tighter mix-blend-plus-lighter">
                            Engineering <span className="text-brand-pear">Digital</span><br/>Infrastructure.
                        </h2>
                        
                        <p className="text-xl md:text-2xl text-white/50 leading-relaxed mb-12 max-w-3xl font-medium">
                            I streamline business operations with custom cross-platform software. Empowering enterprise teams through high-impact Web, Mobile, and Desktop development.
                        </p>
                        
                        <div className="flex flex-wrap gap-6 items-center">
                            <a 
                                href="mailto:contact@example.com"
                                className="group px-10 py-5 bg-brand-pear text-bg-dark font-black text-sm uppercase tracking-widest rounded-2xl hover:translate-y-[-4px] transition-all flex items-center gap-2 shadow-2xl shadow-brand-pear/30"
                            >
                                Discuss Your Project
                                <BiRightArrowAlt className="text-xl group-hover:translate-x-1 transition-transform" />
                            </a>
                            <div className="flex gap-6 text-2xl text-white/30 ml-4">
                                {SOCIAL_LINKS.map((link, i) => (
                                    <a key={i} href={link.href} target="_blank" className={`${link.color} transition-all hover:scale-110`}>
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto py-10 flex flex-col md:flex-row justify-between items-center border-t border-white/5 gap-6">
                        <div className="flex gap-12">
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Solutions Provided</span>
                                <span className="text-white/80 font-medium">Internal Tools, Customer Apps</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Focus</span>
                                <span className="text-white/80 font-medium">Automation & Scalability</span>
                            </div>
                        </div>
                        <a href="#services" className="text-xs font-black uppercase tracking-[0.2em] text-brand-pear animate-bounce">Scroll to Explore ↓</a>
                    </div>
                </section>

                {/* SERVICES SECTION */}
                <section id="services" className="scroll-mt-24">
                    <div className="mb-16">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-pear mb-4">Core Competencies</h3>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Strategic Solutions.</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map((s, i) => (
                            <div key={i} className="glass-card p-10 rounded-[2.5rem] group hover:bg-white/[0.03] transition-all relative overflow-hidden">
                                <div className={`absolute -right-8 -bottom-8 text-8xl opacity-[0.03] group-hover:opacity-[0.08] transition-all group-hover:rotate-12`}>
                                    {s.icon}
                                </div>
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-all`}>
                                    {React.cloneElement(s.icon as React.ReactElement, { className: `text-${s.color}` })}
                                </div>
                                <h4 className="text-2xl font-bold mb-4 tracking-tight">{s.title}</h4>
                                <p className="text-white/40 leading-relaxed mb-8 text-sm">{s.desc}</p>
                                <span className={`text-[10px] font-black uppercase tracking-widest text-${s.color}`}>{s.stack}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PORTFOLIO SECTION */}
                <section id="portfolio" className="scroll-mt-24">
                    <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-emerald mb-4">Enterprise Experience</h3>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-shadow-glow">Critical Work.</h2>
                        </div>
                        <a href="https://github.com/phase-sys" target="_blank" className="group text-sm font-bold text-brand-pear flex items-center gap-2">
                            Explore Repository
                            <BiRightArrowAlt className="text-xl group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* PFDA Project */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden glass-card mb-10 group-hover:shadow-2xl group-hover:shadow-brand-emerald/10 transition-all duration-500">
                                <Image
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    fill
                                    src={z2}
                                    alt="PFDA Windows Application"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/95 via-bg-dark/20 to-transparent p-12 flex flex-col justify-end">
                                    <div className="flex gap-3 mb-4">
                                        <span className="text-[8px] font-black uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full border border-white/10 text-white/60">Desktop Infra</span>
                                        <span className="text-[8px] font-black uppercase tracking-widest px-3 py-1 bg-brand-emerald/20 rounded-full border border-brand-emerald/20 text-brand-emerald">Government Standard</span>
                                    </div>
                                    <h4 className="text-3xl font-black tracking-tighter mb-2">PFDA Internal Infrastructure</h4>
                                    <p className="text-white/50 text-sm line-clamp-2 max-w-md">Critical mission-critical application designed to digitize administrative workflows for the Philippine Fisheries Development Authority.</p>
                                </div>
                            </div>
                        </div>

                        {/* Capstone Project */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden glass-card mb-10 group-hover:shadow-2xl group-hover:shadow-brand-blue/10 transition-all duration-500">
                                <Image
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    fill
                                    src={c6}
                                    alt="Capstone Project"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/95 via-bg-dark/20 to-transparent p-12 flex flex-col justify-end">
                                    <div className="flex gap-3 mb-4">
                                        <span className="text-[8px] font-black uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full border border-white/10 text-white/60">Full-Stack Auth</span>
                                        <span className="text-[8px] font-black uppercase tracking-widest px-3 py-1 bg-brand-blue/20 rounded-full border border-brand-blue/20 text-brand-blue">Automated Ops</span>
                                    </div>
                                    <h4 className="text-3xl font-black tracking-tighter mb-2">System Automation Engine</h4>
                                    <p className="text-white/50 text-sm line-clamp-2 max-w-md">Scalable architecture prioritizing user-intuitive design for enterprise-level data coordination.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CERTIFICATES & FOOTER */}
                <section id="validation" className="pb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                        <div className="lg:col-span-1">
                             <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-coral mb-4">Verified Expertise</h3>
                             <h2 className="text-4xl font-black tracking-tighter mb-6">Industry Certification.</h2>
                             <p className="text-white/40 leading-relaxed mb-8">Professional validation across cloud infrastructure and modern software architectures.</p>
                             <div className="flex gap-4">
                                <div className="w-12 h-1 px-1 bg-brand-coral/30"></div>
                                <div className="w-4 h-1 px-1 bg-brand-coral/10"></div>
                             </div>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-2 gap-8">
                            <div className="glass-card aspect-[4/3] rounded-[2rem] overflow-hidden group relative">
                               <Image className="object-cover transition-transform duration-700 opacity-40 group-hover:opacity-100 group-hover:scale-105" fill src={pythonPNG} alt="Python Certificate" />
                            </div>
                            <div className="glass-card aspect-[4/3] rounded-[2rem] overflow-hidden group relative">
                               <Image className="object-cover transition-transform duration-700 opacity-40 group-hover:opacity-100 group-hover:scale-105" fill src={cloudPNG} alt="Cloud Certificate" />
                            </div>
                        </div>
                    </div>
                </section>
                
                <footer className="pt-24 pb-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col gap-2 cursor-default">
                        <div className="text-white/20 text-[8px] font-black uppercase tracking-[0.5em]">
                            Est. 2026 • isPhaseShape Engineering
                        </div>
                        <div className="text-white/40 text-xs tracking-tight">
                            Streamlining global operations through custom software.
                        </div>
                    </div>
                    
                    <a 
                        href="mailto:contact@example.com"
                        className="group flex flex-col items-end gap-1"
                    >
                        <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold group-hover:text-brand-pear transition-colors">Start a Project</span>
                        <div className="flex items-center gap-4 text-brand-pear font-black text-xl tracking-tighter">
                            <span>Get a Technical Audit</span>
                            <div className="w-16 h-[2px] bg-brand-pear/20 group-hover:w-24 group-hover:bg-brand-pear transition-all duration-500"></div>
                        </div>
                    </a>
                </footer>
            </main>
        </div>
    );
}
