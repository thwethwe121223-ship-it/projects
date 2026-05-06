"use client";
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const PartnerMeetingDashboard = () => {
  // 1. Team Briefing Script Data
  const teamRoles = [
    { role: "Business 1 (CN/EN)", task: "Market research + Thailand SME data" },
    { role: "Business 2 (EN)", task: "Pricing tiers + revenue projections" },
    { role: "Tech Lead (You)", task: "MVP demo + HF model explanation" },
    { role: "Frontend Dev", task: "UI demo + beta metrics" },
    { role: "E-Speaker", task: "10-slide pitch deck presentation" },
  ];

  // 2. Pre-Launch Checklist Data
  const checklist = [
    { item: "MVP chat live", status: "Ready", owner: "Tech Lead", notes: "HF model + 24Q flow" },
    { item: "Beta Traction", status: "Target 50", owner: "Business", notes: "May metrics" },
    { item: "Market Data", status: "Verified", owner: "Business 1", notes: "94% SME failure rate" },
    { item: "Legal Compliance", status: "Done", owner: "Business 2", notes: "ZK encryption ready" },
    { item: "Pitch Deck", status: "Finalizing", owner: "E-Speaker", notes: "Ready by Wednesday" },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="mb-16 bg-[#1E293B] p-12 rounded-[3rem] text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              Thailand Partner <span className="text-[#2DD4BF]">Meeting Prep</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Goal: Secure tools/datasets + Europe investor intros for BIOS AI expansion into SEA.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2DD4BF]/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </div>

        {/* 1. Team Briefing & Action Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-widest text-[#2DD4BF] border-b-2 border-[#2DD4BF] inline-block mb-4">Team Update</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teamRoles.map((role, i) => (
                <div key={i} className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:border-[#2DD4BF] transition-all">
                  <p className="text-[10px] font-black text-[#2DD4BF] uppercase mb-1">{role.role}</p>
                  <p className="text-sm font-bold text-slate-700">{role.task}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 bg-[#2DD4BF]/5 border border-[#2DD4BF]/20 rounded-[3rem]">
            <h3 className="font-black mb-6 uppercase text-sm">Action Timeline</h3>
            <ul className="space-y-4 text-xs font-bold text-slate-600">
              <li className="flex gap-3"><span className="text-[#2DD4BF]">MON:</span> Financial Projections</li>
              <li className="flex gap-3"><span className="text-[#2DD4BF]">TUE:</span> Live Demo Script</li>
              <li className="flex gap-3"><span className="text-[#2DD4BF]">WED:</span> Pitch Deck Finalize</li>
              <li className="flex gap-3"><span className="text-[#2DD4BF]">THU:</span> Review Checklist</li>
              <li className="flex gap-3"><span className="text-[#2DD4BF]">FRI:</span> Zoom Schedule</li>
            </ul>
          </div>
        </div>

        {/* 2. Pre-Launch Checklist Table */}
        <div className="mb-20">
          <h2 className="text-2xl font-black uppercase tracking-widest text-[#2DD4BF] mb-8">Pre-Launch Checklist</h2>
          <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-xl">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
                  <th className="p-8">Checklist Item</th>
                  <th className="p-8">Status</th>
                  <th className="p-8">Owner</th>
                  <th className="p-8">Notes</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {checklist.map((item, i) => (
                  <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="p-8 font-black text-slate-800">{item.item}</td>
                    <td className="p-8">
                      <span className="px-3 py-1 bg-[#2DD4BF]/10 text-[#2DD4BF] rounded-full text-[10px] font-black uppercase border border-[#2DD4BF]/20">
                        {item.status}
                      </span>
                    </td>
                    <td className="p-8 font-bold text-slate-500">{item.owner}</td>
                    <td className="p-8 text-slate-400 italic">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Pitch Deck Preview (10 Slides) */}
        <div>
          <h2 className="text-2xl font-black uppercase tracking-widest text-[#2DD4BF] mb-8">Pitch Deck Summary (10 Slides)</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              "Title: BIOS AI - SEA SME Diagnosis",
              "Problem: 94% SME Failure Rate",
              "Solution: AI Strategy Workflow",
              "Demo: Live Chat → Score",
              "Market: $100B SEA SME Opportunity",
              "Status: MVP Live + 50 Users",
              "Traction: $5k Target Pipeline",
              "Model: Freemium + $29-99 Tiers",
              "Partnership Ask: Dataset + Investors",
              "Contact: Global Launch Ready"
            ].map((slide, i) => (
              <div key={i} className="aspect-video bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer shadow-sm">
                <span className="text-[10px] font-black text-slate-300">SLIDE 0{i+1}</span>
                <p className="text-[14px] font-black text-slate-700 leading-tight">
                  {/* မြန်မာစာသားများအတွက် font-size ကြီးကြီးသုံးထားပါတယ် */}
                  <span className="block text-[#2DD4BF] mb-1">BIOS AI</span>
                  {slide}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Burmese Instruction Note */}
        <div className="mt-16 p-8 bg-white border border-slate-100 rounded-[3rem] text-center">
            <p className="text-2xl font-black text-[#1E293B] mb-2 leading-relaxed">
            </p>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
              Practice: 7 Min Presentation | Backup: PDF + Video Demo
            </p>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default PartnerMeetingDashboard;