
import { ThumbnailItem, Skill, Feature, Category } from './types';

export const CATEGORIES: Category[] = ['All', 'Gaming', 'Vlog', 'Documentary', 'Shorts', 'Tech'];

export const THUMBNAILS: ThumbnailItem[] = [
  { 
    id: 'g1', 
    title: '100 Days in Minecraft Arctic', 
    category: 'Gaming', 
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'g2', 
    title: 'The Every Color Wheel Challenge', 
    category: 'Gaming', 
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'g3', 
    title: 'Ultimate Supercar Race', 
    category: 'Gaming', 
    imageUrl: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'g4', 
    title: 'Coding the Impossible Game', 
    category: 'Gaming', 
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'g5', 
    title: 'KAMLA: The Horror Legend', 
    category: 'Gaming', 
    imageUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'g6', 
    title: 'Pro Music Production Setup', 
    category: 'Gaming', 
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'g7', 
    title: 'Central Cinema Neon Street', 
    category: 'Vlog', 
    imageUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'g8', 
    title: 'Mountain Range Expedition', 
    category: 'Documentary', 
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 'g9', 
    title: 'Arctic Penguin Life', 
    category: 'Documentary', 
    imageUrl: 'https://images.unsplash.com/photo-1517783999520-f068d7431a60?q=80&w=1000&auto=format&fit=crop' 
  },
];

export const SKILLS: Skill[] = [
  { name: 'Thumbnail Design', percentage: 98, icon: 'Image' },
  { name: 'Color Psychology', percentage: 92, icon: 'Palette' },
  { name: 'CTR Optimization', percentage: 95, icon: 'MousePointerClick' },
  { name: 'Photoshop Mastery', percentage: 99, icon: 'Layers' },
  { name: 'Branding & Style', percentage: 88, icon: 'Sparkles' },
];

export const FEATURES: Feature[] = [
  { 
    title: 'High CTR Thumbnails', 
    description: 'Designed specifically to trigger the click and boost your video performance.', 
    icon: 'MousePointer2' 
  },
  { 
    title: '24hr Delivery', 
    description: 'Quick turnaround to keep your upload schedule on track every single time.', 
    icon: 'Zap' 
  },
  { 
    title: 'Unlimited Revisions', 
    description: 'I work until you are 100% satisfied with the final masterpiece.', 
    icon: 'RefreshCcw' 
  },
  { 
    title: '100% YouTube Ready', 
    description: 'Perfect dimensions, optimized file size, and mobile-friendly clarity.', 
    icon: 'CheckCircle2' 
  },
];

export const ABOUT_CONTENT = {
  name: "Ayush",
  role: "Visual Strategist & Thumbnail Expert",
  experience: "4+ Years",
  bio: "I am a visual strategist with over 4 years of experience crafting high-converting thumbnails for some of the biggest creators on YouTube. My passion lies in the intersection of data-driven psychology and cinematic art. I don't just make things look 'cool'; I design them to stop the scroll and force the click.",
  mission: "My mission is to help creators maximize their reach by ensuring their first impression—the thumbnail—is unmissable. I've helped channels grow from a few hundred views to millions by simply optimizing the visual 'entry point' of their content."
};
