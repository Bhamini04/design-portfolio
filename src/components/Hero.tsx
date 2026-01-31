import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Star, Palette } from "lucide-react";
import bhaminiPhoto from "@/assets/bhamini-photo.jpg";

const FloatingDoodle = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100" />
      
      {/* Floating Doodles */}
      <FloatingDoodle className="top-20 left-[10%] text-primary opacity-40" delay={0}>
        <Sparkles size={40} />
      </FloatingDoodle>
      <FloatingDoodle className="top-32 right-[15%] text-accent opacity-50" delay={0.5}>
        <Star size={32} fill="currentColor" />
      </FloatingDoodle>
      <FloatingDoodle className="bottom-32 left-[20%] text-secondary opacity-60" delay={1}>
        <Palette size={36} />
      </FloatingDoodle>
      <FloatingDoodle className="bottom-40 right-[10%] text-primary opacity-40" delay={1.5}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 5L23.09 16.91L35 20L23.09 23.09L20 35L16.91 23.09L5 20L16.91 16.91L20 5Z" fill="currentColor" />
        </svg>
      </FloatingDoodle>
      
      {/* Hand-drawn decorative elements */}
      <motion.svg 
        className="absolute top-40 left-[5%] opacity-30 text-primary"
        width="80" 
        height="80" 
        viewBox="0 0 80 80"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="10 5" />
      </motion.svg>
      
      <motion.svg 
        className="absolute bottom-20 right-[8%] opacity-20 text-accent"
        width="60" 
        height="60" 
        viewBox="0 0 60 60"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <rect x="10" y="10" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="8 4" transform="rotate(15 30 30)" />
      </motion.svg>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Text Content */}
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-primary font-medium mb-4 flex items-center justify-center lg:justify-start gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={18} />
            <span>Hello, I'm Bhamini</span>
          </motion.p>
          
          <motion.h1 
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Designing{" "}
            <span className="gradient-text italic">Visual Stories</span>
            <br />
            for the Digital World ✨
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Graphic Designer • UI/UX Lover • Creative Technologist
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <button 
              onClick={scrollToWork}
              className="glow-button px-8 py-4 rounded-full text-primary-foreground font-semibold text-lg transition-transform hover:scale-105 active:scale-95"
            >
              View My Work
            </button>
            <button 
              onClick={scrollToContact}
              className="glass-card px-8 py-4 rounded-full font-semibold text-lg border-2 border-primary/30 hover:border-primary/60 transition-all hover:scale-105 active:scale-95"
            >
              Let's Connect
            </button>
          </motion.div>
        </motion.div>
        
        {/* Photo with Blob Frame */}
        <motion.div 
          className="flex-1 flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Glow Effect Behind */}
          <div className="absolute inset-0 bg-gradient-glow blur-3xl scale-110" />
          
          {/* Blob Container */}
          <div className="relative">
            <motion.div 
              className="blob-shape w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden bg-gradient-to-br from-primary/20 via-secondary to-accent/30 p-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="blob-shape w-full h-full overflow-hidden">
                <img 
                  src={bhaminiPhoto} 
                  alt="Bhamini Tiwari - Graphic Designer"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-accent/40 blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-primary/30 blur-xl"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
