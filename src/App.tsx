import React from 'react';
import {
  HiOutlineShoppingCart,
  HiOutlineDownload,
  HiOutlineClipboardList,
  HiOutlineUserGroup,
  HiOutlineCollection,
  HiOutlineArchive,
  HiOutlineLightningBolt,
  HiOutlineCog,
  HiOutlineLogout,
  HiOutlineKey,
  HiOutlineTicket, // Menu Tambahan: Promo/Voucher
  HiOutlineChatAlt2 // Menu Tambahan: Helpdesk/Bantuan
} from "react-icons/hi";

const name_apps = "nexus"

export default function DashboardKasir() {
  const menus = [
    { id: 'pos', title: 'PENJUALAN', desc: 'Transaksi Baru', icon: <HiOutlineShoppingCart />, color: 'bg-blue-600' },
    { id: 'pembelian', title: 'PEMBELIAN', desc: 'Barang Masuk', icon: <HiOutlineDownload />, color: 'bg-emerald-600' },
    { id: 'stok', title: 'CEK STOK', desc: 'Sisa Inventaris', icon: <HiOutlineArchive />, color: 'bg-purple-600' },
    { id: 'member', title: 'MEMBER', desc: 'Data Pelanggan', icon: <HiOutlineUserGroup />, color: 'bg-pink-600' },
    { id: 'produk', title: 'KATALOG', desc: 'Daftar Harga', icon: <HiOutlineCollection />, color: 'bg-orange-500' },
    { id: 'topup', title: 'TOP UP', desc: 'Saldo & E-Wallet', icon: <HiOutlineLightningBolt />, color: 'bg-amber-500' },
    { id: 'promo', title: 'PROMO', desc: 'Voucher & Diskon', icon: <HiOutlineTicket />, color: 'bg-rose-500' },
    { id: 'riwayat', title: 'RIWAYAT', desc: 'Cetak Struk', icon: <HiOutlineClipboardList />, color: 'bg-slate-600' },
    { id: 'shift', title: 'SHIFT', desc: 'Buka / Tutup', icon: <HiOutlineKey />, color: 'bg-indigo-600' },
    { id: 'setting', title: 'SETTING', desc: 'Printer & Perangkat', icon: <HiOutlineCog />, color: 'bg-slate-800' },
    { id: 'help', title: 'BANTUAN', desc: 'Panduan Sistem', icon: <HiOutlineChatAlt2 />, color: 'bg-cyan-700' },
  ];

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

  return (
    <div className="min-h-screen w-full bg-[#0f172a] flex flex-col items-center p-6 md:p-10 font-sans overflow-x-hidden">

      {/* Header Kasir */}
      <div className="w-full max-w-[95%] flex flex-col md:flex-row justify-between items-center mb-10 z-10 gap-6">
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
      </div>

      {/* GRID SYSTEM: 5 Kolom pada layar besar (2xl) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-full max-w-[95%] z-10">
        {menus.map((menu) => (
          <button
            key={menu.id}
            className={`${menu.color} group relative overflow-hidden cursor-pointer rounded-[2rem] p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:brightness-110 active:scale-95 flex flex-col items-center justify-center min-h-[220px]`}
          >
            {/* Glossy & Pattern Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30"></div>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

            {/* Icon */}
            <div className="mb-5 p-4 bg-black/20 rounded-2xl group-hover:bg-white group-hover:text-slate-900 transition-all duration-300 text-5xl text-white">
              {menu.icon}
            </div>

            <div className="text-center z-10">
              <h3 className="text-lg font-black tracking-wide text-white mb-1 uppercase italic">{menu.title}</h3>
              <p className="text-[11px] text-white/60 font-bold uppercase tracking-tighter">{menu.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Logout Button */}
      <div className="mt-auto pt-10 z-10 flex flex-col items-center gap-4">
        <button className="flex items-center gap-2 text-slate-500 hover:text-red-400 transition-all font-black uppercase tracking-[0.3em] text-[10px] py-3 px-10 border border-slate-800 rounded-full hover:border-red-400/50 bg-slate-900/80 backdrop-blur-md">
          <HiOutlineLogout size={16} />
          Selesaikan Shift
        </button>
        <p className="text-slate-700 text-[10px] font-bold uppercase">{name_apps} POS ENGINE V1.0.2</p>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] -z-0"></div>
    </div>
  );
}