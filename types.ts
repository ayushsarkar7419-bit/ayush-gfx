
export type Category = 'All' | 'Gaming' | 'Vlog' | 'Documentary' | 'Shorts' | 'Tech' | 'IRL' | 'Podcast' | 'Finance' | 'Poster';

export interface ThumbnailItem {
  id: string;
  title: string;
  category: Category;
  imageUrl: string;
  ctr?: string;
  hiddenFromAll?: boolean;
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
