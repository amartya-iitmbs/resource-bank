"use client";

import { cn } from "@/lib/utils";

interface FilterTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: { id: string; label: string; count: number }[];
}

export default function FilterTabs({ activeTab, onTabChange, tabs }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
            activeTab === tab.id
              ? "bg-gold-500 text-navy-900"
              : "bg-navy-800 text-gray-300 hover:bg-navy-700 hover:text-white border border-navy-600"
          )}
        >
          {tab.label}
          <span className="ml-2 text-xs opacity-75">({tab.count})</span>
        </button>
      ))}
    </div>
  );
}
