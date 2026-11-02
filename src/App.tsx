import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { CategoryNav } from './components/CategoryNav.tsx';
import { MenuSectionView } from './components/MenuSectionView.tsx';
import { CartDrawer, CartItem } from './components/CartDrawer.tsx';
import { OutletHeroCover, OutletFooter } from './components/OutletInfo.tsx';
import { MENU_SECTIONS, MenuItem } from './data/menuData.ts';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Cart state
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [tableNumber, setTableNumber] = useState<string>('');
  const [orderNotes, setOrderNotes] = useState<string>('');

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 2000);
  };

  const handleAddToCart = (item: MenuItem) => {
    const itemName = item.fullName || item.name;
    setCart((prev) => {
      const existing = prev[itemName];
      return {
        ...prev,
        [itemName]: {
          name: itemName,
          price: item.price * 1000,
          qty: existing ? existing.qty + 1 : 1,
        },
      };
    });
    showToast(`+ Ditambahkan: ${itemName}`);
  };

  const handleUpdateQty = (name: string, delta: number) => {
    setCart((prev) => {
      const existing = prev[name];
      if (!existing) return prev;
      const newQty = existing.qty + delta;
      if (newQty <= 0) {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      }
      return {
        ...prev,
        [name]: { ...existing, qty: newQty },
      };
    });
  };

  const handleClearCart = () => {
    setCart({});
  };

  const cartTotalCount = Object.values(cart).reduce((acc, it) => acc + it.qty, 0);

  // Filter sections by category
  const visibleSections = selectedCategory === 'all'
    ? MENU_SECTIONS
    : MENU_SECTIONS.filter((s) => s.id === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#70bf44] selection:text-black">
      {/* Top Sticky Navigation */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cartTotalCount}
        openCart={() => setIsCartOpen(true)}
      />

      {/* Main Viewport Body */}
      <main className="flex-1">
        {/* Horizontal Category Bar */}
        <CategoryNav
          selectedCategory={selectedCategory}
          onSelectCategory={(id) => {
            setSelectedCategory(id);
            if (id === 'all') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              const el = document.getElementById(`sec-${id}`);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Cover Banner */}
          <OutletHeroCover />

          {/* Menu Sections Render */}
          <div className="space-y-6">
            {visibleSections.map((sec) => (
              <MenuSectionView
                key={sec.id}
                section={sec}
                onAddToCart={handleAddToCart}
                searchQuery={searchQuery}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onClearCart={handleClearCart}
        tableNumber={tableNumber}
        setTableNumber={setTableNumber}
        orderNotes={orderNotes}
        setOrderNotes={setOrderNotes}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1e2229] border border-[#70bf44] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#70bf44]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <OutletFooter />
    </div>
  );
}
