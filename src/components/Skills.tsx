import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Palette, Layout, Brush, Code, Figma, PenTool, Image, Film, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Design Tools",
    icon: Palette,
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe Photoshop", level: 90 },
      { name: "Adobe Illustrator", level: 88 },
      { name: "Canva", level: 95 },
      { name: "Adobe InDesign", level: 80 },
    ],
  },
  {
    title: "UI/UX Design",
    icon: Layout,
    skills: [
      { name: "User Research", level: 85 },
      { name: "Wireframing", level: 92 },
      { name: "Prototyping", level: 90 },
      { name: "Design Systems", level: 85 },
      { name: "User Testing", level: 80 },
    ],
  },
  {
    title: "Branding & Graphics",
    icon: Brush,
    skills: [
      { name: "Logo Design", level: 90 },
      { name: "Brand Identity", level: 88 },
      { name: "Print Design", level: 85 },
      { name: "Social Media Graphics", level: 95 },
      { name: "Packaging Design", level: 82 },
    ],
  },
  {
    title: "Editing & Motion",
    icon: Film,
    skills: [
      { name: "Adobe Premiere Pro", level: 78 },
      { name: "After Effects", level: 75 },
      { name: "CapCut", level: 88 },
      { name: "Lightroom", level: 85 },
      { name: "DaVinci Resolve", level: 70 },
    ],
  },
  {
    title: "Frontend Dev",
    icon: Code,
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3 / Tailwind", level: 88 },
      { name: "React", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "Responsive Design", level: 92 },
    ],
  },
];

const toolBadges = [
  { name: "Figma", icon: Figma },
  { name: "Illustrator", icon: PenTool },
  { name: "Photoshop", icon: Image },
  { name: "Canva", icon: Sparkles },
  { name: "After Effects", icon: Film },
  { name: "React", icon: Code },
];

const SkillBar = ({ skill, index }: { skill: { name: string; level: number }; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const Icon = category.icon;

  return (
    <motion.div
      className="glass-card p-6 rounded-3xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-display text-xl font-semibold">{category.title}</h3>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-30 blur-3xl" />
      
      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-2 block">What I'm good at</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text italic">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit that helps me bring creative visions to life
          </p>
        </motion.div>

        {/* Tool Badges */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {toolBadges.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                className="glass-card px-4 py-2 rounded-full flex items-center gap-2 cursor-default hover:shadow-glow transition-shadow"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{tool.name}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
      
      <div className="section-divider container" />
    </section>
  );
};

export default Skills;
