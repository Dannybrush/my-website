
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: 'business' | 'ecommerce' | 'webapp' | 'landing';
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  business: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  service: string;
  message: string;
  isLocal: boolean;
}