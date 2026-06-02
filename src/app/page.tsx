"use client";

import { useState, useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import FilterTabs from "@/components/FilterTabs";
import ResourceCard from "@/components/ResourceCard";
import { resourcesData } from "@/data/resources";
import { Resource, ResourcesData } from "@/types";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const { pdfs, videos, links } = resourcesData as ResourcesData;

  const tabs = [
    { id: "all", label: "All", count: pdfs.length + videos.length + links.length },
    { id: "pdfs", label: "PDFs", count: pdfs.length },
    { id: "videos", label: "Videos", count: videos.length },
    { id: "links", label: "Links", count: links.length },
  ];

  const filteredResources = useMemo(() => {
    let resources: Resource[] = [];

    if (activeTab === "all" || activeTab === "pdfs") {
      resources = [...resources, ...pdfs.map((r: Resource) => ({ ...r, type: "pdf" as const }))];
    }
    if (activeTab === "all" || activeTab === "videos") {
      resources = [...resources, ...videos.map((r: Resource) => ({ ...r, type: "video" as const }))];
    }
    if (activeTab === "all" || activeTab === "links") {
      resources = [...resources, ...links.map((r: Resource) => ({ ...r, type: "link" as const }))];
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      resources = resources.filter(
        (r) =>
          r.title.toLowerCase().includes(query) ||
          r.description.toLowerCase().includes(query) ||
          r.tags.some((tag: string) => tag.toLowerCase().includes(query))
      );
    }

    return resources;
  }, [searchQuery, activeTab, pdfs, videos, links]);

  const handleDownload = (file: string) => {
    window.open(file, "_blank");
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-sm font-semibold tracking-widest uppercase text-gold-500">
              Amartya Finance Society
            </h1>
            <h2 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Resource Bank
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The central repository for finance, economics, markets, investing, research, 
              quantitative finance, and career preparation resources.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="px-6 py-12 lg:px-8 bg-navy-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <SearchBar onSearch={setSearchQuery} placeholder="Search resources by title, description, or tags..." />
            <FilterTabs activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              {filteredResources.length} {filteredResources.length === 1 ? "Resource" : "Resources"}
            </h3>
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  category={resource.category}
                  tags={resource.tags}
                  file={resource.file}
                  onDownload={() => handleDownload(resource.file)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No resources found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
