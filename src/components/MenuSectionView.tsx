import React from 'react';
import { MenuSection, MenuItem } from '../data/menuData.ts';
import { Plus, Check, Flame } from 'lucide-react';

interface MenuSectionViewProps {
  section: MenuSection;
  onAddToCart: (item: MenuItem) => void;
  searchQuery: string;
}

export const MenuSectionView: React.FC<MenuSectionViewProps> = ({
  section,
  onAddToCart,
  searchQuery,
}) => {
  // Filter items in section based on search query
  const filteredItems = section.items.filter((it) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      it.name.toLowerCase().includes(q) ||
      (it.sub && it.sub.toLowerCase().includes(q)) ||
      (it.variant && it.variant.toLowerCase().includes(q)) ||
      (it.fullName && it.fullName.toLowerCase().includes(q))
    );
  });

  if (filteredItems.length === 0) return null;

  return (
    <section id={`sec-${section.id}`} className="mb-10 scroll-mt-28">
      {/* Board Header */}
      <div className="bg-gradient-to-r from-[#1c1f24] to-[#16181b] p-4 sm:p-5 rounded-2xl border border-[#2b303a] shadow-lg mb-4 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-32 h-32 bg-[#70bf44]/5 rounded-full blur-2xl pointer-events-none" />
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide font-heading">
          {section.title}
        </h2>
        {section.subtitle && (
          <p className="text-sm font-serif-brand italic text-[#f2ba49] mt-0.5">
            {section.subtitle}
          </p>
        )}
        {section.desc && (
          <p className="text-xs text-gray-300 mt-2 bg-[#121417]/70 p-2.5 rounded-lg border border-[#2a2f38] leading-relaxed">
            🌿 {section.desc}
          </p>
        )}
      </div>

      {/* Special Hero Menu */}
      {section.isHero ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1c1f24] rounded-2xl border border-[#2e343f] overflow-hidden shadow-xl hover:border-[#70bf44]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              {item.image && (
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f24] via-transparent to-black/30" />
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-[#f2ba49] to-amber-600 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-lg">
                    {item.badge || 'Signature'}
                  </span>
                </div>
              )}

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white font-serif-brand">
                    {item.name}
                  </h3>
                  {item.sub && (
                    <p className="text-xs text-gray-300 mt-1.5 leading-relaxed">
                      {item.sub}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-[#2a2f3a] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Harga</span>
                    <span className="text-2xl font-black text-[#f2ba49] font-mono tracking-tight">
                      {item.price}K
                    </span>
                    <span className="text-[11px] text-gray-400 ml-1">
                      (Rp {(item.price * 1000).toLocaleString('id-ID')})
                    </span>
                  </div>

                  <button
                    onClick={() => onAddToCart(item)}
                    className="bg-gradient-to-r from-[#70bf44] to-[#4f962b] hover:from-[#7ed44d] hover:to-[#58a730] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-[#70bf44]/30 hover:scale-[1.02] active:scale-95 flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>+ Pesan</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : section.isBBQ ? (
        /* BBQ Section with portion breakdown */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1c1f24] rounded-2xl border border-[#2e343f] p-5 shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-red-500/10 rounded-full blur-xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-[#2d333e] pb-3">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-red-400" />
                    <h3 className="text-lg font-bold text-white font-heading">
                      {item.name}
                    </h3>
                  </div>
                  <span className="bg-[#242932] text-[#f2ba49] text-xs font-bold px-2.5 py-1 rounded-md border border-[#3b4352]">
                    {item.portion}
                  </span>
                </div>

                <div className="my-3">
                  <span className="text-2xl font-black text-[#f2ba49] font-mono">
                    {item.price}K
                  </span>
                  <span className="text-xs text-gray-400 ml-1.5">
                    (Rp {(item.price * 1000).toLocaleString('id-ID')})
                  </span>
                </div>

                {item.list && (
                  <ul className="space-y-1.5 text-xs text-gray-300 bg-[#141618] p-3 rounded-xl border border-[#262b33]">
                    {item.list.map((it, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#70bf44] shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-[#2d333e] flex items-center justify-between gap-2">
                <span className="text-xs text-[#70bf44] font-semibold bg-[#70bf44]/10 px-2.5 py-1 rounded-full">
                  Gratis Es Teh Manis
                </span>
                <button
                  onClick={() => onAddToCart(item)}
                  className="bg-gradient-to-r from-[#70bf44] to-[#4f962b] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:scale-[1.02] active:scale-95 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Pilih Paket</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Regular Menu Grid (2 columns on tablet/desktop) */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1c1f24] hover:bg-[#20242a] p-3.5 rounded-xl border border-[#282d36] hover:border-[#383f4d] shadow-md flex items-center justify-between gap-3 transition-all group"
            >
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm sm:text-base text-gray-100 group-hover:text-white truncate">
                  {item.name}
                  {item.variant && (
                    <span className="text-xs font-normal text-amber-300 ml-1">
                      {item.variant}
                    </span>
                  )}
                </div>
                {item.sub && (
                  <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                    {item.sub}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <span className="font-mono font-bold text-sm text-[#f2ba49]">
                  {item.price}K
                </span>

                <button
                  onClick={() => onAddToCart(item)}
                  className="w-8 h-8 rounded-lg bg-[#272d38] hover:bg-[#70bf44] text-gray-300 hover:text-[#121212] flex items-center justify-center font-bold text-base transition-colors shadow-sm cursor-pointer"
                  title="Tambah ke pesanan"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
