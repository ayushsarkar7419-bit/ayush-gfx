
import { ThumbnailItem, Skill, Feature, Category } from './types';

export const CATEGORIES: Category[] = ['All', 'Gaming', 'IRL', 'Documentary', 'Finance', 'Podcast', 'Tech'];

export const THUMBNAILS: ThumbnailItem[] = [
  { 
    id: 'g8', 
    title: 'Pokemon Card', 
    category: 'IRL', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389340/pokemon_tqdibs.jpg', 
    ctr: '21.5% CTR'
  },
  { 
    id: 'g7', 
    title: 'SURVIVE  THE WILD!', 
    category: 'IRL', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389337/harsh_1_k4xujv.jpg', 
    ctr: '18.4% CTR'
  },
  { 
    id: 'g1', 
    title: ' RV There Yet', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389502/Rv_There_yet_rgfuns.jpg',
    ctr: '12.8% CTR'
  },
  { 
    id: 'g2', 
    title: '0.01% Rere Item', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389498/illegal_item_nwscka.jpg',
    ctr: '15.2% CTR'
  },
  { 
    id: 'g3', 
    title: 'GTA Car Race', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389496/GTA_V_RACE_lujalb.jpg',
    ctr: '11.5% CTR'
  },
  { 
    id: 'g4', 
    title: 'minecraft in antarctica', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389487/antarctica_i6cw2l.jpg',
    ctr: '14.1% CTR'
  },
  { 
    id: 'g5', 
    title: '99 Night', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389475/99_night_in_scary_forest_c75spv.jpg',
    ctr: '13.5% CTR'
  },
  { 
    id: 'g6', 
    title: 'Nirav Modi Fraud', 
    category: 'Documentary', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389575/Nirav_modi_Fraud_oi7pyp.jpg',
    ctr: '16.8% CTR'
  },
  { 
    id: 'new-1', 
    title: 'CIVIC SENSE IN INDIA', 
    category: 'Documentary', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389563/Civics_sense_um0duq.jpg',
    ctr: '19.2% CTR'
  },
  { 
    id: 'new-2', 
    title: 'Earn $95***', 
    category: 'Finance', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389663/Callum_thumbnail__3_hha3ua.jpg',
    ctr: '15.7% CTR'
  },
  { 
    id: 'new-3', 
    title: 'The Bihar Politics', 
    category: 'Podcast', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389725/Sapno_Ka_Bihar2_ojf9t9.jpg',
    ctr: '17.3% CTR'
  },
  { 
    id: 'new-4', 
    title: 'Ai Agent', 
    category: 'Tech', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389830/How_to_Build_ai_Agent_iitkqa.jpg',
    ctr: '12.9% CTR'
  },
  // 11 New Gaming Exclusive Thumbnails (Hidden from All)
  { 
    id: 'g-ex-2', 
    title: 'Roblox Steal', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389502/roblox_steal_qrt49b.jpg',
    ctr: '19.8% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-3', 
    title: 'Remove Mobs', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389501/remove_mobs_qtoawo.jpg',
    ctr: '22.1% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-4', 
    title: 'Rainbow Armour', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389500/rainbow_armour_yxfqjy.jpg',
    ctr: '16.5% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-5', 
    title: 'Kamla Horror', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389498/kamla_pf1bq0.jpg',
    ctr: '20.3% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-6', 
    title: 'Minecraft Food', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389498/minecraft_food_plobrt.jpg',
    ctr: '14.9% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-7', 
    title: 'Subscriber Accounts', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389496/I_Upgraded_SUBSCRIBERS_Accounts_In_Steal_A_Brainrot_iwb7jm.jpg',
    ctr: '18.7% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-8', 
    title: 'VR Fighting', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389495/Fighting_Dealist_Players_in_Minecraft_VR_2_kgkgak.jpg',
    ctr: '25.1% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-9', 
    title: 'Escape Evil Teacher', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389490/ESCAPE_EVIL_TEACHER_bclykp.jpg',
    ctr: '17.6% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-10', 
    title: 'Minecraft Movie Vlog', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389489/basically_Minecraft_movie_vlog_uinywu.jpg',
    ctr: '15.4% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-11', 
    title: 'Badge 99', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389489/badge_99_edoykz.jpg',
    ctr: '21.0% CTR',
    hiddenFromAll: true
  },
  { 
    id: 'g-ex-12', 
    title: 'All Advancements', 
    category: 'Gaming', 
    imageUrl: 'https://res.cloudinary.com/dijsihxp0/image/upload/v1767389487/All_advancement_uzahwp.jpg',
    ctr: '13.8% CTR',
    hiddenFromAll: true
  }
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
