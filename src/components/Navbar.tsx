import React from 'react';
import { ShoppingBag, Search } from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  cartCount: number;
  openCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  setSearchQuery,
  cartCount,
  openCart,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#141618]/95 backdrop-blur-md border-b-2 border-[#70bf44] shadow-xl">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3 flex-wrap">
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          title="Kebonibu Food park & Cafe"
        >
          <img 
            src="./images/logo-kebonibu.png" 
            alt="Kebonibu Food park & Cafe" 
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <span className="text-xs uppercase tracking-widest text-[#70bf44] font-bold block">
              Food Park & Cafe
            </span>
            <span className="text-[11px] text-gray-400 block -mt-0.5">
              Jatisampurna, Bekasi
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-sm min-w-[200px] order-last sm:order-none w-full sm:w-auto">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari menu (Konro, Sei, Gurame, Kopi)..."
            className="w-full bg-[#1c1e22] text-sm text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-full border border-[#2e333d] focus:outline-none focus:border-[#70bf44] focus:ring-1 focus:ring-[#70bf44] transition-all shadow-inner"
          />
        </div>

        {/* Cart Trigger */}
        <div className="flex items-center gap-2">
          <button
            onClick={openCart}
            className="flex items-center gap-2 bg-gradient-to-r from-[#70bf44] to-[#4f962b] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-[#70bf44]/25 hover:shadow-[#70bf44]/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Pesanan</span>
            <span className="bg-[#141618] text-[#f2ba49] px-2 py-0.5 rounded-full text-xs font-mono font-extrabold border border-[#f2ba49]/30">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
