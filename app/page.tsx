"use client";
import React, { useState, useEffect, useRef } from "react";

// Importing your specialized components
import LandingPage from "./components/LandingPage";
import ResumeRenderer from "./components/ResumeRenderer";
import SidebarControls from "./components/SidebarControls";

export default function BoscoApp() {
  // 1. STATE: This is the "Brain" remembering your choices
  const [view, setView] = useState("landing"); 
  const [template, setTemplate] = useState("richard");
  const [themeColor, setThemeColor] = useState("#0a1e3c"); 
  const [typingText, setTypingText] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  
  // 2. REFS: These are "Pointers" to sections on the landing page
  const visionRef = useRef<HTMLDivElement>(null);
  const goalRef = useRef<HTMLDivElement>(null);
  
  // 3. DATA: Your resume information
  const [data, setData] = useState({
    name: "Richard Sanchez",
    role: "Marketing Manager",
    email: "hello@reallygreatsite.com",
    phone: "+123-456-7890",
    experience: "Borcelle Studio | Senior Manager | 2030 - Present\n• Led a team of 10 to increase ROI by 25%.",
  });

  const colors = ["#0a1e3c", "#1e40af", "#065f46", "#991b1b", "#6b21a8", "#111827", "#f97316"];

  // Helper function to update resume data
  const update = (key: string, val: string) => setData({ ...data, [key]: val });

  // 4. SCROLL LOGIC: This fixes the Vercel error from your screenshot
  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 5. ANIMATION: The typing effect for the header
  useEffect(() => {
    let i = 0;
    const fullText = "This resume builder gets you hired!";
    const interval = setInterval(() => {
      setTypingText(fullText.slice(0, i));
      i++; 
      if (i > fullText.length) i = 0;
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // --- VIEW LOGIC ---
  
  // If we are on the Landing Page
  if (view === "landing") {
    return (
      <LandingPage 
        setView={setView} 
        typingText={typingText} 
        scrollTo={scrollTo} 
        visionRef={visionRef} 
        goalRef={goalRef} 
      />
    );
  }

  // If we are in the Editor
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-slate-100 overflow-hidden">
      
      {/* The Sidebar (now in its own file!) */}
      <SidebarControls 
        data={data} 
        update={update} 
        colors={colors} 
        themeColor={themeColor} 
        setThemeColor={setThemeColor} 
        photo={photo}
        setPhoto={setPhoto}
        setView={setView}
      />

      {/* The Preview Area */}
      <main className="flex-1 p-10 overflow-y-auto flex flex-col items-center">
        {/* Template Switcher */}
        <div className="mb-8 flex flex-wrap justify-center gap-3 no-print">
          {['richard', 'corporate', 'grid', 'split'].map(t => (
            <button 
              key={t} 
              onClick={() => setTemplate(t)} 
              className={`px-4 py-2 rounded-lg font-black uppercase transition-all ${template === t ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-white text-slate-400 hover:bg-slate-50'}`}
            >
              {t}
            </button>
          ))}
        </div>
        
        {/* The Actual Resume Document */}
        <div className="w-full flex justify-center origin-top scale-[0.45] sm:scale-[0.55] md:scale-[0.75] lg:scale-100 mb-[-500px] md:mb-0 print:scale-100 print:m-0">
          <ResumeRenderer data={data} template={template} themeColor={themeColor} photo={photo} />
        </div>

        {/* Global Styles for Printing */}
        <style jsx global>{`
          @media print {
            .no-print { display: none !important; }
            body { background: white !important; margin: 0 !important; }
            #resume-document { box-shadow: none !important; margin: 0 !important; border: none !important; }
          }
        `}</style>
      </main>
    </div>
  );
}