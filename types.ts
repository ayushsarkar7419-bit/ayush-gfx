
export interface ThumbnailItem {
  id: string;
  title: string;
  imageUrl: string;
  ctr?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}
