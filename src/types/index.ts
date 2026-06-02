export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  file: string;
  dateAdded: string;
  type?: "pdf" | "video" | "link";
}

export interface ResourcesData {
  pdfs: Resource[];
  videos: Resource[];
  links: Resource[];
}
