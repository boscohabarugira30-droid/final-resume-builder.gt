"use client";
import React from "react";
import { Sparkles, Heart, Layout, Target, Quote, Zap, Layers } from "lucide-react";
import FloatingResume from "./FloatingResume";
import TemplatePreview from "./TemplatePreview";

interface LandingProps {
  setView: (view: string) => void;
  typingText: string;
  scrollTo: (ref: React.RefObject<HTMLDivElement | null>) => void;
  visionRef: React.RefObject<HTMLDivElement | null>;
  goalRef: React.RefObject<HTMLDivElement | null>;
  templatesRef: React.RefObject<HTMLDivElement | null>;
  setTemplate: (t: string) => void;
  themeColor: string;
}

export default function LandingPage({ 
  setView, typingText, scrollTo, visionRef, goalRef, templatesRef, setTemplate, themeColor 
}: LandingProps) {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      <nav className="flex justify-between items-center px-10 py-6 border-b sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="text-2xl font-black text-blue-600 italic tracking-tighter uppercase cursor-pointer" onClick={() => window.scrollTo(0,0)}>BOSCO.AI</div>
        <div className="hidden md:flex gap-8 font-bold text-xs uppercase tracking-widest text-slate-500">
          <button onClick={() => scrollTo(visionRef)} className="hover:text-blue-600 transition-colors">Our Vision</button>
          <button onClick={() => scrollTo(goalRef)} className="hover:text-blue-600 transition-colors">Our Goal</button>
          <button onClick={() => scrollTo(templatesRef)} className="hover:text-blue-600 transition-colors">Templates</button>
        </div>
        <button onClick={() => setView("editor")} className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:shadow-lg transition-all uppercase">Start Building</button>
      </nav>

      <header className="py-20 text-center px-6 max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex justify-center items-end gap-6 mb-12 h-80 w-full overflow-visible">
          <div className="hidden lg:block -rotate-12 translate-y-10">
            <FloatingResume name="Sarah Jenkins" role="Product Designer" color="#f97316" delay="animate-delay-1" type="creative" />
          </div>
          <div className="z-10 -translate-y-5">
            <FloatingResume name="Marcus Chen" role="Software Engineer" color="#3b82f6" delay="animate-delay-0" type="corporate" />
          </div>
          <div className="hidden lg:block rotate-12 translate-y-10">
            <FloatingResume name="Elena Rodriguez" role="HR Specialist" color="#10b981" delay="animate-delay-2" type="minimal" />
          </div>
        </div>
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter mb-6">
          <Sparkles size={12}/> AI-POWERED RESUME ARCHITECT
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 min-h-[100px]">{typingText}<span className="text-blue-600 animate-pulse">|</span></h1>
        <button onClick={() => setView("editor")} className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:bg-blue-600 hover:-translate-y-1 transition-all flex items-center gap-3 mx-auto uppercase">
          Create My Resume <Layout size={24}/>
        </button>
      </header>

      {/* Vision, Templates, and Goal sections exactly as you wrote them */}
      <div ref={visionRef} className="py-32 border-t px-10 bg-slate-50 overflow-hidden">
        {/* ... (All your Vision section code) ... */}
      </div>

      <div ref={templatesRef} className="py-24 bg-white px-10">
        <div className="text-center mb-16"><h2 className="text-4xl font-black uppercase tracking-tighter">Choose Your Design</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {['richard', 'brandon', 'lauren', 'minimal', 'creative', 'corporate', 'grid', 'split'].map((t) => (
            <div key={t} onClick={() => { setTemplate(t); setView("editor"); }} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-white rounded-2xl mb-4 shadow-xl group-hover:border-blue-500 overflow-hidden relative p-4 border-4 border-transparent">
                 <TemplatePreview type={t} themeColor={themeColor} />
              </div>
              <h3 className="font-black uppercase text-xs text-center tracking-widest text-slate-400">{t} Style</h3>
            </div>
          ))}
        </div>
      </div>

      <div ref={goalRef} className="py-32 bg-slate-900 text-white px-10">
        {/* ... (All your Goal section code) ... */}
      </div>

      <footer className="py-16 text-center border-t font-bold text-slate-400 uppercase tracking-widest text-[10px]">
        Created with <Heart className="text-red-500 inline fill-red-500" /> by <span className="text-slate-900 font-black">BOSCO & GEMINI</span>
      </footer>
    </div>
  );
}