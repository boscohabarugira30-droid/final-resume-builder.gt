"use client";
import React from "react";
import { User } from "lucide-react";

export default function FloatingResume({ name, role, color, delay, type }: { name: string, role: string, color: string, delay: string, type: string }) {
  return (
    <div className={`w-48 h-64 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col p-3 animate-bounce-slow ${delay} hover:scale-110 transition-transform cursor-pointer`}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
          <User size={20} className="text-slate-400" />
        </div>
        <div className="overflow-hidden">
          <p className="text-[8px] font-black truncate">{name}</p>
          <p className="text-[6px] font-bold text-slate-400 truncate uppercase tracking-tighter">{role}</p>
        </div>
      </div>
      <div className="space-y-2 flex-1">
        <div className="h-[2px] w-full bg-slate-100" />
        <div className="space-y-1">
          <div className="h-[4px] w-3/4 bg-slate-100 rounded" />
          <div className="h-[4px] w-full bg-slate-100 rounded" />
        </div>
        <div className="pt-2 grid grid-cols-2 gap-1">
          <div className="h-6 rounded bg-slate-50 border border-slate-100 flex flex-col p-1">
             <div className="h-[2px] w-1/2 bg-blue-200 mb-1" />
             <div className="h-[2px] w-full bg-slate-100" />
          </div>
          <div className="h-6 rounded bg-slate-50 border border-slate-100 flex flex-col p-1">
             <div className="h-[2px] w-1/2 bg-green-200 mb-1" />
             <div className="h-[2px] w-full bg-slate-100" />
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-between items-center pt-2 border-t border-slate-50">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
          <div className="w-6 h-1 bg-slate-100 rounded-full" />
        </div>
        <div className="text-[5px] font-black text-slate-300">BOSCO.AI</div>
      </div>
    </div>
  );
}