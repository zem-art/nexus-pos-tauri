import React, { useState } from 'react';
import { HiOutlineLockClosed, HiOutlineUser, HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { useThemeStore } from '../../store/themeStore';
import { name_apps, version_apps } from '../../common/const';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { IconRenderer } from '../../common/components/icons/IconRenderer';


export default function LoginPage() {
    const navigate = useNavigate();
    const { isDark } = useThemeStore();
    const login = useAuthStore((state) => state.login);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Logika autentikasi akan ditambahkan di sini
        // console.log("Logging in with:", formData);

        // Nanti di sini bisa tambah validasi API/Rust Command
        login(formData.username);

        // Pindah ke dashboard setelah login berhasil
        navigate('/');
    };

    return (
        <div className={`min-h-screen w-full flex items-center justify-center p-6 transition-colors duration-500 font-sans relative overflow-hidden
            ${isDark ? 'bg-[#0f172a]' : 'bg-slate-50'}`}>

            {/* Background Decor */}
            <div className={`absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full blur-[120px] transition-opacity duration-1000
            ${isDark ? 'bg-blue-600/10 opacity-100' : 'bg-blue-400/20 opacity-50'}`}></div>

            <div className="w-full max-w-md z-10">
                {/* Branding */}
                <div className="text-center mb-10">
                    <h1 className={`text-5xl font-black tracking-tighter uppercase mb-2 transition-colors
                ${isDark ? 'text-white' : 'text-slate-800'}`}>
                        {name_apps}<span className="text-blue-500 text-6xl">.</span>
                    </h1>
                    <p className={`${isDark ? 'text-slate-500' : 'text-slate-400'} text-xs font-bold tracking-[0.3em] uppercase`}>
                        Management System {version_apps}
                    </p>
                </div>

                {/* Login Card */}
                <div className={`p-10 rounded-[2.5rem] shadow-2xl border backdrop-blur-xl transition-all
            ${isDark
                        ? 'bg-slate-800/40 border-slate-700 shadow-black/40'
                        : 'bg-white/80 border-white shadow-slate-200'}`}>

                    <div className="mb-8">
                        <h2 className={`text-2xl font-black italic uppercase tracking-tight mb-1
                ${isDark ? 'text-white' : 'text-slate-800'}`}>Masuk</h2>
                        <p className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            Silahkan masukkan kredensial anda.
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Input Username */}
                        <div className="space-y-2">
                            <label className={`text-[10px] font-black uppercase tracking-widest ml-1
                    ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Username</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-blue-500">
                                    <HiOutlineUser size={20} />
                                </div>
                                <input
                                    type="text"
                                    required
                                    placeholder="admin_nexus"
                                    className={`w-full pl-12 pr-4 py-4 rounded-2xl outline-none border-2 transition-all font-bold
                        ${isDark
                                            ? 'bg-slate-900/50 border-slate-700 text-white focus:border-blue-600 focus:bg-slate-900'
                                            : 'bg-slate-50 border-slate-100 text-slate-800 focus:border-blue-400 focus:bg-white'}`}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Input Password */}
                        <div className="space-y-2">
                            <label className={`text-[10px] font-black uppercase tracking-widest ml-1
                    ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Password</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-blue-500">
                                    <HiOutlineLockClosed size={20} />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    placeholder="••••••••"
                                    className={`w-full pl-12 pr-12 py-4 rounded-2xl outline-none border-2 transition-all font-bold
                        ${isDark
                                            ? 'bg-slate-900/50 border-slate-700 text-white focus:border-blue-600 focus:bg-slate-900'
                                            : 'bg-slate-50 border-slate-100 text-slate-800 focus:border-blue-400 focus:bg-white'}`}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-blue-500 transition-colors cursor-pointer"
                                >
                                    {showPassword ? <IconRenderer lib='hi' name='HiOutlineEyeOff' size={20} /> : <IconRenderer lib='hi' name='HiOutlineEye' size={20} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 active:scale-[0.98] uppercase tracking-[0.2em] mt-4"
                        >
                            Autentikasi Sekarang
                        </button>
                    </form>
                </div>

                {/* Footer Version */}
                <p className={`text-center mt-10 text-[10px] font-bold uppercase tracking-widest transition-colors
            ${isDark ? 'text-slate-700' : 'text-slate-400'}`}>
                    Secure Terminal • {version_apps}
                </p>
            </div>
        </div>
    );
}