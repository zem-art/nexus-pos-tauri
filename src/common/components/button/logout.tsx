import React from 'react';
import { HiOutlineLogout } from 'react-icons/hi';
import { name_apps } from '../../const';

export default function Logout() {
    return (
        <>
            {/* Logout Button */}
            <div className="mt-auto pt-10 z-10 flex flex-col items-center gap-4">
                <button className="cursor-pointer flex items-center gap-2 text-slate-500 hover:text-red-400 transition-all font-black uppercase tracking-[0.3em] text-[10px] py-3 px-10 border border-slate-800 rounded-full hover:border-red-400/50 bg-slate-900/80 backdrop-blur-md">
                    <HiOutlineLogout size={16} />
                    Selesaikan Shift
                </button>
                <p className="text-slate-700 text-[10px] font-bold uppercase">{name_apps} POS ENGINE V1.0.2</p>
            </div>
        </>
    );
}
