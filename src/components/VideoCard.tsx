import { Play, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  title: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  onWatch: () => void;
}

export default function VideoCard({
  title,
  description,
  category,
  tags,
  url,
  onWatch,
}: VideoCardProps) {
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    return match ? match[1] : null;
  };

  const youtubeId = getYouTubeId(url);
  const thumbnailUrl = youtubeId 
    ? `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`
    : null;

  return (
    <div className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-gold-500 dark:border-navy-600 dark:bg-navy-800 transition-all duration-200">
      {thumbnailUrl && (
        <div className="relative aspect-video bg-gray-100 dark:bg-navy-700">
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={onWatch}
              className="p-3 bg-gold-500 rounded-full text-navy-900 hover:bg-gold-400 transition-colors"
            >
              <Play className="w-6 h-6 fill-current" />
            </button>
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-gold-500 uppercase tracking-wider">
            {category}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gold-500 dark:text-white transition-colors line-clamp-2">
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
          onClick={onWatch}
          className="flex items-center gap-2 text-sm font-medium text-gold-500 hover:text-gold-400 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Watch on YouTube
        </button>
      </div>
    </div>
  );
}
