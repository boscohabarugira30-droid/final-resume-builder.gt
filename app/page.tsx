"use client";
import React, { useState, useEffect, useRef } from "react";
import { 
  Sparkles, Heart, ArrowLeft, Mail, Phone, Globe, Layout, 
  Camera, Printer, Linkedin, Palette, Quote, 
  Zap, Layers, User, Cpu
} from "lucide-react";

export default function BoscoApp() {
  const [view, setView] = useState("landing"); 
  const [template, setTemplate] = useState("richard");
  const [themeColor, setThemeColor] = useState("#0a1e3c"); 
  const [typingText, setTypingText] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  
  // TECHNICAL FIX FOR VERCEL
  const visionRef = useRef<HTMLDivElement | null>(null);
  const goalRef = useRef<HTMLDivElement | null>(null);
  const templatesRef = useRef<HTMLDivElement | null>(null);
  
  const [data, setData] = useState({
    name: "Richard Sanchez",
    role: "Marketing Manager",
    email: "hello@reallygreatsite.com",
    phone: "+123-456-7890",
    linkedin: "linkedin.com/in/richardsanchez",
    location: "New York, USA",
    summary: "Creative and results-driven marketing manager with 5+ years of experience in digital growth and brand strategy.",
    experience: "Borcelle Studio | Senior Manager | 2030 - Present\n• Led a team of 10 to increase ROI by 25%.\n• Developed multi-channel marketing campaigns.\n\nFauget Studio | Junior Lead | 2025 - 2029\n• Increased brand awareness by 40% on social media.",
    education: "Wardiere University | Master of Business Management",
    skills: "Project Management, SEO, Public Relations, Teamwork",
    certifications: "Google Ads Certified, HubSpot Inbound",
    languages: "English (Native), French (Fluent)"
  });

  const colors = ["#0a1e3c", "#1e40af", "#065f46", "#991b1b", "#6b21a8", "#111827", "#f97316"];

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fullText = "This resume builder gets you hired!";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypingText(fullText.slice(0, i));
      i++; if (i > fullText.length) i = 0;
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const update = (key: string, val: string) => setData({ ...data, [key]: val });

  const FloatingResume = ({ name, role, color, delay }: { name: string, role: string, color: string, delay: string }) => (
    <div className={`w-40 h-56 md:w-48 md:h-64 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col p-3 animate-bounce-slow ${delay} hover:scale-110 transition-transform cursor-pointer`}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
          <User size={16} className="text-slate-400" />
        </div>
        <div className="overflow-hidden">
          <p className="text-[7px] md:text-[8px] font-black truncate">{name}</p>
          <p className="text-[5px] md:text-[6px] font-bold text-slate-400 truncate uppercase tracking-tighter">{role}</p>
        </div>
      </div>
      <div className="space-y-2 flex-1">
        <div className="h-[2px] w-full bg-slate-100" />
        <div className="space-y-1">
          <div className="h-[4px] w-3/4 bg-slate-100 rounded" />
          <div className="h-[4px] w-full bg-slate-100 rounded" />
        </div>
      </div>
      <div className="mt-2 flex justify-between items-center pt-2 border-t border-slate-50">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
        </div>
        <div className="text-[5px] font-black text-slate-300 uppercase">Bosco.H</div>
      </div>
    </div>
  );

  if (view === "landing") {
    return (
      <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth overflow-x-hidden">
        <nav className="flex justify-between items-center px-6 md:px-10 py-6 border-b sticky top-0 bg-white/90 backdrop-blur-md z-50">
          <div className="text-xl md:text-2xl font-black text-blue-600 italic tracking-tighter uppercase cursor-pointer" onClick={() => window.scrollTo(0,0)}>BOSCO.H</div>
          <div className="hidden md:flex gap-8 font-bold text-xs uppercase tracking-widest text-slate-500">
            <button onClick={() => scrollTo(visionRef)} className="hover:text-blue-600 transition-colors">Vision</button>
            <button onClick={() => scrollTo(goalRef)} className="hover:text-blue-600 transition-colors">Goal</button>
            <button onClick={() => scrollTo(templatesRef)} className="hover:text-blue-600 transition-colors">Templates</button>
          </div>
          <button onClick={() => setView("editor")} className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-xl font-bold text-xs hover:shadow-lg transition-all uppercase">Start</button>
        </nav>

        <header className="py-12 md:py-20 text-center px-6 max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex justify-center items-end gap-2 md:gap-6 mb-8 md:mb-12 h-64 md:h-80 w-full overflow-visible">
            <div className="hidden sm:block -rotate-12 translate-y-10">
              <FloatingResume name="Sarah Jenkins" role="Product Designer" color="#f97316" delay="animate-delay-1" />
            </div>
            <div className="z-10 -translate-y-5 scale-110 md:scale-100">
              <FloatingResume name="Marcus Chen" role="Software Engineer" color="#3b82f6" delay="animate-delay-0" />
            </div>
            <div className="hidden sm:block rotate-12 translate-y-10">
              <FloatingResume name="Elena Rodriguez" role="HR Specialist" color="#10b981" delay="animate-delay-2" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter mb-6">
            <Sparkles size={12}/> {fullText}
          </div>
          <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 min-h-[80px] md:min-h-[100px]">{typingText}<span className="text-blue-600 animate-pulse">|</span></h1>
          <button onClick={() => setView("editor")} className="bg-slate-900 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl shadow-2xl hover:bg-blue-600 transition-all flex items-center gap-3 mx-auto uppercase">
            Create Resume <Layout size={24}/>
          </button>
        </header>

        <div ref={visionRef} className="py-20 md:py-32 border-t px-6 md:px-10 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
              <div className="flex-1 space-y-6 md:space-y-10">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">Architecting <br/><span className="text-blue-600">Visual Identity.</span></h2>
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl font-medium">We turn your history into a masterpiece.</p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="bg-slate-900 rounded-[40px] md:rounded-[60px] p-8 md:p-12 text-white shadow-2xl rotate-2">
                  <Quote className="text-blue-500 mb-6" size={32} fill="currentColor" />
                  <p className="text-2xl md:text-3xl font-black italic leading-tight">"Design is the silent ambassador of your brand."</p>
                </div>
              </div>
          </div>
        </div>

        <div ref={goalRef} className="py-20 md:py-32 bg-[#050505] text-white px-6 md:px-10 text-center relative overflow-hidden">
          <h2 className="text-5xl md:text-9xl font-black uppercase tracking-[0.15em] opacity-50 mb-12">Our Goal</h2>
          <div className="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-16 rounded-[40px] md:rounded-[50px] max-w-4xl mx-auto">
            <p className="text-2xl md:text-4xl text-white font-extralight italic">"We build bridges to your future."</p>
            <div className="mt-8 md:mt-10 font-black text-xl md:text-2xl uppercase tracking-[0.4em] text-cyan-400">BOSCO - THE FOUNDER</div>
          </div>
        </div>

        <footer className="py-12 bg-white border-t text-center">
            <div className="text-center font-bold text-slate-300 uppercase tracking-[0.4em] text-[9px]">
              Developed by <span className="text-slate-900 font-black">BOSCO</span>
            </div>
        </footer>

        <style jsx>{`
          @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
          .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
          .animate-delay-1 { animation-delay: 1s; }
          .animate-delay-2 { animation-delay: 2s; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-100 overflow-hidden font-sans">
      <aside className="w-full md:w-[450px] bg-white border-b md:border-r shadow-2xl z-20 overflow-y-auto p-6 md:p-8 flex flex-col gap-6 no-print">
        <button onClick={() => setView("landing")} className="flex items-center gap-2 text-slate-400 font-bold hover:text-blue-600 text-xs uppercase tracking-widest">
          <ArrowLeft size={14}/> Home
        </button>
        <h2 className="text-2xl font-black uppercase tracking-tighter text-blue-600">CV Editor</h2>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border-2 border-dashed border-slate-300">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden relative border">
              {photo ? <img src={photo} className="w-full h-full object-cover" alt="Profile" /> : <Camera className="text-slate-400" />}
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => e.target.files && setPhoto(URL.createObjectURL(e.target.files[0]))} />
            </div>
            <p className="text-[10px] font-black uppercase text-slate-600">Profile Photo</p>
          </div>
          <div className="grid gap-3">
            <input placeholder="Full Name" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-300 text-sm font-bold" value={data.name} onChange={e => update("name", e.target.value)} />
            <input placeholder="Job Title" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-300 text-sm" value={data.role} onChange={e => update("role", e.target.value)} />
            <input placeholder="Email" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-300 text-xs" value={data.email} onChange={e => update("email", e.target.value)} />
            <textarea placeholder="Experience" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-300 text-xs h-32" value={data.experience} onChange={e => update("experience", e.target.value)} />
          </div>
        </div>
      </aside>

      <main className="flex-1 p-4 md:p-10 overflow-y-auto flex flex-col items-center bg-slate-200/50">
        <div className="mb-6 flex flex-wrap gap-2 md:gap-3 bg-white/90 p-3 rounded-2xl shadow-xl sticky top-0 z-10 no-print justify-center">
          <button onClick={() => window.print()} className="bg-black text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase flex items-center gap-2">
            <Printer size={14}/> Download PDF
          </button>
        </div>

        <div id="resume-document" className="w-full max-w-[210mm] min-h-[297mm] bg-white shadow-2xl flex flex-col md:flex-row print:w-[210mm] print:m-0">
          <div className="w-full md:w-[35%] p-10 text-white space-y-8 print-bg" style={{backgroundColor: themeColor}}>
            {photo && <div className="w-32 h-32 rounded-full border-4 border-white/10 mx-auto overflow-hidden shadow-xl"><img src={photo} className="w-full h-full object-cover" alt="Profile" /></div>}
            <section className="space-y-4">
              <h3 className="text-[10px] font-black uppercase border-b border-white/20 pb-1 tracking-widest">Contact</h3>
              <div className="text-[10px] space-y-2">
                <p className="flex items-center gap-2"><Mail size={12}/> {data.email}</p>
                <p className="flex items-center gap-2"><Phone size={12}/> {data.phone}</p>
              </div>
            </section>
            <section className="space-y-4">
              <h3 className="text-[10px] font-black uppercase border-b border-white/20 pb-1 tracking-widest">Skills</h3>
              <p className="text-[10px] leading-relaxed">{data.skills}</p>
            </section>
          </div>
          <div className="flex-1 p-10 md:p-16 space-y-10">
            <header>
              <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">{data.name}</h1>
              <p className="text-lg font-bold uppercase tracking-widest mt-2" style={{color: themeColor}}>{data.role}</p>
            </header>
            <section>
              <h2 className="text-xs font-black uppercase tracking-widest border-b-2 pb-2 mb-4" style={{borderColor: themeColor}}>Experience</h2>
              <div className="text-[11px] text-slate-700 whitespace-pre-wrap leading-relaxed">{data.experience}</div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}