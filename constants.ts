
import { ThumbnailItem, Skill, Feature, Category } from './types';

export const CATEGORIES: Category[] = ['All', 'Gaming', 'Vlog', 'Documentary', 'Shorts', 'Tech'];

export const THUMBNAILS: ThumbnailItem[] = [
  { id: '1', title: 'Ultimate FPS Strategy', category: 'Gaming', imageUrl: 'https://picsum.photos/600/400?random=1' },
  { id: '2', title: 'Day in Tokyo', category: 'Vlog', imageUrl: 'https://picsum.photos/600/400?random=2' },
  { id: '3', title: 'The Rise of AI', category: 'Documentary', imageUrl: 'https://picsum.photos/600/400?random=3' },
  { id: '4', title: 'Why I Left...', category: 'Shorts', imageUrl: 'https://picsum.photos/600/400?random=4' },
  { id: '5', title: 'New M3 Pro Setup', category: 'Tech', imageUrl: 'https://picsum.photos/600/400?random=5' },
  { id: '6', title: '100 Days in Hardcore', category: 'Gaming', imageUrl: 'https://picsum.photos/600/400?random=6' },
  { id: '7', title: 'Van Life Realities', category: 'Vlog', imageUrl: 'https://picsum.photos/600/400?random=7' },
  { id: '8', title: 'The Crypto Crash', category: 'Documentary', imageUrl: 'https://picsum.photos/600/400?random=8' },
  { id: '9', title: 'Tech Unboxing!', category: 'Tech', imageUrl: 'https://picsum.photos/600/400?random=9' },
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
