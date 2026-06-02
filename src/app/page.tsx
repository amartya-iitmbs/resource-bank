"use client";

import { useState, useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import FilterTabs from "@/components/FilterTabs";
import ResourceCard from "@/components/ResourceCard";
import VideoCard from "@/components/VideoCard";
import LinkCard from "@/components/LinkCard";
import ThemeToggle from "@/components/ThemeToggle";
import { resourcesData } from "@/data/resources";
import { Resource, ResourcesData } from "@/types";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const { pdfs, caseStudies, videos, links } = resourcesData as ResourcesData;

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
  }, [searchQuery, activeTab, pdfs, caseStudies, videos, links]);

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
      <header className="border-b border-gray-200 bg-white/50 backdrop-blur-sm sticky top-0 z-50 dark:border-navy-600 dark:bg-navy-800/50">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Amartya Finance Society Logo" className="h-16 w-auto" />
            <span className="text-lg font-bold text-gold-500">
              Amartya Finance Society
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-navy-900 dark:via-navy-800 dark:to-navy-900"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl dark:text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
              Resource Bank
            </h1>
            <p className="mt-8 text-lg leading-8 text-gray-600 sm:text-xl dark:text-gray-300 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              The central repository for finance, economics, markets, investing, research,
              quantitative finance, and career preparation resources.
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
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-white">
              {filteredResources.length} {filteredResources.length === 1 ? "Resource" : "Resources"}
            </h3>
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((resource) => {
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-base sm:text-lg dark:text-gray-400">No resources found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
