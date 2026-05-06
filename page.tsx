"use client";
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const LeadDashboard = () => {
  // 5-Month Lead Roadmap Data
  const leadPlan = [
    { 
      month: "Month 1", 
      tech: "FastAPI setup, HF Model API, Docker containerize, MVP Deploy", 
      lead: "Team onboarding, Weekly standups, Notion setup", 
      prod: "MVP scope finalize, User stories write" 
    },
    { 
      month: "Month 2", 
      tech: "ZK encryption, Mod1 API endpoints, Basic auth/JWT", 
      lead: "Business team assignment, Frontend handover", 
      prod: "Beta feedback, Mod2 dataset prep" 
    },
    { 
      month: "Month 3", 
      tech: "Mod2 Backend, Priority ranking algorithm, PostgreSQL", 
      lead: "Investor plan review, Performance check", 
      prod: "Roadmap v1.0, Pricing tiers decide" 
    },
    { 
      month: "Month 4", 
      tech: "Mod2 API connect, Sentry/Prometheus monitoring", 
      lead: "Sales pipeline review, Chinese partner validation", 
      prod: "Customer interviews (10), Feature prioritization" 
    },
    { 
      month: "Month 5", 
      tech: "Production hardening (CI/CD), Security audit", 
      lead: "Launch coordination, Next dev hiring plan", 
      prod: "Go-to-market plan, Revenue dashboard" 
    },
  ];

  return (
    <main className="min-h-screen bg-[#0D1117] text-white font-sans">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-4 py-1 bg-[#00F2FF]/10 text-[#00F2FF] text-[10px] font-black rounded-full border border-[#00F2FF]/20 uppercase tracking-widest">
              Executive View
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase">
            Tech Lead <span className="text-[#00F2FF]">Command Center</span>
          </h1>
          <p className="text-white/50 font-medium max-w-2xl">
            Focusing on Technical Backbone, Team Coordination, and Product Vision for BIOS AI.
          </p>
        </div>

        {/* 1. Eisenhower Matrix (Priority Ranking) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="p-8 bg-white/5 border-l-4 border-red-500 rounded-3xl">
            <h4 className="text-red-500 font-black text-xs uppercase tracking-widest mb-4">Urgent + Important</h4>
            <p className="text-lg font-bold text-white/90">MVP Deploy & Team Alignment</p>
          </div>
          <div className="p-8 bg-white/5 border-l-4 border-[#00F2FF] rounded-3xl">
            <h4 className="text-[#00F2FF] font-black text-xs uppercase tracking-widest mb-4">Important + Not Urgent</h4>
            <p className="text-lg font-bold text-white/90">Mod2 Dataset & Investor Prep</p>
          </div>
        </div>

        {/* 2. 5-Month Leadership Roadmap Table */}
        <div className="bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden mb-20 shadow-2xl">
          <div className="p-8 border-b border-white/10 bg-white/5">
            <h2 className="text-2xl font-black tracking-tight uppercase text-[#00F2FF]">Strategic Execution Plan</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-white/40 text-[10px] font-black uppercase tracking-widest border-b border-white/10">
                  <th className="p-8">Timeline</th>
                  <th className="p-8 border-l border-white/5">Tech (40%)</th>
                  <th className="p-8 border-l border-white/5">Leadership (40%)</th>
                  <th className="p-8 border-l border-white/5">Product (20%)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {leadPlan.map((item, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-8 font-black text-[#00F2FF] whitespace-nowrap">{item.month}</td>
                    <td className="p-8 text-white/70 leading-relaxed border-l border-white/5">{item.tech}</td>
                    <td className="p-8 text-white/70 leading-relaxed border-l border-white/5">{item.lead}</td>
                    <td className="p-8 text-white/70 leading-relaxed border-l border-white/5">{item.prod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Weekly Task Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="md:col-span-2 p-10 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[3rem]">
            <h3 className="text-xl font-black mb-8 uppercase tracking-widest text-[#00F2FF]">Weekly Battle Rhythm</h3>
            <div className="space-y-6">
              {[
                { day: "Mon", task: "Team Standup + Daily Tech (4h)" },
                { day: "Tue", task: "Backend/Model Deep Work (6h)" },
                { day: "Wed", task: "Coordination + Tech Review (4h)" },
                { day: "Thu", task: "Product Planning + Deep Tech (5h)" },
                { day: "Fri", task: "Review/Demo + Weekly Planning" }
              ].map((w, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <span className="w-12 text-xs font-black text-white/30 uppercase group-hover:text-[#00F2FF] transition-colors">{w.day}</span>
                  <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-[#00F2FF]/30"></div>
                  <span className="text-sm font-bold text-white/80">{w.task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="p-10 bg-[#00F2FF] rounded-[3rem] text-[#0D1117]">
            <h3 className="text-xl font-black mb-6 uppercase tracking-tight">Key Assets</h3>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-black uppercase opacity-60">Tech Output</p>
                <p className="font-bold">API Docs, Docker Images</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase opacity-60">Leadership</p>
                <p className="font-bold">Notion Dashboard, Reports</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase opacity-60">Product</p>
                <p className="font-bold">User Stories, Pricing Model</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default LeadDashboard;