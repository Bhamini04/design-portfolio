import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Lightbulb, Coffee, Music, Sparkles, Zap } from "lucide-react";

const personalityTraits = [
  { icon: Palette, label: "Color Obsessed", description: "I see the world in gradients" },
  { icon: Lightbulb, label: "Idea Generator", description: "3 AM inspiration hits different" },
  { icon: Coffee, label: "Caffeine Powered", description: "Fueled by creativity & coffee" },
  { icon: Music, label: "Lo-fi Designer", description: "Best work with beats on" },
  { icon: Sparkles, label: "Detail Oriented", description: "Pixels matter, always" },
  { icon: Zap, label: "Fast Learner", description: "New tools? Bring it on!" },
];

const TraitCard = ({ trait, index }: { trait: typeof personalityTraits[0]; index: number }) => {
  const Icon = trait.icon;
  
  return (
    <motion.div
      className="glass-card p-4 rounded-2xl hover:shadow-glow transition-all group cursor-default"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{trait.label}</h4>
          <p className="text-sm text-muted-foreground">{trait.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-glow opacity-30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-2 block">Get to know me</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text italic">Bhamini</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A creative soul who transforms ideas into visual experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="font-display text-2xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-3xl">✨</span> My Story
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hey there! I'm <span className="text-primary font-semibold">Bhamini Tiwari</span>, 
                a passionate graphic designer who believes that every pixel has a purpose. 
                I blend creativity with technology to craft digital experiences that not only 
                look beautiful but feel intuitive.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey started with a simple curiosity about how colors and shapes can 
                evoke emotions. Today, I specialize in UI/UX design, branding, and creating 
                visual identities that tell compelling stories.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not pushing pixels, you'll find me exploring new design trends, 
                experimenting with illustration styles, or hunting for the perfect color palette 
                in everyday life. 🎨
              </p>
            </div>

            {/* Fun Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="glass-card p-4 rounded-2xl text-center">
                <span className="block text-3xl font-display font-bold gradient-text">50+</span>
                <span className="text-sm text-muted-foreground">Projects</span>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center">
                <span className="block text-3xl font-display font-bold gradient-text">3+</span>
                <span className="text-sm text-muted-foreground">Years Exp</span>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center">
                <span className="block text-3xl font-display font-bold gradient-text">∞</span>
                <span className="text-sm text-muted-foreground">Creativity</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Personality Traits Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="sm:col-span-2 text-center sm:text-left mb-2">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Designer Personality Traits 🎯
              </h3>
            </div>
            {personalityTraits.map((trait, index) => (
              <TraitCard key={trait.label} trait={trait} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="section-divider container" />
    </section>
  );
};

export default About;
