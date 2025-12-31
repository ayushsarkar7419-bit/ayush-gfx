
import React, { useState, useEffect } from 'react';
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
  Clock, 
  Send,
  Star,
  Instagram,
  Twitter,
  Github,
  ChevronRight,
  Image,
  Palette,
  MousePointerClick,
  Layers,
  Sparkles,
  Sun,
  Moon,
  ArrowRight,
  Play
} from 'lucide-react';
import { CATEGORIES, THUMBNAILS, SKILLS, FEATURES } from './constants';
import { Category, ThumbnailItem, Review } from './types';
import { SectionHeading } from './components/SectionHeading';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
      setTimeout(onComplete, 400);
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center transition-all ${exit ? 'loading-exit' : ''}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-xs text-center">
        <div className="relative mb-12 transform scale-125">
          <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-[0_0_15px_rgba(234,88,12,0.4)]">
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
        <h2 className="text-4xl font-black text-white tracking-tighter uppercase mb-1">
          AYUSH <span className="font-thin tracking-[0.3em] text-orange-500">GFX</span>
        </h2>
        <p className="text-gray-500 text-[10px] font-bold tracking-[0.4em] uppercase">Portfolio 2024</p>
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
      }, 300); // Wait for fade out before changing text
    }, 1300); // 1s visible + 0.3s transition
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-4xl md:text-7xl font-black tracking-tight transition-all duration-300 transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent`}>
      {roles[index]}
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ name: '', text: '', rating: 5 });

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

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

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#050505] text-slate-900 dark:text-white animate-fade-in font-sans selection:bg-orange-600 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass py-4 px-6 md:px-12 flex justify-between items-center transition-all border-b border-white/5">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center font-bold text-xl italic shadow-lg shadow-orange-600/30 text-white transition-transform group-hover:scale-110">
            A
          </div>
          <span className="font-black text-xl tracking-tighter uppercase dark:text-white text-slate-900">
            AYUSH <span className="font-light tracking-widest text-orange-500 ml-1">GFX</span>
          </span>
        </div>
        
        <div className="hidden lg:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          <a href="#work" className="hover:text-orange-500 transition-colors">Work</a>
          <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
          <a href="#reviews" className="hover:text-orange-500 transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
        </div>

        <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 shadow-lg shadow-orange-600/20 active:scale-95">
          Hire Me
        </button>
      </nav>

      {/* HERO SECTION WITH ANIMATED HIERARCHY */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Cinematic Background Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="w-full relative z-10 flex flex-col items-center text-center">
          {/* Subtitle - Highlight Reduced (Bold, Zinc color, No Glow) */}
          <p className="text-[12px] font-bold uppercase tracking-[0.5em] text-zinc-500 mb-8 transition-all">
            HEY THERE, I AM A
          </p>
          
          {/* Main Animated Role */}
          <div className="mb-8 min-h-[1.2em] flex items-center justify-center">
            <AnimatedRoles />
          </div>

          {/* Focal Point Headline */}
          <h1 className="text-5xl md:text-[6rem] font-black leading-none mb-12 tracking-tighter text-white">
            High-Impact <span className="text-orange-600 drop-shadow-[0_0_15px_rgba(234,88,12,0.3)]">Thumbnails</span>
          </h1>

          {/* Subheading - Copy requested by user */}
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-3xl leading-relaxed mb-16 px-4">
            I design scroll-stopping YouTube thumbnails that boost your <span className="text-white">CTR</span> and grow your channel. <br className="hidden md:block" /> 
            Let's make your videos <span className="text-white font-bold">impossible to ignore</span>.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-6 w-full">
            <a href="#work" className="relative group px-12 py-5 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl font-black text-xl text-white transition-all shadow-[0_0_30px_rgba(234,88,12,0.2)] hover:shadow-[0_0_50px_rgba(234,88,12,0.4)] hover:scale-[1.05] active:scale-95 flex items-center gap-3">
              Browse Portfolio
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-12 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-xl text-white hover:bg-white/10 hover:border-white/20 transition-all active:scale-95">
              Contact GFX
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12 items-center">
          <StatBox icon={<Youtube className="w-8 h-8 text-red-600" />} value="10M+" label="Views Generated" />
          <StatBox icon={<Award className="w-8 h-8 text-orange-500" />} value="500+" label="Thumbnails" />
          <StatBox icon={<TrendingUp className="w-8 h-8 text-green-500" />} value="40%" label="Avg CTR Boost" />
          <StatBox icon={<Users className="w-8 h-8 text-blue-500" />} value="120+" label="Happy Clients" />
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeading 
          title="Recent Work" 
          subtitle="Explore the visuals that helped creators scale their channels to new heights."
          center
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                selectedCategory === category 
                  ? 'bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-600/20' 
                  : 'bg-white/5 border-white/10 text-gray-400 hover:border-orange-500/50'
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

      {/* Skills */}
      <section id="about" className="py-24 px-6 md:px-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Skills & Expertise" center />
          <div className="max-w-3xl mx-auto space-y-10">
            {SKILLS.map((skill, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-300 group-hover:text-white transition-colors uppercase tracking-widest text-xs">{skill.name}</span>
                  </div>
                  <span className="text-orange-500 font-black text-xs">{skill.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-600 to-red-600 rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(234,88,12,0.3)]"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 md:px-12">
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
          <div className="glass p-10 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold mb-8">Post a Review</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-6">
              <input 
                type="text" 
                value={newReview.name}
                onChange={e => setNewReview({...newReview, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-600 transition-colors text-white"
                placeholder="Channel Name"
              />
              <div className="flex gap-2">
                {[1,2,3,4,5].map(s => (
                  <Star 
                    key={s} 
                    onClick={() => setNewReview({...newReview, rating: s})}
                    className={`w-8 h-8 cursor-pointer transition-all ${newReview.rating >= s ? 'text-yellow-500 fill-yellow-500' : 'text-gray-700'}`} 
                  />
                ))}
              </div>
              <textarea 
                rows={4}
                value={newReview.text}
                onChange={e => setNewReview({...newReview, text: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-600 transition-colors resize-none text-white"
                placeholder="Share your experience..."
              />
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-2 group">
                Send Review
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-orange-600">
            {reviews.map(review => (
              <div key={review.id} className="glass p-8 rounded-2xl border border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({length: review.rating}).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-400 italic">"{review.text}"</p>
              </div>
            ))}
            {reviews.length === 0 && <p className="text-center text-gray-500 py-20 italic">No reviews yet. Be the first!</p>}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="glass p-12 md:p-20 rounded-[3rem] border border-white/5 flex flex-col items-center text-center">
          <SectionHeading title="Start Your Project" center subtitle="Let's build thumbnails that people can't stop clicking." />
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <ContactLink icon={<Mail />} label="Email" value="ayush@visuals.com" />
            <ContactLink icon={<Phone />} label="WhatsApp" value="+1 (234) 567-890" />
            <ContactLink icon={<Instagram />} label="Instagram" value="@ayush_design" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-black border-t border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center font-bold text-lg italic text-white">A</div>
            <span className="font-black text-lg tracking-tighter uppercase text-white">
              AYUSH <span className="font-light tracking-widest text-orange-500">GFX</span>
            </span>
          </div>
          <div className="flex gap-8 text-[11px] text-gray-500 uppercase tracking-widest font-black">
            <a href="#work" className="hover:text-orange-500 transition-colors">Work</a>
            <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
          <p className="text-xs text-gray-600 font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} AYUSH GFX. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

/* Helper Components */
const StatBox: React.FC<{ icon: React.ReactNode, value: string, label: string }> = ({ icon, value, label }) => (
  <div className="flex flex-col items-center group">
    <div className="mb-6 p-4 bg-white/5 rounded-[2rem] group-hover:bg-orange-600/10 transition-colors border border-white/5">
      {icon}
    </div>
    <p className="text-4xl font-black mb-1 text-white">{value}</p>
    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">{label}</p>
  </div>
);

const ThumbnailCard: React.FC<{ item: ThumbnailItem }> = ({ item }) => (
  <div className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer shadow-2xl hover:shadow-orange-600/10 transition-all duration-500">
    <div className="absolute top-4 left-4 z-20">
      <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] font-black text-white rounded-full uppercase tracking-tighter border border-white/10">
        {item.category}
      </span>
    </div>
    <div className="aspect-video overflow-hidden">
      <img 
        src={item.imageUrl} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
      <div>
        <h3 className="text-2xl font-black text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {item.title}
        </h3>
        <p className="text-xs text-orange-500 font-bold tracking-widest uppercase flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          View Detail <ChevronRight className="w-3 h-3" />
        </p>
      </div>
    </div>
  </div>
);

const FeatureCard: React.FC<{ title: string, description: string, icon: string }> = ({ title, description, icon }) => {
  const IconComponent = icon === 'Zap' ? Zap : icon === 'MousePointer2' ? MousePointer2 : icon === 'RefreshCcw' ? RefreshCcw : CheckCircle2;
  return (
    <div className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-orange-600/30 transition-all hover:-translate-y-2 group">
      <div className="w-16 h-16 bg-white/5 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-orange-600 transition-colors">
        <IconComponent className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
      </div>
      <h4 className="text-xl font-black mb-4 text-white uppercase tracking-tighter">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const ContactLink: React.FC<{ icon: React.ReactNode, label: string, value: string }> = ({ icon, label, value }) => (
  <a href="#" className="flex flex-col items-center gap-4 group">
    <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center group-hover:bg-orange-600 group-hover:scale-110 transition-all">
      <div className="text-gray-400 group-hover:text-white transition-colors">
        {React.cloneElement(icon as React.ReactElement, { size: 32 })}
      </div>
    </div>
    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-orange-500 transition-colors">{label}</p>
    <p className="text-lg font-bold text-white/80">{value}</p>
  </a>
);

export default App;
