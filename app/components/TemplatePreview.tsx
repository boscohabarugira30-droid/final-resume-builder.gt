"use client";
import React from "react";

export default function TemplatePreview({ type, themeColor }: { type: string, themeColor: string }) {
  const isSidebarLeft = ['richard', 'minimal', 'corporate'].includes(type);
  const isFullWidth = ['brandon', 'lauren'].includes(type);
  const isSidebarRight = type === 'creative';
  const isSplit = type === 'split';
  const isGrid = type === 'grid';

  return (
    <div className="w-full h-full bg-white flex flex-col text-[4px] leading-[1.2] overflow-hidden border border-slate-100 shadow-inner">
      {isFullWidth ? (
        <div className="flex flex-col h-full">
          <div className="h-1/4 w-full p-2 flex items-center justify-between" style={{ backgroundColor: themeColor, color: 'white' }}>
            <div className="w-1/3 h-1 bg-white/40 rounded" />
            <div className="w-4 h-4 rounded-full bg-white/20" />
          </div>
          <div className="p-2 space-y-2">
            <div className="h-1 w-full bg-slate-100" /><div className="h-1 w-3/4 bg-slate-100" />
          </div>
        </div>
      ) : isSidebarLeft ? (
        <div className="flex h-full">
          <div className="w-[35%] h-full p-2 space-y-2" style={{ backgroundColor: themeColor }}>
            <div className="w-6 h-6 rounded-full bg-white/20 mx-auto" />
            <div className="h-1 w-full bg-white/20" /><div className="h-1 w-full bg-white/20" />
          </div>
          <div className="flex-1 p-3 space-y-3">
            <div className="h-2 w-1/2 rounded" style={{ backgroundColor: themeColor }} />
            <div className="space-y-1"><div className="h-1 w-full bg-slate-100" /><div className="h-1 w-full bg-slate-100" /></div>
          </div>
        </div>
      ) : isSidebarRight ? (
        <div className="flex h-full">
          <div className="flex-1 p-3 space-y-3">
            <div className="h-2 w-1/2 bg-slate-200 rounded" />
            <div className="h-1 w-full bg-slate-100" /><div className="h-1 w-full bg-slate-100" />
          </div>
          <div className="w-[30%] h-full p-2" style={{ backgroundColor: themeColor }}>
            <div className="w-full aspect-square bg-white/20 rounded-lg mb-2" />
            <div className="h-1 w-full bg-white/20" />
          </div>
        </div>
      ) : isSplit ? (
        <div className="flex flex-col h-full">
          <div className="h-1/3 w-full p-4" style={{ backgroundColor: themeColor }}>
             <div className="h-2 w-1/2 bg-white/40 rounded" />
          </div>
          <div className="flex flex-1 gap-2 p-2">
             <div className="w-2/3 h-full bg-slate-50" />
             <div className="w-1/3 h-full bg-slate-100" />
          </div>
        </div>
      ) : isGrid ? (
          <div className="p-4 space-y-4">
             <div className="h-3 w-1/3 bg-slate-200 mx-auto" />
             <div className="grid grid-cols-2 gap-2">
                <div className="h-10 bg-slate-50 border border-slate-100" />
                <div className="h-10 bg-slate-50 border border-slate-100" />
             </div>
          </div>
      ) : null}
    </div>
  );
}