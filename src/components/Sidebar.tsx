import { useState } from "react";

interface SidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Sidebar({ categories, activeCategory, onCategoryChange }: SidebarProps) {
  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block">
      <div className="sticky top-24 space-y-2">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
          Browse by Category
        </h3>
        <nav className="space-y-1">
          <button
            onClick={() => onCategoryChange("all")}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              activeCategory === "all"
                ? "bg-gold-500 text-white"
                : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-navy-700"
            }`}
          >
            All Resources
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                activeCategory === category
                  ? "bg-gold-500 text-white"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-navy-700"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
