
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
  X
} from 'lucide-react';
import { CATEGORIES, THUMBNAILS, SKILLS, FEATURES } from './constants';
import { Category, ThumbnailItem, Review } from './types';
import { SectionHeading } from './components/SectionHeading';

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
          <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-[0_0_25px_rgba(234,88,12,0.5)]">
            <path 
              d="M20,80 L50,20 L80,80 M35,60 L65,60" 
              fill="transparent" 
              stroke="#ea580c" 
              strokeWidth="6" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="animate-logo-draw"
            />
          </svg>
        </div>
        <h2 className="text-4xl font-black text-white tracking-tighter uppercase mb-2">
          AYUSH <span className="font-thin tracking-[0.3em] text-orange-500">GFX</span>
        </h2>
        <p className="shimmer-text text-[10px] font-bold tracking-[0.5em] uppercase opacity-80">
          Premium Portfolio
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

const CustomCursor: React.FC<{ accentColor: string }> = ({ accentColor }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const targetPos = useRef({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, [role="button"], .thumbnail-card, .interactive-card, .cursor-pointer')) {
        setIsHovered(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, [role="button"], .thumbnail-card, .interactive-card, .cursor-pointer')) {
        setIsHovered(false);
      }
    };

    let frame: number;
    const update = () => {
      // Linear interpolation for smoothness
      mousePos.current.x += (targetPos.current.x - mousePos.current.x) * 0.2;
      mousePos.current.y += (targetPos.current.y - mousePos.current.y) * 0.2;
      
      if (cursor) {
        cursor.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }
      frame = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);
    
    update();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none will-change-transform"
      style={{ 
        zIndex: 2147483647, // Ensure it's above everything
      }}
    >
      <div 
        className={`rounded-full transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 ${isActive ? 'scale-75' : 'scale-100'}`}
        style={{ 
          width: isHovered ? '40px' : '8px',
          height: isHovered ? '40px' : '8px',
          backgroundColor: isHovered ? 'transparent' : accentColor,
          border: isHovered ? `2px solid ${accentColor}` : 'none',
          boxShadow: isHovered ? `0 0 20px ${accentColor}44` : `0 0 10px ${accentColor}`,
        }}
      />
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ name: '', text: '', rating: 5 });
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLElement>(null);

  // Order Form State
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [pricePerThumb, setPricePerThumb] = useState(1300);
  const [quantity, setQuantity] = useState(1);
  const [selectedNiche, setSelectedNiche] = useState<string | null>(null);
  const [otherNicheText, setOtherNicheText] = useState('');

  const niches = [
    'GAMING (FPS)', 'GAMING (MC/ROBLOX)', 'ANIME', 'TECH', 
    'FINANCE', 'CRYPTO', 'BUSINESS', 'IRL/VLOG', 'DOCUMENTARY',
    'REACTION', 'LIFESTYLE', 'EDUCATIONAL', 'FITNESS', 'COOKING',
    'TRAVEL', 'MUSIC', 'COMEDY', 'PODCAST', 'REAL ESTATE', 'NEWS', 'OTHER'
  ];

  useEffect(() => {
    if (currency === 'INR') {
      setPricePerThumb(1300);
    } else {
      setPricePerThumb(20);
    }
  }, [currency]);

  const estimatedInvestment = useMemo(() => {
    return pricePerThumb * quantity;
  }, [pricePerThumb, quantity]);

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

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    const review: Review = {
      id: Date.now().toString(),
      name: newReview.name,
      rating: newReview.rating,
      text: newReview.text,
      date: new Date().toLocaleDateString()
    };
    setReviews([review, ...reviews]);
    setNewReview({ name: '', text: '', rating: 5 });
  };

  const toggleTheme = () => setIsDark(!isDark);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  const cursorAccent = showOrderForm ? '#a855f7' : '#ea580c';

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#050505] text-slate-900 dark:text-[#f8fafc] animate-fade-in font-sans selection:bg-orange-600 selection:text-white relative">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass py-4 px-6 md:px-12 flex justify-between items-center transition-all border-b border-black/5 dark:border-white/5 animate-slide-down">
        <div className="flex items-center gap-3 group cursor-none animate-fade-in" style={{ animationDelay: '200ms' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center font-bold text-xl italic shadow-lg shadow-orange-600/30 text-white transition-transform group-hover:scale-110">
            A
          </div>
          <span className="font-black text-xl tracking-tighter uppercase text-slate-900 dark:text-white">
            AYUSH <span className="font-light tracking-widest text-orange-500 ml-1">GFX</span>
          </span>
        </div>
        
        <div className="hidden lg:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-gray-400">
          <a href="#work" onClick={(e) => scrollToSection(e, 'work')} className="hover:text-orange-500 transition-all hover:-translate-y-0.5 animate-fade-in" style={{ animationDelay: '300ms' }}>Work</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-orange-500 transition-all hover:-translate-y-0.5 animate-fade-in" style={{ animationDelay: '400ms' }}>About</a>
          <button onClick={() => setShowOrderForm(true)} className="hover:text-orange-500 transition-all hover:-translate-y-0.5 font-bold uppercase tracking-[0.2em] text-[11px] animate-fade-in" style={{ animationDelay: '500ms' }}>Order</button>
          <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="hover:text-orange-500 transition-all hover:-translate-y-0.5 animate-fade-in" style={{ animationDelay: '600ms' }}>Reviews</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-orange-500 transition-all hover:-translate-y-0.5 animate-fade-in" style={{ animationDelay: '700ms' }}>Contact</a>
        </div>

        <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: '800ms' }}>
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-[1.8/1] bg-red-900/10 rounded-[100%] blur-[140px] pointer-events-none opacity-40 dark:opacity-60 transition-opacity" />
        
        <div className="w-full relative z-10 flex flex-col items-center text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.5em] text-slate-400 dark:text-zinc-500 mb-8 transition-all animate-fade-in" style={{ animationDelay: '900ms' }}>
            HEY THERE, I AM A
          </p>
          <div className="mb-8 min-h-[1.2em] flex items-center justify-center animate-fade-in" style={{ animationDelay: '1000ms' }}>
            <AnimatedRoles />
          </div>
          <h1 className="text-5xl md:text-[6rem] font-black leading-none mb-12 tracking-tighter text-slate-900 dark:text-white transition-colors animate-fade-in" style={{ animationDelay: '1100ms' }}>
            High-Impact <span className="text-orange-600 drop-shadow-[0_0_15px_rgba(234,88,12,0.3)]">Thumbnails</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 font-medium max-w-3xl leading-relaxed mb-16 px-4 transition-colors animate-fade-in" style={{ animationDelay: '1200ms' }}>
            I design scroll-stopping YouTube thumbnails that boost your <span className="text-slate-900 dark:text-white font-bold">CTR</span> and grow your channel. <br className="hidden md:block" /> 
            Let's make your videos <span className="text-slate-900 dark:text-white font-bold">impossible to ignore</span>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 w-full animate-fade-in" style={{ animationDelay: '1300ms' }}>
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

      {/* Portfolio */}
      <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading title="Recent Work" center />
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                selectedCategory === category 
                  ? 'bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-600/20' 
                  : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:border-orange-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedCategory === 'All' ? THUMBNAILS : THUMBNAILS.filter(t => t.category === selectedCategory)).map(thumb => (
            <ThumbnailCard key={thumb.id} item={thumb} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 md:px-12 bg-slate-50 dark:bg-[#080808] border-y border-black/5 dark:border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12 items-center">
          <StatBox icon={<Youtube className="w-8 h-8 text-red-600" />} value="10M+" label="Views Generated" />
          <StatBox icon={<Award className="w-8 h-8 text-orange-500" />} value="500+" label="Thumbnails" />
          <StatBox icon={<TrendingUp className="w-8 h-8 text-green-500" />} value="40%" label="Avg CTR Boost" />
          <StatBox icon={<Users className="w-8 h-8 text-blue-500" />} value="120+" label="Happy Clients" />
        </div>
      </section>

      {/* Skills */}
      <section id="about" ref={skillsRef} className="py-24 px-6 md:px-12 transition-colors">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Skills & Expertise" center />
          <div className="max-w-3xl mx-auto space-y-10">
            {SKILLS.map((skill, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-slate-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-white transition-colors uppercase tracking-widest text-xs">{skill.name}</span>
                  <span className="text-orange-500 font-black text-xs">{skill.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-600 to-red-600 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: skillsVisible ? `${skill.percentage}%` : '0%' }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Why Me?" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, i) => (
              <FeatureCard key={i} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading title="Creator Reviews" center />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass p-10 rounded-3xl border border-black/10 dark:border-white/5 shadow-xl">
            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Post a Review</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-6">
              <input type="text" value={newReview.name} onChange={e => setNewReview({...newReview, name: e.target.value})} className="w-full glass border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-600 transition-colors text-slate-900 dark:text-white bg-transparent outline-none" placeholder="Channel Name" />
              <div className="flex gap-2">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} onClick={() => setNewReview({...newReview, rating: s})} className={`w-8 h-8 cursor-pointer transition-all ${newReview.rating >= s ? 'text-yellow-500 fill-yellow-500' : 'text-slate-300 dark:text-gray-700'}`} />
                ))}
              </div>
              <textarea rows={4} value={newReview.text} onChange={e => setNewReview({...newReview, text: e.target.value})} className="w-full glass border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-600 transition-colors resize-none text-slate-900 dark:text-white bg-transparent outline-none" placeholder="Share your experience..." />
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-orange-600/20">
                Send Review
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-orange-600">
            {reviews.map(review => (
              <div key={review.id} className="glass p-8 rounded-2xl border border-black/10 dark:border-white/5 transition-all shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white">{review.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({length: review.rating}).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-gray-400 italic">"{review.text}"</p>
              </div>
            ))}
            {reviews.length === 0 && <p className="text-center text-slate-500 dark:text-gray-500 py-20 italic">No reviews yet. Be the first!</p>}
          </div>
        </div>
      </section>

      {/* Contact */}
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

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-slate-900 dark:bg-black border-t border-black/5 dark:border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center font-bold text-lg italic text-white">A</div>
            <span className="font-black text-lg tracking-tighter uppercase text-white">
              AYUSH <span className="font-light tracking-widest text-orange-500">GFX</span>
            </span>
          </div>
          <div className="flex gap-8 text-[11px] text-gray-400 uppercase tracking-widest font-black">
            <a href="#work" onClick={(e) => scrollToSection(e, 'work')} className="hover:text-orange-500 transition-colors">Work</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-orange-500 transition-colors">About</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
          <p className="text-xs text-gray-500 font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} AYUSH GFX. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* ORDER POPUP MODAL */}
      {showOrderForm && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10 animate-fade-in">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setShowOrderForm(false)} />
          <div className="relative z-10 w-full max-w-7xl bg-[#050505] border border-white/5 rounded-[3rem] shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar-niche scale-in">
            <button onClick={() => setShowOrderForm(false)} className="absolute top-8 right-8 z-[120] w-12 h-12 bg-[#111111] border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all group active:scale-90">
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
            </button>
            <section className="py-12 md:py-20 px-8 md:px-16">
              <div className="mb-12 md:mb-20">
                <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter text-white mb-2 leading-[0.85] select-none">
                  Order <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">Now</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
                <div className="lg:col-span-7 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Full Name" className="w-full bg-[#111111] border border-white/5 focus:border-purple-600/50 rounded-2xl px-6 py-5 text-white outline-none" />
                    <input type="email" placeholder="Email Address" className="w-full bg-[#111111] border border-white/5 focus:border-purple-600/50 rounded-2xl px-6 py-5 text-white outline-none" />
                  </div>
                  <input type="text" placeholder="Phone / WhatsApp" className="w-full bg-[#111111] border border-white/5 focus:border-purple-600/50 rounded-2xl px-6 py-5 text-white outline-none" />
                  <div className="max-h-[250px] overflow-y-auto pr-2 custom-scrollbar-niche">
                    <div className="flex flex-wrap gap-2">
                      {niches.map(niche => (
                        <button key={niche} onClick={() => handleNicheSelect(niche)} className={`px-5 py-3 rounded-xl text-[10px] font-black border ${selectedNiche === niche ? 'bg-white text-black' : 'bg-[#1a1a1a] text-zinc-300 border-white/5'}`}>{niche}</button>
                      ))}
                    </div>
                  </div>
                  <textarea rows={3} placeholder="Project Details" className="w-full bg-[#111111] border border-white/5 focus:border-purple-600/50 rounded-[2rem] px-6 py-6 text-white outline-none resize-none" />
                </div>
                <div className="lg:col-span-5 space-y-8">
                  <div className="bg-[#080808] p-8 rounded-[3rem] border border-white/5">
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Pricing Bracket</span>
                      <div className="flex bg-black p-1 rounded-lg border border-white/5">
                        <button onClick={() => setCurrency('INR')} className={`px-4 py-1.5 rounded-md text-[10px] font-black transition-all ${currency === 'INR' ? 'bg-white text-black' : 'text-zinc-500'}`}>INR</button>
                        <button onClick={() => setCurrency('USD')} className={`px-4 py-1.5 rounded-md text-[10px] font-black transition-all ${currency === 'USD' ? 'bg-white text-black' : 'text-zinc-500'}`}>USD</button>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <input type="range" min={currency === 'INR' ? 1300 : 20} max={currency === 'INR' ? 10000 : 150} step={currency === 'INR' ? 100 : 5} value={pricePerThumb} onChange={(e) => setPricePerThumb(Number(e.target.value))} className="w-full accent-purple-600" />
                      <input type="range" min="1" max="10" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full accent-purple-600" />
                      <div className="text-center pt-8 border-t border-white/5">
                        <p className="text-4xl font-black text-white">{currency === 'INR' ? '₹' : '$'}{estimatedInvestment.toLocaleString()}</p>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-2">Estimated Investment</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-8 bg-purple-600 hover:bg-purple-700 text-white rounded-[2rem] text-xs font-black uppercase tracking-widest transition-all shadow-xl">Confirm Inquiry</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      {/* Modern High-Performance Cursor */}
      <CustomCursor accentColor={cursorAccent} />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-slide-down { animation: slideDown 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.8s ease forwards; }
        .custom-scrollbar-niche::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar-niche::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar-niche::-webkit-scrollbar-thumb { background: rgba(147, 51, 234, 0.2); border-radius: 10px; }
        @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .scale-in { animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />
    </div>
  );
};

const StatBox: React.FC<{ icon: React.ReactNode, value: string, label: string }> = ({ icon, value, label }) => (
  <div className="flex flex-col items-center group interactive-card cursor-none">
    <div className="mb-6 p-4 bg-black/5 dark:bg-white/5 rounded-[2rem] group-hover:bg-orange-600/10 transition-colors border border-black/5 dark:border-white/5">
      {icon}
    </div>
    <p className="text-4xl font-black mb-1 text-slate-900 dark:text-white transition-colors">{value}</p>
    <p className="text-[10px] text-slate-500 dark:text-gray-500 font-bold uppercase tracking-[0.2em]">{label}</p>
  </div>
);

const ThumbnailCard: React.FC<{ item: ThumbnailItem }> = ({ item }) => (
  <div className="group relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 cursor-none shadow-xl hover:shadow-orange-600/10 transition-all duration-500 thumbnail-card">
    <div className="absolute top-4 left-4 z-20">
      <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] font-black text-white rounded-full uppercase tracking-tighter border border-white/10">{item.category}</span>
    </div>
    <div className="aspect-video overflow-hidden">
      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
      <div>
        <h3 className="text-2xl font-black text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
        <p className="text-xs text-orange-500 font-bold tracking-widest uppercase flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">View Detail <ChevronRight className="w-3 h-3" /></p>
      </div>
    </div>
  </div>
);

const FeatureCard: React.FC<{ title: string, description: string, icon: string }> = ({ title, description, icon }) => {
  const IconComponent = icon === 'Zap' ? Zap : icon === 'MousePointer2' ? MousePointer2 : icon === 'RefreshCcw' ? RefreshCcw : CheckCircle2;
  return (
    <div className="glass p-10 rounded-[2.5rem] border border-black/10 dark:border-white/5 hover:border-orange-600 transition-all hover:-translate-y-2 group shadow-lg interactive-card cursor-none">
      <div className="w-16 h-16 bg-black/5 dark:bg-white/5 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-orange-600 transition-colors">
        <IconComponent className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
      </div>
      <h4 className="text-xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tighter transition-colors">{title}</h4>
      <p className="text-slate-600 dark:text-gray-500 text-sm leading-relaxed transition-colors">{description}</p>
    </div>
  );
};

const ContactLink: React.FC<{ icon: React.ReactNode, label: string, value: string }> = ({ icon, label, value }) => (
  <a href="#" className="flex flex-col items-center gap-4 group interactive-card cursor-none">
    <div className="w-20 h-20 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl flex items-center justify-center group-hover:bg-orange-600 group-hover:scale-110 transition-all">
      <div className="text-slate-500 dark:text-gray-400 group-hover:text-white transition-colors">{React.cloneElement(icon as React.ReactElement<any>, { size: 32 })}</div>
    </div>
    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-gray-500 group-hover:text-orange-500 transition-colors">{label}</p>
    <p className="text-lg font-bold text-slate-900 dark:text-white/80 transition-colors">{value}</p>
  </a>
);

export default App;
