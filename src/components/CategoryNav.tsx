import React from 'react';
import { CATEGORIES } from '../data/menuData.ts';

interface CategoryNavProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <nav className="sticky top-[61px] z-40 bg-[#17191d]/90 backdrop-blur-md border-b border-[#2a2e36] py-2 px-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? 'bg-[#70bf44] text-[#121416] font-bold shadow-md shadow-[#70bf44]/30 scale-[1.02]'
                  : 'bg-[#202329] text-gray-300 hover:text-white hover:bg-[#2b3038] border border-[#2f3540]'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
