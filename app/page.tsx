"use client";
import React, { useState, useEffect, useRef } from "react";
import { 
  Sparkles, Heart, ArrowLeft, Mail, Phone, Layout, Target, Camera, Printer, Palette, Quote, 
  Zap, Layers, User, Link as LinkIcon, Linkedin
} from "lucide-react";

// Import Modular Components
import FloatingResume from "./components/FloatingResume";
import TemplatePreview from "./components/TemplatePreview";
import ResumeRenderer from "./components/ResumeRenderer";

export default function BoscoApp() {
  const [view, setView] = useState("landing"); 
  const [template, setTemplate] = useState("richard");
  const [themeColor, setThemeColor] = useState("#0a1e3c"); 
  const [typingText, setTypingText] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  
  const visionRef = useRef<HTMLDivElement>(null);
  const goalRef = useRef<HTMLDivElement>(null);
  const templatesRef = useRef<HTMLDivElement>(null);
  
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
  const update = (key: string, val: string) => setData({ ...data, [key]: val });
  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => ref.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    let i = 0;
    const fullText = "This resume builder gets you hired!";
    const interval = setInterval(() => {
      setTypingText(fullText.slice(0, i));
      i++; if (i > fullText.length) i = 0;
    }, 150);
    return () => clearInterval(interval);
  }, []);

  if (view === "landing") {
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
            <div className="hidden lg:block -rotate-12 translate-y-10"><FloatingResume name="Sarah Jenkins" role="Product Designer" color="#f97316" delay="animate-delay-1" type="creative" /></div>
            <div className="z-10 -translate-y-5"><FloatingResume name="Marcus Chen" role="Software Engineer" color="#3b82f6" delay="animate-delay-0" type="corporate" /></div>
            <div className="hidden lg:block rotate-12 translate-y-10"><FloatingResume name="Elena Rodriguez" role="HR Specialist" color="#10b981" delay="animate-delay-2" type="minimal" /></div>
          </div>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter mb-6"><Sparkles size={12}/> This resume builder gets you hired!</div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 min-h-[100px]">{typingText}<span className="text-blue-600 animate-pulse">|</span></h1>
          <button onClick={() => setView("editor")} className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:bg-blue-600 hover:-translate-y-1 transition-all flex items-center gap-3 mx-auto uppercase">Create My Resume <Layout size={24}/></button>
        </header>

        <div ref={visionRef} className="py-32 border-t px-10 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1 space-y-10">
              <div className="inline-block px-4 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full">The Blueprint</div>
              <h2 className="text-7xl font-black uppercase tracking-tighter leading-[0.9]">Architecting <br/><span className="text-blue-600">Visual Identity.</span></h2>
              <p className="text-xl text-slate-500 max-w-xl font-medium">We believe a resume isn't just data—it's your <span className="text-slate-900 font-bold">Visual Narrative</span>.</p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2"><Zap className="text-blue-600" size={20} /><h4 className="font-black uppercase text-xs tracking-widest">Instant Impact</h4></div>
                <div className="space-y-2"><Layers className="text-blue-600" size={20} /><h4 className="font-black uppercase text-xs tracking-widest">Modular Soul</h4></div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="bg-slate-900 rounded-[60px] p-12 text-white shadow-2xl rotate-3 hover:rotate-0 transition-transform cursor-default">
                <Quote className="text-blue-500 mb-6" size={48} fill="currentColor" /><p className="text-3xl font-black italic">"Design is the silent ambassador of your brand."</p>
              </div>
            </div>
          </div>
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

        <div ref={goalRef} className="py-32 bg-slate-900 text-white px-10 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <Target size={32} className="text-blue-500 mx-auto" />
            <h2 className="text-6xl font-black uppercase tracking-tighter">Our Goal</h2>
            <div className="bg-white/5 p-10 rounded-[40px] border border-white/10">
              <p className="text-2xl text-slate-200 italic leading-relaxed">"We don't just build resumes; we build bridges to your future."</p>
              <div className="pt-6 font-black text-2xl uppercase tracking-widest text-blue-500">BOSCO</div>
            </div>
          </div>
        </div>

        <footer className="py-16 text-center border-t font-bold text-slate-400 uppercase tracking-widest text-[10px]">
          Created with <Heart className="text-red-500 inline fill-red-500" /> by <span className="text-slate-900 font-black">BOSCO & GEMINI</span>
        </footer>

        <style jsx>{`
          @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
          .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
          .animate-delay-1 { animation-delay: 1s; } .animate-delay-2 { animation-delay: 2s; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden font-sans">
      <aside className="w-[450px] bg-white border-r shadow-2xl z-20 overflow-y-auto p-8 flex flex-col gap-6 no-print">
        <button onClick={() => setView("landing")} className="flex items-center gap-2 text-slate-400 font-bold hover:text-blue-600 text-xs uppercase tracking-widest"><ArrowLeft size={14}/> Back to Home</button>
        <div className="space-y-6">
          <h2 className="text-2xl font-black uppercase text-blue-600">CV Editor</h2>
          <div className="space-y-3">
            <div className="text-[10px] font-black uppercase text-slate-400 flex gap-2"><Palette size={14}/> Theme Color</div>
            <div className="flex gap-2">
               {colors.map(c => <button key={c} onClick={() => setThemeColor(c)} className={`w-8 h-8 rounded-full border-2 ${themeColor === c ? 'scale-125 border-blue-500' : 'border-transparent'}`} style={{backgroundColor: c}} />)}
               <input type="color" value={themeColor} onChange={(e) => setThemeColor(e.target.value)} className="w-8 h-8 rounded-full border-none p-0 cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border-2 border-dashed">
            <div className="w-20 h-20 bg-white rounded-xl shadow-inner flex items-center justify-center overflow-hidden relative">
              {photo ? <img src={photo} className="w-full h-full object-cover" alt="P" /> : <Camera className="text-slate-400" />}
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => e.target.files && setPhoto(URL.createObjectURL(e.target.files[0]))} />
            </div>
            <p className="text-[10px] font-black uppercase text-slate-600">Profile Photo</p>
          </div>
          <div className="grid gap-4">
            <input placeholder="Full Name" className="w-full p-3 bg-slate-50 rounded-xl border" value={data.name} onChange={e => update("name", e.target.value)} />
            <input placeholder="Job Title" className="w-full p-3 bg-slate-50 rounded-xl border" value={data.role} onChange={e => update("role", e.target.value)} />
            <div className="grid grid-cols-2 gap-2">
              <input placeholder="Email" className="p-3 bg-slate-50 rounded-xl border" value={data.email} onChange={e => update("email", e.target.value)} />
              <input placeholder="Phone" className="p-3 bg-slate-50 rounded-xl border" value={data.phone} onChange={e => update("phone", e.target.value)} />
            </div>
            <input placeholder="LinkedIn" className="w-full p-3 bg-slate-50 rounded-xl border" value={data.linkedin} onChange={e => update("linkedin", e.target.value)} />
            <textarea placeholder="About You" className="w-full p-3 bg-slate-50 rounded-xl border h-24" value={data.summary} onChange={e => update("summary", e.target.value)} />
            <textarea placeholder="Experience" className="w-full p-3 bg-slate-50 rounded-xl border h-40" value={data.experience} onChange={e => update("experience", e.target.value)} />
            <input placeholder="Education" className="w-full p-3 bg-slate-50 rounded-xl border" value={data.education} onChange={e => update("education", e.target.value)} />
            <input placeholder="Skills" className="w-full p-3 bg-slate-50 rounded-xl border" value={data.skills} onChange={e => update("skills", e.target.value)} />
          </div>
        </div>
      </aside>

      <main className="flex-1 p-10 overflow-y-auto flex flex-col items-center bg-slate-200/50">
        <div className="mb-8 flex flex-wrap gap-3 bg-white/90 p-3 rounded-2xl shadow-xl sticky top-0 z-10 no-print">
          {['richard', 'brandon', 'lauren', 'minimal', 'creative', 'corporate', 'grid', 'split'].map((t) => (
            <button key={t} onClick={() => setTemplate(t)} className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase ${template === t ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>{t}</button>
          ))}
          <button onClick={() => window.print()} className="bg-black text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase flex items-center gap-2"><Printer size={14}/> Print PDF</button>
        </div>
        <div className="w-full flex justify-center origin-top scale-[0.45] lg:scale-100 mb-[-500px] lg:mb-0 print:scale-100 print:m-0">
          <ResumeRenderer data={data} template={template} themeColor={themeColor} photo={photo} />
        </div>
        <style jsx global>{`
          @media print { .no-print { display: none !important; } body { background: white !important; margin: 0; } .print-bg { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; } }
        `}</style>
      </main>
    </div>
  );
}