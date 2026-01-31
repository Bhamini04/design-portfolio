import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Startup Founder",
    avatar: "PS",
    quote: "Bhamini's design work transformed our brand completely. Her attention to detail and creative vision helped us stand out in a crowded market. Absolutely brilliant!",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    role: "Marketing Manager",
    avatar: "AM",
    quote: "Working with Bhamini was a breeze. She understood our vision perfectly and delivered beyond expectations. Her designs are not just beautiful, they convert!",
  },
  {
    id: 3,
    name: "Sneha Gupta",
    role: "E-commerce Owner",
    avatar: "SG",
    quote: "The UI/UX work Bhamini did for our app was exceptional. User engagement increased by 40% after the redesign. Highly recommend her services!",
  },
  {
    id: 4,
    name: "Rahul Verma",
    role: "Creative Director",
    avatar: "RV",
    quote: "Bhamini brings a unique perspective to every project. Her ability to blend modern trends with timeless design principles is remarkable.",
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  return (
    <motion.div
      className="glass-card p-6 sm:p-8 rounded-3xl relative group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
        <Quote className="w-5 h-5 text-primary-foreground" />
      </div>
      
      {/* Quote Text */}
      <p className="text-muted-foreground leading-relaxed mb-6 mt-4 italic">
        "{testimonial.quote}"
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        <motion.div 
          className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center text-primary-foreground font-bold text-lg"
          animate={{ 
            y: [0, -3, 0],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            delay: index * 0.5,
          }}
        >
          {testimonial.avatar}
        </motion.div>
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
      
      {/* Decorative Gradient */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-2 block">Kind words</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            What Others <span className="gradient-text italic">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from wonderful people I've had the pleasure to work with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
      
      <div className="section-divider container" />
    </section>
  );
};

export default Testimonials;
