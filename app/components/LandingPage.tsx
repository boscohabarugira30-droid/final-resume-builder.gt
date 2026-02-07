import React from "react";
import { Sparkles, Layout, Heart } from "lucide-react";
import FloatingResume from "./FloatingResume";

interface LandingProps {
  setView: (view: string) => void;
  typingText: string;
  scrollTo: (ref: React.RefObject<HTMLDivElement | null>) => void;
  visionRef: React.RefObject<HTMLDivElement | null>;
  goalRef: React.RefObject<HTMLDivElement | null>;
}

export default function LandingPage({ setView, typingText, scrollTo, visionRef, goalRef }: LandingProps) {
  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth">
      <nav className="flex justify-between items-center px-6 md:px-10 py-6 border-b sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="text-xl md:text-2xl font-black text-blue-600 italic tracking-tighter uppercase">BOSCO.H</div>
        <div className="hidden lg:flex gap-8 font-bold text-xs uppercase tracking-widest text-slate-500">
          <button onClick={() => scrollTo(visionRef)} className="hover:text-blue-600">Our Vision</button>
          <button onClick={() => scrollTo(goalRef)} className="hover:text-blue-600">Our Goal</button>
        </div>
        <button onClick={() => setView("editor")} className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-xl font-bold uppercase">Start Building</button>
      </nav>

      <header className="py-20 text-center px-6 flex flex-col items-center">
        <div className="flex justify-center items-end gap-3 md:gap-6 mb-12 h-64 md:h-80 overflow-visible">
          <FloatingResume name="Sarah" role="Designer" color="#f97316" delay="animate-delay-1" />
          <FloatingResume name="Marcus" role="Engineer" color="#3b82f6" delay="animate-delay-0" />
          <FloatingResume name="Elena" role="HR" color="#10b981" delay="animate-delay-2" />
        </div>
        <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 min-h-[60px]">
          {typingText}<span className="text-blue-600 animate-pulse">|</span>
        </h1>
        <button onClick={() => setView("editor")} className="bg-slate-900 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl shadow-2xl hover:bg-blue-600 transition-all flex items-center gap-3 uppercase">
          Create My Resume <Layout size={24}/>
        </button>
      </header>

      <div ref={visionRef} className="py-20 md:py-32 bg-slate-50 border-t">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-black uppercase tracking-tighter">Architecting <span className="text-blue-600">Visual Identity.</span></h2>
          <p className="mt-6 text-lg text-slate-500 font-medium">We believe a resume is your visual narrative.</p>
        </div>
      </div>

      <div ref={goalRef} className="py-20 bg-[#050505] text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-6xl md:text-9xl font-black uppercase opacity-20">Our Goal</h2>
          <p className="text-xl md:text-4xl font-extralight italic -mt-10">"Building <span className="text-cyan-400 font-black">bridges</span> to your future."</p>
        </div>
      </div>

      <footer className="py-10 border-t text-center">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Created with <Heart className="inline text-red-500 fill-red-500" size={10} /> by BOSCO
        </p>
      </footer>
    </div>
  );
}