import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Github, Linkedin, MessageCircle, Send, Sparkles } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/bhamini04?igsh=ZHkwMjZ0ZDhyZmY0",
    color: "hover:text-pink-500",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Bhamini04",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/bhaminitiwari04",
    color: "hover:text-blue-600",
  },
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9799980322",
    href: "tel:+919799980322",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bhaminitiwari665@gmail.com",
    href: "mailto:bhaminitiwari665@gmail.com",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappLink = "https://wa.me/919799980322?text=Hi%20Bhamini!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect.";

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-20 blur-3xl" />
      
      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-2 block">Let's create together</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Connect With <span className="gradient-text italic">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's bring your ideas to life!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="text-primary" size={24} />
                Get in Touch
              </h3>
              
              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">{info.label}</span>
                        <p className="font-medium text-foreground">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
              
              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground ${social.color} transition-all hover:shadow-glow`}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={22} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp CTA Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-center">
              <div className="text-center">
                <motion.div 
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(34, 197, 94, 0.4)",
                      "0 0 0 20px rgba(34, 197, 94, 0)",
                      "0 0 0 0 rgba(34, 197, 94, 0)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MessageCircle className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="font-display text-2xl font-semibold mb-3">Quick Chat?</h3>
                <p className="text-muted-foreground mb-6">
                  Drop me a message on WhatsApp for a quick response. I'm always happy to discuss new ideas!
                </p>
                
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={22} />
                  Message on WhatsApp
                  <Send size={18} />
                </motion.a>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-green-400/20 rounded-full blur-2xl pointer-events-none"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
