import { useAuthStore } from "../store/useAuthStore";
import { useThemeStore } from "../store/themeStore";
import { useNavigate } from "react-router-dom";
import { IconRenderer } from "../common/components/icons/IconRenderer";
import { name_apps, version_apps } from "../common/const";

export default function SettingsPage() {
    const navigate = useNavigate();
    const { isDark, toggleTheme } = useThemeStore();
    const { isAuthenticated, logout } = useAuthStore();

    // Style kartu disesuaikan dengan screenshot dashboard kamu
    const cardBase = "relative overflow-hidden rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-1 shadow-xl";
    const glassEffect = isDark ? "bg-slate-800/40 border border-white/10 backdrop-blur-md" : "bg-white border border-slate-200 shadow-slate-200";

    return (
        <div className={`min-h-screen w-full p-8 transition-colors duration-500 ${isDark ? 'bg-[#0f172a]' : 'bg-slate-50'}`}>

            {/* Header Area */}
            <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => navigate('/')}
                        className={`cursor-pointer p-4 rounded-2xl transition-all active:scale-90 ${isDark ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-white text-slate-800 shadow-lg hover:bg-gray-200'}`}
                    >
                        <IconRenderer lib="hi" name="HiOutlineArrowLeft" size={24} />
                    </button>
                    <div>
                        <h1 className={`text-3xl font-black uppercase italic tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            System Settings
                        </h1>
                        <p className="text-blue-500 font-bold text-xs tracking-tighter uppercase">{name_apps?.toUpperCase()} Engine {version_apps}</p>
                    </div>
                </div>
            </div>

            {/* Settings Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* User Profile Card */}
                <div className={`${cardBase} ${glassEffect} md:col-span-2 flex items-center gap-8`}>
                    <div className="p-6 bg-blue-500/20 rounded-[1.5rem] text-blue-400">
                        <IconRenderer lib="hi" name="HiOutlineUserCircle" size={60} />
                    </div>
                    <div className="flex-1">
                        <h3 className={`text-xl font-black uppercase italic mb-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>Profil Petugas</h3>
                        <p className={`${isDark ? 'text-white/60' : 'text-slate-500'} font-bold text-sm uppercase`}>
                            Status: <span className="text-green-500">Online</span>
                        </p>
                        <button
                            onClick={logout}
                            className="cursor-pointer mt-6 flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-xl font-black uppercase italic text-xs tracking-widest hover:brightness-110 transition-all"
                        >
                            <IconRenderer lib="hi" name="HiOutlineLogout" size={18} /> Logout
                        </button>
                    </div>
                </div>

                {/* Appearance/Theme Card */}
                <div
                    onClick={toggleTheme}
                    className={`${cardBase} cursor-pointer flex flex-col items-center justify-center text-center ${isDark ? 'bg-purple-600' : 'bg-orange-500'}`}
                >
                    <div className="mb-4 p-4 bg-black/20 rounded-2xl text-white">
                        <IconRenderer lib="hi" name="HiOutlineColorSwatch" size={40} />
                    </div>
                    <h3 className="text-lg font-black text-white uppercase italic">Tampilan</h3>
                    <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest">
                        {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    </p>
                </div>

                {/* System Info Card */}
                <div className={`${cardBase} ${glassEffect} md:col-span-3`}>
                    <div className="flex items-center gap-4 mb-6">
                        <IconRenderer lib="hi" name="HiOutlineInformationCircle" className="text-orange-500" size={24} />
                        <h3 className={`text-lg font-black uppercase italic ${isDark ? 'text-white' : 'text-slate-800'}`}>Informasi Perangkat</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Station ID</span>
                            <p className={`font-bold ${isDark ? 'text-white' : 'text-slate-700'}`}>KASIR-01</p>
                        </div>
                        <div>
                            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Versi Engine</span>
                            <p className={`font-bold ${isDark ? 'text-white' : 'text-slate-700'}`}>{version_apps}-Stable</p>
                        </div>
                        <div>
                            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Build Target</span>
                            <p className={`font-bold ${isDark ? 'text-white' : 'text-slate-700'}`}>Tauri x64</p>
                        </div>
                        <div>
                            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">DB Status</span>
                            <p className="text-orange-500 font-bold uppercase italic animate-pulse">Disconnected</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}