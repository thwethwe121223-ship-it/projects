"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle, ShieldCheck, Zap, BarChart3, Users, Target, Rocket, Database, Globe, Briefcase } from 'lucide-react';

const FullBIOSPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "BIOS AI",
      subtitle: "Business Diagnosis Platform",
      mm_text: "Strategic Operating System for Enterprises",
      content: "[Your Logo] | May 2026 | Presented by E-Speaker",
      type: "title"
    },
    {
      id: 2,
      title: "What is BIOS AI?",
      points: [
        "AI-powered business consultant tailored for SMEs",
        "24-question diagnosis → Health score → Action plan",
        "Chat-style interface (Eliminating complex dashboard clutter)",
        "Zero-knowledge privacy (Enterprise-grade security architecture)"
      ]
    },
    {
      id: 3,
      title: "The Problem We Solve",
      points: [
        "Myanmar SMEs represent 94% of total businesses",
        "Over 50% fail due to lack of strategic planning",
        "Absence of affordable AI strategy tools in the SEA market",
        "Manual business consultants are too expensive for small enterprises"
      ]
    },
    {
      id: 4,
      title: "How It Works (Flow)",
      steps: [
        { n: "1. Chat", d: "Answer 24 simple strategic questions" },
        { n: "2. Score", d: "Instant business health assessment" },
        { n: "3. Strategy", d: "Priority action recommendations" },
        { n: "4. Workflow", d: "Automated tasks to Notion or Slack" }
      ]
    },
    {
      id: 5,
      title: "Live Product Demo",
      isDemo: true,
      content: "[Screen Share: Chat Journey → Health Score → Strategy Preview]"
    },
    {
      id: 6,
      title: "Key Features",
      grid: [
        { icon: <Globe className="text-[#2DD4BF]" />, t: "Bilingual: English & Burmese support" },
        { icon: <Zap className="text-[#2DD4BF]" />, t: "Mobile-first & Rural-friendly UI" },
        { icon: <ShieldCheck className="text-[#2DD4BF]" />, t: "Zero-knowledge encryption" },
        { icon: <PlayCircle className="text-[#2DD4BF]" />, t: "HF model (Production Ready)" },
        { icon: <BarChart3 className="text-[#2DD4BF]" />, t: "n8n Automated success tracking" }
      ]
    },
    {
      id: 7,
      title: "Technology Stack",
      stack: [
        { label: "Frontend", val: "React / Next.js / Tailwind CSS" },
        { label: "Backend", val: "FastAPI + Hugging Face API" },
        { label: "Security", val: "AES-256 Encryption + TLS 1.3" },
        { label: "Infrastructure", val: "1CNG Myanmar Sovereign Cloud" }
      ]
    },
    {
      id: 8,
      title: "Beta Status & Metrics",
      metrics: [
        "✅ MVP Live (Chat Interface)",
        "🎯 50 Beta Users (May 2026 Target)",
        "📊 n8n Metrics Dashboard Live",
        "💰 $5,000 Revenue Pipeline"
      ]
    },
    {
      id: 9,
      title: "The BIOS Team",
      team: [
        { role: "Tech Lead", desc: "Backend & AI Model Optimization" },
        { role: "Frontend Dev", desc: "UI/UX & Mobile Responsiveness" },
        { role: "Business 1", desc: "Chinese / SEA Market Strategist" },
        { role: "Business 2", desc: "English Sales & Revenue Lead" },
        { role: "E-Speaker", desc: "Communication & PR Specialist" }
      ]
    },
    {
      id: 10,
      title: "Market Opportunity",
      points: [
        "Myanmar: 46k registered SMEs, $10B opportunity",
        "SEA: $100 Billion potential in digital transformation",
        "Perfect white-label fit for Accelerator programs & NGOs"
      ]
    },
    {
      id: 11,
      title: "Next Steps & Partnership",
      points: [
        "Public Launch: Scheduled for June 2026",
        "Data Needs: Local datasets & regional ecosystem maps",
        "Service Offer: Seamless diagnosis tool integration",
        "Strategic Ask: Europe investor introductions"
      ]
    },
    {
      id: 12,
      title: "Thank You",
      content: "Questions? | contact@biosai.chat",
      qr: "biosai.chat",
      type: "end"
    }
  ];

  const next = () => setCurrentSlide((p) => (p + 1) % slides.length);
  const prev = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-[#0D1117] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl aspect-video bg-white rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col text-[#1E293B]">
        
        {/* Top Progress Bar */}
        <div className="absolute top-0 left-0 h-2 bg-[#2DD4BF] transition-all duration-300" style={{ width: `${((currentSlide + 1) / 12) * 100}%` }} />

        {/* Slide Content Area */}
        <div className="flex-grow p-12 flex flex-col justify-center">
          
          {/* 1. Title/End Slide Layout */}
          {(slides[currentSlide].type === "title" || slides[currentSlide].type === "end") ? (
            <div className="text-center space-y-6">
              <h1 className="text-7xl font-black tracking-tight">{slides[currentSlide].title}</h1>
              <h2 className="text-3xl font-bold text-[#2DD4BF] uppercase tracking-widest">{slides[currentSlide].subtitle || slides[currentSlide].content}</h2>
              {slides[currentSlide].mm_text && <p className="text-2xl font-bold text-slate-400">{slides[currentSlide].mm_text}</p>}
              {slides[currentSlide].qr && (
                 <div className="mt-8 inline-block p-4 border-2 border-dashed border-slate-200 rounded-2xl">
                    <p className="text-[10px] font-black uppercase text-slate-300">Visit: {slides[currentSlide].qr}</p>
                 </div>
              )}
            </div>
          ) : (
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-center gap-4 border-b-2 border-slate-50 pb-6">
                <span className="text-4xl font-black text-[#2DD4BF]">0{slides[currentSlide].id}</span>
                <h2 className="text-4xl font-black tracking-tight">{slides[currentSlide].title}</h2>
              </div>

              {/* 2. Points Layout */}
              {slides[currentSlide].points && (
                <ul className="space-y-4">
                  {slides[currentSlide].points.map((p, i) => (
                    <li key={i} className="text-xl font-bold text-slate-600 flex gap-4">
                      <span className="text-[#2DD4BF] mt-1 shrink-0">●</span> {p}
                    </li>
                  ))}
                </ul>
              )}

              {/* 3. Workflow Steps */}
              {slides[currentSlide].steps && (
                <div className="grid grid-cols-4 gap-4">
                  {slides[currentSlide].steps.map((s, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="font-black text-[#2DD4BF] mb-2">{s.n}</p>
                      <p className="text-xs font-bold text-slate-400">{s.d}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* 4. Feature Grid */}
              {slides[currentSlide].grid && (
                <div className="grid grid-cols-2 gap-4">
                  {slides[currentSlide].grid.map((g, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                      {g.icon} <span className="font-bold text-slate-700">{g.t}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* 5. Tech Stack */}
              {slides[currentSlide].stack && (
                <div className="grid grid-cols-2 gap-4">
                  {slides[currentSlide].stack.map((st, i) => (
                    <div key={i} className="p-4 border-l-4 border-[#2DD4BF] bg-slate-50">
                      <p className="text-[10px] font-black uppercase text-[#2DD4BF] tracking-widest">{st.label}</p>
                      <p className="font-bold text-slate-700">{st.val}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* 6. Metrics & Team */}
              {(slides[currentSlide].metrics || slides[currentSlide].team) && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {(slides[currentSlide].metrics || slides[currentSlide].team).map((item: any, i: number) => (
                    <div key={i} className="p-4 bg-[#1E293B] text-white rounded-2xl">
                      <p className="text-[10px] font-black text-[#2DD4BF] uppercase mb-1">{item.role || "Key Metric"}</p>
                      <p className="text-sm font-bold">{item.desc || item}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* 7. Demo */}
              {slides[currentSlide].isDemo && (
                <div className="flex flex-col items-center justify-center p-12 bg-[#2DD4BF]/5 rounded-[2rem] border-2 border-dashed border-[#2DD4BF]">
                  <PlayCircle size={64} className="text-[#2DD4BF] mb-4 animate-pulse" />
                  <p className="text-xl font-black text-slate-400 uppercase tracking-widest text-center">{slides[currentSlide].content}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Controls */}
        <div className="p-8 flex justify-between items-center bg-slate-50/50">
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Slide {currentSlide + 1} / 12 — BIOS AI Confidential
          </div>
          <div className="flex gap-2">
            <button onClick={prev} className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-100 transition-all shadow-sm"><ChevronLeft size={20} /></button>
            <button onClick={next} className="p-3 bg-[#1E293B] text-white rounded-full hover:bg-[#2DD4BF] transition-all shadow-md"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBIOSPresentation;