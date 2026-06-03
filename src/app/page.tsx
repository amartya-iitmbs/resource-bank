"use client";

import { useState, useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import FilterTabs from "@/components/FilterTabs";
import ResourceCard from "@/components/ResourceCard";
import VideoCard from "@/components/VideoCard";
import LinkCard from "@/components/LinkCard";
import ThemeToggle from "@/components/ThemeToggle";
import Sidebar from "@/components/Sidebar";
import { resourcesData } from "@/data/resources";
import { Resource, ResourcesData } from "@/types";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");

  const { pdfs, caseStudies, videos, links } = resourcesData as ResourcesData;

  // Get all unique categories
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    [...pdfs, ...caseStudies, ...videos, ...links].forEach((r) => {
      categories.add(r.category);
    });
    return Array.from(categories).sort();
  }, [pdfs, caseStudies, videos, links]);

  const tabs = [
    { id: "all", label: "All", count: pdfs.length + caseStudies.length + videos.length + links.length },
    { id: "pdfs", label: "PDFs", count: pdfs.length },
    { id: "caseStudies", label: "Case Studies", count: caseStudies.length },
    { id: "videos", label: "Videos", count: videos.length },
    { id: "links", label: "Links", count: links.length },
  ];

  const filteredResources = useMemo(() => {
    let resources: Resource[] = [];

    if (activeTab === "all" || activeTab === "pdfs") {
      resources = [...resources, ...pdfs.map((r: Resource) => ({ ...r, type: "pdf" as const }))];
    }
    if (activeTab === "all" || activeTab === "caseStudies") {
      resources = [...resources, ...caseStudies.map((r: Resource) => ({ ...r, type: "caseStudy" as const }))];
    }
    if (activeTab === "all" || activeTab === "videos") {
      resources = [...resources, ...videos.map((r: Resource) => ({ ...r, type: "video" as const }))];
    }
    if (activeTab === "all" || activeTab === "links") {
      resources = [...resources, ...links.map((r: Resource) => ({ ...r, type: "link" as const }))];
    }

    // Filter by category if selected
    if (activeCategory !== "all") {
      resources = resources.filter((r) => r.category === activeCategory);
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
  }, [searchQuery, activeTab, activeCategory, pdfs, caseStudies, videos, links]);

  // Group resources by category for display
  const groupedResources = useMemo(() => {
    const groups: Record<string, Resource[]> = {};
    filteredResources.forEach((resource) => {
      if (!groups[resource.category]) {
        groups[resource.category] = [];
      }
      groups[resource.category].push(resource);
    });
    return groups;
  }, [filteredResources]);

  const recentlyAdded = useMemo(() => {
    const allResources = [...pdfs, ...caseStudies, ...videos, ...links];
    return allResources
      .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
      .slice(0, 3);
  }, [pdfs, caseStudies, videos, links]);

  const handleDownload = (file: string) => {
    window.open(file, "_blank");
  };

  const handleWatch = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <main className="flex-1">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/90 backdrop-blur-md sticky top-0 z-50 dark:border-navy-600 dark:bg-navy-900/90">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="Amartya Finance Society" className="h-12 w-auto" />
              <div>
                <h1 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                  Amartya Finance Society
                </h1>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 tracking-[0.2em] uppercase mt-0.5">
                  IIT Madras BS Degree
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://forms.gle/miiEWmWYzGvP15s39"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-medium text-white bg-gold-500 rounded hover:bg-gold-600 transition-all"
              >
                Request Resources
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
        {/* Finance-themed background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Subtle accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-gold-500"></div>
              <span className="text-xs font-medium text-gold-600 dark:text-gold-400 tracking-[0.2em] uppercase">
                Finance Knowledge Hub
              </span>
              <div className="h-px w-12 bg-gold-500"></div>
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl dark:text-white">
              Resource Bank
            </h1>
            <p className="mt-8 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300 max-w-2xl mx-auto">
              Central repository for finance, economics, markets, investing, research, quantitative finance, and career preparation resources.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="px-6 py-12 lg:px-8 bg-gray-50 dark:bg-navy-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6">
            <SearchBar onSearch={setSearchQuery} placeholder="Search resources by title, description, or tags..." />
            <FilterTabs activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />
          </div>
        </div>
      </section>

      {/* Recently Added Section */}
      {searchQuery === "" && activeTab === "all" && (
        <section className="px-6 py-12 lg:px-8 bg-gray-100 dark:bg-navy-800/30">
          <div className="mx-auto max-w-7xl">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-8 dark:text-white">
              Recently Added
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentlyAdded.map((resource) => {
                if (resource.url && resource.type === "video") {
                  const videoUrl = resource.url;
                  return (
                    <VideoCard
                      key={resource.id}
                      title={resource.title}
                      description={resource.description}
                      category={resource.category}
                      tags={resource.tags}
                      url={videoUrl}
                      onWatch={() => handleWatch(videoUrl)}
                    />
                  );
                }
                if (resource.url && resource.type === "link") {
                  const linkUrl = resource.url;
                  return (
                    <LinkCard
                      key={resource.id}
                      title={resource.title}
                      description={resource.description}
                      category={resource.category}
                      tags={resource.tags}
                      url={linkUrl}
                      onOpen={() => handleWatch(linkUrl)}
                    />
                  );
                }
                const pdfFile = resource.file || "";
                return (
                  <ResourceCard
                    key={resource.id}
                    title={resource.title}
                    description={resource.description}
                    category={resource.category}
                    tags={resource.tags}
                    file={pdfFile}
                    onDownload={() => handleDownload(pdfFile)}
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Resources Section */}
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl flex gap-8">
          {/* Sidebar */}
          <Sidebar
            categories={allCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Main Content */}
          <div className="flex-1">
            {Object.entries(groupedResources).map(([category, resources]) => (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 dark:text-white" id={category.replace(/\s+/g, '-').toLowerCase()}>
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.map((resource) => {
                    if (resource.url && resource.type === "video") {
                      const videoUrl = resource.url;
                      return (
                        <VideoCard
                          key={resource.id}
                          title={resource.title}
                          description={resource.description}
                          category={resource.category}
                          tags={resource.tags}
                          url={videoUrl}
                          onWatch={() => handleWatch(videoUrl)}
                        />
                      );
                    }
                    if (resource.url && resource.type === "link") {
                      const linkUrl = resource.url;
                      return (
                        <LinkCard
                          key={resource.id}
                          title={resource.title}
                          description={resource.description}
                          category={resource.category}
                          tags={resource.tags}
                          url={linkUrl}
                          onOpen={() => handleWatch(linkUrl)}
                        />
                      );
                    }
                    const pdfFile = resource.file || "";
                    return (
                      <ResourceCard
                        key={resource.id}
                        title={resource.title}
                        description={resource.description}
                        category={resource.category}
                        tags={resource.tags}
                        file={pdfFile}
                        onDownload={() => handleDownload(pdfFile)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}

            {Object.keys(groupedResources).length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">
                  No resources found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
