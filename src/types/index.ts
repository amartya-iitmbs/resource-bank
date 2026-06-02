export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  file?: string;
  url?: string;
  thumbnail?: string;
  dateAdded: string;
  type?: "pdf" | "video" | "link" | "caseStudy";
}

export interface ResourcesData {
  pdfs: Resource[];
  caseStudies: Resource[];
  videos: Resource[];
  links: Resource[];
}
