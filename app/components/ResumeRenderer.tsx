"use client";
import React from "react";
import { Mail, Phone, Globe, Award } from "lucide-react";

export default function ResumeRenderer({ data, template, themeColor, photo }: any) {
  return (
    <div id="resume-document" className="w-[210mm] min-h-[297mm] bg-white shadow-2xl flex flex-col print-bg">
      {template === 'corporate' || template === 'grid' ? (
        <div className="p-16 space-y-8 flex-1">
           <div className="text-center space-y-4 border-b pb-8">
             {photo && <img src={photo} className="w-28 h-28 rounded-full mx-auto border-4 border-slate-100 object-cover" alt="Profile" />}
             <h1 className="text-5xl font-black uppercase tracking-tighter leading-none">{data.name}</h1>
             <p className="font-bold uppercase tracking-widest" style={{color: themeColor}}>{data.role}</p>
             <div className="flex justify-center gap-6 text-[10px] font-bold text-slate-400">
               <span className="flex items-center gap-1"><Mail size={10}/> {data.email}</span>
               <span className="flex items-center gap-1"><Phone size={10}/> {data.phone}</span>
               <span className="flex items-center gap-1 uppercase"><Globe size={10}/> {data.linkedin}</span>
             </div>
           </div>
           <div className={template === 'grid' ? 'grid grid-cols-2 gap-10' : 'space-y-8'}>
             <section>
               <h3 className="text-xs font-black uppercase border-b-2 pb-1 mb-4" style={{borderColor: themeColor}}>Summary</h3>
               <p className="text-[11px] text-slate-600 leading-relaxed italic">{data.summary}</p>
             </section>
             <section>
               <h3 className="text-xs font-black uppercase border-b-2 pb-1 mb-4" style={{borderColor: themeColor}}>Experience</h3>
               <div className="text-[11px] text-slate-700 whitespace-pre-wrap leading-relaxed">{data.experience}</div>
             </section>
             <section>
               <h3 className="text-xs font-black uppercase border-b-2 pb-1 mb-4" style={{borderColor: themeColor}}>Details</h3>
               <div className="grid grid-cols-2 gap-4 text-[11px] text-slate-600">
                 <div><p className="font-bold text-slate-900 uppercase text-[9px]">Skills:</p>{data.skills}</div>
                 <div><p className="font-bold text-slate-900 uppercase text-[9px]">Education:</p>{data.education}</div>
               </div>
             </section>
           </div>
        </div>
      ) : template === 'split' ? (
        <div className="flex-1 flex flex-col">
           <div className="text-white p-16 flex justify-between items-center print-bg shadow-lg" style={{backgroundColor: themeColor}}>
              <div>
                <h1 className="text-6xl font-black tracking-tighter uppercase leading-none">{data.name}</h1>
                <p className="font-bold uppercase tracking-[0.3em] mt-2 opacity-80">{data.role}</p>
              </div>
              {photo && <img src={photo} className="w-32 h-32 rounded-2xl border-4 border-white/10 object-cover shadow-2xl" alt="Profile" />}
           </div>
           <div className="p-16 grid grid-cols-3 gap-12 bg-white flex-1">
              <div className="col-span-2 space-y-10">
                <section>
                   <h3 className="text-xs font-black uppercase mb-4 tracking-widest" style={{color: themeColor}}>Professional Experience</h3>
                   <div className="text-[11px] text-slate-700 whitespace-pre-wrap leading-loose border-l-2 pl-6" style={{borderColor: themeColor}}>{data.experience}</div>
                </section>
              </div>
              <div className="space-y-8">
                <section className="space-y-2 text-[10px] text-slate-500">
                   <p className="flex items-center gap-2 font-bold"><Mail size={12}/> {data.email}</p>
                   <p className="flex items-center gap-2 font-bold"><Phone size={12}/> {data.phone}</p>
                   <p className="flex items-center gap-2 truncate font-bold uppercase"><Globe size={12}/> {data.linkedin}</p>
                </section>
                <section>
                   <h3 className="text-[10px] font-black uppercase mb-3 border-b pb-1 tracking-tighter">Expertise</h3>
                   <p className="text-[10px] text-slate-500 font-medium">{data.skills}</p>
                </section>
                <section>
                   <h3 className="text-[10px] font-black uppercase mb-3 border-b pb-1 tracking-tighter">Languages</h3>
                   <p className="text-[10px] text-slate-500 font-medium">{data.languages}</p>
                </section>
              </div>
           </div>
        </div>
      ) : (
        <div className="flex-1 flex">
          <div className={`w-[35%] p-10 text-white space-y-8 print-bg shadow-inner`} style={{backgroundColor: themeColor}}>
             {photo && <div className="w-32 h-32 rounded-full border-4 border-white/10 mx-auto overflow-hidden shadow-2xl"><img src={photo} className="w-full h-full object-cover" alt="Profile" /></div>}
             <section className="space-y-4">
               <h3 className="text-[10px] font-black uppercase border-b border-white/20 pb-1 tracking-[0.2em] opacity-80">Contact</h3>
               <div className="text-[10px] space-y-3 opacity-90">
                 <p className="flex items-center gap-3"><Mail size={12}/> {data.email}</p>
                 <p className="flex items-center gap-3"><Phone size={12}/> {data.phone}</p>
                 <p className="flex items-center gap-3 truncate uppercase tracking-tighter"><Globe size={12}/> {data.linkedin}</p>
               </div>
             </section>
             <section className="space-y-4">
               <h3 className="text-[10px] font-black uppercase border-b border-white/20 pb-1 tracking-[0.2em] opacity-80">Skills</h3>
               <p className="text-[10px] leading-relaxed font-medium">{data.skills}</p>
             </section>
             <section className="space-y-4">
               <h3 className="text-[10px] font-black uppercase border-b border-white/20 pb-1 tracking-[0.2em] opacity-80">Languages</h3>
               <p className="text-[10px] leading-relaxed font-medium">{data.languages}</p>
             </section>
          </div>
          <div className="flex-1 p-16 bg-white">
             <div className="mb-12">
               <h1 className="text-6xl font-black uppercase tracking-tighter text-slate-900 leading-none">{data.name}</h1>
               <p className="text-sm font-bold uppercase tracking-[0.5em] mt-6" style={{color: themeColor}}>{data.role}</p>
             </div>
             <div className="space-y-12">
               <section><h2 className="text-[10px] font-black uppercase text-slate-300 tracking-[0.3em] border-b pb-2 mb-4">Summary</h2><p className="text-[11px] text-slate-600 italic leading-relaxed font-medium">{data.summary}</p></section>
               <section><h2 className="text-[10px] font-black uppercase text-slate-300 tracking-[0.3em] border-b pb-2 mb-4">Professional History</h2><div className="text-[11px] text-slate-700 whitespace-pre-wrap leading-loose font-medium">{data.experience}</div></section>
               <section><h2 className="text-[10px] font-black uppercase text-slate-300 tracking-[0.3em] border-b pb-2 mb-4">Achievements</h2><div className="text-[10px] flex items-center gap-2 font-black uppercase" style={{color: themeColor}}><Award size={14}/> {data.certifications}</div></section>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}