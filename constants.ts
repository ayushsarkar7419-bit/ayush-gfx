
import { ThumbnailItem, Skill, Feature, Category } from './types';

export const CATEGORIES: Category[] = ['All', 'Gaming', 'IRL', 'Documentary', 'Podcast', 'Tech'];

export const THUMBNAILS: ThumbnailItem[] = [
  { 
    id: 'g8', 
    title: 'Viral Challenge Video', 
    category: 'Gaming', 
    imageUrl: 'https://iili.io/fhD7nCG.jpg', 
    ctr: '21.5% CTR'
  },
  { 
    id: 'g7', 
    title: 'Minecraft Arctic Survival', 
    category: 'Gaming', 
    imageUrl: 'https://iili.io/fhefxwX.jpg', 
    ctr: '18.4% CTR'
  },
  { 
    id: 'g1', 
    title: 'Gaming Live Stream', 
    category: 'Gaming', 
    imageUrl: 'https://iili.io/fhD7qjn.jpg',
    ctr: '12.8% CTR'
  },
  { 
    id: 'g2', 
    title: 'Champion Valorant', 
    category: 'Gaming', 
    imageUrl: 'https://iili.io/fhD7BQs.jpg',
    ctr: '15.2% CTR'
  },
  { 
    id: 'g3', 
    title: 'Gaming PC Setup', 
    category: 'Tech', 
    imageUrl: 'https://iili.io/fhDpRta.jpg',
    ctr: '11.5% CTR'
  },
  { 
    id: 'g4', 
    title: 'The Arctic Challenge', 
    category: 'Documentary', 
    imageUrl: 'https://iili.io/fhDpuAF.jpg',
    ctr: '14.1% CTR'
  },
  { 
    id: 'g5', 
    title: 'Neon Tokyo Vlog', 
    category: 'Vlog', 
    imageUrl: 'https://iili.io/fhDp7oJ.jpg',
    ctr: '13.5% CTR'
  },
  { 
    id: 'g6', 
    title: 'Survival Horror Legend', 
    category: 'Gaming', 
    imageUrl: 'https://iili.io/fhDpAwg.jpg',
    ctr: '16.8% CTR'
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
