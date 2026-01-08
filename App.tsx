
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Zap, 
  MousePointer2, 
  RefreshCcw, 
  CheckCircle2, 
  Youtube, 
  Award, 
  Users, 
  TrendingUp, 
  Mail, 
  Phone, 
  Send,
  Star,
  Instagram,
  ChevronRight,
  Sun,
  Moon,
  ArrowRight,
  X,
  CreditCard,
  Sparkles,
  ArrowUpRight,
  User,
  Play,
  Loader2,
  Check,
  ShieldCheck,
  Lock,
  Eye,
  Tag,
  Box,
  Fingerprint,
  Layers,
  Monitor,
  Smartphone,
  Disc,
  Radio,
  Share2,
  Image as ImageIcon,
  BarChart3,
  Linkedin,
  ArrowUp
} from 'lucide-react';
import { CATEGORIES, THUMBNAILS, SKILLS, FEATURES, ABOUT_CONTENT } from './constants';
import { Category, ThumbnailItem, Review } from './types';
import { SectionHeading } from './components/SectionHeading';

/**
 * BRAND LOGO SOURCE - Using the animated GIF provided by the user
 */
const USER_PHOTO = "https://res.cloudinary.com/dijsihxp0/image/upload/v1767634879/485535190016201_tpkkf2.gif";

// Using unavatar.io to fetch real YouTube channel logos based on handles provided
const CLIENTS = [
  { name: "Nitish Rajput", subs: "8.07M+ subscribers", img: "https://unavatar.io/youtube/nitishrajput" },
  { name: "Badge 99", subs: "12M+ subscribers", img: "https://unavatar.io/youtube/Badge99ff" },
  { name: "YesSmartyPie", subs: "6.73M+ subscribers", img: "https://unavatar.io/youtube/YesSmartyPie" },
  { name: "EduMantra", subs: "2.32M+ subscribers", img: "https://unavatar.io/youtube/EduMantra007" },
  { name: "The RawKnee Games", subs: "5.41M+ subscribers", img: "https://unavatar.io/youtube/TheRawKneeGames" },
  { name: "Bulky Star", subs: "1.25M+ subscribers", img: "https://unavatar.io/youtube/BulkyStar" },
  { name: "Ankur Gulati", subs: "48.4K+ subscribers", img: "https://unavatar.io/youtube/ankur.gulati" },
  { name: "PSD1", subs: "1.03M+ subscribers", img: "https://unavatar.io/youtube/PSD1" },
  { name: "Shipra Mishra", subs: "451K+ subscribers", img: "https://unavatar.io/youtube/ShipraMishra18" },
  { name: "betaaaisahia", subs: "253K+ subscribers", img: "https://unavatar.io/youtube/betaaaisahia" },
  { name: "RAJ", subs: "53.8K+ subscribers", img: "https://unavatar.io/youtube/ThenamezRAJ" },
  { name: "Been Taken", subs: "100K+ subscribers", img: "https://unavatar.io/youtube/BeenTaken" }
];

const REVIEWS = [
  {
    name: "Nitish Rajput",
    role: "Owner",
    type: "YouTuber",
    image: "https://unavatar.io/youtube/nitishrajput",
    text: "Since I started using these thumbnails, my videos have been getting way more clicks. They just grab attention — and the difference shows."
  },
  {
    name: "Badge 99",
    role: "Owner",
    type: "YouTuber",
    image: "https://unavatar.io/youtube/Badge99ff",
    text: "I honestly didn't realize how much good thumbnails matter until I saw the results. These designs made my content pop, and people actually started noticing."
  },
  {
    name: "Bulky Star",
    role: "Owner",
    type: "YouTuber",
    image: "https://unavatar.io/youtube/BulkyStar",
    text: "Every thumbnail feels like it was made for my video — not just some template. It's crazy how well they connect with the vibe of my content."
  },
  {
    name: "PSD1",
    role: "Owner",
    type: "YouTuber",
    image: "https://unavatar.io/youtube/PSD1",
    text: "I've tried other designers before, but this was the first time I saw a real boost. Views, subs, engagement — everything just picked up."
  },
  {
    name: "YesSmartyPie",
    role: "Owner",
    type: "YouTuber",
    image: "https://unavatar.io/youtube/YesSmartyPie",
    text: "What I loved most? Super smooth process, quick replies, and the designs were 🔥. My audience started commenting on how clean my thumbnails looked!"
  },
  {
    name: "The RawKnee Games",
    role: "Owner",
    type: "YouTuber",
    image: "https://unavatar.io/youtube/TheRawKneeGames",
    text: "Hands down one of the best things I've done for my channel. The thumbnails finally match the quality of my content — and people are clicking."
  }
];

const LogoImage: React.FC<{ className?: string }> = ({ className = "w-full h-full object-cover" }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="w-full h-full relative bg-[#FF4D00] flex items-center justify-center overflow-hidden">
      {!error ? (
        <>
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
              <Loader2 className="w-5 h-5 animate-spin text-white/20" />
            </div>
          )}
          <img 
            src={USER_PHOTO} 
            alt="Ayush GFX Logo" 
            className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            loading="eager"
          />
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <User className="text-white w-1/2 h-1/2" />
        </div>
      )}
    </div>
  );
};

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 127.14 96.36" fill="currentColor">
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.09,105.09,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22c2.36-24.44-4.2-46.62-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const RevealOnScroll: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-12 blur-sm'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
      setTimeout(onComplete, 800);
    }, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[1000] bg-[#050505] flex flex-col items-center justify-center transition-all ${exit ? 'loading-exit' : ''}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-600/10 blur-[150px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-xs text-center">
        <div className="relative mb-12">
          <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-2 border-orange-500 shadow-[0_0_50px_rgba(234,88,12,0.5)] animate-logo-draw p-1.5 bg-gradient-to-br from-orange-600 to-red-600">
             <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-black">
                <LogoImage />
             </div>
          </div>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter uppercase mb-2">
          AYUSH <span className="font-thin tracking-[0.3em] text-orange-500">GFX</span>
        </h2>
        <p className="shimmer-text text-[10px] font-bold tracking-[0.5em] uppercase opacity-80">
          Premium Visual Strategist
        </p>
      </div>
    </div>
  );
};

const ValidationPopup: React.FC<{ message?: string }> = ({ message = "Please fill out this field." }) => (
  <div className="absolute top-full left-0 mt-2 z-50 animate-fade-in origin-top-left pointer-events-none">
    <div className="relative bg-white text-slate-800 text-[12px] font-medium px-3 py-2 rounded shadow-lg border border-slate-200 flex items-center gap-2.5 min-w-[180px]">
       {/* Arrow */}
       <div className="absolute -top-1.5 left-4 w-3 h-3 bg-white border-t border-l border-slate-200 transform rotate-45"></div>
       {/* Icon */}
       <div className="w-5 h-5 bg-orange-500 rounded-[3px] flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-sm leading-none font-sans">!</span>
       </div>
       {/* Text */}
       <span>{message}</span>
    </div>
  </div>
);

const AnimatedRoles = () => {
  const roles = ["Thumbnail Designer", "Thumbnail Strategist", "Attention Expert"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 1300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-4xl md:text-7xl font-black tracking-tight transition-all duration-300 transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} text-slate-900 dark:text-white`}>
      {roles[index]}
    </div>
  );
};

const ImageModal: React.FC<{ item: ThumbnailItem; onClose: () => void }> = ({ item, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 animate-fade-in" onClick={onClose}>
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 z-[210] w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-600 text-white transition-all hover:rotate-90"
      >
        <X className="w-6 h-6" />
      </button>
      <div 
        className="relative z-10 w-full max-w-7xl aspect-video rounded-3xl overflow-hidden shadow-2xl scale-in group select-none"
        onClick={e => e.stopPropagation()}
      >
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-contain bg-black" 
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <div className="flex items-center gap-4 mb-2">
                <span className="text-[#FF4D00] text-xs font-black uppercase tracking-[0.2em]">{item.category}</span>
                {item.ctr && <span className="text-green-500 text-xs font-black uppercase tracking-[0.2em]">{item.ctr}</span>}
             </div>
             <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">{item.title}</h3>
        </div>
      </div>
    </div>
  );
};

const ThumbnailCard: React.FC<{ item: ThumbnailItem; onClick: () => void }> = ({ item, onClick }) => (
  <div 
    onClick={onClick}
    className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20"
  >
    <div className="absolute inset-0 bg-slate-200 dark:bg-zinc-800 animate-pulse" />
    <img 
      src={item.imageUrl} 
      alt={item.title} 
      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px] group-hover:brightness-[0.4]"
      loading="lazy"
    />
    
    {/* Hover Overlay with Eye Icon */}
    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
       <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center transform scale-50 group-hover:scale-100 transition-all duration-500 delay-75 shadow-2xl">
          <Eye className="w-7 h-7 text-white drop-shadow-lg" />
       </div>
    </div>

    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 translate-y-2 group-hover:translate-y-0 z-10">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[#FF4D00] text-[10px] font-black uppercase tracking-widest">{item.category}</span>
        {item.ctr && (
           <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-1 rounded border border-green-500/30">
             {item.ctr}
           </span>
        )}
      </div>
      <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
    </div>
  </div>
);

const ClientCard: React.FC<{ client: any }> = ({ client }) => (
  <div className="flex items-center gap-4 bg-[#0a0a0a] border border-white/5 px-6 py-4 rounded-xl hover:border-white/10 transition-colors group cursor-default min-w-[280px] shadow-lg shadow-black/50">
     <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-orange-500/50 transition-colors bg-white/5 shrink-0">
        <img 
          src={client.img} 
          alt={client.name} 
          className="w-full h-full object-cover" 
          onError={(e) => {
            // Fallback if unavatar fails or is slow
            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=random&color=fff`;
          }}
        />
     </div>
     <div className="shrink-0">
        <div className="flex items-center gap-1.5">
           <h4 className="font-bold text-white text-sm whitespace-nowrap">{client.name}</h4>
           <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center shadow-[0_0_5px_rgba(255,255,255,0.3)]">
              <Check className="w-2 h-2 text-black stroke-[4]" />
           </div>
        </div>
        <p className="text-xs text-slate-500 font-medium whitespace-nowrap">{client.subs}</p>
     </div>
  </div>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [paymentStep, setPaymentStep] = useState<'checkout' | 'processing' | 'success'>('checkout');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<ThumbnailItem | null>(null);

  // Order Form State
  const [quantity, setQuantity] = useState(1);
  const [selectedNiche, setSelectedNiche] = useState<string | null>(null);
  const [customNiche, setCustomNiche] = useState('');
  const [showAllNiches, setShowAllNiches] = useState(false);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [referenceLinks, setReferenceLinks] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  
  // Coupon State
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponError, setCouponError] = useState(false);

  // Validation State
  const [formErrors, setFormErrors] = useState<{
    fullName?: boolean;
    email?: boolean;
    niche?: boolean;
    projectDetails?: boolean;
  }>({});

  const niches = [
    'GAMING (FPS)', 'GAMING (MC/ROBLOX)', 'ANIME', 'TECH', 
    'FINANCE', 'CRYPTO', 'BUSINESS', 'IRL/VLOG', 'DOCUMENTARY',
    'REACTION', 'LIFESTYLE', 'EDUCATIONAL', 'FITNESS', 'COOKING',
    'TRAVEL', 'MUSIC', 'COMEDY', 'PODCAST', 'OTHERS'
  ];

  const estimatedInvestment = useMemo(() => {
    const price = currency === 'INR' ? 1500 : 20;
    const total = price * quantity;
    return appliedDiscount > 0 ? total - (total * appliedDiscount) : total;
  }, [quantity, currency, appliedDiscount]);

  const handleApplyCoupon = () => {
    const code = couponCode.toUpperCase();
    if (code === 'AYUSH20') {
        setAppliedDiscount(0.20);
        setCouponError(false);
    } else if (code === 'AYUSH18') {
        setAppliedDiscount(0.28);
        setCouponError(false);
    } else {
        setCouponError(true);
        setTimeout(() => setCouponError(false), 2000);
    }
  };

  // Check if all required fields are filled for button fade logic
  const isFormFilled = useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      fullName.trim().length > 0 && 
      emailRegex.test(email.trim()) && 
      (selectedNiche !== null && (selectedNiche !== 'OTHERS' || customNiche.trim().length > 0)) && 
      projectDetails.trim().length > 0
    );
  }, [fullName, email, selectedNiche, customNiche, projectDetails]);

  // Navbar scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section Active State Detection
  useEffect(() => {
    const sections = ['work', 'about', 'reviews', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Active when element is in the upper part of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    if (showOrderForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showOrderForm]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleNicheSelect = (niche: string) => {
    setSelectedNiche(prev => prev === niche ? null : niche);
    if (formErrors.niche) {
        setFormErrors(prev => ({ ...prev, niche: false }));
    }
  };

  const handleConfirmOrder = async () => {
    // Validation Logic
    const newErrors: typeof formErrors = {};
    let hasError = false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName.trim()) {
        newErrors.fullName = true;
        hasError = true;
    }
    if (!emailRegex.test(email.trim())) {
        newErrors.email = true;
        hasError = true;
    }
    if (!selectedNiche) {
        newErrors.niche = true;
        hasError = true;
    } else if (selectedNiche === 'OTHERS' && !customNiche.trim()) {
        newErrors.niche = true;
        hasError = true;
    }
    if (!projectDetails.trim()) {
        newErrors.projectDetails = true;
        hasError = true;
    }

    if (hasError) {
        setFormErrors(newErrors);
        return;
    }

    setPaymentStep('processing');

    // Prepare data for Web3Forms
    const formData = {
      access_key: "ffda2cc8-1d3b-4f55-b8b2-9768a3b52789", 
      
      subject: "New Thumbnail Order - Ayush GFX",
      from_name: "Ayush GFX Portfolio",
      
      // Order Details
      name: fullName,
      email: email,
      phone: phone,
      niche: selectedNiche === 'OTHERS' ? `OTHERS: ${customNiche}` : (selectedNiche || 'Not Selected'),
      quantity: quantity,
      estimated_investment: `${currency === 'INR' ? '₹' : '$'}${estimatedInvestment.toLocaleString()}`,
      coupon_code: appliedDiscount > 0 ? couponCode : 'None',
      currency: currency,
      
      // Additional Info
      reference_links: referenceLinks,
      project_details: projectDetails
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setPaymentStep('success');
      } else {
        console.error("Web3Forms Error:", result);
        alert("Something went wrong while placing your order. Please try again or contact me directly.");
        setPaymentStep('checkout');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Network error. Please check your internet connection.");
      setPaymentStep('checkout');
    }
  };

  const closeModals = () => {
    setShowOrderForm(false);
    setPaymentStep('checkout');
    setShowAllNiches(false);
    setCustomNiche('');
    setReferenceLinks('');
    setProjectDetails('');
    setFormErrors({});
    setCouponCode('');
    setAppliedDiscount(0);
    setCouponError(false);
  };

  const toggleTheme = () => setIsDark(!isDark);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  // Duplicate clients for seamless scroll - reduced duplication to keep performance good
  const MARQUEE_CLIENTS = [...CLIENTS, ...CLIENTS];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#050505] text-slate-900 dark:text-[#f8fafc] animate-fade-in font-sans selection:bg-orange-600 selection:text-white relative">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 px-6 md:px-12 flex justify-between items-center border-b ${
        scrolled 
          ? 'bg-white/85 dark:bg-black/85 backdrop-blur-2xl py-3 border-black/10 dark:border-white/10 shadow-xl' 
          : 'bg-transparent py-5 border-transparent'
      }`}>
        <div className="flex items-center gap-3 group animate-fade-in cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-xl transition-all group-hover:scale-105 group-hover:shadow-orange-600/30 p-0.5 bg-gradient-to-br from-orange-500 to-red-600">
            <div className="w-full h-full rounded-[0.9rem] overflow-hidden bg-black">
              <LogoImage />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-[1.25rem] tracking-tight uppercase text-slate-900 dark:text-white leading-none">
              AYUSH <span className="text-[#FF4D00] ml-0.5">GFX</span>
            </span>
            <span className="text-[7px] font-black tracking-[0.35em] text-zinc-500 uppercase mt-1">Premium Visuals</span>
          </div>
        </div>
        
        <div className="hidden lg:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-gray-400">
          <a 
            href="#work" 
            onClick={(e) => scrollToSection(e, 'work')} 
            className={`${activeSection === 'work' ? 'text-orange-500' : 'hover:text-orange-500'} transition-all hover:-translate-y-0.5`}
          >
            Work
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')} 
            className={`${activeSection === 'about' ? 'text-orange-500' : 'hover:text-orange-500'} transition-all hover:-translate-y-0.5`}
          >
            About
          </a>
          <a 
            href="#reviews" 
            onClick={(e) => scrollToSection(e, 'reviews')} 
            className={`${activeSection === 'reviews' ? 'text-orange-500' : 'hover:text-orange-500'} transition-all hover:-translate-y-0.5`}
          >
            Reviews
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')} 
            className={`${activeSection === 'contact' ? 'text-orange-500' : 'hover:text-orange-500'} transition-all hover:-translate-y-0.5`}
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4 animate-fade-in">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full glass border border-black/10 dark:border-white/10 hover:border-orange-500 dark:hover:border-orange-500 transition-all active:scale-95 group"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700 group-hover:text-orange-500 transition-colors" />
            )}
          </button>
          <button 
            onClick={() => setShowOrderForm(true)}
            className="bg-[#FF4D00] hover:bg-orange-600 text-white px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 shadow-lg shadow-orange-600/20 active:scale-95 relative overflow-hidden group"
          >
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-[2/1] bg-red-950/40 rounded-[100%] blur-[120px] pointer-events-none opacity-60 dark:opacity-80 transition-opacity" />
        
        <div className="w-full relative z-10 flex flex-col items-center text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.5em] text-slate-400 dark:text-zinc-500 mb-8 transition-all animate-fade-in">
            HEY THERE, I AM A
          </p>
          <div className="mb-8 min-h-[1.2em] flex items-center justify-center animate-fade-in">
            <AnimatedRoles />
          </div>
          <h1 className="text-5xl md:text-[6rem] font-black leading-none mb-12 tracking-tighter text-slate-900 dark:text-white transition-colors animate-fade-in">
            High-Impact <span className="text-orange-600 drop-shadow-[0_0_15px_rgba(234,88,12,0.3)]">Thumbnails</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 font-medium max-w-3xl leading-relaxed mb-16 px-4 transition-colors animate-fade-in">
            I design scroll-stopping YouTube thumbnails that boost your <span className="text-slate-900 dark:text-white font-bold">CTR</span> and grow your channel.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 w-full animate-fade-in">
            <a href="#work" onClick={(e) => scrollToSection(e, 'work')} className="relative group px-12 py-5 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl font-black text-xl text-white transition-all shadow-[0_0_30px_rgba(234,88,12,0.2)] hover:shadow-[0_0_50px_rgba(234,88,12,0.4)] hover:scale-[1.05] active:scale-95 flex items-center gap-3">
              See Work!
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <button onClick={() => setShowOrderForm(true)} className="px-12 py-5 glass border border-black/10 dark:border-white/10 rounded-2xl font-bold text-xl text-slate-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all active:scale-95">
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Work Grid */}
      <section id="work" className="py-24 px-6 md:px-12 w-full max-w-[95%] 2xl:max-w-[1800px] mx-auto">
        <SectionHeading title="Recent Projects" center />
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                selectedCategory === category 
                  ? 'bg-orange-600 border-orange-600 text-white shadow-xl shadow-orange-600/20' 
                  : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:border-orange-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {(selectedCategory === 'All' 
              ? THUMBNAILS.filter(t => !t.hiddenFromAll)
              : THUMBNAILS.filter(t => t.category === selectedCategory)
           ).map(thumb => (
            <ThumbnailCard key={thumb.id} item={thumb} onClick={() => setSelectedProject(thumb)} />
          ))}
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Portrait Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[460px]">
                {/* Available Now Status Badge */}
                <div className="absolute -top-6 -right-6 z-30 bg-transparent backdrop-blur-md border border-white/20 px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl animate-float">
                  <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e] animate-pulse" />
                  <span className="text-xs font-black text-white uppercase tracking-widest">AVAILABLE NOW</span>
                </div>
                
                {/* Main Branding Container with Glass Border Style */}
                <div className="relative z-10 aspect-[1/1] rounded-[2.5rem] p-3 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-[0_0_80px_rgba(255,77,0,0.15)] backdrop-blur-sm group">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden bg-zinc-950 relative">
                    <LogoImage className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  
                  {/* YouTube Pro Badge overlay - Wrapped to preserve hover effect with float animation */}
                  <div className="absolute bottom-20 -right-4 z-30 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="bg-transparent backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl flex items-center gap-2 shadow-2xl transition-transform hover:scale-105 cursor-default">
                      <div className="w-6 h-6 bg-red-600/20 flex items-center justify-center rounded-md border border-red-600/40">
                        <Youtube className="w-3.5 h-3.5 text-red-600 fill-red-600" />
                      </div>
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">YOUTUBE PRO</span>
                    </div>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute -bottom-6 left-6 z-30 bg-transparent backdrop-blur-md border border-white/20 px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[200px] justify-center animate-float" style={{ animationDelay: '1s' }}>
                   <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                      ))}
                   </div>
                   <span className="text-xs font-black text-white uppercase tracking-widest">4.7 Rating</span>
                </div>
                
                <div className="absolute -inset-10 bg-orange-600/5 blur-[100px] rounded-full pointer-events-none" />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-10 lg:pl-6">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full">
                  <Sparkles className="w-4 h-4 text-orange-500" />
                  <span className="text-[10px] font-black text-white/90 uppercase tracking-[0.2em]">YOUTUBE THUMBNAIL EXPERT</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
                  I Don't Just Design.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                    I Engineering Clicks.
                  </span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                  {ABOUT_CONTENT.bio}
                </p>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.map(skill => (
                    <div key={skill.name} className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-xs font-bold text-white uppercase tracking-wider hover:bg-white/10 transition-colors">
                      {skill.name}
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="inline-flex items-center gap-3 text-orange-500 font-bold uppercase tracking-widest text-xs hover:gap-5 transition-all">
                    Let's work together <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features / Services / How it Works Section */}
      <section className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto">
          
          {/* SECTION 1: WHAT YOU'LL GET */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                <X className="w-3 h-3 text-white" /> 
              </div>
              <span className="text-white font-bold text-sm">What you'll get</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white/90 tracking-tight">
              Reaching your Potential peak with my <br/>
              <span className="text-white/60">Thumbnails</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            
            {/* CARD 1: More Reach (Growth Chart) */}
            <div className="bg-[#0f0f0f] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all group flex flex-col h-full hover:-translate-y-1 duration-500 shadow-2xl shadow-black">
               <div className="h-48 mb-8 bg-[#0a0a0a] rounded-2xl border border-white/5 flex flex-col justify-between p-6 relative overflow-hidden group-hover:bg-[#0c0c0c] transition-colors">
                  <div className="text-[#ccff00] font-bold text-sm mb-4">Growth</div>
                  <div className="flex items-end justify-between gap-2 h-24 mt-auto w-full px-2">
                     <div className="w-1.5 h-[30%] bg-[#ccff00]/20 rounded-t-full"></div>
                     <div className="w-1.5 h-[45%] bg-[#ccff00]/30 rounded-t-full"></div>
                     <div className="w-1.5 h-[35%] bg-[#ccff00]/20 rounded-t-full"></div>
                     <div className="w-1.5 h-[60%] bg-[#ccff00]/40 rounded-t-full"></div>
                     <div className="w-1.5 h-[50%] bg-[#ccff00]/30 rounded-t-full"></div>
                     <div className="w-1.5 h-[75%] bg-[#ccff00]/60 rounded-t-full"></div>
                     <div className="w-1.5 h-[65%] bg-[#ccff00]/50 rounded-t-full"></div>
                     <div className="w-1.5 h-[90%] bg-[#ccff00] rounded-t-full shadow-[0_0_15px_#ccff00]"></div>
                     <div className="w-1.5 h-[40%] bg-[#ccff00]/20 rounded-t-full"></div>
                     <div className="w-1.5 h-[55%] bg-[#ccff00]/30 rounded-t-full"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-white/20 font-mono mt-2 uppercase tracking-wider">
                     <span>Nov 10</span>
                     <span>Nov 11</span>
                     <span className="text-white">Today</span>
                  </div>
               </div>
               <h3 className="text-xl font-medium text-white mb-3">More Reach</h3>
               <p className="text-gray-400 text-sm leading-relaxed">Get high-quality Thumbnails which gives you more Reach</p>
            </div>

            {/* CARD 2: Trending Thumbnails (Notification) */}
            <div className="bg-[#0f0f0f] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all group flex flex-col h-full hover:-translate-y-1 duration-500 shadow-2xl shadow-black">
               <div className="h-48 mb-8 bg-[#0a0a0a] rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:bg-[#0c0c0c] transition-colors">
                  
                  {/* Mock UI Element */}
                  <div className="relative z-10 bg-[#151515] border border-white/10 rounded-2xl p-4 w-[80%] shadow-2xl">
                     <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-1.5">
                           <div className="w-2 h-2 rounded-full bg-red-500"></div>
                           <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                           <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-[9px] text-white/30 font-mono">• REVIEWED</div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-yellow-400 text-black flex items-center justify-center shrink-0">
                           <Zap className="w-5 h-5 fill-black" />
                        </div>
                        <div>
                           <div className="flex items-center gap-2 mb-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                              <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider">NEW</span>
                           </div>
                           <div className="text-white font-bold text-sm">Latest design</div>
                           <div className="text-[10px] text-white/40 mt-1">Today, 11:50</div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                     <div className="w-full h-[1px] bg-white/5 absolute top-[60%] border-t border-dashed border-white/10"></div>
                     <div className="w-full h-[1px] bg-white/5 absolute top-[70%] border-t border-dashed border-white/10"></div>
                     <div className="w-full h-[1px] bg-white/5 absolute top-[80%] border-t border-dashed border-white/10"></div>
                  </div>
               </div>
               <h3 className="text-xl font-medium text-white mb-3">Trending Thumbnails</h3>
               <p className="text-gray-400 text-sm leading-relaxed">I've got the expertise to make your vision a reality.</p>
            </div>

            {/* CARD 3: Scalable as you grow (Graph) */}
            <div className="bg-[#0f0f0f] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all group flex flex-col h-full hover:-translate-y-1 duration-500 shadow-2xl shadow-black">
               <div className="h-48 mb-8 bg-[#0a0a0a] rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:bg-[#0c0c0c] transition-colors p-6">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex justify-between px-6 opacity-10 pointer-events-none">
                     <div className="w-[1px] h-full border-r border-dashed border-white"></div>
                     <div className="w-[1px] h-full border-r border-dashed border-white"></div>
                     <div className="w-[1px] h-full border-r border-dashed border-white"></div>
                     <div className="w-[1px] h-full border-r border-dashed border-white"></div>
                     <div className="w-[1px] h-full border-r border-dashed border-white"></div>
                  </div>
                  
                  {/* SVG Graph */}
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 200 100" preserveAspectRatio="none">
                     <defs>
                        <linearGradient id="gradientGraph" x1="0" x2="0" y1="0" y2="1">
                           <stop offset="0%" stopColor="#84cc16" stopOpacity="0.4" />
                           <stop offset="100%" stopColor="#84cc16" stopOpacity="0" />
                        </linearGradient>
                     </defs>
                     <path 
                        d="M0,90 C40,85 60,80 80,60 C110,30 140,50 160,20 C170,5 190,0 200,0" 
                        fill="none" 
                        stroke="#84cc16" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_8px_rgba(132,204,22,0.5)]"
                     />
                     <circle cx="160" cy="20" r="5" fill="#84cc16" className="animate-pulse shadow-[0_0_10px_#84cc16]" />
                     <circle cx="160" cy="20" r="10" fill="#84cc16" fillOpacity="0.2" className="animate-ping" />
                  </svg>
                  
                  <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[10px] text-white/20 font-mono">
                     <span>45</span><span>35</span><span>25</span><span>15</span><span>5</span><span>0</span><span>-5</span>
                  </div>
               </div>
               <h3 className="text-xl font-medium text-white mb-3">Scalable as you grow</h3>
               <p className="text-gray-400 text-sm leading-relaxed">Always ready to meet your evolving needs.</p>
            </div>

          </div>

          {/* SECTION 2: SERVICES */}
          <div className="text-center mb-32">
             <h3 className="text-xl font-bold text-white mb-8">Services</h3>
             <div className="flex flex-wrap justify-center gap-4">
                {[
                   { name: "Thumbnails", icon: ImageIcon },
                   { name: "Reel Covers", icon: Smartphone },
                   { name: "Youtube Banners", icon: Monitor },
                   { name: "Carousels", icon: Layers },
                   { name: "Album Covers", icon: Disc },
                   { name: "Live-stream Assets", icon: Radio },
                   { name: "Social Media Post", icon: Share2 },
                ].map((service) => (
                   <div key={service.name} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:border-red-600/50 hover:bg-red-600/10 transition-all cursor-default group">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 group-hover:scale-125 transition-transform"></div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white">{service.name}</span>
                   </div>
                ))}
             </div>
          </div>

          {/* SECTION 3: HOW IT WORKS */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                <X className="w-3 h-3 text-white" /> 
              </div>
              <span className="text-white font-bold text-sm">How it works</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-white/90 max-w-2xl mx-auto leading-tight">
              Once the onboarding process is done, <br/>
              <span className="text-white/60">I'll take care of Everything for you.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             
             {/* Process 1 */}
             <div className="bg-[#0f0f0f] rounded-3xl p-10 border border-white/5 hover:border-white/10 transition-all group flex flex-col h-full hover:-translate-y-1 duration-500">
                <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform duration-500">
                   <Box className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Communication</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Tell me everything I need to know about the video I will be working on.</p>
             </div>

             {/* Process 2 */}
             <div className="bg-[#0f0f0f] rounded-3xl p-10 border border-white/5 hover:border-white/10 transition-all group flex flex-col h-full hover:-translate-y-1 duration-500">
                <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform duration-500 relative">
                   <div className="absolute w-4 h-4 rounded-full bg-red-500 opacity-60 left-3"></div>
                   <div className="absolute w-4 h-4 rounded-full bg-red-500 opacity-60 right-3"></div>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Receive the magic</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Sit back and relax: I'll turn your vision into attention grabbing reality.</p>
             </div>

             {/* Process 3 */}
             <div className="bg-[#0f0f0f] rounded-3xl p-10 border border-white/5 hover:border-white/10 transition-all group flex flex-col h-full hover:-translate-y-1 duration-500">
                <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform duration-500">
                   <Fingerprint className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Multiple Revisions</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Frankly, about 98% of my creations pass muster at the first attempt! Should you desire alterations, I'd be thrilled to accommodate your needs.</p>
             </div>

          </div>
        </div>
      </section>

      {/* TRUSTED BY / CLIENTS SECTION - MARQUEE */}
      <section className="py-20 bg-[#050505] border-t border-white/5 overflow-hidden">
         <div className="w-full">
            <div className="relative group">
               {/* Fade Masks */}
               <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
               <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
               
               {/* Marquee Content - Uses the 'infinite loop' trick with a single moving container */}
               <div className="flex gap-8 animate-marquee w-max hover:[animation-play-state:paused] items-center">
                  {/* First Copy (contains 2 sets of clients) */}
                  {MARQUEE_CLIENTS.map((client, i) => (
                     <ClientCard key={`a-${i}`} client={client} />
                  ))}
                  {/* Second Copy (contains 2 sets of clients) */}
                  {MARQUEE_CLIENTS.map((client, i) => (
                     <ClientCard key={`b-${i}`} client={client} />
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -mt-20" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
                Customer Reviews About <br />
                <span className="text-slate-500">Work and Thumbnail.</span>
             </h2>
             <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Hear from our happy clients! See how we've helped them achieve their goals and create lasting impact.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {REVIEWS.map((review, idx) => (
                <div key={idx} className="bg-[#080808] border border-white/5 p-8 rounded-3xl relative group hover:border-white/10 transition-all hover:-translate-y-1 shadow-2xl">
                   <div className="flex justify-between items-start mb-8">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/5 p-0.5">
                         <div className="w-full h-full rounded-full overflow-hidden bg-white/5">
                            <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                         </div>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                         <Youtube className="w-4 h-4 text-slate-400" />
                      </div>
                   </div>
                   
                   <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                         <Star key={i} className="w-4 h-4 fill-white text-white" />
                      ))}
                   </div>
                   
                   <p className="text-slate-400 text-sm leading-relaxed mb-8 min-h-[80px]">
                      "{review.text}"
                   </p>
                   
                   <div className="border-t border-white/5 pt-6">
                      <div className="flex items-center gap-2 mb-1">
                         <span className="text-white font-bold tracking-wide text-sm">{review.name}</span>
                         <span className="text-slate-700">•</span>
                         <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">{review.role}</span>
                      </div>
                      <div className="text-slate-600 text-xs font-medium">{review.type}</div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <SectionHeading title="Ready to Go Viral?" center subtitle="Stop losing views to bad thumbnails. Let's create something clickable." />
            </RevealOnScroll>
            
            {/* Primary Actions */}
            <RevealOnScroll delay={200}>
              <div className="flex flex-col md:flex-row gap-6 justify-center mt-12 mb-16">
                <a href="mailto:ayushsarkar7419@gmail.com" className="flex items-center gap-4 bg-[#0a0a0a] p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all group w-full md:w-auto min-w-[200px] justify-center md:justify-start">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Me</div>
                      <div className="font-bold text-lg text-white">Contact Me</div>
                    </div>
                </a>
                <button onClick={() => setShowOrderForm(true)} className="flex items-center gap-4 bg-gradient-to-r from-orange-600 to-red-600 p-5 rounded-2xl shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 transition-all group w-full md:w-auto min-w-[200px] justify-center md:justify-start">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/80">Start Project</div>
                      <div className="font-bold text-lg text-white">Order Now</div>
                    </div>
                </button>
              </div>
            </RevealOnScroll>

            {/* Social Grid */}
            <RevealOnScroll delay={400}>
              <div className="grid grid-cols-5 gap-2 md:gap-4 max-w-3xl mx-auto px-2 md:px-0">
                {/* Instagram */}
                <a href="https://www.instagram.com/ayush_gfx8/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center aspect-square rounded-2xl md:rounded-3xl bg-pink-500/5 border border-pink-500/10 hover:bg-pink-500/10 hover:border-pink-500/30 transition-all group">
                    <Instagram className="w-6 h-6 md:w-10 md:h-10 text-pink-500 mb-1.5 md:mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] md:text-sm font-medium text-pink-500/80 group-hover:text-pink-500 hidden sm:block">Instagram</span>
                    <span className="text-[10px] md:text-sm font-medium text-pink-500/80 group-hover:text-pink-500 sm:hidden">Insta</span>
                </a>

                {/* LinkedIn */}
                <a href="https://in.linkedin.com/in/ayush-editor-2977012b6" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center aspect-square rounded-2xl md:rounded-3xl bg-blue-600/5 border border-blue-600/10 hover:bg-blue-600/10 hover:border-blue-600/30 transition-all group">
                    <Linkedin className="w-6 h-6 md:w-10 md:h-10 text-blue-500 mb-1.5 md:mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] md:text-sm font-medium text-blue-500/80 group-hover:text-blue-500 hidden sm:block">LinkedIn</span>
                    <span className="text-[10px] md:text-sm font-medium text-blue-500/80 group-hover:text-blue-500 sm:hidden">Linkd</span>
                </a>

                {/* Discord */}
                <a href="https://discord.gg/ztGW6TWX49" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center aspect-square rounded-2xl md:rounded-3xl bg-indigo-500/5 border border-indigo-500/10 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all group">
                    <DiscordIcon className="w-6 h-6 md:w-10 md:h-10 text-indigo-500 mb-1.5 md:mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] md:text-sm font-medium text-indigo-500/80 group-hover:text-indigo-500">Discord</span>
                </a>

                {/* X */}
                <a href="https://x.com/Ayush_x_sujay" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center aspect-square rounded-2xl md:rounded-3xl bg-zinc-500/5 border border-zinc-500/10 hover:bg-zinc-500/10 hover:border-zinc-500/30 transition-all group">
                    <XIcon className="w-6 h-6 md:w-10 md:h-10 text-zinc-400 mb-1.5 md:mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] md:text-sm font-medium text-zinc-400/80 group-hover:text-zinc-300">X</span>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.link/oky36b" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center aspect-square rounded-2xl md:rounded-3xl bg-green-500/5 border border-green-500/10 hover:bg-green-500/10 hover:border-green-500/30 transition-all group">
                    <WhatsAppIcon className="w-6 h-6 md:w-10 md:h-10 text-green-500 mb-1.5 md:mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] md:text-sm font-medium text-green-500/80 group-hover:text-green-500">WhatsApp</span>
                </a>
              </div>
            </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#050505] text-slate-500 dark:text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="text-sm font-medium text-center md:text-left flex items-center gap-1">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>for YouTube creators</span>
              <span className="mx-2 opacity-20">|</span>
              <span>{new Date().getFullYear()} Ayush GFX. All rights reserved.</span>
           </div>
           
           <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="group flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg hover:bg-slate-50 dark:hover:bg-white/10 transition-all text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300"
           >
             <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
             Back to top
           </button>
        </div>
      </footer>

      {/* Modals */}
      {selectedProject && <ImageModal item={selectedProject} onClose={() => setSelectedProject(null)} />}

      {/* Order Form Modal */}
      {showOrderForm && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModals} />
          <div className="relative bg-white dark:bg-[#0a0a0a] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-scale-in border border-slate-200 dark:border-white/10">
             
             {/* Header */}
             <div className="sticky top-0 bg-white dark:bg-[#0a0a0a] z-10 p-6 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div>
                   <h3 className="text-xl font-black uppercase tracking-tight">Project Order</h3>
                   <p className="text-xs text-slate-500 dark:text-gray-400">Let's build your next viral thumbnail</p>
                </div>
                <button onClick={closeModals} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                   <X className="w-4 h-4" />
                </button>
             </div>

             <div className="p-6 md:p-8 space-y-8">
               {paymentStep === 'checkout' && (
                 <>
                   {/* 1. Contact Info */}
                   <div className="space-y-4">
                      <div className="flex items-center gap-2 text-orange-500 mb-2">
                        <User className="w-4 h-4" />
                        <span className="text-xs font-black uppercase tracking-widest">Client Details</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="space-y-1 relative">
                            <label className="text-xs font-bold ml-1">Full Name</label>
                            <input 
                              type="text" 
                              placeholder="John Doe" 
                              className={`w-full bg-slate-50 dark:bg-white/5 border ${formErrors.fullName ? 'border-red-500' : 'border-slate-200 dark:border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors`}
                              value={fullName}
                              onChange={e => {
                                setFullName(e.target.value);
                                if(formErrors.fullName) setFormErrors(prev => ({...prev, fullName: false}));
                              }}
                            />
                            {formErrors.fullName && <ValidationPopup />}
                         </div>
                         <div className="space-y-1 relative">
                            <label className="text-xs font-bold ml-1">Email Address</label>
                            <input 
                              type="email" 
                              placeholder="john@example.com" 
                              className={`w-full bg-slate-50 dark:bg-white/5 border ${formErrors.email ? 'border-red-500' : 'border-slate-200 dark:border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors`}
                              value={email}
                              onChange={e => {
                                setEmail(e.target.value);
                                if(formErrors.email) setFormErrors(prev => ({...prev, email: false}));
                              }}
                            />
                            {formErrors.email && <ValidationPopup message="Invalid email" />}
                         </div>
                      </div>
                      <div className="space-y-1">
                          <label className="text-xs font-bold ml-1">Phone (Optional)</label>
                          <input 
                            type="tel" 
                            placeholder="+1 234 567 8900" 
                            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                          />
                       </div>
                   </div>

                   <hr className="border-slate-100 dark:border-white/5" />

                   {/* 2. Project Niche */}
                   <div className="space-y-4 relative">
                      <div className="flex items-center gap-2 text-orange-500 mb-2">
                        <Tag className="w-4 h-4" />
                        <span className="text-xs font-black uppercase tracking-widest">Project Niche</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                         {(showAllNiches ? niches : niches.slice(0, 8)).map(niche => (
                           <button 
                              key={niche}
                              onClick={() => handleNicheSelect(niche)}
                              className={`px-4 py-2 rounded-lg text-[10px] font-bold border transition-all ${
                                selectedNiche === niche 
                                  ? 'bg-orange-600 border-orange-600 text-white' 
                                  : 'bg-transparent border-slate-200 dark:border-white/10 hover:border-orange-500 text-slate-600 dark:text-gray-400'
                              }`}
                           >
                              {niche}
                           </button>
                         ))}
                         <button onClick={() => setShowAllNiches(!showAllNiches)} className="px-4 py-2 rounded-lg text-[10px] font-bold border border-dashed border-slate-300 dark:border-white/20 text-slate-500 hover:text-orange-500">
                            {showAllNiches ? 'Show Less' : `+${niches.length - 8} More`}
                         </button>
                      </div>
                      {formErrors.niche && <ValidationPopup message="Select a niche" />}
                      
                      {selectedNiche === 'OTHERS' && (
                        <div className="mt-2 relative animate-fade-in">
                          <input 
                            type="text" 
                            placeholder="Specify your niche..." 
                            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
                            value={customNiche}
                            onChange={e => setCustomNiche(e.target.value)}
                          />
                        </div>
                      )}
                   </div>

                   <hr className="border-slate-100 dark:border-white/5" />

                   {/* 3. Project Details */}
                   <div className="space-y-4">
                      <div className="flex items-center gap-2 text-orange-500 mb-2">
                        <CreditCard className="w-4 h-4" />
                        <span className="text-xs font-black uppercase tracking-widest">Order Details</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10">
                           <label className="text-xs font-bold block mb-2">Currency</label>
                           <div className="flex bg-white dark:bg-black p-1 rounded-lg border border-slate-200 dark:border-white/10">
                              {['INR', 'USD'].map(c => (
                                <button
                                  key={c}
                                  onClick={() => setCurrency(c as any)}
                                  className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${currency === c ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                                >
                                  {c}
                                </button>
                              ))}
                           </div>
                        </div>
                        <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10">
                           <label className="text-xs font-bold block mb-2">Quantity</label>
                           <div className="flex items-center justify-between bg-white dark:bg-black p-1 rounded-lg border border-slate-200 dark:border-white/10 h-[34px]">
                              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 rounded">-</button>
                              <span className="text-sm font-bold">{quantity}</span>
                              <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 rounded">+</button>
                           </div>
                        </div>
                      </div>

                      <div className="relative">
                         <label className="text-xs font-bold ml-1 mb-1 block">Project Description</label>
                         <textarea 
                           className={`w-full h-32 bg-slate-50 dark:bg-white/5 border ${formErrors.projectDetails ? 'border-red-500' : 'border-slate-200 dark:border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors resize-none`}
                           placeholder="Describe your video idea, title, and any specific requirements..."
                           value={projectDetails}
                           onChange={e => {
                             setProjectDetails(e.target.value);
                             if(formErrors.projectDetails) setFormErrors(prev => ({...prev, projectDetails: false}));
                           }}
                         />
                         {formErrors.projectDetails && <ValidationPopup message="Tell me about your project" />}
                      </div>

                      <div className="relative">
                         <label className="text-xs font-bold ml-1 mb-1 block">Reference Links (Optional)</label>
                         <input 
                            type="text"
                            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                            placeholder="Google Drive link, Inspiration URL, etc."
                            value={referenceLinks}
                            onChange={e => setReferenceLinks(e.target.value)}
                         />
                      </div>
                   </div>

                   {/* 4. Total & Action */}
                   <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/10 mt-6">
                      
                      {/* Coupon */}
                      <div className="flex gap-2 mb-6">
                         <div className="relative flex-1">
                            <input 
                              type="text" 
                              placeholder="Promo Code" 
                              className={`w-full bg-white dark:bg-black border ${couponError ? 'border-red-500' : 'border-slate-200 dark:border-white/10'} rounded-lg px-3 py-2 text-sm uppercase`}
                              value={couponCode}
                              onChange={e => setCouponCode(e.target.value)}
                            />
                            {couponError && <span className="absolute right-3 top-2.5 text-[10px] text-red-500 font-bold">INVALID</span>}
                         </div>
                         <button 
                            onClick={handleApplyCoupon}
                            disabled={appliedDiscount > 0}
                            className={`px-4 rounded-lg text-xs font-bold border transition-all ${
                                appliedDiscount > 0 
                                ? 'bg-green-500 border-green-500 text-white' 
                                : 'bg-slate-900 dark:bg-white text-white dark:text-black border-transparent hover:opacity-90'
                            }`}
                         >
                            {appliedDiscount > 0 ? 'APPLIED' : 'APPLY'}
                         </button>
                      </div>

                      <div className="flex justify-between items-center mb-6">
                         <div>
                            <span className="text-xs text-slate-500 dark:text-gray-400 font-bold uppercase tracking-wider">Total Investment</span>
                            {appliedDiscount > 0 && <span className="block text-[10px] text-green-500 font-bold">{(appliedDiscount * 100).toFixed(0)}% OFF APPLIED</span>}
                         </div>
                         <div className="text-right">
                             <div className="text-3xl font-black text-slate-900 dark:text-white">
                                {currency === 'INR' ? '₹' : '$'}{estimatedInvestment.toLocaleString()}
                             </div>
                             <div className="text-[10px] text-slate-400 font-medium">Approx. Delivery: {quantity * 24} Hours</div>
                         </div>
                      </div>

                      <button 
                        onClick={handleConfirmOrder}
                        className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-white shadow-xl transition-all ${
                            isFormFilled 
                            ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:shadow-orange-500/30 hover:scale-[1.02]' 
                            : 'bg-slate-300 dark:bg-white/10 cursor-not-allowed text-slate-500'
                        }`}
                        disabled={!isFormFilled}
                      >
                         Confirm Order
                      </button>
                   </div>
                 </>
               )}

               {paymentStep === 'processing' && (
                 <div className="py-20 flex flex-col items-center justify-center text-center">
                    <Loader2 className="w-16 h-16 text-orange-500 animate-spin mb-6" />
                    <h3 className="text-2xl font-black mb-2">Processing Order</h3>
                    <p className="text-slate-500">Please wait while we secure your slot...</p>
                 </div>
               )}

               {paymentStep === 'success' && (
                 <div className="py-12 flex flex-col items-center justify-center text-center animate-scale-in">
                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-500/30">
                       <Check className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-black mb-4 text-slate-900 dark:text-white">Order Received!</h3>
                    <p className="text-slate-500 dark:text-gray-400 max-w-sm mb-8 leading-relaxed">
                       Thank you, <b>{fullName.split(' ')[0]}</b>! I've received your project details. I'll review them and reach out to you at <span className="text-orange-500">{email}</span> within 24 hours.
                    </p>
                    <button onClick={closeModals} className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl font-bold uppercase tracking-widest hover:opacity-90">
                       Return to Portfolio
                    </button>
                 </div>
               )}
             </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
