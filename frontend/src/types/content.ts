export interface ContentType {
  hero: {
    title: string;
    subtitle: string;
  };
  pricing: {
    title: string;
    price: string;
  }[];
  aboutProject: string;
  amenities: {
    title: string;
    desc: string;
  }[];
  nearbyConnectivity: string;
  constructionUpdates: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}
