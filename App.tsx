
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
  User
} from 'lucide-react';
import { CATEGORIES, THUMBNAILS, SKILLS, FEATURES, ABOUT_CONTENT } from './constants';
import { Category, ThumbnailItem, Review } from './types';
import { SectionHeading } from './components/SectionHeading';

/**
 * BRAND LOGO SOURCE
 * This points to the portrait image provided in your request.
 */
const USER_PHOTO = "https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/ayush-gfx-portrait.jpg";

const LogoImage: React.FC<{ className?: string }> = ({ className = "w-full h-full object-cover" }) => {
  const [error, setError] = useState(false);
  
  return (
    <div className="w-full h-full relative bg-zinc-900 flex items-center justify-center">
      {!error ? (
        <img 
          src={USER_PHOTO} 
          alt="Ayush GFX Logo" 
          className={className}
          onError={() => setError(true)}
          loading="eager"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-600 to-red-600">
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
          <div className="w-32 h-32 rounded-[2rem] overflow-hidden border-2 border-orange-500 shadow-[0_0_50px_rgba(234,88,12,0.5)] animate-logo-draw p-1.5 bg-gradient-to-br from-orange-600 to-red-600">
             <div className="w-full h-full rounded-[1.6rem] overflow-hidden bg-black">
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

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLElement>(null);

  // Order Form State
  const [quantity, setQuantity] = useState(1);
  const [selectedNiche, setSelectedNiche] = useState<string | null>(null);
  const pricePerThumb = 1500;

  const niches = [
    'GAMING (FPS)', 'GAMING (MC/ROBLOX)', 'ANIME', 'TECH', 
    'FINANCE', 'CRYPTO', 'BUSINESS', 'IRL/VLOG', 'DOCUMENTARY',
    'REACTION', 'LIFESTYLE', 'EDUCATIONAL', 'FITNESS', 'COOKING',
    'TRAVEL', 'MUSIC', 'COMEDY', 'PODCAST'
  ];

  const estimatedInvestment = useMemo(() => {
    return pricePerThumb * quantity;
  }, [quantity]);

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

  useEffect(() => {
    if (isLoading) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    return () => observer.disconnect();
  }, [isLoading]);

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
        <div className="flex items-center gap-4 group animate-fade-in cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-12 h-12 rounded-xl overflow-hidden border border-orange-600/40 shadow-xl shadow-orange-600/5 transition-all group-hover:scale-110 group-hover:border-orange-500 group-hover:shadow-orange-600/20 p-0.5 bg-gradient-to-br from-orange-600 to-red-600">
            <div className="w-full h-full rounded-[0.55rem] overflow-hidden bg-black">
              <LogoImage />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter uppercase text-slate-900 dark:text-white leading-none">
              AYUSH <span className="font-light tracking-widest text-orange-500 ml-1">GFX</span>
            </span>
            <span className="text-[8px] font-black tracking-[0.4em] text-zinc-500 uppercase mt-0.5">Premium Visuals</span>
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
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 shadow-lg shadow-orange-600/20 active:scale-95 relative overflow-hidden group"
          >
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
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
      <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading title="Recent Projects" center />
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${
                selectedCategory === category 
                  ? 'bg-orange-600 border-orange-600 text-white shadow-xl shadow-orange-600/20' 
                  : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:border-orange-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {(selectedCategory === 'All' ? THUMBNAILS : THUMBNAILS.filter(t => t.category === selectedCategory)).map(thumb => (
            <ThumbnailCard key={thumb.id} item={thumb} />
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 px-6 md:px-12 bg-zinc-50 dark:bg-[#070707] transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Headshot Column - Now using the brand logo image */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-orange-600/20 blur-[60px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700 pointer-events-none" />
              <div className="relative rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl aspect-[4/5] bg-black">
                <LogoImage />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl">
                    <Sparkles className="w-5 h-5 text-orange-500" />
                    <span className="text-white font-bold text-sm tracking-wide uppercase">{ABOUT_CONTENT.experience} Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <p className="text-[12px] font-black uppercase tracking-[0.5em] text-orange-600">The Visionary Behind The Frames</p>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">
                  Crafting First Impressions That <span className="text-orange-600">Stick</span>.
                </h2>
              </div>
              
              <div className="space-y-6 text-lg md:text-xl text-slate-600 dark:text-zinc-400 font-medium leading-relaxed">
                <p>{ABOUT_CONTENT.bio}</p>
                <p>{ABOUT_CONTENT.mission}</p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-4 pb-8">
                <div>
                  <h4 className="text-3xl font-black text-slate-900 dark:text-white">500+</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mt-1">A/B Tests Conducted</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-slate-900 dark:text-white">99%</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mt-1">Client Satisfaction</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <a 
                  href="#work" 
                  onClick={(e) => scrollToSection(e, 'work')} 
                  className="px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all shadow-xl dark:shadow-white/5 active:scale-95"
                >
                  View My Work
                  <ChevronRight className="w-5 h-5" />
                </a>
                <button 
                  onClick={() => setShowOrderForm(true)} 
                  className="px-10 py-5 glass border border-black/10 dark:border-white/10 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all active:scale-95 group text-slate-800 dark:text-white"
                >
                  Get A Quote
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-[#080808] border-y border-black/5 dark:border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 items-center text-center">
          <StatBox icon={<Youtube className="w-8 h-8 text-red-600" />} value="15M+" label="Views Created" />
          <StatBox icon={<Award className="w-8 h-8 text-orange-500" />} value="700+" label="Designs Sold" />
          <StatBox icon={<TrendingUp className="w-8 h-8 text-green-500" />} value="35%" label="Average CTR" />
          <StatBox icon={<Users className="w-8 h-8 text-blue-500" />} value="250+" label="Global Clients" />
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

      {/* ORDER MODAL */}
      {showOrderForm && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10 animate-fade-in">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setShowOrderForm(false)} />
          <div className="relative z-10 w-full max-w-4xl bg-white dark:bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden scale-in">
            <button onClick={() => setShowOrderForm(false)} className="absolute top-6 right-6 z-[120] w-10 h-10 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
              <div className="flex-1 p-8 md:p-12 space-y-8 overflow-y-auto custom-scrollbar-niche">
                <h3 className="text-3xl font-black tracking-tighter dark:text-white">PROJECT BRIEF</h3>
                
                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Select Your Niche</p>
                  <div className="flex flex-wrap gap-2">
                    {niches.slice(0, 10).map(niche => (
                      <button 
                        key={niche} 
                        onClick={() => handleNicheSelect(niche)}
                        className={`px-4 py-2.5 rounded-xl text-[10px] font-bold border transition-all ${
                          selectedNiche === niche 
                            ? 'bg-orange-600 border-orange-600 text-white' 
                            : 'bg-black/5 dark:bg-white/5 border-transparent dark:text-zinc-400 hover:border-orange-500/30'
                        }`}
                      >
                        {niche}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Reference Links</p>
                  <input type="text" placeholder="https://youtube.com/..." className="w-full bg-black/5 dark:bg-white/5 rounded-xl px-6 py-4 outline-none focus:ring-2 ring-orange-600/20 dark:text-white" />
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Project Notes</p>
                  <textarea rows={4} placeholder="Anything else you want to share..." className="w-full bg-black/5 dark:bg-white/5 rounded-2xl px-6 py-4 outline-none focus:ring-2 ring-orange-600/20 dark:text-white resize-none" />
                </div>
              </div>

              <div className="md:w-[320px] bg-slate-50 dark:bg-zinc-950 p-8 md:p-12 border-l border-black/5 dark:border-white/5 flex flex-col justify-between">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-8">Investment</h4>
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold dark:text-zinc-400">Thumbnails</span>
                      <span className="text-2xl font-black dark:text-white">{quantity}</span>
                    </div>
                    <input type="range" min="1" max="15" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full accent-orange-600" />
                  </div>
                  
                  <div className="mt-12 text-center">
                    <p className="text-5xl font-black tracking-tighter dark:text-white">₹{estimatedInvestment.toLocaleString()}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 mt-2">ESTIMATED TOTAL</p>
                  </div>
                </div>

                <button className="w-full py-6 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-orange-600/20 mt-12">
                  CONFIRM ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="py-12 px-6 md:px-12 bg-slate-900 dark:bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border border-orange-600/30 p-0.5 bg-gradient-to-br from-orange-600 to-red-600">
              <div className="w-full h-full rounded-[0.7rem] overflow-hidden bg-black">
                <LogoImage />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg text-white uppercase tracking-tighter leading-none">AYUSH <span className="text-orange-500 font-light tracking-widest">GFX</span></span>
              <span className="text-[7px] font-bold tracking-[0.3em] text-zinc-500 uppercase mt-1">Global Branding Authority</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 font-bold tracking-widest uppercase">© {new Date().getFullYear()} Ayush GFX.</p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-slide-down { animation: slideDown 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.8s ease forwards; }
        .custom-scrollbar-niche::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar-niche::-webkit-scrollbar-thumb { background: #ea580c; border-radius: 10px; }
        @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .scale-in { animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />
    </div>
  );
};

const StatBox: React.FC<{ icon: React.ReactNode, value: string, label: string }> = ({ icon, value, label }) => (
  <div className="flex flex-col items-center group">
    <div className="mb-4 p-4 bg-black/5 dark:bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <p className="text-3xl font-black dark:text-white">{value}</p>
    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{label}</p>
  </div>
);

const ThumbnailCard: React.FC<{ item: ThumbnailItem }> = ({ item }) => (
  <div className="group relative rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-2xl transition-all cursor-pointer">
    <div className="absolute top-4 left-4 z-20">
      <span className="px-3 py-1 bg-black/70 backdrop-blur-xl text-[9px] font-black text-white rounded-full uppercase tracking-widest">{item.category}</span>
    </div>
    <div className="aspect-video overflow-hidden">
      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
      <h3 className="text-xl font-black text-white">{item.title}</h3>
    </div>
  </div>
);

const ContactLink: React.FC<{ icon: React.ReactNode, label: string, value: string }> = ({ icon, label, value }) => (
  <div className="flex flex-col items-center gap-4 cursor-pointer group">
    <div className="w-16 h-16 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-orange-600 transition-colors">
      <div className="text-zinc-500 dark:text-zinc-400 group-hover:text-white transition-colors">{icon}</div>
    </div>
    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{label}</p>
    <p className="text-sm font-bold dark:text-zinc-300">{value}</p>
  </div>
);

export default App;
