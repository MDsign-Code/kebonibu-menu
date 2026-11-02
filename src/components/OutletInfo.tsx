import React from 'react';
import { MapPin, Phone, Clock, Trees, Coffee, Wifi, Sparkles, MessageCircle } from 'lucide-react';

export const OutletHeroCover: React.FC = () => {
  return (
    <div className="bg-[#1c1f24] rounded-3xl border border-[#2e343f] p-6 sm:p-10 text-center shadow-2xl relative overflow-hidden mb-8">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-[#70bf44]/10 via-transparent to-transparent pointer-events-none" />

      <img
        src="/images/logo-kebonibu.png"
        alt="Kebonibu Food park & Cafe"
        className="h-24 sm:h-32 w-auto max-w-[280px] sm:max-w-[340px] object-contain mx-auto mb-4 drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform"
      />

      <div className="text-3xl sm:text-5xl font-black font-serif-brand text-transparent bg-clip-text bg-gradient-to-r from-[#f2ba49] via-amber-200 to-[#f2ba49] tracking-wider mb-3">
        Daftar Menu
      </div>

      <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
        JL. MASJID AL TAQWA NO 88 RT.002/RW.001, JATIRANGGA, KEC. JATISAMPURNA, KOTA BEKASI
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-4 text-xs font-semibold text-gray-300">
        <span className="flex items-center gap-1.5 bg-[#141619] border border-[#2c323d] px-3 py-1.5 rounded-full">
          <Clock className="w-3.5 h-3.5 text-[#70bf44]" />
          <span>Buka Setiap Hari: 10:00 - 22:00</span>
        </span>
        <a
          href="https://wa.me/6281110004608"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-[#25d366]/15 hover:bg-[#25d366]/25 text-[#25d366] border border-[#25d366]/30 px-3 py-1.5 rounded-full transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>WhatsApp: 0811-1000-4608</span>
        </a>
      </div>

      {/* Facilities badges */}
      <div className="flex flex-wrap justify-center gap-2 mt-5 pt-5 border-t border-[#292e38]">
        {[
          { label: 'Suasana Taman Asri', icon: Trees },
          { label: 'Area Gazebo & Lesehan', icon: Coffee },
          { label: 'Free Wi-Fi', icon: Wifi },
          { label: 'Live Music & Event', icon: Sparkles },
        ].map((f, i) => {
          const Icon = f.icon;
          return (
            <span
              key={i}
              className="text-[11px] font-medium text-gray-400 bg-[#15171a] px-2.5 py-1 rounded-md border border-[#262a32] flex items-center gap-1.5"
            >
              <Icon className="w-3 h-3 text-[#70bf44]" />
              <span>{f.label}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export const OutletFooter: React.FC = () => {
  return (
    <footer className="mt-16 bg-[#181a1e] border-t-2 border-[#2b303a] py-10 px-4 text-center">
      <div className="max-w-xl mx-auto space-y-4">
        <img
          src="/images/logo-kebonibu.png"
          alt="Kebonibu Food park & Cafe"
          className="h-16 w-auto max-w-[200px] object-contain mx-auto drop-shadow-md"
        />
        <p className="text-xs text-gray-400 leading-relaxed">
          Kebonibu Food park & Cafe menghadirkan olahan rempah istimewa Nusantara, Konro Bakar, Gulai Kepala Kambing, Steak & Sei, Paket Barbeque, hingga aneka Kopi Nusantara dalam suasana asri dan ramah keluarga.
        </p>

        <a
          href="https://wa.me/6281110004608"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20be5b] text-slate-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat Reservasi WhatsApp: 0811-1000-4608</span>
        </a>

        <div className="text-[11px] text-gray-500 pt-4 border-t border-[#252830]">
          © {new Date().getFullYear()} Kebonibu Food park & Cafe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
