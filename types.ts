
export interface NavLink {
  name: string;
  path: string;
}

export interface SEOData {
  title: string;
  metaDescription: string;
}

export interface CoreAdvantage {
  title: string;
  description: string;
  icon: string; // Tailwind icon class or simple emoji for placeholder
}

export interface CaseStudy {
  id: string; // Unique identifier for routing
  name: string;
  industry: string;
  attendees: string;
  theme: string;
  outcome: string;
  imageUrl: string;
  subtitle: string; // New: For detail page hero
  challenge: string; // New: Detailed challenge description
  solution: string[]; // New: Array of paragraphs for the solution
  results: string[]; // New: Array of bullet points for results
  galleryImages: string[]; // New: Array of image URLs for the gallery
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string; // Tailwind icon class or simple emoji for placeholder
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  client: string;
  company: string;
  avatarUrl: string;
}

export interface FormField {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  options?: string[]; // For select type
}

export interface SectionTitleProps { // Moved here from SectionTitle.tsx for global type usage
  title: string;
  subtitle?: string;
  className?: string; // For the outer div
  titleClassName?: string; // For the h2 title text itself
}

export interface HighlightImage {
  src: string;
  alt: string;
}