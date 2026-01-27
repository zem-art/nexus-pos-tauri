import { name_apps, version_apps } from '../../const';
import { useThemeStore } from '../../../store/themeStore';
import { IconRenderer } from '../icons/IconRenderer';
import { useAuthStore } from '../../../store/useAuthStore';

export default function EndShift() {
    const { isDark } = useThemeStore();
    // const { logout } = useAuthStore()
    return (
        <>
            {/* Logout Button */}
            <div className="mt-auto pt-10 z-10 flex flex-col items-center gap-4">
                <button className={`
                    cursor-pointer flex items-center gap-2 transition-all font-black uppercase 
                    tracking-[0.3em] text-[10px] py-3 px-10 border rounded-full backdrop-blur-md
                    ${isDark
                        ? 'text-slate-500 hover:text-red-400 border-slate-800 bg-slate-900/80 hover:border-red-400/50 shadow-lg shadow-black/20'
                        : 'text-slate-400 hover:text-red-500 border-slate-200 bg-white/80 hover:border-red-500/50 shadow-md shadow-slate-200'}
                `}
                >
                    <IconRenderer lib='hi' name='HiOutlineLogout' size={16} />
                    Selesaikan Shift
                </button>

                <p className={`
                    text-[10px] font-bold uppercase tracking-wider transition-colors
                    ${isDark ? 'text-slate-700' : 'text-slate-400'}
                `}>
                    {name_apps} pos engine {version_apps}
                </p>
            </div>
        </>
    );
}
