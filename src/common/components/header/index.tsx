import React from 'react';

import { HiOutlineUserGroup } from 'react-icons/hi';
import { useDateTime } from '../../hooks/useDateTime';
import { name_apps } from '../../const';

export default function Header() {
  const { formattedTime } = useDateTime();
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
          <h1 className="text-3xl font-black text-white tracking-tighter uppercase">
            {name_apps} <span className="text-blue-500">POS</span>
          </h1>
          <p className="text-slate-500 text-xs font-bold tracking-[0.2em]">STATION: KASIR-01</p>
        </div>

        <div className="flex items-center gap-6">
          {/* Waktu Real-time */}
          <div className="text-right border-r border-slate-700 pr-6">
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">
              Waktu Lokal
            </p>
            {/* Menggunakan tabular-nums agar angka jam tidak bergeser/goyang */}
            <p className="text-white font-mono text-lg font-bold tabular-nums tracking-wider">
              {formattedTime}
            </p>
          </div>

          <button className="cursor-pointer bg-slate-800/80 p-3 pr-6 rounded-2xl border border-slate-700 flex items-center gap-4 shadow-xl backdrop-blur-sm">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-xl flex items-center justify-center text-white shadow-lg">
              <HiOutlineUserGroup size={20} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">Operator</p>
              <p className="text-white text-sm font-bold">Budi Santoso</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
