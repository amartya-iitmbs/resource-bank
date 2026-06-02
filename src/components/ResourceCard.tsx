import { Download, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  tags: string[];
  file: string;
  onDownload: () => void;
}

export default function ResourceCard({
  title,
  description,
  category,
  tags,
  file,
  onDownload,
}: ResourceCardProps) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-6 hover:border-gold-500 dark:border-navy-600 dark:bg-navy-800 transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 rounded-lg dark:bg-navy-700">
            <FileText className="w-5 h-5 text-gold-500" />
          </div>
          <div>
            <span className="text-xs font-medium text-gold-500 uppercase tracking-wider">
              {category}
            </span>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gold-500 dark:text-white transition-colors">
        {title}
      </h3>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2 dark:text-gray-400">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded dark:bg-navy-700 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={onDownload}
        className="flex items-center gap-2 text-sm font-medium text-gold-500 hover:text-gold-400 transition-colors"
      >
        <Download className="w-4 h-4" />
        Download
      </button>
    </div>
  );
}
