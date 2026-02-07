import React from "react";
import { Mail, Phone } from "lucide-react";

export default function ResumeRenderer({ data, template, themeColor, photo }: any) {
  return (
    <div id="resume-document" className="w-[210mm] min-h-[297mm] bg-white shadow-2xl flex flex-col print-bg overflow-hidden print:shadow-none">
      
      {/* CORPORATE & GRID LAYOUT */}
      {template === 'corporate' || template === 'grid' ? (
        <div className="p-16 space-y-8 flex-1">
          <div className="text-center space-y-4 border-b pb-8">
            {photo && <img src={photo} className="w-28 h-28 rounded-full mx-auto border-4 border-slate-100 object-cover" alt="Profile" />}
            <h1 className="text-5xl font-black uppercase tracking-tighter leading-none">{data.name}</h1>
            <p className="font-bold uppercase tracking-widest" style={{ color: themeColor }}>{data.role}</p>
            <div className="flex justify-center gap-6 text-[10px] font-bold text-slate-400">
              <span className="flex items-center gap-1"><Mail size={10} /> {data.email}</span>
              <span className="flex items-center gap-1"><Phone size={10} /> {data.phone}</span>
            </div>
          </div>
          <div className={template === 'grid' ? 'grid grid-cols-2 gap-10' : 'space-y-8'}>
            <section>
              <h3 className="text-xs font-black uppercase border-b-2 pb-1 mb-4" style={{ borderColor: themeColor }}>Experience</h3>
              <div className="text-[11px] text-slate-700 whitespace-pre-wrap leading-relaxed">{data.experience}</div>
            </section>
          </div>
        </div>
      ) : template === 'split' ? (
        /* SPLIT LAYOUT */
        <div className="flex-1 flex flex-col">
          <div className="text-white p-16 flex justify-between items-center print-bg" style={{ backgroundColor: themeColor }}>
            <div><h1 className="text-6xl font-black tracking-tighter uppercase leading-none">{data.name}</h1><p className="font-bold uppercase mt-2 opacity-80">{data.role}</p></div>
            {photo && <img src={photo} className="w-32 h-32 rounded-2xl border-4 border-white/10 object-cover" alt="Profile" />}
          </div>
          <div className="p-16 grid grid-cols-3 gap-12 bg-white flex-1">
            <div className="col-span-2">
              <div className="text-[11px] text-slate-700 whitespace-pre-wrap leading-loose border-l-2 pl-6" style={{ borderColor: themeColor }}>{data.experience}</div>
            </div>
            <div className="space-y-4 text-[10px] text-slate-500">
              <p>{data.email}</p><p>{data.phone}</p>
            </div>
          </div>
        </div>
      ) : (
        /* RICHARD / DEFAULT LAYOUT */
        <div className="flex-1 flex">
          <div className={`w-[35%] p-10 text-white space-y-8 print-bg`} style={{ backgroundColor: themeColor }}>
            {photo && <div className="w-32 h-32 rounded-full border-4 border-white/10 mx-auto overflow-hidden"><img src={photo} className="w-full h-full object-cover" alt="Profile" /></div>}
            <div className="text-[10px] space-y-3 opacity-90"><p>{data.email}</p><p>{data.phone}</p></div>
          </div>
          <div className="flex-1 p-16 bg-white">
            <h1 className="text-6xl font-black uppercase tracking-tighter text-slate-900 leading-none">{data.name}</h1>
            <p className="text-sm font-bold uppercase tracking-[0.5em] mt-6" style={{ color: themeColor }}>{data.role}</p>
            <div className="mt-12 text-[11px] text-slate-700 whitespace-pre-wrap leading-loose font-medium">{data.experience}</div>
          </div>
        </div>
      )}
    </div>
  );
}