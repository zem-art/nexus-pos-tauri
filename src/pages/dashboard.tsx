import Logout from '../common/components/button/logout';
import Header from '../common/components/header';
import { useThemeStore } from '../store/themeStore';
import { IconRenderer } from '../common/components/icons/IconRenderer';
import { menus_cashier } from '../common/const';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { isDark } = useThemeStore();
  const navigate = useNavigate();

  return (
    <>
      <div className={`
          min-h-screen w-full transition-colors duration-500 flex flex-col items-center p-6 md:p-10 font-sans overflow-x-hidden relative
          ${isDark ? 'bg-[#0f172a]' : 'bg-slate-50'}
        `}>
        <Header />

        {/* Grid Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-full max-w-[95%] z-10">
          {menus_cashier.map((menu: any) => (
            <button
              onClick={() => navigate(menu?.link)}
              key={menu.id}
              className={`
              ${menu.color} group relative overflow-hidden cursor-pointer rounded-[2rem] p-6 
              transition-all duration-300 hover:-translate-y-2 hover:brightness-110 active:scale-95 
              flex flex-col items-center justify-center min-h-[220px]
              shadow-xl ${isDark ? 'shadow-black/20' : 'shadow-slate-300'}
            `}
            >
              {/* Glossy & Pattern Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30"></div>
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

              {/* Icon Container */}
              <div className="mb-5 p-4 bg-black/20 rounded-2xl group-hover:bg-white group-hover:text-slate-900 transition-all duration-300 text-5xl text-white">
                {/* {menu.icon} */}
                <IconRenderer
                  lib='hi'
                  name={menu?.icon}
                  size={35}
                />
              </div>

              <div className="text-center z-10">
                <h3 className="text-lg font-black tracking-wide text-white mb-1 uppercase italic">
                  {menu.title}
                </h3>
                <p className="text-[11px] text-white/70 font-bold uppercase tracking-tighter">
                  {menu.desc}
                </p>
              </div>
            </button>
          ))}
        </div>

        <Logout />

        {/* Background Decor: Kita sesuaikan warnanya agar masuk di kedua tema */}
        <div className={`
        absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] blur-[120px] -z-0 pointer-events-none transition-opacity duration-1000
        ${isDark ? 'bg-blue-600/5 opacity-100' : 'bg-blue-400/10 opacity-50'}
      `}></div>
      </div>
    </>
  );
}


// const menus = [
//   { id: 'pos', title: 'PENJUALAN', desc: 'Scan & Transaksi Baru', icon: <HiOutlineShoppingCart />, color: 'bg-blue-600' },
//   { id: 'pembelian', title: 'PEMBELIAN', desc: 'Input Barang Masuk', icon: <HiOutlineDownload />, color: 'bg-emerald-600' },
//   { id: 'stok', title: 'CEK STOK', desc: 'Lihat Sisa Inventaris', icon: <HiOutlineArchive />, color: 'bg-purple-600' },
//   { id: 'member', title: 'MEMBER', desc: 'Data & Poin Pelanggan', icon: <HiOutlineUserGroup />, color: 'bg-pink-600' },
//   { id: 'produk', title: 'KATALOG', desc: 'Daftar Harga Produk', icon: <HiOutlineCollection />, color: 'bg-orange-500' },
//   { id: 'topup', title: 'TOP UP', desc: 'E-Wallet & Saldo', icon: <HiOutlineLightningBolt />, color: 'bg-amber-500' },
//   { id: 'riwayat', title: 'RIWAYAT', desc: 'Cetak Ulang & Retur', icon: <HiOutlineClipboardList />, color: 'bg-slate-600' },
//   { id: 'shift', title: 'SHIFT', desc: 'Buka / Tutup Kasir', icon: <HiOutlineKey />, color: 'bg-rose-600' },
//   { id: 'setting', title: 'SETTING', desc: 'Printer & Perangkat', icon: <HiOutlineCog />, color: 'bg-slate-800' },
// ];