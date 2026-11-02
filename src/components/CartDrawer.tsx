import React from 'react';
import { X, Trash2, Plus, Minus, Send, MapPin, FileText } from 'lucide-react';

export interface CartItem {
  name: string;
  price: number; // in Rupiah (item.price * 1000)
  qty: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Record<string, CartItem>;
  onUpdateQty: (name: string, delta: number) => void;
  onClearCart: () => void;
  tableNumber: string;
  setTableNumber: (table: string) => void;
  orderNotes: string;
  setOrderNotes: (notes: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onClearCart,
  tableNumber,
  setTableNumber,
  orderNotes,
  setOrderNotes,
}) => {
  if (!isOpen) return null;

  const items = Object.values(cart);
  const totalQty = items.reduce((acc, it) => acc + it.qty, 0);
  const totalPrice = items.reduce((acc, it) => acc + it.price * it.qty, 0);

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    const table = tableNumber.trim() || 'Dine-In';
    const notes = orderNotes.trim() || '-';

    let text = `*PESANAN MENU DIGITAL - KEBONIBU*%0A`;
    text += `📍 *Nomor Meja*: ${encodeURIComponent(table)}%0A`;
    text += `📝 *Catatan Khusus*: ${encodeURIComponent(notes)}%0A`;
    text += `-----------------------------------%0A`;

    items.forEach((it, i) => {
      const sub = it.price * it.qty;
      text += `${i + 1}. *${encodeURIComponent(it.name)}* (${it.qty}x) = Rp ${sub.toLocaleString('id-ID')}%0A`;
    });

    text += `-----------------------------------%0A`;
    text += `*TOTAL PEMBAYARAN: Rp ${totalPrice.toLocaleString('id-ID')}*%0A%0A`;
    text += `Mohon konfirmasi dan proses pesanan kami. Terima kasih Kebonibu!`;

    window.open(`https://wa.me/6281110004608?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#16181b] border-l border-[#282d36] shadow-2xl flex flex-col justify-between text-white">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#282d36] flex items-center justify-between bg-[#1b1e23]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#70bf44]/15 border border-[#70bf44]/30 flex items-center justify-center text-[#70bf44]">
                🛒
              </div>
              <div>
                <h3 className="font-bold text-base text-white">Pesanan Anda</h3>
                <p className="text-xs text-gray-400">Kebonibu Food park & Cafe</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                  title="Kosongkan Keranjang"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-[#252932] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
            {items.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center text-center text-gray-400 p-6">
                <div className="w-16 h-16 rounded-full bg-[#20242b] flex items-center justify-center text-2xl mb-3">
                  🍽️
                </div>
                <p className="font-medium text-sm text-gray-300">
                  Keranjang pesanan masih kosong
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Pilih menu favorit Anda dari Konro Bakar, Gulai Kepala Kambing, atau hidangan lezat lainnya.
                </p>
              </div>
            ) : (
              items.map((it) => {
                const sub = it.price * it.qty;
                return (
                  <div
                    key={it.name}
                    className="bg-[#1c1f25] p-3.5 rounded-xl border border-[#2a2f3a] flex items-center justify-between gap-3 shadow-sm"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-white truncate">
                        {it.name}
                      </h4>
                      <p className="text-xs text-[#f2ba49] font-mono mt-0.5">
                        Rp {it.price.toLocaleString('id-ID')}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => onUpdateQty(it.name, -1)}
                        className="w-7 h-7 rounded-lg bg-[#272c35] hover:bg-red-500/20 hover:text-red-400 text-gray-300 flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center text-sm font-bold font-mono">
                        {it.qty}
                      </span>
                      <button
                        onClick={() => onUpdateQty(it.name, 1)}
                        className="w-7 h-7 rounded-lg bg-[#272c35] hover:bg-[#70bf44]/20 hover:text-[#70bf44] text-gray-300 flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Table & Notes Form */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#262b33] bg-[#1a1d22] space-y-3">
              <div>
                <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#70bf44]" />
                  <span>Nomor Meja / Lokasi Duduk</span>
                </label>
                <input
                  type="text"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  placeholder="Cth: Meja 08 / Gazebo 2 / Lesehan"
                  className="w-full bg-[#121417] text-sm text-white border border-[#2c323d] rounded-xl px-3 py-2 placeholder-gray-500 focus:outline-none focus:border-[#70bf44]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5 mb-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#f2ba49]" />
                  <span>Catatan Khusus (Opsional)</span>
                </label>
                <input
                  type="text"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="Cth: Sambal dipisah, kuah hangat, es teh sedikit gula"
                  className="w-full bg-[#121417] text-sm text-white border border-[#2c323d] rounded-xl px-3 py-2 placeholder-gray-500 focus:outline-none focus:border-[#70bf44]"
                />
              </div>

              {/* Total Summary */}
              <div className="pt-2 border-t border-[#292e38] flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 block">Total ({totalQty} item)</span>
                  <span className="text-xl font-extrabold text-[#f2ba49] font-mono">
                    Rp {totalPrice.toLocaleString('id-ID')}
                  </span>
                </div>

                <button
                  onClick={handleCheckoutWhatsApp}
                  className="bg-gradient-to-r from-[#25d366] to-[#128c7e] hover:from-[#29e36f] hover:to-[#179f8f] text-slate-950 font-extrabold px-4 py-2.5 rounded-xl text-sm shadow-lg shadow-[#25d366]/20 flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim ke WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
