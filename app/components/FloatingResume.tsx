import React from "react";
import { User } from "lucide-react";

interface FloatingProps {
  name: string;
  role: string;
  color: string;
  delay: string;
}

export default function FloatingResume({ name, role, color, delay }: FloatingProps) {
  return (
    <div className={`w-32 h-44 md:w-48 md:h-64 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col p-3 animate-bounce-slow ${delay} hover:scale-110 transition-transform cursor-pointer`}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
          <User size={14} className="text-slate-400" />
        </div>
        <div className="overflow-hidden">
          <p className="text-[6px] md:text-[8px] font-black truncate">{name}</p>
          <p className="text-[5px] md:text-[6px] font-bold text-slate-400 truncate uppercase tracking-tighter">{role}</p>
        </div>
      </div>
      <div className="space-y-2 flex-1">
        <div className="h-[1px] md:h-[2px] w-full bg-slate-100" />
        <div className="space-y-1">
          <div className="h-[3px] md:h-[4px] w-3/4 bg-slate-100 rounded" />
          <div className="h-[3px] md:h-[4px] w-full bg-slate-100 rounded" />
        </div>
      </div>
      <div className="mt-2 flex justify-between items-center pt-2 border-t border-slate-50">
        <div className="flex gap-1">
          <div className="w-1 h-1 md:w-2 md:h-2 rounded-full" style={{ backgroundColor: color }} />
        </div>
        <div className="text-[4px] md:text-[5px] font-black text-slate-300 uppercase">BOSCO.H</div>
      </div>
    </div>
  );
}