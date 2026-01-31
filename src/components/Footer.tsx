import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 text-2xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Bhamini Tiwari</span>
            <Sparkles className="text-accent" size={24} />
          </motion.div>
          
          <motion.p
            className="text-muted-foreground mb-6 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Creating visual stories that inspire and connect. Let's make something beautiful together.
          </motion.p>
          
          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6" />
          
          {/* Copyright */}
          <motion.p
            className="text-sm text-muted-foreground flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            © {currentYear} Bhamini Tiwari. Made with{" "}
            <Heart className="w-4 h-4 text-accent fill-accent inline" />{" "}
            & creativity
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
