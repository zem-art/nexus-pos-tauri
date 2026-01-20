import React, { useState } from 'react';

import { 
  HiOutlineViewGrid, 
  HiOutlineShoppingCart, 
  HiOutlineCube, 
  HiOutlineUsers, 
  HiOutlineCog, 
  HiOutlineLogout,
  HiOutlineSearch
} from "react-icons/hi";

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 font-sans">
      {/* SIDEBAR */}
      <nav className="w-64 bg-slate-900 text-white flex flex-col shadow-xl">
        <div className="p-8">
          <h1 className="text-2xl font-black tracking-widest text-blue-400 uppercase">nexus</h1>
          <p className="text-[10px] text-slate-400 tracking-widest uppercase">Point of Sale System</p>
        </div>

        <div className="flex-1 px-4 space-y-2">
          <NavItem 
            icon={<HiOutlineViewGrid size={22}/>} 
            label="Dashboard" 
            active={activeTab === 'Dashboard'} 
            onClick={() => setActiveTab('Dashboard')} 
          />
          <NavItem 
            icon={<HiOutlineShoppingCart size={22}/>} 
            label="Kasir (POS)" 
            active={activeTab === 'POS'} 
            onClick={() => setActiveTab('POS')} 
          />
          <NavItem 
            icon={<HiOutlineCube size={22}/>} 
            label="Gudang" 
            active={activeTab === 'Gudang'} 
            onClick={() => setActiveTab('Gudang')} 
          />
          <NavItem 
            icon={<HiOutlineUsers size={22}/>} 
            label="Staf / Pegawai" 
            active={activeTab === 'Staf'} 
            onClick={() => setActiveTab('Staf')} 
          />
        </div>

        <div className="p-4 border-t border-slate-800">
          <NavItem 
            icon={<HiOutlineCog size={22}/>} 
            label="Pengaturan" 
            active={activeTab === 'Settings'} 
            onClick={() => setActiveTab('Settings')} 
          />
          <NavItem 
            icon={<HiOutlineLogout size={22}/>} 
            label="Keluar" 
            danger 
          />
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* TOPBAR */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-10 shadow-sm">
          <div>
             <h2 className="text-2xl font-bold text-slate-700">{activeTab}</h2>
             <p className="text-sm text-gray-400">Selasa, 20 Januari 2026</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold">Admin Utama</p>
              <span className="text-[10px] bg-green-100 text-green-600 px-2 py-1 rounded-full font-extrabold uppercase">Online</span>
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">
              AD
            </div>
          </div>
        </header>

        {/* DYNAMIC CONTENT */}
        <section className="p-10 overflow-y-auto bg-[#f8f9fc] h-full">
          {activeTab === 'POS' ? (
            <div className="grid grid-cols-12 gap-8">
              
              {/* Kolom Produk (Kiri) */}
              <div className="col-span-8 space-y-6">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                    <HiOutlineSearch size={20} />
                  </span>
                  <input 
                    type="text" 
                    placeholder="Scan barcode atau cari nama produk..." 
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-lg"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  {/* Dummy Products */}
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-white p-5 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer border border-gray-100 group">
                      <div className="w-full h-32 bg-slate-100 rounded-2xl mb-4 group-hover:bg-blue-50 transition-colors flex items-center justify-center text-slate-300">
                         <HiOutlineCube size={48} />
                      </div>
                      <p className="font-bold text-slate-700">Espresso Roast {i}</p>
                      <p className="text-sm text-gray-400 mb-2">Category: Coffee</p>
                      <p className="text-blue-600 font-black text-lg">Rp 35.000</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kolom Keranjang (Kanan) */}
              <div className="col-span-4 bg-white rounded-[2rem] shadow-xl p-8 border border-gray-50 flex flex-col h-[calc(100vh-180px)]">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-black text-slate-800">Pesanan</h3>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs font-bold">3 Items</span>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 mb-6 pr-2">
                   {/* Contoh item di keranjang */}
                   <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl text-sm font-semibold">
                      <span>Kopi Kenangan x1</span>
                      <span>Rp 25.000</span>
                   </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-dashed border-gray-200">
                   <div className="flex justify-between text-gray-500"><p>Subtotal</p><p>Rp 25.000</p></div>
                   <div className="flex justify-between text-gray-500"><p>Pajak (10%)</p><p>Rp 2.500</p></div>
                   <div className="flex justify-between text-2xl font-black text-slate-800 mt-2">
                      <p>Total</p>
                      <p className="text-blue-600">Rp 27.500</p>
                   </div>
                </div>

                <button className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl mt-8 hover:bg-blue-700 shadow-lg shadow-blue-200 active:scale-[0.98] transition-all tracking-widest">
                  PROSES BAYAR
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
               <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-300 mb-4">
                  <HiOutlineCube size={40} />
               </div>
               <h3 className="text-xl font-bold text-slate-400 italic">Halaman {activeTab} dalam pengembangan</h3>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

// Sub-komponen Navigasi
function NavItem({ icon, label, active, onClick, danger }:any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-200 ${
        active 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 font-bold' 
          : danger 
            ? 'text-red-400 hover:bg-red-500/10' 
            : 'text-slate-400 hover:bg-slate-800 hover:text-white'
      }`}
    >
      {icon}
      <span className="text-sm tracking-wide">{label}</span>
    </button>
  );
}