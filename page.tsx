"use client";
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const BusinessDashboard = () => {
  // နင်ပေးထားတဲ့ Business Plan အချက်အလက်များ
  const businessPlan = [
    { 
      month: "Month 1 (Prep)", 
      intl: "China/Myanmar SME research (LinkedIn/WeChat)၊ English competitor analysis (Strategyzer/Quantive)", 
      local: "Myanmar SME database (500 companies)၊ English FB/LinkedIn groups outreach" 
    },
    { 
      month: "Month 2 (Beta)", 
      intl: "Chinese/English beta users recruit (20 total)၊ Bilingual materials create", 
      local: "English beta signup form + landing page content၊ FB/IG ads (English/Myanmar)" 
    },
    { 
      month: "Month 3 (Launch)", 
      intl: "China partner emails (English/Chinese)၊ English investor outreach (Y Combinator SEA, METF)", 
      local: "Myanmar startup events attend (English pitch)၊ Leads qualify" 
    },
    { 
      month: "Month 4 (Sales)", 
      intl: "English/Chinese pricing proposals၊ Intl contracts draft", 
      local: "English sales calls (30/week)၊ Demo scheduling + follow-up" 
    },
    { 
      month: "Month 5 (Scale)", 
      intl: "China market report (English)၊ Global expansion plan", 
      local: "English testimonials collect၊ Revenue dashboard update" 
    },
  ];

  return (
    <main className="min-h-screen bg-[#0D1117] text-white font-sans">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-[#00F2FF] pl-6">
          <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase">
            Business <span className="text-[#00F2FF]">Strategy Dashboard</span>
          </h1>
          <p className="text-white/60 font-medium tracking-widest uppercase text-sm">
            Focus: Market research → Beta users → Sales pipeline
          </p>
        </div>

        {/* Team Roles Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-[#00F2FF]/30 transition-all">
            <h3 className="text-[#00F2FF] font-black uppercase tracking-widest mb-4">Lead 1: Intl Market</h3>
            <p className="text-xl font-bold mb-4 italic">Chinese + English Fluent</p>
            <div className="space-y-2 text-white/50 text-sm">
              <p>• China/Myanmar Market Validation</p>
              <p>• Strategic Competitor Analysis</p>
              <p>• International Investor Outreach</p>
            </div>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-[#00F2FF]/30 transition-all">
            <h3 className="text-[#00F2FF] font-black uppercase tracking-widest mb-4">Lead 2: Local Market</h3>
            <p className="text-xl font-bold mb-4 italic">English Fluent (Sales Focus)</p>
            <div className="space-y-2 text-white/50 text-sm">
              <p>• Myanmar SME Database Management</p>
              <p>• FB/LinkedIn Group Outreach</p>
              <p>• High-Volume Sales & Demos</p>
            </div>
          </div>
        </div>

        {/* Execution Roadmap Table */}
        <div className="bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden mb-16 shadow-2xl shadow-black">
          <div className="p-8 border-b border-white/10 bg-white/5 flex justify-between items-center">
            <h2 className="text-2xl font-black tracking-tight uppercase">5-Month Execution Roadmap</h2>
            <span className="px-4 py-1 bg-[#00F2FF]/10 text-[#00F2FF] text-[10px] font-black rounded-full border border-[#00F2FF]/20">STRATEGIC PLAN</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[#00F2FF] text-[10px] font-black uppercase tracking-[0.2em] border-b border-white/10 bg-white/5">
                  <th className="p-8">Timeline</th>
                  <th className="p-8">International (China/English)</th>
                  <th className="p-8">Local (Myanmar Business)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {businessPlan.map((item, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-[#00F2FF]/5 transition-colors group">
                    <td className="p-8 font-black text-[#00F2FF] whitespace-nowrap">{item.month}</td>
                    <td className="p-8 text-white/80 leading-relaxed font-medium border-l border-white/5">{item.intl}</td>
                    <td className="p-8 text-white/80 leading-relaxed font-medium border-l border-white/5">{item.local}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Operational Tools Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "CRM", tool: "Notion CRM", desc: "Lead Management" },
            { title: "Leads", tool: "Google Sheets", desc: "Real-time Database" },
            { title: "Visuals", tool: "Canva Deck", desc: "Pitch Presentations" },
            { title: "Reporting", tool: "Weekly Report", desc: "Progress Tracking" },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2rem] text-center hover:-translate-y-1 transition-all">
              <p className="text-[10px] font-black text-[#00F2FF] uppercase tracking-widest mb-2">{item.title}</p>
              <h4 className="text-lg font-bold mb-1">{item.tool}</h4>
              <p className="text-xs text-white/40">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default BusinessDashboard;