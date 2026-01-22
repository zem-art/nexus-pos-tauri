import React from 'react';

import { HiOutlineMoon, HiOutlineSun, HiOutlineUserGroup } from 'react-icons/hi';
import { useDateTime } from '../../hooks/useDateTime';
import { name_apps } from '../../const';
import { useThemeStore } from '../../../store/themeStore';

export default function Header() {
  const { formattedTime } = useDateTime();
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <>
      {/* Header Kasir */}
      {/* <div className="w-full max-w-[95%] flex flex-col md:flex-row justify-between items-center mb-10 z-10 gap-6">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tighter uppercase">
            {name_apps} <span className="text-blue-500">POS</span>
          </h1>
          <p className="text-slate-500 text-xs font-bold tracking-[0.2em]">STATION: KASIR-01</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right border-r border-slate-700 pr-6">
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Waktu Shift</p>
            <p className="text-white font-mono">08:45:12</p>
          </div>
          <div className="bg-slate-800/80 p-3 pr-6 rounded-2xl border border-slate-700 flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-xl flex items-center justify-center text-white shadow-lg">
              <HiOutlineUserGroup size={20} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">Operator</p>
              <p className="text-white text-sm font-bold">Budi Santoso</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Header Kasir */}
      <div className="w-full max-w-[95%] flex flex-col md:flex-row justify-between items-center mb-10 z-10 gap-6">
        <div>
          <h1 className={`text-3xl font-black tracking-tighter uppercase ${isDark ? 'text-white' : 'text-slate-800'}`}>
            {name_apps} <span className="text-blue-500">POS</span>
          </h1>
          <p className="text-slate-500 text-xs font-bold tracking-[0.2em]">STATION: KASIR-01</p>
        </div>

        {/* Action Area */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Waktu Real-time */}
          <div className="text-right border-r border-slate-800 pr-6 hidden sm:block">
            <p className={`text-[9px] uppercase font-black tracking-[0.2em] mb-1 ${isDark ? 'text-slate-500' : 'text-slate-900'}`}>
              Waktu Lokal
            </p>
            <p className={`font-mono text-xl font-bold tabular-nums tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {formattedTime}
            </p>
          </div>

          {/* Kontrol & Profil */}
          <div className="flex items-center gap-3">
            {/* Toggle Theme (Inline version) */}
            <button
              onClick={() => toggleTheme()}
              className="cursor-pointer p-3 rounded-xl bg-slate-800/50 border border-slate-700 text-yellow-400 hover:bg-slate-700 transition-all shadow-lg"
              title="Ganti Tema"
            >
              {isDark ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} className="text-white" />}
            </button>

            {/* User Profile Button */}
            <button className="group bg-slate-800/80 p-2 pr-6 rounded-2xl border border-slate-700 flex items-center gap-4 shadow-xl backdrop-blur-sm hover:border-blue-500/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                <HiOutlineUserGroup size={20} />
              </div>
              <div className="text-left xs:block">
                <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Operator</p>
                <p className="text-white text-sm font-bold group-hover:text-blue-400 transition-colors">Budi Santoso</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
