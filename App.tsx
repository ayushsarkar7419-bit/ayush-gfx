
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
  Eye
} from 'lucide-react';
import { CATEGORIES, THUMBNAILS, SKILLS, FEATURES, ABOUT_CONTENT } from './constants';
import { Category, ThumbnailItem, Review } from './types';
import { SectionHeading } from './components/SectionHeading';

/**
 * BRAND LOGO SOURCE - Using the high-quality portrait provided by the user
 */
const USER_PHOTO = "https://res.cloudinary.com/dijsihxp0/image/upload/v1767391403/my_pfp.jpg_3_f8axfj.jpg";

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

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [paymentStep, setPaymentStep] = useState<'checkout' | 'processing' | 'success'>('checkout');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<ThumbnailItem | null>(null);

  // Order Form State
  const [quantity, setQuantity] = useState(1);
  const [selectedNiche, setSelectedNiche] = useState<string | null>(null);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const niches = [
    'GAMING (FPS)', 'GAMING (MC/ROBLOX)', 'ANIME', 'TECH', 
    'FINANCE', 'CRYPTO', 'BUSINESS', 'IRL/VLOG', 'DOCUMENTARY',
    'REACTION', 'LIFESTYLE', 'EDUCATIONAL', 'FITNESS', 'COOKING',
    'TRAVEL', 'MUSIC', 'COMEDY', 'PODCAST'
  ];

  const estimatedInvestment = useMemo(() => {
    const price = currency === 'INR' ? 1500 : 20;
    return price * quantity;
  }, [quantity, currency]);

  // Navbar scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
  };

  const handleConfirmOrder = () => {
    setPaymentStep('processing');
    setTimeout(() => {
      setPaymentStep('success');
    }, 3000);
  };

  const closeModals = () => {
    setShowOrderForm(false);
    setPaymentStep('checkout');
  };

  const toggleTheme = () => setIsDark(!isDark);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

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
          <a href="#work" onClick={(e) => scrollToSection(e, 'work')} className="hover:text-orange-500 transition-all hover:-translate-y-0.5">Work</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-orange-500 transition-all hover:-translate-y-0.5">About</a>
          <button onClick={() => setShowOrderForm(true)} className="hover:text-orange-500 transition-all hover:-translate-y-0.5 font-bold uppercase tracking-[0.2em] text-[11px]">Order</button>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-orange-500 transition-all hover:-translate-y-0.5">Contact</a>
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
                <h2 className="text-6xl md:text-[7.5rem] font-black text-white leading-[0.85] tracking-tighter">
                  Thumbnails that<br />
                  <span className="bg-gradient-to-r from-[#FF4D00] to-[#FF8A00] bg-clip-text text-transparent italic font-black">Get Clicks</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-400 font-medium max-w-xl leading-relaxed">
                  I design scroll-stopping YouTube thumbnails that boost your <span className="text-white font-bold">CTR</span> and grow your channel. Let's make your videos <span className="text-white font-bold">impossible to ignore</span>.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                 <div className="bg-white/5 border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all hover:bg-white/10 group">
                    <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform"><Youtube className="w-7 h-7" /></div>
                    <div className="text-4xl font-black text-white tracking-tighter">500+</div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mt-2">Thumbnails</div>
                 </div>
                 <div className="bg-white/5 border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all hover:bg-white/10 group">
                    <div className="text-green-500 mb-4 group-hover:scale-110 transition-transform"><TrendingUp className="w-7 h-7" /></div>
                    <div className="text-4xl font-black text-white tracking-tighter">40%</div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mt-2">Avg CTR Boost</div>
                 </div>
                 <div className="bg-white/5 border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all hover:bg-white/10 group">
                    <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform"><Users className="w-7 h-7" /></div>
                    <div className="text-4xl font-black text-white tracking-tighter">10M+</div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mt-2">Views Generated</div>
                 </div>
              </div>

              <div className="flex flex-wrap gap-5 pt-4">
                <a href="#work" onClick={(e) => scrollToSection(e, 'work')} className="px-14 py-5 bg-gradient-to-r from-[#FF4D00] to-[#FF8A00] rounded-2xl font-black text-xs text-white uppercase tracking-[0.2em] flex items-center gap-3 transition-all hover:scale-105 shadow-xl shadow-orange-600/20 active:scale-95">
                  <Play className="w-4 h-4 fill-white" />
                  VIEW MY WORK
                </a>
                <button onClick={() => setShowOrderForm(true)} className="px-14 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-xs text-white uppercase tracking-[0.2em] flex items-center gap-3 transition-all hover:bg-white/10 hover:border-white/20 active:scale-95">
                  <Sparkles className="w-4 h-4 text-orange-500" />
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="glass p-12 md:p-20 rounded-[3rem] border border-black/10 dark:border-white/5 flex flex-col items-center text-center shadow-2xl">
          <SectionHeading title="Start Your Project" center subtitle="Let's build thumbnails that people can't stop clicking." />
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <ContactLink icon={<Mail />} label="Email" value="ayush@visuals.com" />
            <ContactLink icon={<Phone />} label="WhatsApp" value="+1 (234) 567-890" />
            <ContactLink icon={<Instagram />} label="Instagram" value="@ayush_design" />
          </div>
        </div>
      </section>
      
      {/* IMAGE PREVIEW MODAL */}
      {selectedProject && (
        <ImageModal item={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {/* ORDER MODAL */}
      {showOrderForm && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10 animate-fade-in">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={closeModals} />
          <div className="relative z-10 w-full max-w-4xl bg-white dark:bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden scale-in">
            {paymentStep !== 'processing' && (
              <button onClick={closeModals} className="absolute top-6 right-6 z-[120] w-10 h-10 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
                <X className="w-5 h-5" />
              </button>
            )}
            {paymentStep === 'checkout' && (
              <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                <div className="flex-1 p-8 md:p-12 space-y-8 overflow-y-auto custom-scrollbar-niche">
                  <h3 className="text-3xl font-black tracking-tighter dark:text-white flex items-center gap-3">PROJECT BRIEF <Sparkles className="w-6 h-6 text-orange-500" /></h3>
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Select Your Niche</p>
                    <div className="flex flex-wrap gap-2">
                      {niches.slice(0, 10).map(niche => (
                        <button key={niche} onClick={() => handleNicheSelect(niche)} className={`px-4 py-2.5 rounded-xl text-[10px] font-bold border transition-all ${selectedNiche === niche ? 'bg-orange-600 border-orange-600 text-white' : 'bg-black/5 dark:bg-white/5 border-transparent dark:text-zinc-400 hover:border-orange-500/30'}`}>{niche}</button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Reference Links</p>
                    <input type="text" placeholder="https://youtube.com/..." className="w-full bg-black/5 dark:bg-white/5 rounded-xl px-6 py-4 outline-none focus:ring-2 ring-orange-600/20 dark:text-white border border-transparent focus:border-orange-600/30 transition-all" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Project Details & Note</p>
                    <textarea rows={4} placeholder="Anything else you want to share..." className="w-full bg-black/5 dark:bg-white/5 rounded-2xl px-6 py-4 outline-none focus:ring-2 ring-orange-600/20 dark:text-white resize-none border border-transparent focus:border-orange-600/30 transition-all" />
                  </div>
                  <div className="pt-4 flex items-center gap-3 text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-green-500" /> Encrypted Payment & Secured Checkout
                  </div>
                </div>
                <div className="md:w-[320px] bg-slate-50 dark:bg-zinc-950 p-8 md:p-12 border-l border-black/5 dark:border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Investment Breakdown</h4>
                        <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1.5 rounded-xl">
                             <button 
                                onClick={() => setCurrency('INR')}
                                className={`px-4 py-2 text-xs font-black rounded-lg transition-all ${currency === 'INR' ? 'bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300'}`}
                             >
                                INR
                             </button>
                             <button 
                                onClick={() => setCurrency('USD')}
                                className={`px-4 py-2 text-xs font-black rounded-lg transition-all ${currency === 'USD' ? 'bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300'}`}
                             >
                                USD
                             </button>
                        </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex justify-between items-end">
                        <span className="text-xs font-bold dark:text-zinc-400">Thumbnails</span>
                        <span className="text-2xl font-black dark:text-white">{quantity}</span>
                      </div>
                      <input type="range" min="1" max="15" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-600" />
                    </div>
                    <div className="mt-12 space-y-2 text-center bg-black/5 dark:bg-white/5 p-6 rounded-2xl border border-white/5">
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Total Investment</p>
                      <p className="text-5xl font-black tracking-tighter dark:text-white">{currency === 'INR' ? '₹' : '$'}{estimatedInvestment.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <button onClick={handleConfirmOrder} className="group relative w-full py-6 bg-gradient-to-r from-orange-600 to-red-600 hover:scale-[1.02] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-orange-600/20 active:scale-95 overflow-hidden">
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <CreditCard className="w-4 h-4" /> CONFIRM & PAY
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                    <p className="text-[8px] text-center text-zinc-500 uppercase tracking-widest font-bold">Secure Mock Payment Gateway</p>
                  </div>
                </div>
              </div>
            )}
            {paymentStep === 'processing' && (
              <div className="p-20 flex flex-col items-center justify-center text-center space-y-8 animate-fade-in bg-zinc-950">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-4 border-white/5 flex items-center justify-center">
                    <Loader2 className="w-16 h-16 text-orange-500 animate-spin" />
                  </div>
                  <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-4xl font-black text-white tracking-tighter">PROCESSING PAYMENT</h3>
                  <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.4em]">Connecting to Secure Gateway...</p>
                </div>
              </div>
            )}
            {paymentStep === 'success' && (
              <div className="flex flex-col h-full md:flex-row bg-[#050505] animate-fade-in">
                <div className="flex-1 p-12 md:p-20 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.3)] mb-8 scale-in">
                    <Check className="w-12 h-12 text-white stroke-[3]" />
                  </div>
                  <h3 className="text-5xl font-black text-white tracking-tighter mb-4">ORDER PLACED!</h3>
                  <p className="text-lg text-zinc-400 font-medium max-w-sm mb-12">Payment successful. Ayush has been notified and will contact you via email within the next <span className="text-white font-bold">2 hours</span>.</p>
                  <button onClick={closeModals} className="px-12 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95">CONTINUE BROWSING</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <footer className="py-12 px-6 md:px-12 bg-slate-900 dark:bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xl bg-[#FF4D00] p-0.5 bg-gradient-to-br from-orange-500 to-red-600">
              <div className="w-full h-full rounded-[0.9rem] overflow-hidden bg-black">
                <LogoImage />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg text-white uppercase tracking-tighter leading-none">AYUSH <span className="text-[#FF4D00]">GFX</span></span>
              <span className="text-[7px] font-bold tracking-[0.3em] text-zinc-500 uppercase mt-1">Global Branding Authority</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 font-bold tracking-widest uppercase">© {new Date().getFullYear()} Ayush GFX.</p>
        </div>
      </footer>
    </div>
  );
};

const ThumbnailCard: React.FC<{ item: ThumbnailItem; onClick: () => void }> = ({ item, onClick }) => {
  const [imgSrc, setImgSrc] = useState(item.imageUrl);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setImgSrc(item.imageUrl);
    setIsLoaded(false);
  }, [item.imageUrl]);

  // Check if image is already loaded from cache immediately
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      if (imgRef.current.naturalWidth > 0) {
         setIsLoaded(true);
      }
    }
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    // Fallback image - using a high quality abstract gaming background
    setImgSrc("https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop");
    // Ensure loader is hidden even if fallback loads
    // Note: fallback will trigger its own onLoad, but just in case
  };

  return (
    <div 
      className="group relative rounded-[2rem] overflow-hidden bg-[#0a0a0a] dark:bg-[#0a0a0a] border border-white/5 shadow-2xl transition-all hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-video relative overflow-hidden bg-zinc-900 border-b border-white/5">
        {/* Hover Overlay with Eye Icon */}
        <div className="absolute inset-0 z-20 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-75 shadow-2xl">
            <Eye className="w-7 h-7 text-white drop-shadow-lg" />
          </div>
        </div>

        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-10">
            <Loader2 className="w-8 h-8 text-orange-600 animate-spin opacity-50" />
          </div>
        )}
        
        <img 
          ref={imgRef}
          src={imgSrc} 
          alt={item.title} 
          loading="eager"
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px] group-hover:brightness-[0.4] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>

      <div className="p-4 space-y-1.5 bg-[#0a0a0a]">
        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FF4D00]">
          {item.category}
        </div>
        <h3 className="text-base font-black text-white leading-tight tracking-tight line-clamp-2 h-10">
          {item.title}
        </h3>
        {item.ctr && (
          <div className="text-[10px] font-bold text-green-500 uppercase tracking-widest">
            {item.ctr}
          </div>
        )}
      </div>
    </div>
  );
};

const ContactLink: React.FC<{ icon: React.ReactNode, label: string, value: string }> = ({ icon, label, value }) => (
  <div className="flex flex-col items-center gap-4 cursor-pointer group">
    <div className="w-16 h-16 bg-black/5 dark:bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-[#FF4D00] transition-colors">
      <div className="text-zinc-500 dark:text-zinc-400 group-hover:text-white transition-colors">{icon}</div>
    </div>
    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{label}</p>
    <p className="text-sm font-bold dark:text-zinc-300">{value}</p>
  </div>
);

export default App;
