import React from "react";
import { ArrowLeft, Printer, Palette, Camera } from "lucide-react";

export default function SidebarControls({ data, update, colors, themeColor, setThemeColor, setPhoto, photo, setView }: any) {
  return (
    <aside className="w-full lg:w-[450px] h-full bg-white border-r shadow-2xl z-20 overflow-y-auto p-8 flex flex-col gap-6 no-print">
      <button onClick={() => setView("landing")} className="flex items-center gap-2 text-slate-400 font-bold hover:text-blue-600 text-xs uppercase tracking-widest">
        <ArrowLeft size={14}/> Back to Home
      </button>
      
      <div className="space-y-6">
        {/* Colors */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400"><Palette size={14}/> Theme Color</div>
          <div className="flex flex-wrap gap-2">
             {colors.map((c: string) => (
               <button key={c} onClick={() => setThemeColor(c)} className={`w-8 h-8 rounded-full border-2 transition-transform ${themeColor === c ? 'scale-125 border-blue-500' : 'border-transparent'}`} style={{backgroundColor: c}} />
             ))}
          </div>
        </div>

        {/* Photo Upload */}
        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border-2 border-dashed border-slate-300">
          <div className="w-16 h-16 bg-white rounded-xl shadow-inner flex items-center justify-center overflow-hidden relative border border-slate-200">
            {photo ? <img src={photo} className="w-full h-full object-cover" alt="Profile" /> : <Camera className="text-slate-400" />}
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => e.target.files && setPhoto(URL.createObjectURL(e.target.files[0]))} />
          </div>
          <p className="text-[10px] font-black uppercase text-slate-600">Profile Photo</p>
        </div>

        {/* Data Inputs */}
        <div className="grid gap-3">
          <input placeholder="Full Name" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-300 text-sm font-bold" value={data.name} onChange={e => update("name", e.target.value)} />
          <input placeholder="Job Title" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-300 text-sm font-semibold" value={data.role} onChange={e => update("role", e.target.value)} />
          <textarea placeholder="Experience" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-300 text-xs h-32" value={data.experience} onChange={e => update("experience", e.target.value)} />
        </div>

        <button onClick={() => window.print()} className="bg-blue-600 text-white w-full py-4 rounded-xl font-black uppercase flex items-center justify-center gap-3 hover:bg-blue-700 transition-colors">
          <Printer size={18}/> Download PDF
        </button>
      </div>
    </aside>
  );
}