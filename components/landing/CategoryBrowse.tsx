import { CategoryItem } from '@/types';

interface CategoryBrowseProps {
  categories: CategoryItem[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryBrowse({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryBrowseProps) {
  return (
    <div className="bg-[#EAF3FF]/40 border-y border-secondary-light/50 my-12">
      <section className="px-4 sm:px-6 py-20 sm:py-28 max-w-[1440px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-primary mb-10 font-display tracking-tight text-center md:text-left uppercase">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={idx}
                onClick={() => onSelectCategory(isSelected ? null : cat.name)}
                className={`border flex items-center gap-4 px-5 py-4 rounded-[1.5rem] transition-all duration-300 w-full text-left group cursor-pointer ${
                  isSelected
                    ? 'bg-primary text-white border-primary shadow-lg'
                    : 'bg-white text-primary border-secondary-light/60 hover:border-secondary/50 hover:shadow-[0_12px_30px_rgba(27,58,107,0.06)] hover:-translate-y-1'
                }`}
              >
                <div
                  className={`p-2.5 rounded-xl transition-colors duration-300 ${
                    isSelected
                      ? 'bg-white text-primary'
                      : 'bg-secondary-ice group-hover:bg-secondary group-hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                </div>
                <span className="font-bold text-[17px] uppercase tracking-wider">{cat.name}</span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
